---
discussionID: 6NQVNakOjKPDwkkYte-Z3
release: true
top: 1
tags: 
 - vue
desc: 通过本文你将了解到 vue 是如何将响应式系统和 VirtualDOM 渲染机制结合起来，响应式更新视图。
---

# Vue 的响应式渲染机制

> 以下代码示例版本 vue3.2

Vue 的响应式渲染机制，也就是 MDV（Model-Driven-View）数据驱动视图的实现原理。在 MDV 的理念下，我们只需要关注业务数据变化，至于状态变化如何自动化同步映射成 UI 就交给视图层框架解决。

在 vue 的响应式系统里，数据即响应式数据，而视图渲染则是一种副作用。

![图 11](./images/e42d0897f1ae88b0b163646ca8b25880307282361ccb232159ade5ed8b796d52.png)  

vue 响应式更新渲染机制:

![图 2](./images/2aa3f18582022b697f8312ccbbb6a029a91e761ccdaa4f8e3cdabf3bc8896862.png)  

vue3 的响应式渲染机制跟 vue2 其实区别不大，其中：

1. 组件渲染变成成副作用
2. 渲染副作用执行过程触发数据依赖收集
3. 数据变化触发更新任务进入异步队列
4. Scheduler 进行异步调度

## 渲染副作用：建立视图与数据的响应关联

回顾 vue 组件渲染流程：

1. 创建组件类型 vnode
2. 渲染 vnode
   1. 创建组件实例
   2. 初始化组件
   3. 创建组件渲染副作用并执行

> 更多参考 [vue 组件渲染流程](./vue%20组件渲染机制.md)。

通过 setupRenderEffect 创建渲染副作用并执行。

```ts
// packages/runtime-core/src/renderer.ts
  const setupRenderEffect: SetupRenderEffectFn = (
    instance,
    initialVNode,
    container,
    anchor,
    parentSuspense,
    isSVG,
    optimized
  ) => {
    // 组件更新函数
    const componentUpdateFn = () => { 
      //...
      // 执行组件 render 方法
      //...
    }

    // create reactive effect for rendering
    // 创建响应式渲染副作用
    const effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(instance.update),
      instance.scope // track it in component's effect scope
    )

    const update = (instance.update = effect.run.bind(effect) as SchedulerJob)
    update.id = instance.uid
   
    //...
    
    // 执行渲染、触发依赖收集
    update()
  }
```

其中最主要的是执行组件的**渲染函数**，**渲染函数是视图访问数据，建立响应式关联的关键所在**。

