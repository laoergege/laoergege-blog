# Vue 的响应性机制

- Vue 的响应性机制
  - 响应式原理
  - Reative API
  - Vue 的更新机制

## 响应式原理

```js
let A = 1
let B = 2
let C = A + B // 3

// change A
A = 2

console.log(C) // 3
```

传统命令式编程下，A 发生改变，`C = A + B` 并不会重新执行。为了能够重新计算就需要包装成可复用的函数，并且观察 A 的行为以便发生改变时调用该函数。

Vue2 和 Vue3 的响应式实现并其实没多大区别，大致都是需要以下重要三步：

1. 数据劫持（defineProperty => proxy 劫持数据操作事件）
2. 依赖收集（监听属性数据的 getter 事件） 
3. 变更通知（监听属性数据的 setter 事件） 

**响应式原理的实现本质就是观察者模式**。

### Vue3 响应式实现

## Vue Reactive API

- ReactiveObject
  - reactive
    - shallowReactive
  - readonly：只读响应，不会被跟踪
    - shallowReadonly
  - ref
- ReactiveEffect
  - effect
  - effectScope
  - watchEffect
  - watch
  - computed

### ReactiveObject

```js
// packages/reactivity/src/reactive.ts

function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
  //proxy 对象再次 reactive 还是原 proxy，除非转是 readyonly
  //...

  //同一原始 target 多次执行 reactive 都会得到同一 proxy
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }

  // 只允许普通对象或者集合类型，内置对象类型如 Date、Function 类型则不可以
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }

  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy)
  return proxy
}

function targetTypeMap(rawType: string) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return TargetType.COMMON
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return TargetType.COLLECTION
    default:
      return TargetType.INVALID
  }
}
```

1. proxy 对象再次 reactive 还是原 proxy，除非转是 readyonly
2. 同一原始 target 多次执行 reactive 都会得到同一 proxy（proxyMap 缓存）
3. 只允许普通对象或者集合类型，内置对象类型如 Date、Function 类型则不可以
4. __v_skip 属性的对象、被冻结的对象
   
### ProxyMap 缓存结构
deps
depsMap
proxyMap

### ReactiveFlags

ReactiveFlags 作为响应式对象的内部特殊 key。

> 为什么不用 Symbol 去私有 key？:thinking:

```ts
export const enum ReactiveFlags {
  SKIP = '__v_skip', // 跳过响应化
  IS_REACTIVE = '__v_isReactive', // 是否响应式数据
  IS_READONLY = '__v_isReadonly', // 是否只读数据
  RAW = '__v_raw' // 获取原始数据
}
```







1. createReactiveObject
   1. collectionHandlers
   2. baseHandlers
      1. getter
      2. setter

Vue.js 另一个核心设计思想就是响应式。它的本质是当数据变化后会自动执行某个函数，映射到组件的实现就是，当数据变化后，会自动触发组件的重新渲染。响应式是 Vue.js 组件化更新渲染的一个核心机制。


变更的源头

props 变更：即父组件传递给组件的 props 发生变更
事件 event：如点击，如上文的 window resize 事件。对事件，需要将事件回调包装成 state
调度器：即 animationFrame / interval / timeout


流式 Hooks

react 事件流单位是组件
vue 事件流单位是 effect

rxjs 的难是函数式数据流形式，流式 hook 看起来还是跟平常的命令式逻辑流


·