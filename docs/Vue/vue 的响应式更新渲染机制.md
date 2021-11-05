---
release: true
tags: 
 - vue
---

# Vue 的响应式更新渲染机制

> 以下代码示例版本 vue3.2

Vue 的响应式更新渲染机制，也就是 MDV（Model-Driven-View）数据驱动视图的原理。在 MDV 的理念之下，我们只需要关注业务数据变化，状态如何映射到 UI，就交给视图层框架

```js
{
  data: () => {
    return {}
  },
  setup(){
    return {}
  }
  render() {}
}
```

## 渲染副作用

## 渲染上下文：建立数据与模板联系

模板对数据的引用是通过代理访问渲染上下文

渲染上下文
1. setupState
2. data
3. props
4. instance

代理访问顺序

渲染上下文创建过程

```js
// mountComponent => setupComponent => setupStatefulComponent
function setupStatefulComponent(
  instance: ComponentInternalInstance,
  isSSR: boolean
) {
  const Component = instance.type as ComponentOptions

  // 0. create render proxy property access cache
  instance.accessCache = Object.create(null)
  // 1. create public instance / render proxy
  // also mark it raw so it's never observed
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers))
  if (__DEV__) {
    exposePropsOnRenderContext(instance)
  }
  // 2. call setup()
  const { setup } = Component
  if (setup) {
    const setupContext = (instance.setupContext =
      setup.length > 1 ? createSetupContext(instance) : null)

    setCurrentInstance(instance)
    pauseTracking()
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      ErrorCodes.SETUP_FUNCTION,
      [__DEV__ ? shallowReadonly(instance.props) : instance.props, setupContext]
    )
    resetTracking()
    unsetCurrentInstance()

    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance)

      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult
          .then((resolvedResult: unknown) => {
            handleSetupResult(instance, resolvedResult, isSSR)
          })
          .catch(e => {
            handleError(e, instance, ErrorCodes.SETUP_FUNCTION)
          })
      } else if (__FEATURE_SUSPENSE__) {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult
      } else if (__DEV__) {
        warn(
          `setup() returned a Promise, but the version of Vue you are using ` +
            `does not support it yet.`
        )
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR)
    }
  } else {
    finishComponentSetup(instance, isSSR)
  }
}
```


劫持数据的方式改成用 Proxy 实现 ， 以及收集的依赖由 watcher 实例变成了组件副作用渲染函数 。

组件 复用 数据+视图模板

## 异步更新机制

当响应式数据发生变化时并不会立即更新视图，而是将视图更新任务派发给**调度器**调度执行。也就是说 vue 的视图更新是异步的，这是因为当你有多个响应式数据修改的时候，不可能每修改一个就同步一次更新操作，而是将所有的更新任务都缓冲到下一个 tick 中去执行。

```ts
// packages/runtime-core/src/scheduler.ts
// ...
const effect = new ReactiveEffect(
      componentUpdateFn, // 组件渲染函数
      () => queueJob(instance.update), // 放进任务队列
      instance.scope // track it in component's effect scope
    )
//...
```

视图更新任务都会放进异步队列。但为了保证渲染一致性，vue 根据渲染前后分为了不同队列：

- pendingPreFlushCbs（pre queue）
- queue（render queue）
- pendingPostFlushCbs（post queue）

vue3 为开发者提供了方便的可变数据功能，却复杂了自己内部实现。相比 vue2 时期直接将更新任务放到单个异步队列而言，vue3 则是多优先级队列 + 调度机制，因为响应式触发的多个观察者需要保证他们按照预期效果执行就需要进行调度任务。

响应式数据发生变化时会触发三类任务分别是 watcher、render、effect。

![图 1](./images/75ca0ed7ad8d1b40e53ddfd6aaea2c4686469af9d09b186a03d1eeb078534a8c.png)  

其中 effect 是底层响应式副作用 api 生成的，是响应式同步触发；而 render 和 watcher 是 effect 基础上实现的，是给开发者们优先使用的，并且接入调度机制中。

render 任务是存放进 render queue 中，watcher 则根据属性控制：

- pre 对应 pre queue
- post 对应 post queue
- sync 直接同步执行

