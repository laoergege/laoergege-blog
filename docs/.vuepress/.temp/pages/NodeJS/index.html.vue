<template><h2 id="nodejs"><a class="header-anchor" href="#nodejs">#</a> NodeJS</h2>
<ul>
<li>简介：NodeJS 为我们提供了一个无需依赖浏览器、能够直接与操作系统进行交互的 JavaScript 代码运行环境</li>
<li>特点
<ul>
<li>单线程
<ul>
<li>减少了线程切换开销</li>
<li>基于 <strong>V8 引擎</strong> 的 JavaScript 运行环境
<ul>
<li>JavaScript 是一个单线程的语言，相比多线程编程，简化了编程模式</li>
<li>采用用事件驱动、异步回调的模式</li>
</ul>
</li>
</ul>
</li>
<li>使用 <strong>事件驱动</strong>，<strong>非阻塞式 I/O</strong> 模型，轻量又高效</li>
</ul>
</li>
<li>NodeJS 架构</li>
<li>NodeJS 核心知识
<ul>
<li>事件循环机制</li>
</ul>
</li>
<li><RouterLink to="/NodeJS/%E5%AE%89%E8%A3%85%E5%8F%8A%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html">安装及基本使用</RouterLink></li>
<li>异步编程
<ul>
<li>Callbacks</li>
<li>Promises</li>
<li>Generator</li>
<li>Async and Await</li>
<li><RouterLink to="/NodeJS/Node%20Event%20Loop.html">Node Event Loop</RouterLink>
<ul>
<li>timers（setTimeout、setIntervel）</li>
<li>setImmediate</li>
<li>nextTick</li>
</ul>
</li>
</ul>
</li>
<li>模块机制
<ul>
<li>CommonJS 模块规范</li>
<li>模块解析机制</li>
</ul>
</li>
<li>npm 包管理
<ul>
<li>npm 配置及切换 npm 源</li>
<li>package.json</li>
<li>npm install 及 lock</li>
<li>npm script/npx</li>
</ul>
</li>
<li>调试及日志
<ul>
<li>console.log 只能打印不超过三层嵌套对象
<ul>
<li>JSON.stringify(obj, null, 2)</li>
</ul>
</li>
</ul>
</li>
<li>Node 全局对象
<ul>
<li>process、buffer、__filename 和 __dirname</li>
<li>console 和 setTimeout 之类</li>
<li>ECMAScript 语言定义的全局对象，如 Date</li>
</ul>
</li>
<li>Node 标准库
<ul>
<li>readline</li>
<li>console</li>
<li>worker</li>
<li>events
<ul>
<li>NodeJS Event Emitter是NodeJS的核心API，它使您可以将侦听器功能附加到特定事件，一旦事件触发，该事件将被调用。此行为看起来像异步的，因为事件处理程序通常在其最初注册为事件处理程序的时间之后才调用。但是 Event Emitter 是 Node 观察者模式的内置实现，Node 不会在事件循环队列中安排任何事件，一旦事件触发，它将在调用栈上同步的执行监听器，观察者模式能够解耦代码，使代码可读性更强</li>
</ul>
</li>
</ul>
</li>
<li>操作系统相关知识
<ul>
<li>异步 IO</li>
<li>进程与线程</li>
<li>中断机制</li>
<li>进程管理
<ul>
<li>进程通信
<ul>
<li>信号</li>
</ul>
</li>
</ul>
</li>
<li>RPC 调用</li>
</ul>
</li>
<li>使用场景
<ul>
<li>集成工作流
<ul>
<li>Node CLI</li>
<li>构建工具，例如 webpack</li>
</ul>
</li>
<li>客户端应用</li>
<li>Web 服务
<ul>
<li>BFF
<ul>
<li>对客户端提供 HTTP 服务</li>
<li>使用后端 RPC 服务</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</template>