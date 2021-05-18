<template><p>CommonJS 中的循环依赖</p>
<p>依赖关系的复杂性带来的主要副作用有就是<strong>循环依赖</strong></p>
<p>简单来说，循环依赖就是模块 A 和模块 B 相互引用，在不同的模块化规范下，对于循环依赖的处理不尽相同</p>
<p>模块 A：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>exports<span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./b'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> 
    bWasLoaded<span class="token operator">:</span> b<span class="token punctuation">.</span>loaded<span class="token punctuation">,</span> 
    loaded<span class="token operator">:</span> <span class="token boolean">true</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>模块 B：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>exports<span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./a'</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> 
    aWasLoaded<span class="token operator">:</span> a<span class="token punctuation">.</span>loaded<span class="token punctuation">,</span> 
    loaded<span class="token operator">:</span> <span class="token boolean">true</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在 index.js 中调用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./b'</span><span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这种情况下，并未出现死循环崩溃的现象，而是输出：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span> bWasLoaded<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> loaded<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> aWasLoaded<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> loaded<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>原因是模块加载过程的缓存机制：Node.js 对模块加载进行了缓存</strong></p>
<p>按照执行顺序，第一次加载 a 时，走到 const b = require('./b')，这样直接进入模块 B 当中，此时模块 B 中 const a = require('./a')，模块 A 已经被缓存，因此模块 B 拿到 A 的 exports 对象</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    aWasLoaded<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    loaded<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>模块 B 加载完成，回到模块 A 中继续执行，模块 A 返回的结果为：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    aWasLoaded<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    loaded<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>Node.js，或者 CommonJS 规范，得益于其缓存机制，在遇见循环引用时，程序并不会崩溃。但这样的机制，仍然会有问题：它只会输出已执行部分，对于未执行部分，export 内容为 undefined。</p>
</blockquote>
<p>ES Module 循环依赖</p>
<p><strong>ES 的设计思想是：尽量静态化，这样在编译时就能确定模块之间的依赖关系。这也是 import 命令一定要出现在模块开头部分的原因。在模块中，import 实际上不会直接执行模块，而是只生成一个引用。在模块内真正引用依赖逻辑时，再到模块里取值</strong>。</p>
<p>ES6 模块有一个独立的静态解析阶段，依赖关系的分析是在那个阶段完成的，最底层的模块第一个执行。</p>
</template>