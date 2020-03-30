# NodeJS Learning

## 知识体系

- 简介：Node 为我们提供了一个无需依赖浏览器、能够直接与操作系统进行交互的 JavaScript 代码运行环境
- 安装及基本使用
- 异步编程
  - Callbacks
  - Promises
  - Generator
  - Async and Await
- 模块机制
- npm 包管理
- 核心知识
  - [Node Event Loop](./Node%20Event%20Loop.md)
    - timers（setTimeout、setIntervel）
    - setImmediate
    - nextTick
- Node 全局对象
  - process
  - readline
  - console
  - worker
  - events
    - NodeJS Event Emitter是NodeJS的核心API，它使您可以将侦听器功能附加到特定事件，一旦事件触发，该事件将被调用。此行为看起来像异步的，因为事件处理程序通常在其最初注册为事件处理程序的时间之后才调用。但是 Event Emitter 是 Node 观察者模式的内置实现，Node 不会在事件循环队列中安排任何事件，一旦事件触发，它将在调用栈上同步的执行监听器，观察者模式能够解耦代码，使代码可读性更强
- 其他知识点
  - 进程与线程
  - 中断机制
  - 进程通信
    - 信号
- 使用场景
  - Node CLI
  - Server
