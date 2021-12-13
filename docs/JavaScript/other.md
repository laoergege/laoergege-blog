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

Block Tree

createVnode

createComponentInstance
setupComponent
setupRenderEffect

renderComponentRoot
updateComponentPreRender


vnode
- type
- props
- children

component
- props
- setup
- render
- slots


setupComponent
updateComponentPreRender
renderComponentRoot 
shouldUpdateComponent

尽量忽略其他不相干 case 情况，保持主逻辑功能流程分析
**这里有个小技巧：看源码过程一般建议关注主线逻辑，像各种特殊情况可通过注释、issue 或者测试用例查看原由**。

生命周期
api 抽象


vnode
- type
- props
- children

component
- props
- slots
- data
- render


- before-created
- created
- before-mount
- mounted
- before-updated
- updated
- before-unmount
- unmounted 
- render-tracked
- render-triggered 
- activated  
- deactivated 
- error-captured
- server-prefetch

“With” 和 “eval” — ECMAScript中的动态作用域