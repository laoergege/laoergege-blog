<template><blockquote>
<p>参考</p>
<p><a href="https://zh.javascript.info/promise-error-handling" target="_blank" rel="noopener noreferrer">使用 promise 进行错误处理<OutboundLink/></a></p>
<p><a href="https://zh.javascript.info/try-catch" target="_blank" rel="noopener noreferrer">错误处理，&quot;try..catch&quot;<OutboundLink/></a></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Whoops!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>alert<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li>
<p><code>try..catch</code> 结构只能「捕抓」到同步的错误</p>
</li>
<li>
<p>Promise 的执行者（executor）和 promise 的处理程序（handler）周围有一个“隐式的 <code>try..catch</code>”，但是该函数本身要稍后才才抛出错误，这时引擎已经离开了 <code>try..catch</code> 结构</p>
</li>
</ol>
<p>错误处理几种语法结构</p>
<ul>
<li>
<p>try...catch</p>
</li>
<li>
<p>try..catch...finally</p>
</li>
<li>
<p>try..finally</p>
</li>
</ul>
<p><strong>finally</strong> 和 <strong>return</strong></p>
<p><code>finally</code> 子句适用于 <code>try..catch</code> 的 <strong>任何</strong> 出口。这包括显式的 <code>return</code>。在下面这个例子中，在 <code>try</code> 中有一个 <code>return</code>。在这种情况下，<code>finally</code> 会在控制转向外部代码前被执行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span> <span class="token string">'finally'</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 先执行 finally 中的 alert，然后执行这个 alert</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>try..finally</strong></p>
<p>没有 <code>catch</code> 子句的 <code>try..finally</code> 结构也很有用。当我们不想在这儿处理 error（让它们 fall through），但是需要确保我们启动的处理需要被完成。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 开始执行需要被完成的操作（比如测量）</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token comment">// 完成前面我们需要完成的那件事儿，即使 try 中的执行失败了</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>上面的代码中，由于没有 <code>catch</code>，所以 <code>try</code> 中的 error 总是会使代码执行跳转至函数 <code>func()</code> 外。但是，在跳出之前需要执行 <code>finally</code> 中的代码。</p>
<p><strong>错误抛出</strong></p>
<p>再次抛出（rethrowing）是一种错误处理的重要模式：<code>catch</code> 块通常期望并知道如何处理特定的 error 类型，因此它应该再次抛出它不知道的 error。</p>
<p>使用 <code>throw</code> 操作符来生成自定义的 error。从技术上讲，<code>throw</code> 的参数可以是任何东西，但通常是继承自内建的 <code>Error</code> 类的 error 对象</p>
<p><strong>全局 catch</strong></p>
<p>即使我们没有 <code>try..catch</code>，大多数执行环境也允许我们设置“全局”错误处理程序来捕获“掉出（fall out）”的 error。在浏览器中，就是 <code>window.onerror</code>。</p>
</template>