SSR 的工作原理是使用服务器端进程生成应用程序的初始 HTML 结构，然后使用客户端 JavaScript 在客户端初始化或“水合”应用程序状态。

客户端激活 (hydration)
- Vue 会断言客户端生成的虚拟 DOM 树与从服务器渲染出来的 DOM 结构是相匹配的。
  - 确保 SSR 工作的第一个关键是确保应用的状态在客户端和服务端一致。
    - [编写通用的代码](https://v3.cn.vuejs.org/guide/ssr/universal.html#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%9A%84%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E6%80%A7)
  - 第二个关键是留意 SSR + 客户端激活时 HTML 的有效性会因浏览器不同而不同。

如何定位注水错误的组件及 SSG 模式下如何 debug？