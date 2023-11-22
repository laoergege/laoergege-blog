---
discussionID: QyCS9neDAqOKlfGCBQXzW
release: true
tags:
 - javascript
 - 异步
 - 编程语言
---

# JavaScript 异步编程

- JavaScript 异步编程
  - [异步编程](#异步编程)
  - [JavaScript 的执行环境：事件循环 + 回调队列](#javascript-的执行环境事件循环--回调队列)
  - [JavaScript 异步编程范式](#javascript-异步编程)

## 异步编程

**同步/异步关注的是事物之间的行为模式、协作关系**：一个事物的发生必须等待另一事物的结果，这就是同步，反之亦是异步，说明事物之间没有因果顺序关系，可独立发生的。

> 很多人将同步/异步与阻塞/非阻塞混淆在一起，其实两者是不同层面的概念，阻塞/非阻塞关注、描述的是对象状态，比如说在同步非阻塞的 IO 调用下主动轮询结果。

在编程语言中，同步编程意味着代码任务一个接一个执行发生，并且任务的执行流程与代码的编写、调用顺序是一样的；而在异步编程中，通过一些异步操作手段让某一任务会独立于当前任务流，并且其执行时机不再像同步编程那样直观，它们统一由运行时并发调度。

这里可能需要提及一点的是多线程和异步的区别关系：线程是系统功能的执行单位，而异步描述的是任务之间的协作关系，我们可以将多条异步的任务流分别应用于多线程当中去实现并发执行，但并发不一定是用多线程也可以是用单线程，具体要看异步框架/运行时的实现方式。故多线程只是异步编程实现的一种形式。




- 语言层
  - 多线程编程
    - 状态竞争 => 锁、同步原语
  - 事件驱动-事件循环
    - 基于消息传递模型
      - Actor
      - CSP
    - 异步编程
      - 事件循环这样一种同步调度或者协作式的调度机制
  - 协程
    - 按调用栈分类（由于协程必须支持挂起/恢复，因此对于挂起点的状态保存就显得极其关键。）
      - 有栈协程（Stackful Coroutine）：每个协程都有自己的调用栈，类似于线程的调用栈
      - 无栈协程（Stackless Coroutine）：协程没有自己的调用栈，挂起点的状态通过状态机或闭包等语法来实现
- 操作系统
  - 基于线程：操作系统以线程作为最小调度执行单位并且分时、抢占式调我们的代码
  - 事件驱动
- 硬件层
  - 多核并行
  - 异步 IO


异步编程 = 异步 API + 编程范式 + 并发模型





任务一般分为 IO 密集型和 CPU 密集型。而 web 领域是一个 IO 密集的场景：主流的多线程并发方案不仅要面对竞争条件、死锁等编程问题，更重要的是绝大部分线程都处在等待网络响应或者等待磁盘读取中，CPU 的利用率依然很低，而且大部分 CPU 都耗在操作系统的线程调度上了；而且线程也是资源，它们不是免费的，系统有数量限制。

**异步编程主要是解决 CPU 上下文切换消耗问题，提高 CPU 利用率**。  

**异步编程本质上是带有用户空间线程的协作式多任务处理机制**，应用程序在用户空间中管理"线程"和上下文切换，由用户程序自行任务调度避免了**阻塞原来线程，CPU 在线程上下文切换消耗**。

> 协作式的核心是“主动”协调：我不放弃执行权，任何人不能强制我休眠；我做完了自己的工作，那就一定要主动放弃执行权，方便其它人使用CPU工作。

总结来说，异步编程是一种并发编程模型，**任务只有具备异步特性才能被并发执行**，但保证单个事务的连续性（代码是可异步执行，但业务逻辑必须是同步关系）是编程中**异步处理**的关键解决之道。

## JavaScript 的异步原理：单线程事件循环 + 回调队列

JavaScript 是一门单线程语言，语言层面没有提供多线程编程能力，同时也跟大多数同步编程语言一样，一旦遇到耗时任务整个线程就会被阻塞。

在 ES6 之前，JavaScript 语言本身并没有任何异步能力。JavaScript 的异步实现主要是由宿主环境为其运行时提供的一种能力。在编程层面，**JavaScirpt 异步范式 = 异步 API + 异步回调**的模式

```js
// 异步回调
function foo() {
    alert("Hello");
}

// 异步 API
setTimeout(foo, 3000)
```

但对于这样的模式，在执行环境层面是如何支持？我们应该有一个感性的认知：一个 JavaScript 引擎会常驻于内存中，不断循环等待着、执行着宿主环境传递的 JavaScript 代码。整个执行模型是一个单线程事件循环 + 回调队列：

> 以下是浏览器事件循环模型中 JavaScript 交互的部分

![](./images/1*iHhUyO4DliDwa6x_cO5E3A.gif)

ES5 之后，JavaScript 引入了 Promise。我们不需要宿主的安排任务，JavaScript 引擎本身也可以发起异步任务了。我们把宿主环境调度的任务称为宏观任务，把 JavaScript 引擎内部调度任务称为微观任务。

当一段脚本产生一个微任务就会被放入引擎内部的微任务队列，等整段代码快要执行结束时，引擎会先处理微任务队列中的微任务，直至所有微任务清空才真正退出，如果在微任务中循环触发新的微任务，那么也将被清完为止。


微任务可以在实时性和效率之间做有效的权衡。微任务之所以能实现这样的效果，主要取决于微任务的执行时机，微任务其实是一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。

## JavaScript 异步编程范式

> 网上对 JavaScript 异步编程范式介绍有很多很详细的，笔者对于这块内容就挑着记录 😊

- Callback
- 发布订阅模式：发布订阅模式解决了回调地狱的问题，但存有逻辑碎片化的问题
  - [手写 EventEmitter 实现](https://github.com/laoergege/laoergege-blog/issues/84)
- [Promise](#promise)：通过链式调用的写法不仅解决了回调地狱的问题，而且线型管理 Callback 的方式使得相关逻辑内聚提高了一定的可读性
  - [Promise 异步错误](#promise-异步错误)
- [Generator](#generator--协程)
- Async/Await：本质上是 promise + generator 异步方案标准化
  - [Async/Await 实现原理](#asyncawait-实现原理)
- 函数响应式编程：是一种发布订阅模式和迭代模式的结合，相比发布订阅模式带来事件支离，函数响应式编程则把它们串连起来，当作事件流来处理

### Promise

Promise 代表着一种未来的承诺，本质是一种数据结构，可以看作是状态机和观察者模式结合。

> [Promises/A+ 规范链接地址](https://promisesaplus.com/)

- Promise 实例
  - state  ![图 2](./images/1654329152719.png)  
    - pending
    - fulfilled
    - rejected
  - result
  - reason: 是一个 Promise 里 reject 之后返回的拒绝原因
  - exception: 是一个异常，是在 Promise 里面可以用 throw 语句抛出来的值
  - then、catch、finally
    - 链式调用
    - 延迟绑定
    - 值穿透、错误冒泡：当我们不在 then 中放入参数，或者参数不为 function，例：promise.then().then()，那么其后面的 then 依旧可以得到之前 then 返回的值
    - 返回值穿透：resolve 返回值，如果返回值是 Promise，则直接获取内部结果返回
    - onResolved 和 onRejected 这两项函数需要异步调用
- Promise 静态方法
  - **resolve**
    - 参数为 Promise 对象，直接返回
    - 参数为 Thenable 对象
    - 其他数据类型，作为新 Promise 的 result
  - reject
  - all：所有 Promises 状态成功就返回，否则返回失败的 Promises
  - allSettled：所有的 Promise 状态完成就返回，不管其是否处理成功
  - any：优先返回状态成功的 Promise，否则返回全部失败结果
  - race：优先返回状态完成的 Promise
- [实现的简易版本 promise.js](https://github.com/laoergege/laoergege-blog/blob/master/content/JavaScript/codes/promise.js)

### Promise 异步错误

我们把 Promise 当作着一种异步结果，当产生错误时，自然不会抛出原 Promise 代码外部，因为语言的异常机制需要在同一调用栈中才能被捕获,而异步代码的执行发生是在另一个调用栈。

```js
try {
  new Promise((resolve, reject) => {
    throw new Error("Whoops!");
  }).catch(alert); // Error: Whoops!
} catch(error) {
  console.log(error) // no happend
}
```

但实际上 JavaScirpt Promise 的执行者（executor）是同步执行，而处理程序（handler）是异步执行。Promise 的执行者（executor）和 promise 的处理程序（handler）周围有一个“隐式的 try..catch”。如果发生异常，它就会被捕获，这样就可以保持在语义上相同了。

再看一种情况：

```js
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
```

上面的错误不会被 Promise 捕获，setTimeout 也是一种异步操作，故不在 Promise 的异步内部自然无法捕获。

JavaScript 引擎会跟踪未处理的 rejection，在这种情况下会生成一个全局的 error，在浏览器中，我们可以使用 unhandledrejection 事件来捕获这类 error：

```js
window.addEventListener('unhandledrejection', function(event) {
  // 这个事件对象有两个特殊的属性：
  alert(event.promise); // [object Promise] - 生成该全局 error 的 promise
  alert(event.reason); // Error: Whoops! - 未处理的 error 对象
});

new Promise(function() {
  throw new Error("Whoops!");
}); // 没有用来处理 error 的 catch
```

### Generator & 协程

协程就是用户态线程，可以由开发者暂停、调度执行的线程。

JavaScript 中的 Generator 是一种无栈协程：协程没有自己的调用栈，挂起点的状态通过**状态机**和**闭包**等语法来实现；而有栈协程：每个协程都有自己的调用栈，类似于线程的调用栈。

无栈协程就意味着无法在内部函数中挂起协程：

```js
function *test() {
  console.log('execution start');
  
  ['A', 'B'].forEach(function(item) {
    yield item; // Uncaught SyntaxError: Unexpected identifier
  })
}

const t = test()
t.next()
```

### Async/Await 实现原理

Async/Await 其实只是语法糖，本质上是把 Async 函数编译成 Generator 函数和生成一个基于 Promise 的自动执行器去迭代完 Generator 函数。

```js
function _async(gen) {
  const g = gen()
  return new Promise((resolve, reject) => {
    const next = function(res) {
      try {
        let { value, done } = g.next(res);
        if(done) {
          resolve(value) 
        } else {
          Promise
            .resolve(value) // promise.resolve 解析结果并可捕获 Promise 异步错误进行同步处理
            .then(next, (err) => g.throw(err)) // 通过 promise.then 不断调 generator.next 直到 done
        }
      } catch (error) {
        reject(error)
      }
    };
    next();
  });
}

function* g() {
  let res = yield 1;
  const fn = () => Promise.reject(2)
  try {
    res += yield fn();
  } catch (error) {
    console.log("error: " + error);
  }
  return res;
}

// 执行
_async(g)
```

把生成器 g 跟 async 函数版本对比一下，不就是：

- function* 换成 async
- yield 换成 await

```js
async function g() {
  let res = await 1;
  const fn = () => { throw 2 }
  res += await fn();
  return res;
}
```

对比下 Babel 编译生成的代码：

```js
"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function g() {
  return _g.apply(this, arguments);
}

function _g() {
  _g = _asyncToGenerator(function* () {
    let res = yield 1;

    const fn = () => {
      throw 2;
    };

    res += yield fn();
    return res;
  });
  return _g.apply(this, arguments);
}
```

## 参考

- [并发编程模型：事件驱动 vs 线程](https://zhuanlan.zhihu.com/p/32961438)
- [使用 promise 进行错误处理](https://zh.javascript.info/promise-error-handling)
- 阮一峰《深入掌握 ECMAScript 6 异步编程》
- [100 行代码实现 Promises/A+ 规范](https://zhuanlan.zhihu.com/p/83965949)