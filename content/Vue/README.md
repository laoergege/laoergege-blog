---
discussionID: geSH27U-UvIN36o64Gu9k
release: true
tags:
 - vue
description: Vue 技术栈
---

# Vue

> Vue3 为主

- Vue 核心
  - 响应式系统
  - vDOM + Renderer（渲染器）
    - 组件系统 
    - 组件渲染机制
    - 响应式渲染 + 异步更新调度
  - 模板编译器
    - 模板编译
    - 编译优化
- Vue 开发指南
  - 组件通信
    - 父子组件
      - props、emit
      - 组件实例引用 `ref`、`children`、`parent`
    - 非父子组件：
      - 模块领域：provide/inject
      - 全局单例模式  
        - EventBus
        - Vuex
  - 逻辑复用
    - 组合函数：composition-api
    - 指令
    - 函数组件
  - 前端路由 VueRouter
    - 路由导航
    - 路由匹配
    - 路由守卫
- 生态
  - 多页应用：[petite-vue](https://github.com/vuejs/petite-vue)
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

1. [vue 组件渲染机制](./vue%20组件渲染机制.md)
2. [vue diff 更新流程](./vue%20diff%20更新流程.md)
3. [vue 的响应式系统](./vue%20的响应式系统.md)
4. [vue 的响应式渲染机制](./vue%20的响应式渲染机制.md)



- vue jsx
  - 场景
    - 一个文件写多个组件
    - 一个文件写多个组件
  - template ts 支持？
  - JSX 中的子节点，编译后也就是 createVNode 的最后一个参数（对象类型）。在 template 对应则是插槽的概念，插槽是一种内容分发（content distribution）的 API，洋文叫 Slot，
  - 但是在模板中，传递属性的时候，template 里面是不能写 VNode 的，因此 Vue 里出现了插槽这个概念，插槽只在组件的 children 里面才有。
  - Vue 对插槽的要求最好是一个 function
    - 子节点会被编译成，{ default: () => [123] }。


数据流
    - 单向数据流原则