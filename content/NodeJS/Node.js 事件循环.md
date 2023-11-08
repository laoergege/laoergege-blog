---
discussionID: jLoSG5pP6GbSuioWIWmAB
release: true
tags:
  - NodeJS
  - 事件循环
---

# Node.js 事件循环

![image-20210316173228321](./images/image-20210316173228321.png)

- Node.js 事件循环分为 6 个阶段：
  1. timers（定时器阶段）：`setTimeout`、`setInterval`
  2. pending callbacks：处理一些上一轮循环中的少数未执行的 I/O 回调
  3. idle, prepare：仅系统内部使用
  4. IO poll
     - 执行 I/O 回调
       - 如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统相关的时间限制
       - 如果 poll 队列为空时，会有两件事发生
         - 如果有 setImmediate 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调
         - 如果有准备就绪的定时器任务，则处理前进到“定时器”阶段
  5. check：`setImmediate`
     - 意为要尽可能快执行某些代码，能够跳出 IO poll 循环等待阶段
  6. close callbacks
- 特征
  - Node 的事件循环任务是分阶段的，阶段之间执行的优先级顺序还是明确的
  - 每个阶段都有一个宏队列，直到清空或者达到一定的完成数量限制才会进入下一阶段
  - 每执行完一个宏任务后清空微任务队列才能再执行下一个宏任务：
    - Process.nextTick：在所有 micro 之前执行进行优先执行
    - queueMicrotask、promise 等

## Node.js 11.x 执行模型前后差异

Node.js 11.x 前：在一个宏任务队列全部执行完毕后，去清空一次微任务队列，然后到下一个等级的宏任务队列，以此往复。

Node.js 11.x 前后：node 端的事件循环变得和浏览器类似，先执行一个宏任务，然后是一个微任务队列。

```js
console.log("Script开始");
setTimeout(() => {
  console.log("宏任务1（setTimeout)");
  Promise.resolve().then(() => {
    console.log("微任务promise2");
  });
}, 0);
setImmediate(() => {
  console.log("宏任务2");
});
setTimeout(() => {
  console.log("宏任务3（setTimeout)");
}, 0);
console.log("Script结束");
Promise.resolve().then(() => {
  console.log("微任务promise1");
});
process.nextTick(() => {
  console.log("微任务nextTick");
});
```

```
// 11.x 前
Script开始
Script结束
微任务nextTick
微任务promise1
宏任务1（setTimeout)
宏任务3（setTimeout)
微任务promise2
宏任务2（setImmediate)

// 11.x 后
Script开始
Script结束
微任务nextTick
微任务promise1
宏任务1（setTimeout)
微任务promise2
宏任务3（setTimeout)
宏任务2（setImmediate)
```
