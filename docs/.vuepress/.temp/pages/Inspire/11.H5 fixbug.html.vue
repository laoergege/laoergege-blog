<template><p>微前端架构设计</p>
<ul>
<li>各个子应用间的调度实现以及其运行态的维护
<ul>
<li>CSS  隔离中常见的命名空间前缀、Shadow DOM、 <a href="https://github.com/umijs/qiankun/blob/master/src/sandbox/patchers/css.ts" target="_blank" rel="noopener noreferrer">乾坤 sandbox css<OutboundLink/></a> 的运行时动态增删等</li>
<li>JavaScript 的沙箱隔离</li>
</ul>
</li>
</ul>
<p>在微前端架构中，JavaScript 沙箱隔离需要解决如下几个问题：</p>
<ol>
<li>挂在 window 上的全局方法/变量（如 setTimeout、滚动等全局事件监听等）在子应用切换时的清理和还原。</li>
<li>Cookie、LocalStorage 等的读写安全策略限制。</li>
<li>各子应用独立路由的实现。</li>
<li>多个微应用共存时相互独立的实现。</li>
</ol>
<p>在 <a href="https://github.com/umijs/qiankun" target="_blank" rel="noopener noreferrer">乾坤<OutboundLink/></a> 架构设计中，关于沙箱有两个入口文件需要关注，一个是 <a href="https://github.com/umijs/qiankun/blob/master/src/sandbox/proxySandbox.ts" target="_blank" rel="noopener noreferrer">proxySandbox.ts<OutboundLink/></a>，另一个是 <a href="https://github.com/umijs/qiankun/blob/master/src/sandbox/snapshotSandbox.ts" target="_blank" rel="noopener noreferrer">snapshotSandbox.ts<OutboundLink/></a>，他们分别基于 Proxy 实现代理了 window 上常用的常量和方法以及不支持 Proxy 时降级通过快照实现备份还原。结合其相关开源文章分享，简单总结下其实现思路：起初版本使用了<strong>快照沙箱</strong>的概念，模拟 ES6 的 Proxy API，通过代理劫持 window ，当子应用修改或使用 window 上的属性或方法时，把对应的操作记录下来，每次子应用挂载/卸载时生成快照，当再次从外部切换到当前子应用时，再从记录的快照中恢复，而后来为了兼容多个子应用共存的情况，又基于 Proxy 实现了代理所有全局性的常量和方法接口，为每个子应用构造了独立的运行环境。</p>
</template>