---
title: 'NodeJS'
tags:
  - nodejs
---
## NodeJS

- NodeJS
  > NodeJS 为我们提供了一个无需依赖浏览器、能够直接与操作系统进行交互的 JavaScript 代码运行时环境
  - [Node.js 异步事件驱动架构](./Node.js 异步事件驱动架构.md)
    - 特点
      - 基于 **V8 引擎** 的 JavaScript 运行环境
      - 使用 **事件驱动**，**非阻塞 I/O** 模型
    - js 是单线程、通过事件循环分发将异步任务分发到其他线程
    - [事件循环机制](./Event Loop.md)
      - timers（setTimeout、setIntervel）
      - setImmediate
      - nextTick
  - [安装及基本使用](./安装及基本使用.md)
  - [异步编程](../JavaScript/JavaScript 异步编程.md)
  - 模块机制
    - CommonJS 模块规范
    - 模块解析机制
  - [npm 包管理](./npm.md)
  - 调试及性能分析
    - [调试指南](https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/)
    - [Node Profile](https://nodejs.org/zh-cn/docs/guides/simple-profiling/)
    - [Debugging Node.js with Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27)
    - [node-clinic](https://github.com/clinicjs/node-clinic)
    - 日志
      - console.log
  - 第三方扩展
    - C++ addons NAPI
    - DLL
      - [node-ffi](https://github.com/node-ffi/node-ffi)
    - WebAssembly
  - NodeJS 全局对象
    - process、buffer、__filename 和 __dirname
    - console 和 setTimeout 之类
    - ECMAScript 语言定义的全局对象，如 Date
  - 模块
    - Buffer
      - 内存分配策略
    - stream
      - [Node Stream](https://github.com/zoubin/streamify-your-node-program/blob/master/README.md)
      - [Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
      - [stream-handbook](https://github.com/substack/stream-handbook)
    - file
    - ChildProcess
    - WorkerThreads
      - [深入理解 Node.js Worker Threads](https://zhuanlan.zhihu.com/p/167920353)
    - VM
      - [NPM酷库：vm2，安全的沙箱环境](https://segmentfault.com/a/1190000012672620)
- 实践
  - 开发环境
    - [nodemon](https://github.com/remy/nodemon)
  - 项目架构
    - 微服务（服务发现） + BFF（服务调用、模板渲染）
  - [RPC 通信](./RPC 通信.md)
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
    - 压测 http 服务（ab）
        - QPS
        - 吞吐率
  - Node 性能优化
    - 性能监测
    - 性能优化
      - CPU（计算性能优化、JS Profile）
        1. 减少不必要的计算
        2. 空间换时间
        3. 提高计算能力
           1. C++ 插件
      - 内存（提高系统性能）
        - 减少内存使用，减少GC次数
          - 内存池 Buffer？
        - 内存泄漏，导致 GC 过久
- 资料
  - [使用 Node.js 构建 JavaScript 应用程序](https://docs.microsoft.com/zh-cn/learn/paths/build-javascript-applications-nodejs/)
  - Node.js 设计模式
  - [An Introduction to libuv](http://nikhilm.github.io/uvbook/)
  - [node-in-debugging](https://github.com/nswbmw/node-in-debugging)
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







template + es6 模板字符串 + new Function + with

后端服务应用则必须关注服务的稳定与安全
后端服务应用则必须关注服务的稳定与安全
又需要考量平行扩容方案
为了用户体验，需要充分做好服务的性能优化

首先我们需要应用工具将服务发布到远程机器上，这里就涉及devops 工具；

我们需要保证远程服务的安全与稳定，这就涉及一些进程管理工具，例如我们常见的 PM2；

我们需要判断远程服务运行是否正常，这就涉及远程服务的监控和告警机制；

遇到运行问题时，我们需要通过远程日志来定位分析问题，这就涉及日志打印和跟踪染色。