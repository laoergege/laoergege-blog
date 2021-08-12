---
title: 'NodeJS'
tags:
  - nodejs
---
## NodeJS

- NodeJS
  NodeJS 为我们提供了一个无需依赖浏览器、能够直接与操作系统进行交互的 JavaScript 代码运行时环境
  - NodeJS 架构
    - 特点
      - 基于 **V8 引擎** 的 JavaScript 运行环境
      - 使用 **事件驱动**，**非阻塞 I/O** 模型
    - js 是单线程、通过事件循环分发将异步任务分发到其他线程
  - [安装及基本使用](./安装及基本使用.md)
  - [异步编程](../JavaScript/JavaScript%20异步编程.md)
  - [事件循环机制](./Node%20Event%20Loop.md)
    - timers（setTimeout、setIntervel）
    - setImmediate
    - nextTick
  - 模块机制
    - CommonJS 模块规范
    - 模块解析机制
  - [npm 包管理](./npm.md)
  - 调试及性能分析
    - [调试指南](https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/)
    - [Node Profile](https://nodejs.org/zh-cn/docs/guides/simple-profiling/)
    - [node-in-debugging](https://github.com/nswbmw/node-in-debugging)
    - [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27)
  - NodeJS 全局对象
    - process、buffer、__filename 和 __dirname
    - console 和 setTimeout 之类
    - ECMAScript 语言定义的全局对象，如 Date
  - API 模块
    - buffer
    - stream
      - [Node Stream](https://github.com/zoubin/streamify-your-node-program/blob/master/README.md)
      - [Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
      - [stream-handbook](https://github.com/substack/stream-handbook)
    - file
    - worker thread
      - [深入理解 Node.js Worker Threads](https://zhuanlan.zhihu.com/p/167920353)
- 实践
  - 开发环境
    - [nodemon](https://github.com/remy/nodemon)
  - 项目架构
    - 微服务（服务发现） + BFF（服务调用、模板渲染）
  - [RPC 通信](./RPC%20通信.md)
  - 内存泄漏
  - 数据类型验证
    - JSON Schema
    - typescript 运行验证
  - http 服务
    - 路由层
    - 模板渲染
      - 模板引擎
        - ES6 模板引擎
        - include 模板
        - xss 过滤、模板 helper 函数
      - SSR 同构
        - 数据？
    - Rest API
    - GraphQL 专注数据聚合，前端要什么返回什么
      - 对接后台服务？
    - 性能测试
      - 压测 http 服务（ab）网络
      - top（cpu、men）、iostat（硬盘） 监控进程、硬件
      - node 性能分析
- 资料
  - [使用 Node.js 构建 JavaScript 应用程序](https://docs.microsoft.com/zh-cn/learn/paths/build-javascript-applications-nodejs/)
  - [NodeJS Design Patterns](https://www.packtpub.com/mapt/book/web-development/9781783287314)
  - [An Introduction to libuv](http://nikhilm.github.io/uvbook/)
- 生态
  - server example
    - https://github.com/koajs/examples
  - file
    - watcher
      - https://github.com/paulmillr/chokidar
  - 控制台
    - 日志 
      - [consola](https://github.com/unjs/consola)
    - 美化
      - [chalk](https://github.com/chalk/chalk)
  - 调试
    - [debug](https://github.com/visionmedia/debug)
  - 监控
    - [easy-monitor](https://github.com/hyj1991/easy-monitor)
  - 命令行
    - 输入
    - 输出
- Deno
  - 资料
    - [Deno 运行时入门教程：Node.js 的替代品](https://www.ruanyifeng.com/blog/2020/01/deno-intro.html)


Farrow
类型安全的服务端框架设计目标
Prevent Hanging Request（阻止请求意外挂起）
Refuse Wrong Response（拒绝错误响应内容）
No need to Monkey-Patching（无需篡改对象属性）
Embedded Runtime-Validation（内置运行时验证）




1. 需求分析
2. 技术预研
3. 项目开发
4. 测试
5. 性能优化
6. 框架和工程化


template + es6 模板字符串 + new Function + with