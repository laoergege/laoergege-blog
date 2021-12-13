## Vue 应用的业务开发架构

业务数据
1. 业务状态分散在组件，组件通信困难？
2. Redux，将散落在组件里面的状态聚拢起来成唯一单例，形成状态 store => 组件的单向通信模式
3. 面向对象编程（建立 业务模型） + 响应式编程 + 规范

分层
- U hook 工具代码
- M 业务数据、业务逻辑 通过 hook 封装可复用
- S 单例、运行时依赖注入、服务栈管理服务生命周期，Container 启动服务（封装 Vue-Router）
- V 视图层只关注消费视图相关的数据以及交互逻辑 Vue
- E 渲染引擎 dom

应用栈架构

routes

model => service => container <=> viewModel => (data binding) <=> view

## Vue 组件开发范式

- 容器-展示模式
  - 两类组件通信
    - 输入输出
    - 嵌套场景，服务-依赖注入
  - 模型 Model 表示域/业务模型的定义，ViewModel

```js
setup() {
   return Pipe(
      [],
      op1,
      op2,
      op3,
      (data) => {
        return []
      }
    )
 }
```

vue3 组件最佳范式

```js
// 对象式 setup 组件
const App = {
  name: 'xxx',
  props: ['xxx'],
  setup(props, ctx) {
    
    // 1.返回状态 + SFC/render
    //return {}

    // 2.返回渲染函数
    return () => h('xxx')

    // 探索模板字符串标签
    // return () => vue`<div>{{xxx}}</div>`
  },
}

// 函数式组件（vue2 本质渲染函数，vue3 后函数组件的函数签名跟状态组件 setup 保持一致）
const App = (props, ctx) => {
  return <div>{xxx}</div>
}
```