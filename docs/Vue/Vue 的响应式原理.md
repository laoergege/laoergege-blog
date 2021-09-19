# Vue 的响应性系统

1. 响应式原理
2. 基于响应式原理的 MDV（数据驱动视图）

## 响应式原理

传统

“响应式”是 Vue 最重要的特性之一。说起响应式，又会关联到响应式编程，比如

```js
let A = 1
let B = 2
let C = A + B // 3

// change A
A = 2

console.log(C) // 3
```

如果上面数据模型具有响应性，那么理想情况下，A 发生改变，C 也将随之重新计算赋值为 4，可惜 JavaScript 是过程式的，以上情况并不会发生。



Vue2 和 Vue3 的响应式实现原理其实没多大区别，本质都是通过数据操作劫持去依赖收集、变更通知。

主要是区别是底层使用的原生 api 从 `Object.defineProperty` 改为 `Proxy`，

Object.defineProperty 缺点 

- 不能监听对象属性新增和删除
- 对象属性递归响应式化消耗性能
- 数组原型方法覆盖

Proxy 优点

- 劫持整个对象
- 按需响应式

## Map & WeakMap

### 源码分析

Vue 提供了四种响应式类型及 API，参数目标必须是引用类型（除了 null）

- reactive
- readonly
- ref
- shallow 变种
  - shallowReactive
  - shallowReadonly

1. 原始数据 target 必须是对象或者数组
2. 同一原始对象数据返回的都是同一响应代理
3. 已经是响应式的对象再次执行 reactive，还应该返回这个响应式对象
4. 数据类型，__v_skip 属性的对象、被冻结的对象，以及不在白名单内的对象类型如 Date 类型的对象实例是不能变成响应式的。



## 响应式 API 原理实现

```js
function createReactiveObject(target) {
    if(typeof target !== 'object') {
        return target
    }
}
```





export const enum ReactiveFlags {
  SKIP = '__v_skip', // 跳过响应化
  IS_REACTIVE = '__v_isReactive', // 是否响应式数据
  IS_READONLY = '__v_isReadonly', // 是否只读数据
  RAW = '__v_raw' // 获取原始数据
}


get

特殊 key
数组

res

ref
object

track

Vue 3 实现响应式，本质上是通过 Proxy API 劫持了数据对象的读写，当我们访问数据时，会触发 getter 执行依赖收集；修改数据时，会触发 setter 派发通知。


effect

Vue.js 另一个核心设计思想就是响应式。它的本质是当数据变化后会自动执行某个函数，映射到组件的实现就是，当数据变化后，会自动触发组件的重新渲染。响应式是 Vue.js 组件化更新渲染的一个核心机制。

数据劫持、依赖收集、变更通知