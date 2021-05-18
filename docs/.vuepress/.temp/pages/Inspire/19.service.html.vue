<template><p>有一个建议，就是在vue生成的传统目录里我觉得 api 这层是可以删除的。直接升级 service 层。</p>
<p>自从 vue reactive api 抽出后，我们就可以不再使用 vuex 去做全局数据管理</p>
<p>我一直挺反感类 redux 之类，需要写一堆模板代码。vue3 后，个人感觉 vuex 现存的意义也就是大项目下对 全局数据 做一套统一规范管理。</p>
<p>我们现在 state + api =&gt; service</p>
<p>service 面向后端接口服务，service 可以复用在不同端上，通过 <em>tree-shaking</em> 去删除不需要的代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">"http"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Ref<span class="token punctuation">,</span> computed<span class="token punctuation">}</span> <span class="token keyword">from</span> "vue<span class="token punctuation">;</span>

<span class="token comment">// commonjs 规范下，user 会被单例缓存</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">Ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token function-variable function">setUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    user<span class="token punctuation">.</span>value <span class="token operator">=</span> user
<span class="token punctuation">}</span>

<span class="token keyword">export</span> user <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> user
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>

<span class="token keyword">import</span> userService <span class="token keyword">from</span> <span class="token string">"user.service.ts"</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    userService<span class="token punctuation">.</span><span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 直接使用 user 响应数据源</span>
        user<span class="token operator">:</span> userService<span class="token punctuation">.</span>user
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></template>