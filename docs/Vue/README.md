# Vue

- 响应性系统
- 组件化
  > 组件是视图复用和更新的最小单位
  - vnode
    - component tree
    - vdom
  - 渲染机制
  - 更新机制（MDV）
    - props 处理
    - diff 机制
    - 调度机制
  - 模板编译器
- 数据流
  - 父子组件
    - props、event
  - 模块领域
    - provide/inject
  - 全局单例模式  
    - 事件订阅
    - 组合、响应
    - 单向数据流框架 vuex（规范统一用法、支持同步异步、结合框架更新机制）
- 逻辑复用
  - composition-api
  - *mixin*
    - 缺点
  - 命名冲突和数据来源不清晰
  - 指令
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
  - web component
    - https://mp.weixin.qq.com/s/kqG7xUnpVRg0XU5HLxjARw

## Vue3 系文

- vue
1. [vue3 的升级优化](./1.vue3的升级优化.md)
2. [vue 组件渲染流程](./vue%20组件渲染流程.md)
3. [vue 的响应性系统](./vue%20的响应性系统.md)
4. [vue 的更新渲染机制](./vue%20的更新渲染机制.md)
5. [vdom diff 更新流程](./vdom%20diff%20更新流程.md)
6. slots(WIP)

推荐好文

- 数据流
  - [一切前端概念，都是纸老虎](https://mp.weixin.qq.com/s/oF-MJ39zh0-R65Q4vPX8Dw)
- [Vue 3 的 SFC Style CSS Variable Injection 提案实现的背后](https://mp.weixin.qq.com/s/N1AoRSuK00V5QoZr4TWWvQ)

业务架构

分层
U hook 工具代码
M 业务数据、业务逻辑 通过 hook 封装可复用
S 单例、运行时依赖注入、服务栈管理服务生命周期，Container 启动服务（封装 Vue-Router）
V 视图层只关注消费视图相关的数据以及交互逻辑 Vue
E 渲染引擎 dom

支持 SSR


onVnodeUpdated





setupComponent
updateComponentPreRender
renderComponentRoot 
shouldUpdateComponent

vdom
本质，描述视图的js对象
精确更新，减少 DOM 操作
抽象视图，跨平台






fragment

view = f(data) + effect()

业务数据
1. 散落在 vm，组件通信
2. Redux，单向数据流，将散落在组件里面的状态聚拢起来成唯一单例
3. 面向对象编程（建立 业务模型） + 响应式编程 + 规范


生命周期

在响应式数据中除了数据逻辑外，其他都是称为副作用。





组件类型 children slots patch(subTree)
元素类型 children 递归遍历

- scheduler
  - invalidateJob，删除任务，用于删除任务队列中的子组件渲染任务


renderComponentRoot

shouldUpdateComponent
