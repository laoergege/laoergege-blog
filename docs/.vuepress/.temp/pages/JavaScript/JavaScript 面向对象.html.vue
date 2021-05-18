<template><h1 id="javascript-对象"><a class="header-anchor" href="#javascript-对象">#</a> JavaScript 对象</h1>
<h2 id="什么是面向对象"><a class="header-anchor" href="#什么是面向对象">#</a> 什么是面向对象</h2>
<p>从人类成长过程中，我们总是先意识到一个对象，比如先认识到某一个苹果能吃（这里的某一个苹果就是一个对象），继而认识到所有的苹果都可以吃（这里的所有苹果，就是一个类）。</p>
<p>从人类的认知角度来说，对象应该是下列事物之一：</p>
<ul>
<li>一个可以触摸或者可以看见的东西；</li>
<li>人的智力可以理解的东西；</li>
<li>可以指导思考或行动（进行想象或施加动作）的东西。</li>
</ul>
<p>我们在程序系统设计中，把相应的数据和方法封装成一个整体，面向对象编程就是整个程序系统看作一种包含各种独立而又互相通信的对象的思想，也就是将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。是更接近人类思维模式的一种编程范式。</p>
<p>在不同的编程语言中，设计者也利用各种不同的语言特性来抽象<strong>模拟描述</strong>对象，最为成功的流派是使用“类”的方式来。比如 C++、Java 等流行的编程语言，而 JavaScript 则是使用 “原型”，这也正是 JavaScript 面向对象写法与其他主流语言显得格格不如的原因。<strong>但是无论是基于类还是基于原型，都是不同面向对象设计的思路</strong>。</p>
<p><strong>基于类</strong>的编程提倡使用一个关注分类和类之间关系开发模型。在这类语言中，总是先有类，再从类去实例化一个对象。类与类之间又可能会形成继承、组合等关系。类又往往与语言的类型系统整合，形成一定编译时的能力。</p>
<p>与此相对，<strong>基于原型</strong>的编程看起来更为提倡程序员去关注一系列对象实例的行为，而后才去关心如何将这些对象，划分到最近的使用方式相似的原型对象，而不是将它们分成类。</p>
<h2 id="javascript-对象模型设计"><a class="header-anchor" href="#javascript-对象模型设计">#</a> JavaScript 对象模型设计</h2>
<p>一个对象有如下几个特点：</p>
<ol>
<li>对象具有唯一标识性：即使完全相同的两个对象，也并非同一个对象。</li>
<li>对象有状态：对象具有状态，同一对象可能处于不同状态之下。</li>
<li>对象具有行为：即对象的状态，可能因为它的行为产生变迁。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 对象具有唯一标识性</span>
<span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o1 <span class="token operator">==</span> o2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>


<span class="token comment">// 对象的状态和行为</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> 
    d<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>对象的状态、行为在 C++ 中称它们为“成员变量”和“成员函数”，在 Java 中则称它们为“属性”和“方法”，而在 JavaScript 中，将状态和行为统一抽象为“属性”。总的来说，<strong>JavaScript 对象实质是一个无序属性集合、键值对的索引结构</strong>。</p>
<p><strong>在实现了对象基本特征的基础上，JavaScript 中对象独有的特色是：对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力</strong>。</p>
<p>JavaScript 用一组特征（attribute）来描述属性（property），把属性分为两类：数据属性和访问器属性。</p>
<p><strong>数据属性</strong></p>
<ul>
<li>value：就是属性的值。</li>
<li>writable：决定属性能否被赋值。</li>
<li>enumerable：决定 for in 能否枚举该属性。</li>
<li>configurable：决定该属性能否被删除或者改变特征值。</li>
</ul>
<p><strong>访问器（getter/setter）属性</strong></p>
<ul>
<li>getter：函数或 undefined，在取属性值时被调用。</li>
<li>setter：函数或 undefined，在设置属性值时被调用。</li>
<li>enumerable：决定 for in 能否枚举该属性。</li>
<li>configurable：决定该属性能否被删除或者改变特征值。</li>
</ul>
<p>一个对象的属性其中的 writable、enumerable、configurable 都默认为 true</p>
<p>读取属性特征</p>
<p>的对象系统设计虽然特别，但是 JavaScript 提供了完全运行时的对象系统，这使得它可以模仿多数面向对象编程范式（下一节课我们会给你介绍 JavaScript 中两种面向对象编程的范式：基于类和基于原型），所以它也是正统的面向对象语言。</p>
<p>JavaScript 对象的具体设计：具有高度动态性的属性集合。</p>
<p>创建对象</p>
<ul>
<li>工厂模式</li>
<li>构造器模式</li>
<li>原型模式</li>
</ul>
<p>new 操作法</p>
<ol>
<li>创建一个新的对象</li>
<li>将 this 指向该新对象</li>
<li>执行构造函数</li>
<li>返回该新对象</li>
</ol>
<p>原型</p>
<p>你甚至可以理解为什么会有“JavaScript 不是面向对象”这样的说法了。这是由于 JavaScript 的对象设计跟目前主流基于类的面向对象差异非常大。</p>
<p>这样的对象系统设计虽然特别，但是 JavaScript 提供了完全运行时的对象系统，这使得它可以模仿多数面向对象编程范式（下一节课我们会给你介绍 JavaScript 中两种面向对象编程的范式：基于类和基于原型）</p>
<p>JavaScript 是一门面向对象的语言，我想标准中能这样说，正是因为 JavaScript 的高度动态性的对象系统</p>
<p>要想理解 JavaScript 对象，必须清空我们脑子里“基于类的面向对象”相关的知识，回到人类对对象的朴素认知和面向对象的语言无关基础理论，我们就能够理解 JavaScript 面向对象设计的思路。在这篇文章中，我从对象的基本理论出发，和你理清了关于对象的一些基本概念，分析了 JavaScript 对象的设计思路。接下来又从运行时的角度，介绍了 JavaScript 对象的具体设计：具有高度动态性的属性集合。</p>
</template>