可以通过线上[模板编译器](https://vue-next-template-explorer.netlify.app/)，查看编译后的渲染函数。

```html
<div>{{name}}</div>
```

```js
import { toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", null, _toDisplayString(_ctx.name), 1 /* TEXT */))
}
```

访问 name 时得通过 `_ctx.name`，**ctx 是数据访问的上下文环境代理**。

## 渲染上下文：视图的数据访问代理

统一代理访问，主要是因为视图访问的数据源有多处：

1. setupState
2. data
3. props
4. 用户自定义添加在实例上的属性 `this.xxx = xxx`
5. 组件实例 vue 公开方法：如 `$options`、`$refs` 等
6. 全局属性： `app.config.globalProperties` 配置

> 源码位置： packages/runtime-core/src/componentPublicInstance.ts @PublicInstanceProxyHandlers 

💡 数据访问顺序的影响，下面示例将输出 setup 的 msg。

```vue
<template>
  <p>{{msg}}</p>
</template>

<script>
  import { ref } from 'vue'
  export default {
    data() {
      return {
        msg: 'msg from data'
      }
    },
    setup() {
      const msg = ref('msg from setup')
      return {
        msg
      }
    }
  }
</script>
```

### 渲染上下文相关源码分析

创建组件实例时生成渲染上下文。

```ts
// packages/runtime-core/src/component.ts@createComponentInstance
export function createComponentInstance(){
  // ...
  instance.ctx = { _: instance }
  // ...
  return instance
}
```

创建渲染上下文代理 `instance.proxy`，并使用 accessCache 属性代理访问缓存，因为每次代理访问数据都要经过多处数据源判断。

> 源码位置： packages/runtime-core/src/componentPublicInstance.ts @PublicInstanceProxyHandlers 

缓存 key 和对应的数据源，能够直达访问，减少很多判断，性能提升。

```ts
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
    // 执行 setup ... 
  } 
}
```

执行渲染函数并应用渲染上下文。

```ts
export function renderComponentRoot(
  instance: ComponentInternalInstance
): VNode {
const {
 type: Component,
 vnode,
 proxy,
 withProxy,
 props,
 propsOptions: [propsOptions],
 slots,
 attrs,
 emit,
 render,
 renderCache,
 data,
 setupState,
 ctx,
 inheritAttrs
} = instance

let result
const prev = setCurrentRenderingInstance(instance)
if (__DEV__) {
 accessedAttrs = false
}
try {
 let fallthroughAttrs
 if (vnode.shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
   // withProxy is a proxy with a different `has` trap only for
   // runtime-compiled render functions using `with` block.
   const proxyToUse = withProxy || proxy
   result = normalizeVNode(
     render!.call(
       proxyToUse,
       proxyToUse!,
       renderCache,
       props,
       setupState,
       data,
       ctx
     )
   )
   fallthroughAttrs = attrs
 } else {
   // functional
   const render = Component as FunctionalComponent
   
   result = normalizeVNode(
     render.length > 1
       ? render(
           props,
           __DEV__
             ? {
                 get attrs() {
                   markAttrsAccessed()
                   return attrs
                 },
                 slots,
                 emit
               }
             : { attrs, slots, emit }
         )
       : render(props, null as any /* we know it doesn't need it */)
   )
 }
 //...
} 
```

1. 参数传递方式，上面模板编译例子中经过模板编译的渲染函数即可通过参数 ctx 代理访问数据
2. this 绑定，在自定义的 render 里可通过 this 访问数据
    ```jsx
    {
      render() {
        return <div>{ this.name }</div>
      }
    }
    ```

### proxy 和 withProxy

在看 vue 源码过程发现组件属性上为什么有两个渲染上下文代理 proxy 和 withProxy。

```ts
export interface ComponentInternalInstance {
  // ...

  // main proxy that serves as the public instance (`this`)
  proxy: ComponentPublicInstance | null
  /**
   * alternative proxy used only for runtime-compiled render functions using
   * `with` block
   * @internal
   */
  withProxy: ComponentPublicInstance | null

  // ...
}
```

withProxy 是针对动态模板编译的场景。

随手写了两个组件，一个是动态模板编译一个是 SFC 组件编译，并打印了其渲染函数。

![图 4](./images/47baf14950ffeb8be704d559277b00b7ceda6ffc41a854e4a93bab241931c8f1.png)  

使用模板 DSL 最大的一点就是限制用户写法，从而提供安全及性能。

> vue 的模板表达式都被放在沙盒中，只能访问一个受限的[全局变量列表](https://github.com/vuejs/vue-next/blob/master/packages/shared/src/globalsWhitelist.ts#L3)，如 Math 和 Date。你不应该在模板表达式中试图访问用户定义的全局变量，就上面示例访问全局变量 history。

但有一点让我感到困惑的是为什么两者编译后的代码不相同，一个通过作用域链一个通过原型链访问，理论上来说两者可达到同样的目的效果，那为什么不统一使用下面的方式？

**这里有个小技巧：看源码过程一般建议关注主线逻辑，像各种特殊情况可通过注释、commit message、issue 或者测试用例查看原由**。

源码中模板表达式的处理逻辑：

```ts
// packages/compiler-core/src/transforms/transformExpression.ts@processExpression

// Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !__BROWSER__ check so that it can be
// tree-shaken from the browser build.
export function processExpression(
  node: SimpleExpressionNode,
  context: TransformContext,
  // some expressions like v-slot props & v-for aliases should be parsed as
  // function params
  asParams = false,
  // v-on handler values may contain multiple statements
  asRawStatements = false
): ExpressionNode {
  if (__BROWSER__) {
    if (__DEV__) {
      // simple in-browser validation (same logic in 2.x)
      validateBrowserExpression(node, context, asParams, asRawStatements)
    }
    return node
  }

  // `__BROWSER__` 环境下，下面代码会被删除

  // ....

  const needPrefix = shouldPrefix(node, parent!, parentStack)

  //...
```

正常本地 AOT 编译的情况下该函数会执行到 `shouldPrefix` 方法，该函数会根据全局变量白名单判断是否要添加 `_ctx.` 前缀。比如 history 是禁止的，那么就限制在 _ctx 的原型链上查找，否则可通过作用域链到全局查找。

但在线上浏览器中动态编译时，打包编译器代码会把包含 `@babel/parse` 代码给包含进去，这就导致整个 complie runtime 很大（有个相关 [issue](https://github.com/vuejs/vue-next/issues/2515) 讨论）。所以在 `__BROWSER__` 环境下通过 tree-shaking 删除代码，这样子表达式相当于不做处理直接返回。

那么如何限制 history ？就只能通过 `with` 限制作用链查找。对于使用 with 块运行时编译的渲染函数，渲染上下文的代理是 RuntimeCompiledPublicInstanceProxyHandlers。它是在之前渲染上下文代理 PublicInstanceProxyHandlers 的基础上进行的扩展，主要对 has 函数的实现做了优化：

```ts
// packages/runtime-core/src/componentPublicInstance.ts@RuntimeCompiledPublicInstanceProxyHandlers
export const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ extend(
  {},
  PublicInstanceProxyHandlers,
  {
    get(target: ComponentRenderContext, key: string) {
      // fast path for unscopables when using `with` block
      if ((key as any) === Symbol.unscopables) {
        return
      }
      return PublicInstanceProxyHandlers.get!(target, key, target)
    },
    has(_: ComponentRenderContext, key: string) {
      const has = key[0] !== '_' && !isGloballyWhitelisted(key)
      if (__DEV__ && !has && PublicInstanceProxyHandlers.has!(_, key)) {
        warn(
          `Property ${JSON.stringify(
            key
          )} should not start with _ which is a reserved prefix for Vue internals.`
        )
      }
      return has
    }
  }
)
```

这里如果 key 以 _ 开头，或者 key 在全局变量的白名单内，则 has 为 false，此时则直接命中警告，不用再进行之前那一系列的判断了。

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

![图 16](./images/0fbc7dac1c4b4892205a65308aa3cdc7e82cb3aaf09fa57e1125ccfc7058d817.png)  

其中 effect 是底层响应式副作用 api 生成的，是响应式同步触发；而 render 和 watcher 是 effect 基础上实现的，是给开发者们优先使用的，并且接入调度机制中。

render 任务是存放进 render queue 中，watcher 则可根据属性控制：

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

这里有点一跟 vue2 不同的是：vue3 中直接只使用 Promise 去做异步任务，并没有像 vue2 去做兼容降级方案。能够支持 vue3 的环境，也就是支持 proxy api，大体基本都支持 Promise。

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

- 依赖的响应性 state 发生修改
- 自身 props 发生修改

props 是由父组件传入，是在 render 过程中。当 props 发生改，子组件也会发生更新，**整个组件树的创建更新顺序都是从父到子**。

但有一种情况，就是父子组件刚好依赖到同一个 state，这会导致 render queue 里同时存在父子组件的 render 任务，更坏的情况是子 render 任务可能排在父 render 前。

![图 12](./images/0f8bc010ae31abd663a9a31301c36e79ac2b0165e3f52274b53bae1dd0268173.png)  


子 render 任务本来就会更新子组件，而父 render 任务可能修改子组件的 props 同样也可能会导致子组件更新，也就是说 父 rennder 任务其实可能包含子 render 任务，那这样就会导致子组件在同一个 tick 中 render 两次。

源码中先进行父子排序，先执行父 render 任务，并且在更新子组件之前先能够 `invalidateJob(instance.update)` 把队列中的子 render 任务删除，这样做就不会重复更新子组件。

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

![图 13](./images/c6bc7c326a444056906400fd1f0b15c4b614d7e91f756d5c3f55191ec1f2e87e.png)  

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

![图 14](./images/0af1f873ecd39740f507a6003defe704cdd24ffbc201c2077d3c92af13b0d297.png)  

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

在执行 render 任务时，这时 props 的改变可能会触发子组件的 watcher，在渲染子组件前同样必须先清空 pre queue。同时要注意防止往 render queue 中插入子 render 任务，因为当前的 render 任务包含了子 render 任务要执行。

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

但是我们同样也需要注意个问题：上面虽然解决了子 render 重复的问题，但 watcher 中可能会**修改到了父组件的依赖**！

一个 render 任务执行的时候有两个重要过程：

1. 创建新的 subTree
2. diff 新旧 subTree

在 patch 过程，子组件 props 发生了修改而触发的 watcher 修改到父组件依赖状态。那么这时父 render 过程生成的新的 subTree 其实已经不是最新状态的映射了，导致最后视图不一致，所以需要个**弥补机制**，父组件再 render 一次。

![图 15](./images/90c2621f65c020b6b2695cec35bdb6bf2fe9a74acd9a81bc4d5ae44e2b975f9a.png)  

queueJob 中 `isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex` 里 `flushIndex + 1` 使得能够插入重复 render 任务。

> 这里有个 [issue](https://github.com/vuejs/vue-next/issues/1801) 上面的示例可以去调试看看。

## ReactiveEffect.allowRecurse

ReactiveEffect.allowRecurse 并没有过多的注释，但我们可以从 `packages/runtime-core/src/scheduler.ts` 中发现相关注释，其实 Render ReactiveEffect 就是 SchedulerJob。

```ts
export interface SchedulerJob extends Function {
  id?: number
  active?: boolean
  computed?: boolean
  /**
   * Indicates whether the effect is allowed to recursively trigger itself
   * when managed by the scheduler.
   *
   * By default, a job cannot trigger itself because some built-in method calls,
   * e.g. Array.prototype.push actually performs reads as well (#1740) which
   * can lead to confusing infinite loops.
   * The allowed cases are component update functions and watch callbacks.
   * Component update functions may update child component props, which in turn
   * trigger flush: "pre" watch callbacks that mutates state that the parent
   * relies on (#1801). Watch callbacks doesn't track its dependencies so if it
   * triggers itself again, it's likely intentional and it is the user's
   * responsibility to perform recursive state mutation that eventually
   * stabilizes (#1727).
   */
  allowRecurse?: boolean
  /**
   * Attached by renderer.ts when setting up a component's render effect
   * Used to obtain component information when reporting max recursive updates.
   * dev only.
   */
  ownerInstance?: ComponentInternalInstance
}
```

ReactiveEffect 创建实例时其 allowRecurse 是为 undefined，可以说是 false，在同一 effect 下是不会触发重复递归的。

```ts
export function triggerEffects(
  dep: Dep | ReactiveEffect[],
  debuggerEventExtraInfo?: DebuggerEventExtraInfo
) {
  // spread into array for stabilization
  for (const effect of isArray(dep) ? dep : [...dep]) {
    // 防止 effect 重复调用
    if (effect !== activeEffect || effect.allowRecurse) {
      //...
    }
  }
}
```

下面例子中，effect 中修改 test 值，但副作用只执行了一次。

![图 11](./images/a631cc0e1963f36f38f2426fc6dae0f9a7e799bf70325b35062b05462f495af8.png)  

而 **render、watcher 是可以重复递归**，其中可重复 render 是有场景需求，而watcher 则是不想违背模式，如果 watcher 里修改数据重新触发了 watcher，那更多是用户的一种责任行为。

## nextTick

```ts
export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
```

使用 promise 链式调用，保证 nextTick 的任务在异步更新任务后执行，这样某些插件就可以获得更新后的 DOM。

## 总结

1. 响应式渲染机制：将组件渲染封装成渲染副作用，收集响应式依赖，异步调度更新。
2. vue 的异步更新机制：使用队列缓存更新任务，在事件循环中安排一个异步任务执行队列中所有任务。
3. 异步更新防止重复渲染、保证单向更新。
4. 单向数据流原则：组件树的更新过程是自顶向下，如果发生逆向数据流修改，会导致当前渲染的数据和视图映射不一致，需要重复多一次渲染。