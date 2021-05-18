<template><ul>
<li>
<p>单例模式：全局只有唯一实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 如果已存在对应的实例</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token constant">A</span><span class="token punctuation">.</span>_singleton <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token constant">A</span><span class="token punctuation">.</span>_singleton
   <span class="token punctuation">}</span>
   <span class="token comment">//否则正常创建实例</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
   
   <span class="token comment">// 缓存</span>
   <span class="token constant">A</span><span class="token punctuation">.</span>_singleton <span class="token operator">=</span><span class="token keyword">this</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">var</span> a2<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a1 <span class="token operator">===</span> a2<span class="token punctuation">)</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li>
</ul>
</template>