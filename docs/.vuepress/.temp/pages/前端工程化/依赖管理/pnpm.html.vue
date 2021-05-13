<template><blockquote>
<p>推荐阅读</p>
<p><a href="https://mp.weixin.qq.com/s/1Wm-iYFBgJXMg_7SgWktXA" target="_blank" rel="noopener noreferrer">关于现代包管理器的深度思考——为什么现在我更推荐 pnpm 而不是 npm/yarn?<OutboundLink/></a></p>
<p><a href="https://pnpm.js.org/blog/2020/05/27/flat-node-modules-is-not-the-only-way/" target="_blank" rel="noopener noreferrer">Flat node_modules is not the only way<OutboundLink/></a></p>
<p><a href="https://www.kochan.io/nodejs/why-should-we-use-pnpm.html#disqus_thread" target="_blank" rel="noopener noreferrer">Why should we use pnpm?<OutboundLink/></a></p>
<p><a href="https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html" target="_blank" rel="noopener noreferrer">pnpm's strictness helps to avoid silly bugs<OutboundLink/></a></p>
</blockquote>
<ul>
<li>
<p>特点</p>
<ul>
<li>
<p>安装快，磁盘空间利用效率高</p>
<ul>
<li>不会重复安装同一个包</li>
<li>版本管理单位为 单文件</li>
<li>基于内容寻址</li>
</ul>
</li>
<li>
<p>支持 monorepo</p>
</li>
<li>
<p>安全性高</p>
<ul>
<li>
<p>校验包完整性</p>
</li>
<li>
<p>npm/yarn 依赖管理</p>
<ul>
<li>npm 3 之前 <code>嵌套结构</code>
<ul>
<li>过度嵌套</li>
<li>重复安装、占用空间</li>
</ul>
</li>
<li>npm 3 之后及 yarn <code>扁平化结构</code>
<ul>
<li>依赖结构的<strong>不确定性</strong>，依据声明顺序</li>
<li>扁平化算法本身的<strong>复杂性</strong>很高，耗时较长</li>
<li>项目中仍然可以<strong>非法访问</strong>没有声明过依赖的包，因为 Node Module Resolution</li>
</ul>
</li>
</ul>
</li>
<li>
<p>pnpm 独创的依赖管理</p>
<ul>
<li>
<p>node_modules 只存在 package 上声明的依赖，保证结构对应，清晰明了；</p>
<p>而且你的代码就只能加载到项目 node_modules 里的依赖，保证安全性、严谨性</p>
<img src="${images}/image-20210324174810561.png" alt="image-20210324174810561" style="zoom:50%;" />
<p>但点开 qiankun 并没有发 node_modules，那 qiankun 的依赖呢？</p>
<img src="${images}/image-20210324220122020.png" alt="image-20210324220122020" style="zoom:50%;" />
</li>
<li>
<p>qiankun 只是个软链接，映射到 .pnpm/qiankun@2.4.0</p>
<img src="${images}/image-20210327112011578.png" alt="image-20210327112011578" style="zoom:50%;" />
<p>pnpm 会把 qiankun 及其依赖平级放在 node_modules 目录下，这种设计巧妙得利用并兼容 Node Module Resolution 机制使用 qiankun 能够访问其依赖，而它的依赖也同样是软链接，映射到 .pnpm 下的包</p>
<img src="${images}/image-20210327112333206.png" alt="image-20210327112333206" style="zoom:50%;" />
<blockquote>
<p><code>.pnpm/</code>会以平铺的形式储存着所有的包，每个包都可以在这种命名模式的文件夹中被找到：</p>
<p><code>.pnpm/&lt;name&gt;@&lt;version&gt;/node_modules/&lt;name&gt;</code></p>
<p>并且每个包及其依赖以平级形式放在 node_modules 下,  如</p>
<div class="language-txt ext-txt line-numbers-mode"><pre v-pre class="language-txt"><code>qiankun@2.4.0
└── node_modules
    ├── @babel
    │   └── runtime -&gt; ../../../@babel/runtime@7.13.10/node_modules/@babel/runtime
    ├── import-html-entry -&gt; ../../import-html-entry@1.11.1/node_modules/import-html-entry
    ├── lodash -&gt; ../../lodash@4.17.21/node_modules/lodash
    ├── qiankun
    │   ├── LICENSE
    │   ├── README.md
    │   ├── dist
    │   ├── es
    │   ├── lib
    │   └── package.json
    ├── single-spa -&gt; ../../single-spa@5.8.1/node_modules/single-spa
    └── tslib -&gt; ../../tslib@1.14.1/node_modules/tslib
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></blockquote>
<blockquote>
<p>pnpm 这个评级的结构与 npm v3,4,5,6 或 yarn v1 不同的是，它对包之间进行相互隔离。</p>
<img src="${images}/image-20210324223321353.png" alt="image-20210324223321353" style="zoom:50%;" />
<p>因为中间多了个 .pnpm 阻碍了 Node Module Resolution 机制</p>
<ol>
<li>它完全适配了 Node.js。</li>
<li>包与包的依赖很好的被分组在一起。</li>
</ol>
</blockquote>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Monorepo 操作</p>
<ul>
<li>依赖操作
<ul>
<li>root
<ul>
<li>add 默认只能在 workspace 中，<code>-W</code> 可作用于 root workspace</li>
</ul>
</li>
<li>所有子项/单个子项目 <code>--filter xxx</code>
<ul>
<li>pnpm add qiankun --filter=&quot;{projects}&quot; 对所有</li>
</ul>
</li>
<li>默认提升全局 <code>hoist: true</code></li>
</ul>
</li>
<li>任务操作</li>
</ul>
</li>
</ul>
</template>