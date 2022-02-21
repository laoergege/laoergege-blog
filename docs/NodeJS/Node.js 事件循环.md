---
tags:
  - NodeJS
  - 事件循环
---

# Node.js 事件循环

![image-20210316173228321](./images/image-20210316173228321.png)

1. timers（定时器阶段）：`setTimeout`、`setInterval`
2. pending callbacks
3. idle, prepare
4. IO poll
5. check
   1. setTimeout VS setImmediate
6. close callbacks

- 宏任务
  - setTimeout、setInterval
  - IO
  - setImmediate
  - close
- 微任务
  - process.nextTick：在当前操作完成后处理
  - Promise
  - queueMicrotask

## Node.js 11.x 前后差异

Node.js 事件循环分为 6 个阶段，每个阶段都有一个 FIFO（先进先出）队列执行回调函数，这几个阶段之间执行的优先级顺序还是明确的。


## 事件循环最佳实践