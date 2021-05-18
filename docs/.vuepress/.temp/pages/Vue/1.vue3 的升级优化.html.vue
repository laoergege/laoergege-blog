<template><ul>
<li>
<p>项目管理</p>
<ul>
<li><a href="https://github.com/vuejs/rfcs" target="_blank" rel="noopener noreferrer">RFC<OutboundLink/></a></li>
</ul>
</li>
<li>
<p>源码</p>
<ul>
<li>更好的代码管理方式：yarn monorepo 方案</li>
<li>TypeScript</li>
<li><em><a href="https://api-extractor.com/" target="_blank" rel="noopener noreferrer">API Extractor<OutboundLink/></a></em></li>
</ul>
</li>
<li>
<p>性能优化</p>
<ul>
<li>
<p>源码体积优化</p>
<ul>
<li>移除一些冷门的 feature（比如 filter、inline-template 等）</li>
<li><em>tree-shaking</em></li>
</ul>
</li>
<li>
<p>数据劫持优化 Object.defineProperty =&gt; proxy</p>
<ul>
<li>vue2 深度对象无脑递归</li>
<li>proxy 代理整个对象，真正访问到的内部对象才会变成响应式</li>
</ul>
</li>
<li>
<p>编译优化（通过在编译阶段优化编译的结果，来实现运行时 patch 过程的优化）</p>
<img src="${images}/CgqCHl8Cuf2AZw70AAEFU2EMA50521.png" alt="img" style="zoom:50%;" />
<ul>
<li><em>通过编译阶段对静态模板的分析，编译生成了 Block tree。Block tree 是一个将模版基于动态节点指令切割的嵌套区块，每个区块内部的节点结构是固定的，而且每个区块只需要以一个 Array 来追踪自身包含的动态节点</em></li>
</ul>
</li>
<li>
<p>Slot 的编译优化</p>
</li>
<li>
<p>事件侦听函数的缓存优化</p>
</li>
<li>
<p>diff 算法</p>
</li>
</ul>
</li>
<li>
<p>语法 API 优化：Composition API</p>
<ul>
<li>
<p>优化逻辑组织（关注点聚焦）</p>
<img src="${images}/CgqCHl8CoI-ACOXEAAM5NZiddQs980.png" alt="img" style="zoom:50%;" />
</li>
<li>
<p>优化逻辑复用</p>
</li>
</ul>
</li>
</ul>
</template>