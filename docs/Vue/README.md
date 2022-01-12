# Vue

- 响应式系统
- 渲染器
  - 渲染函数及 vnode
  - 组件化及组件树
  - 组件渲染机制
    - 响应式渲染
    - diff 算法
      - props
      - children
    - 调度机制：异步更新
- 模板编译器
  - 模板编译
  - 编译优化
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
  - vue-router
    - 路由懒加载、异步组件
      - 路由懒加载的含义：把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件
      - 实现：结合 Vue 的异步组件和 Webpack 的代码分割功能
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
2. [vue 组件渲染机制](./vue%20组件渲染机制.md)
3. [diff 更新流程](./diff%20更新流程.md)
4. [vue 的响应式系统](./vue%20的响应式系统.md)
5. [vue 的响应式渲染机制](./vue%20的响应式渲染机制.md)
6. 编译优化

### API

1. slots
2. transition
3. keep-live

## 推荐好文

- 数据流
  - [一切前端概念，都是纸老虎](https://mp.weixin.qq.com/s/oF-MJ39zh0-R65Q4vPX8Dw)
- SFC
  - [Vue 3 的 SFC Style CSS Variable Injection 提案实现的背后](https://mp.weixin.qq.com/s/N1AoRSuK00V5QoZr4TWWvQ)


SSR的缺点
开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子
当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境
更多的服务端负载

vue路由hash模式和history模式实现原理分别是什么，他们的区别是什么？
hash 模式：
#后面 hash 值的变化，不会导致浏览器向服务器发出请求，浏览器不发出请求，就不会刷新页面
通过监听 hashchange 事件可以知道 hash 发生了哪些变化，然后根据 hash 变化来实现更新页面部分内容的操作。
history 模式：
history 模式的实现，主要是 HTML5 标准发布的两个 API，pushState 和 replaceState，这两个 API 可以在改变 url，但是不会发送请求。这样就可以监听 url 变化来实现更新页面部分内容的操作
区别
url 展示上，hash 模式有“#”，history 模式没有
刷新页面时，hash 模式可以正常加载到 hash 值对应的页面，而 history 没有处理的话，会返回 404，一般需要后端将所有页面都配置重定向到首页路由
兼容性，hash 可以支持低版本浏览器和 IE。

Vue中组件生命周期调用顺序是什么样的？
组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。
组件的销毁操作是先父后子，销毁完成的顺序是先子后父。