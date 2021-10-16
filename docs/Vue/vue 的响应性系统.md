---
release: true
tags:
 - vue
 - 响应式
---
# Vue 的响应式

- Vue 的响应式
  - 响应式原理
  - Reative API
  - 响应式更新渲染机制

除了组件化，Vue.js 另一个核心设计思想就是响应式。

## 响应式原理

```js
let A = 1
let B = 2
let C = A + B // 3

// change A
A = 2

console.log(C) // 3
```

传统命令式编程下，A 发生改变，`C = A + B` 并不会重新执行。为了能够重新计算就需要将 `C = A + B` 语句包装成可复用的函数，并且观察 A 的行为以便发生改变时调用该函数。

响应式原理的实现本质就是观察者模式，Subject、Observer 在 Vue 响应式设计中分别对应的是 Reactive 响应式数据、Effect 副作用。

Vue2 和 Vue3 的响应式实现并其实没多大区别，大致都是需要以下重要三步：

1. 数据劫持（defineProperty => proxy 劫持数据操作事件）
2. 依赖收集（监听属性数据的 getter 事件） 
3. 变更通知（监听属性数据的 setter 事件） 

### Vue3 响应式原理 mini 实现

```js
function reactive(target) {
    // case...

    // 数据代理、操作劫持
    return new Proxy(target, {
        get(target, property) {
            // 依赖跟踪、收集
            track(target, property)
            return Reflect.get(...arguments)
        },
        set(target, property) {
            const result = Reflect.set(...arguments)
            // 变更通知
            trigger(target, property)
            return result
        }
    })
}
```

缓存结构

```js
// 代理对象缓存结构
// proxyMap => depsMap => deps
// deps = new Set()
const depsMap = new Map()
const targetMap = new WeakMap()
```

![](./images/c933683d4c9d4ba9febc57a188238b4d6438454844c7c072e7ff125c18f4f44c.png)  


## Vue Reactive API 源码分析

> Vue Reactive API 实现原理上面大概实现了，下面源码分析其实只是做一些细节查看

- Reactive（响应式数据）
  - reactive
    - shallowReactive 浅响应式对象
  - readonly：只读响应，不会被依赖收集
    - shallowReadonly
  - ref
- Effect（副作用）
  - effect
  - effectScope
  - watchEffect
  - watch
  - computed

### Reactive

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
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }

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
    // 根据数据类型，分为基础对象代理操作和集合类型代理操作
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

#### 内部 ReactiveFlags key

ReactiveFlags 作为响应式对象的内部特殊 key。

> 为什么不用 Symbol 去私有 key？:thinking:

```ts
export const enum ReactiveFlags {
  SKIP = '__v_skip', // 跳过响应化
  IS_REACTIVE = '__v_isReactive', // 响应式标记
  IS_READONLY = '__v_isReadonly', // 响应式只读标记
  RAW = '__v_raw' // 原始数据
}
```

工具函数 isReactive、isReadonly、isProxy、markRaw 都是 flag key 快速实现。

![](./images/flag.png)

### get 依赖收集（baseHandlers）

get 代理操作主要做了 3 件事：

1. 依赖收集
2. 数组操作代理
3. 延迟响应式

```js
function createGetter(isReadonly = false, shallow = false) {
  return function get(target: Target, key: string | symbol, receiver: object) {
    // 内部特殊 key 处理... 

    // 数组操作代理
    const targetIsArray = isArray(target)
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver)
    }

    const res = Reflect.get(target, key, receiver)

    if (!isReadonly) {
      // 依赖收集
      track(target, TrackOpTypes.GET, key)
    }

    // case...

    if (isObject(res)) {
      // 响应式子属性数据，不像以前初始化时递归响应，性能优化
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res)
    }

    return res
  }
}
```

#### 数组代理

![](./images/array-proxy.png)

1. includes、indexOf、lastIndexOf 等搜索结果会因为元素变化导致结果可能发生变化，故需要对元素同样依赖收集。
2. push、pop 等数组操作会导致数组长度变化，并返回 length 导致再次触发 get。

```js
const test = [1, 2, 3];

const _test = new Proxy(test, {
  get(traget, key, r) {
    const res = Reflect.get(...arguments);
    console.log(key, res);
    return res;
  },
});

// 访问属性: proxy[foo]和 proxy.bar
_test.push(4); // 返回 _test.length 会再触发 get
console.log(_test.length);
```

### Effect

依赖收集和变更触发的是 Effect（副作用）

#### track

整个 get 函数最核心的部分其实是执行 track 函数收集依赖。

track 的大致实现跟上面一致，v3.2 版本优化

### set 变更通知

1. createReactiveObject
   1. collectionHandlers
   2. baseHandlers
      1. getter
         1. track
      2. setter



流式 Hooks

react 事件流单位是组件
vue 事件流单位是 effect

rxjs 的难是函数式数据流形式，流式 hook 看起来还是跟平常的命令式逻辑流


view = f(data) + effect(data)
view = effect(f(data))