<template><h1 id="javascript-微任务与页面事件循环"><a class="header-anchor" href="#javascript-微任务与页面事件循环">#</a> JavaScript 微任务与页面事件循环</h1>
<blockquote>
<p>阅读参考</p>
<ul>
<li>《重学前端》</li>
<li>《浏览器工作原理与实践》</li>
</ul>
</blockquote>
<p>首先要阐明一点：JavaScript 语言规范并没有规定事件循环相关，事件循环更多是跟其宿主环境相关，比如浏览器和 Node。</p>
<p>我们都知道 JavaScript 是单线程语言，这也就说明 JavaScript 的代码只能在一条线程上执行完成，JavaScript 语言不提供多线程异步执行代码能力。</p>
<p>JavaScript 的出现主要是为了服务浏览器，作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。</p>
<p>而浏览器渲染页面既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件等。这些任务又是互斥、又是有先后依赖顺序，比如处理布局时需要读取 DOM ，而 JavaScript 又是可以操作 DOM，这就可能导致处理布局时获取的 DOM 是脏的；而 JavaScript 多线程编程同样会导致对 DOM 资源竞争从而引发的错误，这些情况是要避免的，所以页面的渲染都由一条线程完成，即主线程。</p>
<p>执行一些简单的任务，早期 JavaScript 本身还没有异步执行代码的能力，这也就意味着，宿主环境传递给 JavaScript 引擎一段代码，引擎就把这个代码任务直接顺次执行了就完事，这也符合浏览器早期对 JavaScript 的简单要求（），单线程编程模型。这就决定 JavaScript 是单线程语言、JavaScript 的代码只能在一条线程上执行完成，JavaScript 语言不提供多线程异步执行代码能力。</p>
<p>除了因为 JavaScript 单线编程更简单、容易上手外，更主要的是因为浏览器渲染一个页面既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件</p>
<p>浏览器中每个渲染进程都有一个主线程，并且主线程非常繁忙，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件，浏览器使用消息队列和事件循环系统来统筹调度这些任务。</p>
<p>我们使用宿主环境提供的异步 API （如 settimeout、setinterval 等）去注册回调任务到事件循环系统的任务队列中。</p>
<img src="${images}/1*iHhUyO4DliDwa6x_cO5E3A.gif" alt="img"  />
<p>每次的执行一次循环过程，就相当从消息队列取一次任务到回调栈中进行完成。</p>
<img src="${images}/01e40e30db7e8a91eb70ce02fd8a6985.png" alt="img" style="zoom: 50%;" />
<p>在 ES5 之后，JavaScript 引入了 Promise，这样，不需要浏览器的安排，JavaScript 引擎本身也可以发起异步任务了。由于我们这里主要讲 JavaScript 语言，那么采纳 JSC 引擎的术语，我们把宿主发起的任务称为<strong>宏任务</strong>，把 JavaScript 引擎发起的任务称为<strong>微任务</strong>。</p>
<h2 id="微任务-micro-task"><a class="header-anchor" href="#微任务-micro-task">#</a> 微任务（micro task）</h2>
<p>在宏观任务中，JavaScript 的 Promise 还会产生异步代码，JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列：</p>
<p>宏任务中产生的微任务会插入到微任务队尾，宏任务完成后清空微任务队列</p>
<img src="${images}/16f70a9a51a65d5302166b0d78414d65.jpg" alt="img" style="zoom:50%;" />
<p>Promise</p>
<p>MutationObserver, DOM/BOM API 中新加入的 API 大多数都是建立在 Promise 上的，而且新的前端框架也使用了大量的 Promise</p>
<p>generator/iterator</p>
<p>generator/iterator 并非异步代码，只是在缺少 async/await 的时候，一些框架（最著名的要数 co）使用这样的特性来模拟 async/await。</p>
<p>async/await</p>
</template>