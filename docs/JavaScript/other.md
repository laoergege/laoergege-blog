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



浏览器环境中常见的异步任务种类，按照优先级：

macro task ：同步代码、setImmediate、MessageChannel、setTimeout/setInterval
micro task：Promise.then、MutationObserver

1. 理解功能需求
2. 实现猜想
3. 功能源码主流程 debugger
4. 源码细节
   1. 看 issue
   2. 看测试用例



js debug
- debugger client
  - cmd
    - node debugger
  - ui
    - chrome devtool
    - vscode debugger



- 系统路径大小写及系统分割符号问题