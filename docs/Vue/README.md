---
release: true
tags:
 - vue
description: Vue 技术栈
---

# Vue

- Vue Core
  - 组件系统
    - jsx
    - template 模板编译器
      - 模板编译
      - 编译优化
  - Virtual Dom + Renderer（渲染器）
    - 组件渲染机制
      - render
      - diff
      - patch
    - 响应式（更新）渲染
    - 异步更新调度
    - 指令
  - 响应式系统
- 指南
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
    - 函数组件 & JSX
      - 高阶函数
      - 组合函数
  - 前端路由
    - 路由导航
    - 路由匹配
    - 路由守卫
- 生态
  - 多页应用：[petite-vue](https://github.com/vuejs/petite-vue)
  - 单页应用
    - vue-router
  - Vue2 => Vue3
    - [vue-compat](https://github.com/vuejs/core/tree/main/packages/vue-compat)
    - gogocode
  - VSCode 插件
    - volar
  - VueDevtools
  - 构建工具
    - vue-cli
    - [vite](https://github.com/vitejs/vite) 
      - https://github.com/zhangyuang/vite-design
  - 项目模板
    - [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)
    - [create-vue](https://github.com/vuejs/create-vue)
  - SSR
    - [happy-dom](https://github.com/capricorn86/happy-dom)
  - web component
    - https://mp.weixin.qq.com/s/kqG7xUnpVRg0XU5HLxjARw
    - https://github.com/yyx990803/vue-lit
  - 跨平台
    - [ThreeJS：trois](https://github.com/troisjs/trois)

## Vue3 系文

- Vue 核心原理
  1. [vue3 的升级优化](./vue3的升级优化.md)
  2. [vue 组件渲染机制](./vue%20组件渲染机制.md)
  3. [diff 更新流程](./diff%20更新流程.md)
  4. [vue 的响应式系统](./vue%20的响应式系统.md)
  5. [vue 的响应式渲染机制](./vue%20的响应式渲染机制.md)
  6. [Vue 组件生命周期](./Vue%20%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.md)
  7. 模板编译优化
  8. vue 指令原理
- Vue API 剖析
  1. vue 异步组件及 Suspense
  2. Teleport 实现原理
  3. Fragment
  4. Vue & WebComponent

## 推荐好文

- 数据流
  - [一切前端概念，都是纸老虎](https://mp.weixin.qq.com/s/oF-MJ39zh0-R65Q4vPX8Dw)
- SFC
  - [Vue 3 的 SFC Style CSS Variable Injection 提案实现的背后](https://mp.weixin.qq.com/s/N1AoRSuK00V5QoZr4TWWvQ)