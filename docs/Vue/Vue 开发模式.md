## Vue 应用的业务开发架构

- 路由层
  - router
  - stack
- 视图层
  - 容器组件
  - 展示组件
    - 组件库
- 数据层
  - service
  - model
- 通信层
  - httpClient

业务数据
1. 业务状态分散在组件，组件通信困难？
2. Redux，将散落在组件里面的状态聚拢起来成唯一单例，形成状态 store => 组件的单向通信模式
3. 面向对象编程（建立 业务模型） + 响应式编程 + 规范


try catch 分流

## 复用

- 组件化
  - 逻辑状态
    - 渲染函数
    - composition-api
  - 模板
    - 原子样式

## 数据流

```js
import { inject, reactive } from 'vue'
const STORE_KEY = '__store__'
function useStore() {
  return inject(STORE_KEY)
}
function createStore(options) {
  return new Store(options)
}
class Store {
  @inject()
  constructor(options) {
    this.$options = options
    this._state = reactive({
      data: options.state
    })
    this._mutations = options.mutations
  }
  get state() {
    return this._state.data
  }
  commit = (type, payload) => {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }
  install(app) {
    app.provide(STORE_KEY, this)
  }
}
export { createStore, useStore }
```

- 数据流方案
  - problem
    - 第三方库多余的 api，希望回归纯粹的 js
  - need
    - 更好的类型推导
    - 支持 vue-devtool
    - 扩展
    - 轻量级
  - api
    - defineStore

## Vue3 组件开发范式

```js
// 1.对象式 setup 组件
const App = {
  name: 'xxx',
  props: ['xxx'],
  setup(props, ctx) {
    
    // 1.返回状态
    //return {}

    // 2.返回渲染函数
    return () => h('xxx')

    // 探索模板字符串标签
    // return () => vue`<div>{{xxx}}</div>`
  },
}

// 2.函数式组件（本质渲染函数，vue3 后函数组件的函数签名跟状态组件 setup 保持一致）
// const App = (props, ctx) => {
//   return <div>{xxx}</div>
// }

// 3. setup 函数
// const App = (props, ctx) => {
//   return () => <div>{xxx}</div>
// }
// defineComponent(App) 

// App.props = ['value']
// App.emits = ['click']
```