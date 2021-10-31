- task 队列
- promise 队列
- messagechannel
- requestAnimationFrame 
- animate 队列
- 
- process.nextTick
- setImmediate




单线程
异步回调
事件循环

- 宏任务
  - MessageChannel
- 微任务
  - Promise
  - MutationObserver

vue 异步更新
- callbacks 存放异步执行的回调
- flushCallbacks 同步执行callbacks中回调 
- 优先微任务、否则宏任务