了解了任务类型及对应的任务队列后，我们再了解 vue 是如何异步更新，其实很简单：
**在同一个 tick 中对触发的 watcher、render 任务用对应的任务队列进行缓冲收集并且在运行时环境创建一个异步任务用于负责执行这些更新任务**。

```ts
// queueJob 将异步更新任务插入到 render queue 队列中
export function queueJob(job: SchedulerJob) {
  if (
    // 省略...
  ) {
    // 插入队列
    queue.push(job)

    queueFlush()  // 向运行时环境发起一个异步任务
  }
}

function queueFlush() {
  // 防止重复触发
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true
    // 发起异步任务
    currentFlushPromise = resolvedPromise.then(flushJobs)
  }
}

const resolvedPromise: Promise<any> = Promise.resolve()
```

这里有点一跟 vue2 不同的是：vue3 中直接只使用 Promise 去做异步任务，并没有像 vue2 去做兼容降级方案。能够支持 vue3 的环境，也就是支持 proxy api，大体基本都有 Promise。

### 调度细节

接下来看看 flushJobs 是如何执行更新任务以及一些细节问题。

```ts
function flushJobs(seen?: CountMap) {
  isFlushPending = false
  isFlushing = true
  if (__DEV__) {
    seen = seen || new Map()
  }

  // 执行 pre queue
  flushPreFlushCbs(seen)

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.
  queue.sort((a, b) => getId(a) - getId(b))

  // 执行 render queue
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex]
      if (job && job.active !== false) {
        if (__DEV__ && checkRecursiveUpdates(seen!, job)) {
          continue
        }
        // console.log(`running:`, job.id)
        callWithErrorHandling(job, null, ErrorCodes.SCHEDULER)
      }
    }
  } finally {
    flushIndex = 0
    queue.length = 0
    // 执行 post queue
    flushPostFlushCbs(seen)

    isFlushing = false
    currentFlushPromise = null
    // some postFlushCb queued jobs!
    // keep flushing until it drains.
    if (
      queue.length ||
      pendingPreFlushCbs.length ||
      pendingPostFlushCbs.length
    ) {
      flushJobs(seen)
    }
  }
}
```

从上看出

1. 队列的执行顺序依次为 pre queue、render queue、post queue 
2. render queue 执行前需要排序，为什么？
   
这主要跟 vue 组件的渲染机制有关，一个 vue 组件发生更新有两种情况：

- 依赖的 state 发生修改
- 自身 props 发生修改

props 是由父组件传入，是在 render 过程中。当 props 发生改，子组件也会发生更新，整个组件树的创建更新顺序都是从父到子。

但有一种情况，就是父子组件刚好依赖到同一个 state，这会导致 render queue 里同时存在父子组件的 render 任务，更坏的情况是子 render 任务可能排在父 render 前。

![图 3](./images/acbc4b0074832fb14e21c94698f615b0ddea65f867c36f62799b38462ddf735b.png)  

子 render 任务会更新子组件并且父 render 任务可能修改子组件的 props 同样也触发子组件更新，也就是说 父 rennder 任务其实可能包含子 render 任务，那这样就会导致子组件在同一个 tick 中 render 两次。

源码中先进行父子排序，先执行父 render 任务，并且在更新子组件之前先 `invalidateJob(instance.update)` 把队列中的子 render 任务删除，这样做就不会重复更新子组件。

```ts
const updateComponent = (n1: VNode, n2: VNode, optimized: boolean) => {
    const instance = (n2.component = n1.component)!
    if (shouldUpdateComponent(n1, n2, optimized)) {
      //...
      // normal update
      instance.next = n2
      // in case the child component is also queued, remove it to avoid
      // double updating the same child component in the same flush.
      invalidateJob(instance.update)
      // instance.update is the reactive effect.
      instance.update()
      //...
    } else {
      // no update needed. just copy over properties
      n2.component = n1.component
      n2.el = n1.el
      instance.vnode = n2
    }
  }
```

接下来看，当一个组件依赖的多个状态同时发生变更时：

![图 4](./images/b3766b1e7bfc8ec2f01ec549b741d3211a2e5afc8eeec080bb3020a2983933e4.png)  

