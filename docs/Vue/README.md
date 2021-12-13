# Vue

- 响应式
- 组件化
  - vnode
  - 组件及组件树
  - 组件渲染、更新机制
    - diff 算法
    - 调度机制：异步更新
- 模板引擎及编译优化
- 数据流
  - 父子组件
    - props、event
    - 实例引用 `$parent`、`$children`
  - 模块领域
    - provide/inject
  - 全局单例模式  
    - 事件订阅 eventBus
    - 组合、响应
    - 单向数据流框架 vuex（规范统一用法、支持同步异步、结合框架更新机制）
- 复用
  - composition-api
  - 指令
  - 渲染函数
    - 高阶函数
    - 组合函数
- 前端路由
- API
  - nextTick
- 生态
  - 构建工具
    - vite
      - https://github.com/zhangyuang/vite-design
  - JSX
  - SSR
    - https://github.com/ykfe/ssr
    - [happy-dom](https://github.com/capricorn86/happy-dom)
  - web component
    - https://mp.weixin.qq.com/s/kqG7xUnpVRg0XU5HLxjARw
    - https://github.com/yyx990803/vue-lit

## Vue3 系文

### 核心原理

1. [vue3 的升级优化](./vue3的升级优化.md)
2. [vue 组件渲染流程](./vue%20组件渲染流程.md)
3. [vdom diff 更新流程](./vdom%20diff%20更新流程.md)
4. [vue 的响应式系统](./vue%20的响应式系统.md)
5. [vue 的响应式渲染机制](./vue%20的响应式渲染机制.md)
6. 编译优化

### 内置 API

1. slots
2. transition
3. keep-live

### 推荐好文

- 数据流
  - [一切前端概念，都是纸老虎](https://mp.weixin.qq.com/s/oF-MJ39zh0-R65Q4vPX8Dw)
- SFC
  - [Vue 3 的 SFC Style CSS Variable Injection 提案实现的背后](https://mp.weixin.qq.com/s/N1AoRSuK00V5QoZr4TWWvQ)