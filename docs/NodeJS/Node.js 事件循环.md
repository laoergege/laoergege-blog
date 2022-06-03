---
release: true
tags:
  - NodeJS
  - 事件循环
---

# Node.js 事件循环

![image-20210316173228321](./images/image-20210316173228321.png)

Node.js 事件循环分为 6 个阶段，每个阶段都有一个 FIFO（先进先出）队列执行回调函数，这几个阶段之间执行的优先级顺序还是明确的。

1. timers（定时器阶段）：`setTimeout`、`setInterval`
2. pending callbacks：处理一些上一轮循环中的少数未执行的 I/O 回调
3. idle, prepare：仅系统内部使用
4. IO poll
   - 执行 I/O 回调
     - 如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制
     - 如果 poll 队列为空时，会有两件事发生
       - 如果有 setImmediate 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调
       - 如果没有 setImmediate 回调需要执行，会等待回调被加入到队列中并立即执行回调，另外事件循环将检查 _已达到时间阈值的计时器_。如果一个或多个计时器已准备就绪，则事件循环将绕回计时器阶段以执行这些计时器的回调
5. check：`setImmediate`
6. close callbacks

微任务队列

- 纳米任务队列
  - process.nextTick
- 普通微任务队列
  - promise.then、promise.reject

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