```ts
export function queueJob(job: SchedulerJob) {
  if (
    (!queue.length ||
      !queue.includes(
        job,
        isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
      )) &&
    job !== currentPreFlushParentJob
  ) {
    if (job.id == null) {
      queue.push(job)
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job)
    }
    queueFlush()
  }
}
```

其中

1. 在执行清空所有任务队列前先去重。（这时还没 flushing， flushIndex 为 0，意味着即整个队列去重）
2. 但执行队列任务过程又可以根据 `job.allowRecurse` 条件插入任务、或者重复任务，这是为什么？

![图 8](./images/27aeb69368ce52b357658061f5a963e57877cef2a29913bd8bab0a355a09b8f3.png)  

图上有两处循环：

在执行 pre queue 中的 watcher 时，watcher 可能会修改 state，产生新的 watcher 插入 pre queue 中，所以必须循环处理完 pre queue 中任务，保证在执行 render 后视图数据一致。

```ts
export function flushPreFlushCbs(
  seen?: CountMap,
  parentJob: SchedulerJob | null = null
) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob // 先忽略
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)]
    pendingPreFlushCbs.length = 0
    
    for (
      preFlushIndex = 0;
      preFlushIndex < activePreFlushCbs.length;
      preFlushIndex++
    ) {
      
      activePreFlushCbs[preFlushIndex]()
    }
    activePreFlushCbs = null
    preFlushIndex = 0
    currentPreFlushParentJob = null
    // recursively flush until it drains
    // 递归处理
    flushPreFlushCbs(seen, parentJob)
  }
}
```

在执行 render 任务时，这时 props 的改变可能会触发子组件的 watcher，在渲染子组件前同样必须先清空 pre queue。同时要注意防止往 render queue 中插入子 render 任务，因为 render 任务包含了子 render 任务要执行。

```ts
// packages/runtime-core/src/renderer.ts
const updateComponentPreRender = (
 instance: ComponentInternalInstance,
 nextVNode: VNode,
 optimized: boolean
) => {
 // 省略代码...

 // props update may have triggered pre-flush watchers.
 // flush them before the render update.
 // 渲染前清空 pre queue
 // 第二参数记录当前调用栈中的父任务，此时即为子 render
 flushPreFlushCbs(undefined, instance.update)
 
 // ...
}

export function flushPreFlushCbs(
  seen?: CountMap,
  parentJob: SchedulerJob | null = null
) {
  if (pendingPreFlushCbs.length) {
    // 全局变量标记
    currentPreFlushParentJob = parentJob
    
    // ... 任务执行

    // recursively flush until it drains
    flushPreFlushCbs(seen, parentJob)
  }
}

export function queueJob(job: SchedulerJob) {
  if (
    (!queue.length ||
      !queue.includes(
        job,
        isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
      )) &&
    // 任务对比，防止重复插入
    job !== currentPreFlushParentJob
  ) {
    //...
  }
}
```

但是我们同样也需要注意个问题：上面虽然解决了子 render 重复的问题，但 watcher 中可能会修改了父组件的依赖！

一个 render 任务其实分为两个过程：

1. 创建新的 vnode
2. patch 新旧 vnode

在 patch 过程，子组件 props 发生了修改而触发的 watcher 修改到父组件依赖状态。那么这时新的 vnode 其实已经不是最新状态的映射了，导致最后视图不一致，所以需要个**弥补机制**，父组件再 render 一次。

 ![图 10](./images/4ff7bb1779ac06cecfc9eb0ffc81380fbbdfba59c94c65e7681cdd32c56f59de.png)  

queueJob 中 `isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex` 里 `flushIndex + 1` 使得能够插入重复 render 任务。

> 这里有个 [issue](https://github.com/vuejs/vue-next/issues/1801) 上面的示例可以去调试看看。

#### effect.allowRecurse

### nextTick

```ts
export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
```

使用 promise 链式调用，保证 nextTick 的任务在异步更新任务后执行。

## 总结

- vue 的异步更新机制
  - 先队列缓冲再异步执行
  - 在执行之前任务会去重
  - 执行过程遵循自顶向下、单向数据流更新原则，注意在 watcher 改变数据流规则可能会导致重复渲染