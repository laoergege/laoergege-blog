<template><ul>
<li><a href="#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86">代码拆分</a></li>
<li><a href="#optimizationsplitchunks"><code>optimization.splitChunks</code></a>
<ul>
<li><a href="#%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE">默认配置</a></li>
<li><a href="#cachegroups">cacheGroups</a></li>
</ul>
</li>
<li><a href="#%E5%AE%9E%E6%88%98">实战</a>
<ul>
<li><a href="#%E4%BD%93%E7%A7%AF%E5%88%86%E6%9E%90">体积分析</a></li>
</ul>
</li>
</ul>
<h2 id="代码拆分"><a class="header-anchor" href="#代码拆分">#</a> 代码拆分</h2>
<p>代码拆分能够把代码拆分到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码拆分可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。</p>
<p>一个 webpack 应用包含三种类型代码：</p>
<ul>
<li>你或你的团队编写的源码。</li>
<li>你的源码会依赖的任何第三方的 library 或 &quot;vendor&quot; 代码。</li>
<li>webpack 的 runtime 和 manifest，管理所有模块的交互。</li>
</ul>
<p>我们可以从对应角度进行代码拆分，故可分为以下三种方式：</p>
<ul>
<li>Entry Split：使用 entry 配置 webpack 多个为入口，手动地分离代码（如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中，并且不能动态地将核心应用程序逻辑中的代码拆分出来。）。</li>
<li>Bundle Split：使用 SplitChunksPlugin 去重和分离公共代码或者第三方库，因此类代码变动较小，可以做浏览器缓存，加快应用访问速度。</li>
<li>Code Split：使用 <code>import()</code> 语句进行对我们编写的应用程序逻辑代码进行动态拆分。动态加载的好处主要是减小代码打包体积，让程序在运行时按需加载模块，提高应用初始化速度。</li>
</ul>
<p>而 webpack 中对代码进行 Bundle Split，主要是配置 <code>optimization.splitChunks</code> 选项。</p>
<h2 id="optimization-splitchunks"><a class="header-anchor" href="#optimization-splitchunks">#</a> <code>optimization.splitChunks</code></h2>
<p>webpack v4 开始，<code>CommonsChunkPlugin </code> 被移除，<code>optimization.splitChunks</code> 配置选项作为替代，也就是分离模块的功能已作为 webpack 内置功能。</p>
<blockquote>
<p>注意，以下说的“拆分” 是指 Bundle Split，而不是 Code Split</p>
</blockquote>
<h3 id="默认配置"><a class="header-anchor" href="#默认配置">#</a> 默认配置</h3>
<p>webpack 4 内置的 SplitChunksPlugin 的默认配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
    splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
      chunks<span class="token operator">:</span> <span class="token string">'async'</span><span class="token punctuation">,</span>
      minSize<span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
      maxSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      minChunks<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      maxAsyncRequests<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      maxInitialRequests<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      automaticNameDelimiter<span class="token operator">:</span> <span class="token string">'~'</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      cacheGroups<span class="token operator">:</span> <span class="token punctuation">{</span>
        vendors<span class="token operator">:</span> <span class="token punctuation">{</span>
          test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\\/]node_modules[\\/]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          priority<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          minChunks<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          priority<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
          reuseExistingChunk<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>参数说明如下：</p>
<ul>
<li>chunks：表示针对哪些 chunk 做拆分优化
<ul>
<li>async 仅对按需加载的 chunk 优化</li>
<li>initial 仅对初始的 chunk 优化</li>
<li>all 对所有 chunk 优化，意味着初始块和按需加载块可以共享相同的块</li>
</ul>
</li>
<li>minSize：表示抽取出来的文件在压缩前的最小大小，默认为 30000；</li>
<li>maxSize：表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；</li>
<li>minChunks：表示模块被引用次数，默认为1；</li>
<li>maxAsyncRequests：按需加载时的最大并行请求数，默认为 5；</li>
<li>maxInitialRequests：最大的初始化加载次数，默认为 3；</li>
<li>automaticNameDelimiter：抽取出来 chunk 的名字由被抽取出来的源文件名组成且由默认分割符 ~ 间隔各个源文件名(e.g. 由 a、b chunk抽取的 vender chunk 名为 vendors~a~b.js)；</li>
<li>name：抽取出来文件的名字，默认为 true，表示自动生成文件名(使用 chunk 名和 cache key)；如果名称与入口点名称匹配，则将删除入口点。</li>
<li>cacheGroups: 缓存组。（这才是配置的关键）</li>
</ul>
<p>可以通过以下两篇的实验体会 chunks 的意思：</p>
<ul>
<li><a href="https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0" target="_blank" rel="noopener noreferrer">Webpack 4 — Mysterious SplitChunks Plugin<OutboundLink/></a></li>
<li><a href="https://juejin.im/post/5c08fe7d6fb9a04a0d56a702" target="_blank" rel="noopener noreferrer">webapck4 玄妙的 SplitChunks Plugin<OutboundLink/></a></li>
</ul>
<p>通过观察两篇文章时，我们需要注意的一个点是</p>
<blockquote>
<p>当为不同的拆分块分配相同的 <code>name</code> 时，所有的拆分出来的块都会合并成同一个块，这样可能会导致下载无相关的其他代码</p>
</blockquote>
<h3 id="cachegroups"><a class="header-anchor" href="#cachegroups">#</a> cacheGroups</h3>
<p>上面的那么多参数，其实都可以不用管，cacheGroups 才是我们配置的关键。 cacheGroups 可以继承和/或覆盖（ splitChunks 中的任何选项，禁止默认的 cacheGroups 设置为 <code>default: false</code>。并且还有多了如下配置属性：</p>
<ul>
<li>test: 表示要过滤 modules，默认为所有的 modules，可匹配模块路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中；</li>
<li>priority：表示抽取权重，数字越大表示优先级越高。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；</li>
<li>reuseExistingChunk：选项 reuseExistingChunk 告诉 SplitChunks 插件在当前cachingGroup 的现有块中进行额外查找，如果可能的话，尽量不为匹配的模块生成额外的块,复用现有的块。（<a href="https://github.com/webpack/webpack.js.org/issues/2122" target="_blank" rel="noopener noreferrer">example<OutboundLink/></a>）。</li>
<li>enforce：忽略除 test、priority、reuseExistingChunk 其他的限制条件</li>
</ul>
<p>根据以上配置，webpack 会有如下默认代码拆分行为：</p>
<ul>
<li>只针对异步加载的 chunk 优化，因为对初始化 chunk 拆分，必须在 HTML 中引入新拆分的 chunk 才会工作</li>
<li>新产生的 chunk 来自 node_modules 或者被多个地方复用 2 次以上。</li>
<li>新 chunk 需要大于 30kb。</li>
<li>对 chunks 的最大同时请求数小于等于 5。换句话说，如果拆分后导致 bundle 需要同时异步加载的 chunk 数量大于 5 个或更多时，则不会进行拆分，因为增加了请求数，得不偿失。</li>
<li>拆分后需要尽量做到对于入口文件中最大同时请求数控制在 3 个以内。</li>
</ul>
<p>在满足最后两个条件时，决定了 chunk 应越大越好，而不是越多。</p>
<h2 id="实战"><a class="header-anchor" href="#实战">#</a> 实战</h2>
<p>webpack 优化策略主要分为构建速度优化和应用体积优化。webpack 应用体积优化策略有：</p>
<ul>
<li>Tree shaking</li>
<li>代码拆分</li>
<li>源码压缩</li>
</ul>
<p>那么如何对现有应用进行代码拆分，以达到体积优化？</p>
<h3 id="体积分析"><a class="header-anchor" href="#体积分析">#</a> 体积分析</h3>
<p>应用体积分析如下方法有：</p>
<ul>
<li>应用程序的架构及其加载的脚本</li>
<li>linghthouse 对 JavaScript 执行时间进行审计</li>
<li>chromw devtool 的 source 面板输入 <code>show coverage</code></li>
<li><a href="https://www.webpagetest.org/" target="_blank" rel="noopener noreferrer">webpagetest<OutboundLink/></a></li>
</ul>
</template>