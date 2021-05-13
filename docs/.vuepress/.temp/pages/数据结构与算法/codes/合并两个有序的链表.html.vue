<template><h3 id="题目"><a class="header-anchor" href="#题目">#</a> 题目</h3>
<p>https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur1 <span class="token operator">=</span> l1
    <span class="token keyword">let</span> cur2 <span class="token operator">=</span> l2
    <span class="token keyword">let</span> head <span class="token operator">=</span> res <span class="token operator">=</span> <span class="token punctuation">{</span>
        next<span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span>cur1 <span class="token operator">&amp;&amp;</span> cur2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> cur2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> cur1<span class="token punctuation">;</span>
            cur1 <span class="token operator">=</span> cur1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> cur2<span class="token punctuation">;</span>
            cur2 <span class="token operator">=</span> cur2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      	head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>cur1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> cur1
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>cur2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> cur2
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="总结"><a class="header-anchor" href="#总结">#</a> 总结</h3>
<img src="${images}/550cc70957ea76ec0c04dfe4b5623a216b5fdfc7917c800a600b46da0a6aee50-Picture17.png" alt="Picture17.png" style="zoom:48%;" />
<p>算法：遍历、双指针交替遍历</p>
<p>建议：空头链表，简化边界条件</p>
</template>