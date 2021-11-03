- 项目源码管理

  - [RFC](https://github.com/vuejs/rfcs)
  - monorepo 方案
    将项目分成多个可独立使用的包
  - TypeScript

- 性能优化

  - 源码体积优化

    - 移除一些冷门的 feature（比如 filter、inline-template 等）
    - *引入 tree-shaking 的技术，减少打包体积*

  - 响应式优化
    - Object.defineProperty
      - 只能劫持的对象某一个属性的访问和修改，不能监听对象属性新增和删除
      - 初始化阶段，无脑递归深层对象属性
    - proxy 
      - Proxy 劫持的是整个对象，对象属性的新增、删除都可以监听到
      - 对内部属性延迟响应式化（获取对象内部属性时）
  - 编译优化
    通过模板分析，实现动静分离，来实现运行时 patch 过程的优化提升

  - diff 算法优化

  - Slot 的编译优化

  - 事件侦听函数的缓存优化

- 语法 API 优化：Composition API
  - 逻辑组织（关注点聚焦）
  - 逻辑复用
    - 极致复用（回归 原生 JS 函数）
    - 函数可组合
  - Composition API
    - reactive api
    - 生命周期函数
    - 依赖注入


vue3
- 函数式
  - 更好 ts 支持
- api 简化
  - h
  - 自定义指令
  - sync和v-model
- tree-shaking
  - createApp 工厂方式
- 逻辑复用 composition-api
- 性能优化
  - 响应式系统
  - 编译器及运行时
- 扩展性
  - 自定义渲染器
    - 让用户根据不同平台的渲染API定制渲染器
  - 独立响应式系统


- createApp
  - createRenderer
  - renderer.createApp
    - render
    - createAppAPI
- render
- patch
- processComponent
- mountComponent
  - instantce
  - setupComponent
  - setupUpdateEffelect