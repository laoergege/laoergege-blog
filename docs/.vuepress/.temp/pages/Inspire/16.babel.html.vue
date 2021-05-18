<template><blockquote>
<p>本文主要以 babel 7.x 及以上</p>
<p>参考</p>
<p>https://babeljs.io/docs/en/babel-preset-env#usebuiltins</p>
</blockquote>
<h3 id="babel-preset-env"><a class="header-anchor" href="#babel-preset-env">#</a> @babel/preset-env</h3>
<p>根据 target environment 转化语法和作为可选项引入相应的 polyfills</p>
<blockquote>
<p>注意：@babel/preset-env 不会包含低于 Stage 3  的 JavaScript语法建议，因为在 TC39 流程的那个阶段，任何浏览器都还不会去实现它。</p>
</blockquote>
<img src="${images}/image-20210422160623302.png" alt="image-20210422160623302" style="zoom:50%;" />
<h4 id="target"><a class="header-anchor" href="#target">#</a> Target</h4>
<p>该参数决定了我们项目需要适配到的环境，默认情况下，除非设置了 target 或 ignoreBrowserslistConfig 选项，否则 @ babel/preset-env 将使用browserslist配置源。</p>
<img src="${images}/image-20210415211727828.png" alt="image-20210415211727828" style="zoom:50%;" />
<p>如果未设置  target environment，将 transform all ES2015-ES2020 code to be ES5 compatible， babel 7 并不会设置 target 为 default 选项（babel 8 可能会改变）。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"targets"</span><span class="token operator">:</span> <span class="token string">"defaults"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>target environment 查询语法参考 https://github.com/browserslist/browserslist#queries</p>
<h4 id="usebuiltins"><a class="header-anchor" href="#usebuiltins">#</a> useBuiltIns</h4>
<p>&quot;usage&quot; | &quot;entry&quot; | false, defaults to false</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// useBuiltIns: false</span>
<span class="token comment">// 在入口中引入，会把所有的 polyfills 全部打入，造成包体积庞大</span>
<span class="token keyword">import</span><span class="token string">'core-js/stable'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span><span class="token string">'regenerator-runtime/runtime'</span><span class="token punctuation">;</span>


<span class="token comment">// useBuiltIns: usage</span>
<span class="token comment">// 在项目的入口文件处不需要 import 对应的 polyfills 相关库。babel 会根据用户代码的使用情况，并根据 targets 自行注入相关 polyfills。</span>


<span class="token comment">// useBuiltIns: entry</span>
<span class="token comment">// 在项目的入口文件处 import 对应的 polyfills 相关库</span>
<span class="token comment">// 此时 babel 会根据当前 targets 描述，把需要的所有的 polyfills 全部引入到你的入口文件</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="corejs"><a class="header-anchor" href="#corejs">#</a> corejs</h4>
<p>简单讲 corejs-2 不会维护了，所有浏览器新 feature 的 polyfill 都会维护在 corejs-3 上。</p>
<p>By default, only polyfills for stable ECMAScript features are injected</p>
<p>useBuiltIns</p>
<ul>
<li>entry：直接 import 对应的  <a href="https://github.com/zloirock/core-js/tree/master/packages/core-js/proposals" target="_blank" rel="noopener noreferrer">proposal polyfill<OutboundLink/></a></li>
<li>usage：<code>corejs: { version: &quot;3.8&quot;, proposals: true }</code></li>
</ul>
<h4 id="总结"><a class="header-anchor" href="#总结">#</a> 总结</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">"@babel/preset-env"</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token string">"targets"</span><span class="token operator">:</span>
                <span class="token punctuation">{</span>
                    <span class="token string">"chrome"</span><span class="token operator">:</span> <span class="token string">"58"</span>
                    <span class="token comment">// 按自己需要填写</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token string">"useBuiltIns"</span><span class="token operator">:</span> <span class="token string">"entry"</span><span class="token punctuation">,</span>
                <span class="token string">"corejs"</span><span class="token operator">:</span>
                <span class="token punctuation">{</span>
                    <span class="token string">"version"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"proposals"</span><span class="token operator">:</span> <span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token keyword">import</span> <span class="token string">'core-js/stable'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'regenerator-runtime/runtime'</span><span class="token punctuation">;</span>
<span class="token comment">// 入口文件代码</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>这样配置的原因是：targets 下设置我们业务项目所需要支持的最低环境配置，useBuiltIns 设置为 entry 为，将最低环境不支持的所有 polyfill 都引入到入口文件（即使你在你的业务代码中并未使用）。这是一种兼顾最终打包体积和稳妥的方式，为什么说稳妥呢，因为我们很难保证引用的三方包有处理好 polyfill 这些问题。当然如果你能充分保证你的三方依赖 polyfill 处理得当，那么也可以把 useBuiltIns 设置为 usage。</p>
<h3 id="babel-plugin-transform-runtime"><a class="header-anchor" href="#babel-plugin-transform-runtime">#</a> @babel/plugin-transform-runtime</h3>
<p>问题一：还是会有一定程度的代码重复</p>
<p>问题二：针对项目，polyfill 会污染全局可以接受，但是作为 Library 我更希望它不会污染全局环境</p>
<p>需要注意的是，一旦采用 @babel/plugin-transform-runtime, @babel/preset-env 中的 targets 将会失效</p>
</template>