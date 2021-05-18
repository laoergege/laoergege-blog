<template><h3 id="题目"><a class="header-anchor" href="#题目">#</a> 题目</h3>
<p>https://leetcode-cn.com/problems/swap-nodes-in-pairs/</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">let</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
       head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
       next<span class="token punctuation">.</span>next <span class="token operator">=</span> head

       <span class="token keyword">return</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="总结"><a class="header-anchor" href="#总结">#</a> 总结</h3>
<p>算法：递归</p>
<p>难点：递归问题归纳（需加强）</p>
<p><strong>递归也是一种循坏，循环体 放入到 if 体内 防止循环体依赖项 空指针</strong></p>
</template>