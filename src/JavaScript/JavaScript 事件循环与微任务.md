---
tags:
 - event loop
 - micro task
 - 事件循环
---

# JavaScript 事件循环与微任务

> 阅读参考
>
> - 《重学前端》
> - 《浏览器工作原理与实践》

首先要声明一点：JavaScript 语言规范并没有规定事件循环相关，事件循环更多是跟其宿主环境相关，比如浏览器和 Node。早期JavaScript 本身还没有异步执行代码的能力，这也就意味着，宿主环境传递给 JavaScript 引擎一段代码，引擎就把这个代码任务直接顺次执行了，这个任务也就是宿主发起的任务。

浏览器中每个渲染进程都有一个主线程，并且主线程非常繁忙，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件，浏览器使用消息队列和事件循环系统来统筹调度这些任务。

我们使用宿主环境提供的异步 API （如 settimeout、setinterval 等）去注册回调任务到事件循环系统的任务队列中。

<img src="${images}/1*iHhUyO4DliDwa6x_cO5E3A.gif" alt="img"  />

每次的执行一次循环过程，就相当从消息队列取一次任务到回调栈中进行完成。

在 ES5 之后，JavaScript 引入了 Promise，这样，不需要浏览器的安排，JavaScript 引擎本身也可以发起异步任务了。由于我们这里主要讲 JavaScript 语言，那么采纳 JSC 引擎的术语，我们把宿主发起的任务称为**宏任务**，把 JavaScript 引擎发起的任务称为**微任务**。

## 微任务（micro task）



在宏观任务中，JavaScript 的 Promise 还会产生异步代码，JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列：

宏任务中产生的微任务会插入到微任务队尾，宏任务完成后清空微任务队列

<img src="${images}/16f70a9a51a65d5302166b0d78414d65.jpg" alt="img" style="zoom:50%;" />

Promise

generator/iterator

generator/iterator 并非异步代码，只是在缺少 async/await 的时候，一些框架（最著名的要数 co）使用这样的特性来模拟 async/await。

async/await