<template><h3 id="数组"><a class="header-anchor" href="#数组">#</a> 数组</h3>
<p>数组（Array）是一种线性表数据结构。它用一组连续的内存空间，来存储一组具有相同类型的数据。</p>
<p>数组特点：<strong>连续的内存空间和相同类型的数据</strong>。正是因为这两个限制，它才有了一个堪称“杀手锏”的特性：“<strong>随机访问</strong>”。但有利就有弊，这两个限制也让数组的很多操作变得非常低效，比如要想在数组中删除、插入一个数据，为了保证连续性，就需要做大量的数据搬移工作。</p>
<p>从数组的内存模型来看，数组下标的本质是内存地址的<strong>偏移</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a[k]_address = base_address + k * type_size
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>计算机<strong>随机访问</strong>数组元素只需要在寻址前，计算一下目标地址，而不需要记录内存地址。</p>
<p>为什么数组的下标是从 0 开始？</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a[k]_address = base_address + (k - 1) * type_size
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果是从 0 开始，寻址计算要多做一次减法指令。更主要原因是历史原因，一开始语言用 0 开始计算数组，后续的语言都效仿，或者一定程度减少学习成本。</p>
<h3 id="增删查"><a class="header-anchor" href="#增删查">#</a> 增删查</h3>
<p>增删：考虑头尾中间，复杂度 O(n)</p>
<p>查：查都是 O(n)，下标随机访问 O(1)</p>
<h3 id="课后题"><a class="header-anchor" href="#课后题">#</a> 课后题</h3>
<ul>
<li>js数组实现不同数据类型？</li>
<li>js数组实现动态扩容？</li>
<li>数组越界处理？</li>
<li>前面我基于数组的原理引出 JVM 的标记清除垃圾回收算法的核心理念。我不知道你是否使用 Java 语言，理解 JVM，如果你熟悉，可以在评论区回顾下你理解的标记清除垃圾回收算法。</li>
</ul>
</template>