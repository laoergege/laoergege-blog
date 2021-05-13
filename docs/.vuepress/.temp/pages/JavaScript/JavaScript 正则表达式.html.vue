<template><h1 id="javascript-正则表达式"><a class="header-anchor" href="#javascript-正则表达式">#</a> JavaScript 正则表达式</h1>
<h2 id="目录"><a class="header-anchor" href="#目录">#</a> 目录</h2>
<ul>
<li><a href="#javascript-%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F">JavaScript 正则表达式</a>
<ul>
<li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li>
<li><a href="#%E6%AD%A3%E5%88%99%E6%98%AF%E5%8C%B9%E9%85%8D%E6%A8%A1%E5%BC%8F%E8%A6%81%E4%B9%88%E5%8C%B9%E9%85%8D%E5%AD%97%E7%AC%A6%E8%A6%81%E4%B9%88%E5%8C%B9%E9%85%8D%E4%BD%8D%E7%BD%AE">正则是匹配模式，要么匹配字符，要么匹配位置</a>
<ul>
<li><a href="#%E5%AD%97%E7%AC%A6%E7%B1%BB">字符类</a>
<ul>
<li><a href="#%E4%BF%AE%E9%A5%B0%E7%AC%A6-s-%E4%B8%8E%E5%AD%97%E7%AC%A6%E7%B1%BB">修饰符 s 与字符类</a></li>
<li><a href="#unicode%E4%BF%AE%E9%A5%B0%E7%AC%A6-u-%E5%92%8C-class-p">Unicode：修饰符 “u” 和 class \p{...}</a></li>
</ul>
</li>
<li><a href="#%E9%9B%86%E5%90%88%E5%92%8C%E8%8C%83%E5%9B%B4-">集合和范围 [...]</a></li>
<li><a href="#%E9%87%8F%E8%AF%8D">量词</a>
<ul>
<li><a href="#%E8%B4%AA%E5%A9%AA%E5%8C%B9%E9%85%8D%E5%92%8C%E6%83%B0%E6%80%A7%E5%8C%B9%E9%85%8D">贪婪匹配和惰性匹配</a></li>
</ul>
</li>
<li><a href="#%E9%80%89%E6%8B%A9%E7%AC%A6">选择符（|）</a></li>
<li><a href="#%E9%94%9A%E7%AC%A6-">锚符 ^、$</a>
<ul>
<li><a href="#%E5%A4%9A%E8%A1%8C%E6%A8%A1%E5%BC%8F-m-%E4%B8%8E-">多行模式 m 与 ^、$</a></li>
<li><a href="#%E9%94%9A%E7%AC%A6--%E5%AF%B9%E6%AF%94-n">锚符 ^$ 对比 \n</a></li>
</ul>
</li>
<li><a href="#%E5%8D%95%E8%AF%8D%E8%BE%B9%E7%95%8C-b-%E5%92%8C-b">单词边界 \b 和 \B</a></li>
<li><a href="#%E5%89%8D%E7%9E%BB%E6%96%AD%E8%A8%80%E5%92%8C%E5%90%8E%E7%9E%BB%E6%96%AD%E8%A8%80">前瞻断言和后瞻断言</a></li>
</ul>
</li>
<li><a href="#%E5%88%86%E7%BB%84">分组</a>
<ul>
<li><a href="#%E5%88%86%E7%BB%84%E5%8C%B9%E9%85%8D">分组匹配</a></li>
<li><a href="#%E5%B5%8C%E5%A5%97%E5%88%86%E7%BB%84%E5%8C%B9%E9%85%8D">嵌套分组匹配</a></li>
<li><a href="#%E5%88%86%E7%BB%84%E5%91%BD%E5%90%8D%E5%8F%8A%E5%BC%95%E7%94%A8">分组命名及引用</a></li>
<li><a href="#%E6%8E%92%E9%99%A4%E6%8D%95%E8%8E%B7%E5%88%86%E7%BB%84">排除捕获分组</a></li>
</ul>
</li>
<li><a href="#%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%9B%9E%E6%BA%AF%E6%B3%95%E5%8E%9F%E7%90%86">正则表达式回溯法原理</a></li>
<li><a href="#%E7%BB%83%E4%B9%A0%E9%A2%98">练习题</a>
<ul>
<li><a href="#%E5%B0%86%E6%AF%8F%E4%B8%AA%E5%8D%95%E8%AF%8D%E7%9A%84%E9%A6%96%E5%AD%97%E6%AF%8D%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%A4%A7%E5%86%99">将每个单词的首字母转换为大写</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2-trim-%E6%96%B9%E6%B3%95%E6%A8%A1%E6%8B%9F">字符串 trim 方法模拟</a></li>
<li><a href="#%E5%8C%B9%E9%85%8D%E6%88%90%E5%AF%B9%E6%A0%87%E7%AD%BE">匹配成对标签</a></li>
<li><a href="#%E8%8E%B7%E5%8F%96-url-pathname">获取 URL pathname</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<p>参考阅读</p>
<ul>
<li><a href="https://link.zhihu.com/?target=https%3A//github.com/qdlaoyao/js-regex-mini-book" target="_blank" rel="noopener noreferrer">JavaScript 正则表达式迷你书<OutboundLink/></a></li>
<li><a href="https://zh.javascript.info/regular-expressions" target="_blank" rel="noopener noreferrer">正则表达式<OutboundLink/></a></li>
</ul>
<p>正则表达式是搜索和替换字符串的一种强大方式。</p>
<p>正则表达式（可叫作“regexp”或者“reg”）包含<strong>模式</strong>和可选的<strong>修饰符</strong>。</p>
<p>创建 JavaScript 正则表达式的方式有：</p>
<ul>
<li>RegExp 实例 <code>regexp = new RegExp(&quot;pattern&quot;, &quot;flags&quot;);</code></li>
<li>字面量 <code>regexp = /pattern/flag;</code></li>
</ul>
<blockquote>
<p>相比正则字面量的方式 <code>new RegExp</code> 允许从字符串中<strong>动态地构造模式</strong></p>
</blockquote>
<p>修饰符有</p>
<ul>
<li>i 不区分大小写</li>
<li>g 全局搜索所有匹配项</li>
<li>m 多行模式</li>
<li>u 开启完整的 unicode 支持</li>
<li>s . 符号表示任意字符</li>
<li>y 粘滞模式</li>
</ul>
<h2 id="正则是匹配模式-要么匹配字符-要么匹配位置"><a class="header-anchor" href="#正则是匹配模式-要么匹配字符-要么匹配位置">#</a> 正则是匹配模式，要么匹配字符，要么匹配位置</h2>
<p>匹配字符的模式有</p>
<ul>
<li>普通字符</li>
<li>字符类</li>
<li>集合和范围</li>
</ul>
<p>无论是字符类还是集合、范围的模式都只能表示一个字符，<strong>量词</strong>用来形容我们所需要的数量</p>
<p>集合和范围模式赋予匹配单个字符能够有多种模式选择，但如果想匹配多个字符多种模式，可用选择符OR(|)</p>
<p>匹配位置的模式有锚符：</p>
<ul>
<li>^、$</li>
<li>\b、\B</li>
<li>x(?=y)、x(?!y)、(?&lt;=y)x、(?&lt;!y)x</li>
</ul>
<h3 id="字符类"><a class="header-anchor" href="#字符类">#</a> 字符类</h3>
<ul>
<li>\d 数字0到9</li>
<li>\D 非 \d</li>
<li>\s 空格、水平制表符\t、垂直制表符\v、换行符\n、换页页符\f、回车符\r</li>
<li>\S 非 \s</li>
<li>\w 拉丁字母、数字、下划线</li>
<li>\W 非 \w</li>
<li>.  任意字符，除 \n</li>
<li>\p{...} 配合修饰符u，表示 unicode 字符</li>
</ul>
<h4 id="修饰符-s-与字符类"><a class="header-anchor" href="#修饰符-s-与字符类">#</a> 修饰符 s 与字符类</h4>
<p>默认情况下字符类 <code>.</code> 不匹配换行符<code>\n</code>，但修饰符 <strong>s</strong> 下的模式的字符类 <code>.</code> 能够匹配换行符<code>\n</code>，但是修饰符 s 在兼容性不是特别高，详见 <a href="https://caniuse.com/#search=dotall" target="_blank" rel="noopener noreferrer">https://caniuse.com/#search=dotall<OutboundLink/></a>，我们可以通过 <code>[\s\S]</code> 模式表示任意字符，<code>\s</code> 和 <code>\S</code> 相冲，两者用集合的方式结合起来，就表示全部，类似的还有 <code>[\d\D]</code>、<code>[^]</code> 等</p>
<h4 id="unicode-修饰符-u-和-class-p"><a class="header-anchor" href="#unicode-修饰符-u-和-class-p">#</a> Unicode：修饰符 “u” 和 class \p{...}</h4>
<p>TODO 未完成，先占个坑位</p>
<h3 id="集合和范围"><a class="header-anchor" href="#集合和范围">#</a> 集合和范围 [...]</h3>
<ul>
<li>集合，如 [eao] 意味着查找在 3 个字符 'a'、'e' 或者 `‘o’ 中的任意一个</li>
<li>范围，如 [0-5] 表示从 0 到 5 的数字，[\d] 表示 0 到 9 数字</li>
<li>排除范围 [^…]，如 [^]</li>
<li>[...] 除了在方括号中有特殊含义的字符外，其它所有特殊字符都是都不需要添加反斜杠的，如 [-().^+] 会查找 -().^+ 的其中任意一个字符</li>
</ul>
<h3 id="量词"><a class="header-anchor" href="#量词">#</a> 量词</h3>
<ul>
<li>+ 至少1次</li>
<li>* 至少0次</li>
<li>? 一个或零个</li>
<li>{n,m} 如 {5} 5次 {3,5} 3到5次 {3,} 大于等于3次</li>
</ul>
<h4 id="贪婪匹配和惰性匹配"><a class="header-anchor" href="#贪婪匹配和惰性匹配">#</a> 贪婪匹配和惰性匹配</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'a "witch" and her "broom" is one'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">".+"</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token comment">// "witch" and her "broom"</span>
<span class="token string">'a "witch" and her "broom" is one'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">".+?"</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span> <span class="token comment">// "witch"、"broom"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>量词有两种工作模式</p>
<p><strong>在贪婪模式下（默认情况下），量词都会尽可能地重复多次</strong>。</p>
<p>惰性模式(量词之后添加一个问号 '?')只有在模式的剩余部分无法在给定位置匹配时，正则表达式引擎才会增加重复次数。</p>
<blockquote>
<p>参考 <a href="https://zh.javascript.info/regexp-greedy-and-lazy" target="_blank" rel="noopener noreferrer">贪婪量词和惰性量词<OutboundLink/></a></p>
</blockquote>
<h3 id="选择符"><a class="header-anchor" href="#选择符">#</a> 选择符（|）</h3>
<p>选择符号<code>(|)</code>作用并非在字符级别生效，而是在<strong>表达式级别</strong>。</p>
<ul>
<li>A|B|C 意思是命中 A、B 或 C 其一均可</li>
<li>gra|ey 匹配 “gra” or “ey”</li>
<li>gr(a|e)y 严格等同 gr[ae]y</li>
</ul>
<h3 id="锚符-、"><a class="header-anchor" href="#锚符-、">#</a> 锚符 ^、$</h3>
<p>符号 <code>^</code> 匹配文本开头，而美元符号 <code>$</code> 则匹配文本末尾</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">"it's fleece was white as snow"</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">snow$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="多行模式-m-与-、"><a class="header-anchor" href="#多行模式-m-与-、">#</a> 多行模式 m 与 ^、$</h4>
<p>修饰符 m 开启的多行模式下，^、$ 不仅仅匹配文本的开始与结束，还<strong>匹配每一行的开始与结束</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'aaaab\nccccc'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">b$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// null</span>
<span class="token string">'aaaab\nccccc'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">b$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">mg</span></span><span class="token punctuation">)</span> <span class="token comment">// ['b']</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="锚符-对比-n"><a class="header-anchor" href="#锚符-对比-n">#</a> 锚符 ^$ 对比 \n</h4>
<p>上述列子中如果要进行每一行匹配的话，我们还也可以使用换行符 <code>\n</code>。
<code>\n</code> 和锚符 <code>$</code> 的第一个不同点是它不像锚符那样，它会消费 <code>\n</code> 即将 <code>\n</code> 加入到匹配结果中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'aaaab\nccccc'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">b\n</span><span class="token regex-delimiter">/</span><span class="token regex-flags">mg</span></span><span class="token punctuation">)</span> <span class="token comment">// ["b\n"]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="单词边界-b-和-b"><a class="header-anchor" href="#单词边界-b-和-b">#</a> 单词边界 \b 和 \B</h3>
<p><code>\b</code> 是单词边界，具体就是 <code>\w</code> 与 <code>\W</code> 之间的位置，也包括 <code>\w</code> 与 <code>^</code> 之间的位置，和 <code>\w</code> 与 <code>$</code> 之间的位置。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"[JS] Lesson_01.mp4"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'#'</span><span class="token punctuation">)</span> <span class="token comment">// "[#JS#] #Lesson_01#.#mp4#"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\B 就是 \b 的反面的意思，非单词边界。例如在字符串中所有位置中，扣掉 \b，剩下的都是 \B 的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"[JS] Lesson_01.mp4"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\B</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'#'</span><span class="token punctuation">)</span> <span class="token comment">// "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="前瞻断言和后瞻断言"><a class="header-anchor" href="#前瞻断言和后瞻断言">#</a> 前瞻断言和后瞻断言</h3>
<p>前瞻断言
语法为：<code>x(?=y)</code>，它表示 “匹配 x, 仅在后面是 y 的情况&quot;”
语法为：<code>x(?!y)</code>，意思是 “查找 x, 但是仅在不被 y 跟随的情况下匹配成功”
后瞻断言
后瞻肯定断言：<code>(?&lt;=y)x</code>, 匹配 x, 仅在前面是 y 的情况。
后瞻否定断言：<code>(?&lt;!y)x</code>, 匹配 x, 仅在前面不是 y 的情况。</p>
<blockquote>
<p>断言括号不会成为捕获分组，即内容不会再去匹配第一个匹配的结果
把位置理解空字符，是对位置非常有效的理解方式。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 比如把 "12345678"，变成 "12,345,678"</span>

<span class="token comment">// \B 是词与词的边界，故相当 1#2#3#4#5#6#7#8，用 # 表示 \B</span>
<span class="token comment">// 从后开始匹配 \B，仅其后是三个数字</span>
<span class="token string">"12345678"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\B(?=(\d{3})$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">','</span><span class="token punctuation">)</span> <span class="token comment">// "12345,678"</span>
<span class="token comment">// 要求 \B 后面 3 个数字一组，也就是 \d{3} 至少出现一次</span>
<span class="token string">"12345678"</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\B(?=(\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">','</span><span class="token punctuation">)</span> <span class="token comment">//"12,345,678"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="分组"><a class="header-anchor" href="#分组">#</a> 分组</h2>
<p>括号将正则表达式的一部分组合在一起，因此量词可以整体应用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 不带括号，模式 go+ 表示 g 字符，其后 o 重复一次或多次。例如 goooo 或 gooooooooo。</span>

<span class="token comment">// 括号将字符组合，所以 (go)+ 匹配 go，gogo，gogogo等</span>
<span class="token string">'Gogogo now!'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(go)+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gi</span></span><span class="token punctuation">)</span> <span class="token comment">// "Gogogo"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>除了组合功能外，还提供了<strong>分组，便于我们引用它。引用某个分组结果</strong>，会有两种情形：在 JavaScript 里引用它，在正则表达式里引用它。</p>
<h3 id="分组匹配"><a class="header-anchor" href="#分组匹配">#</a> 分组匹配</h3>
<p>如果正则<strong>不带修饰符 g</strong>，正则引擎将用分组顺序匹配前一个匹配的结果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"I love JavaScript"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Java(Script)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// JavaScript（完全匹配）</span>
<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// Script（第一个分组）</span>
<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">.</span>length <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果 regexp 带有 g 标记，则不包含分组匹配结果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"I love JavaScript"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Java(Script)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// JavaScript</span>
<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">.</span>length <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果没有匹配项，则无论是否带有标记 g ，都将返回 null</p>
<p>更多 match 用法参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match" target="_blank" rel="noopener noreferrer">String.prototype.match()<OutboundLink/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll" target="_blank" rel="noopener noreferrer">matchAll<OutboundLink/></a> 是 match 的增强版本：match 在修饰符 g 不会包含分组匹配的结果，而 matchAll 则会返回一个包含每个分组匹配的结果数组(格式与不带 g 标记的 str.match 相同)的迭代对象</p>
<p><img src="@source/JavaScript/images/matchAll.png" alt="matchAll"></p>
<h3 id="嵌套分组匹配"><a class="header-anchor" href="#嵌套分组匹配">#</a> 嵌套分组匹配</h3>
<p>分组里嵌套分组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'abcdefg'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a(b(cd)e)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// ["abcde", "bcde", "cd"]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>从上面结果看出，匹配的结果很有顺序，<strong>因为正则引擎默认从左到右，以左括号开始为分组编号，并且以分组顺序匹配前一个匹配的结果</strong>。</p>
<h3 id="分组命名及引用"><a class="header-anchor" href="#分组命名及引用">#</a> 分组命名及引用</h3>
<p>默认情况下，正则引擎默认从左到右，以左括号开始为分组编号，可以通过在开始括号之后立即放置 <code>?&lt;name&gt;</code> 来为分组命名</p>
<p>正则引擎在匹配过程中，给每一个分组都开辟一个空间，用来存储每一个分组匹配到的数据</p>
<p>使用 <code>$&lt;name&gt;</code> 在 JavaScript 中引用分组匹配的结果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;year>[0-9]{4})-(?&lt;month>[0-9]{2})-(?&lt;day>[0-9]{2})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"2019-10-30, 2020-01-01"</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>regexp<span class="token punctuation">,</span> <span class="token string">'$&lt;day>.$&lt;month>.$&lt;year>'</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 30.10.2019, 01.01.2020</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在模式中，使用 <code>\N</code>、<code>\k&lt;name&gt;</code> 引来分组匹配的结果，其中 N 是分组编号</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取 引号内的内容</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">He said: "She's the one!".</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">let</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">['"](.*?)['"]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token comment">// 不是我们想要的结果</span>
<span class="token function">alert</span><span class="token punctuation">(</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "She'</span>

regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(['"])(.*?)\1</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "She's the one!"</span>

regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;quote>['"])(.*?)\k&lt;quote></span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "She's the one!"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="排除捕获分组"><a class="header-anchor" href="#排除捕获分组">#</a> 排除捕获分组</h3>
<p>有时我们需要括号才能正确应用量词，但不会引用它，即，既不在 JavaScript API 里引用，也不在正则里反向引用可以通过在开头添加 ?: 来排除组。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"Gogogo John!"</span><span class="token punctuation">;</span>

<span class="token comment">// ?: 从捕获组中排除 'go'</span>
<span class="token keyword">let</span> regexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?:go)+ (\w+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">;</span>

<span class="token keyword">let</span> result <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regexp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Gogogo John（完全匹配）</span>
<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// John</span>
<span class="token function">alert</span><span class="token punctuation">(</span> result<span class="token punctuation">.</span>length <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2（数组中没有更多项）</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>另外引用编号 <code>\10</code> 是表示第 10 个分组，为了区分为 <code>\1</code> 和 0 ，可以请使用 <code>(?:\1)0</code> 或者 <code>\1(?:0)</code></p>
<h2 id="正则表达式回溯法原理"><a class="header-anchor" href="#正则表达式回溯法原理">#</a> 正则表达式回溯法原理</h2>
<p>正则表达式回溯法，正则表达式匹配字符串的这种方式，有个学名，叫回溯法。回溯法也称试探法，它的基本思想是：从问题的某一种状态（初始状态）出发，搜索从这种状态出发所能达到的所有“状态”，当一条路走到“尽头”的时候（不能再前进），再后退一步或若干步，从另一种可能“状态”出发，继续搜索，直到所有的“路径”（状态）都试探过。这种不断“前进”、不断“回溯”寻找解的方法，就称作“回溯法”。</p>
<p>本质上就是深度优先搜索算法。<strong>其中退到之前的某一步这一过程</strong>，我们称为“回溯”。从上面的描述过程中，可以看出，路走不通时，就会发生“回溯”。即，尝试匹配失败时，接下来的一步通常就是回溯。</p>
<p>正则引擎发生回溯主要在以下三种地方</p>
<ul>
<li>贪婪量词</li>
<li>惰性量词</li>
<li>选择分支符（|）</li>
</ul>
<p><strong>贪婪量词下的回溯</strong></p>
<p><code>'abbbc'.match(/ab{1,3}bbc/)</code>，贪婪模式下，量词已经匹配完所有可能的字符，下一部分模式发现没有字符可匹配到，就会向前要字符，即让出一个字符给下一部分模式进行匹配，总之量词后的部分模式中，只要有没匹配到的字符的，正则引擎就会向前回溯，重新匹配</p>
<p><img src="@source/../images/greedy1.png" alt="贪婪回溯1"></p>
<p><code>'&quot;abc&quot;de'.match(/&quot;.*&quot;/)</code>，第 8 步中由于没有字符可以匹配 <code>&quot;</code>，故会不断向前回溯匹配</p>
<p><img src="@source/../images/greedy2.png" alt="贪婪回溯2"></p>
<p><strong>惰性量词下的回溯</strong></p>
<p><code>&quot;12345&quot;.match(/(\d{1,3}?)(\d{1,3})/)</code>，惰性模式下，量词只会先匹配 1 次，只有在模式的剩余部分无法在给定位置匹配时，正则表达式引擎才会增加重复次数</p>
<p><img src="@source/../images/lazy-back-tracking.png" alt="惰性回溯"></p>
<p><strong>分支下的回溯</strong></p>
<p>分支也是具有惰性的，比如 <code>/can|candy/</code>，去匹配字符串 &quot;candy&quot;，得到的结果是 &quot;can&quot;，因为分支会一个一个尝试，如果前面的满足了，后面就不会再试验了。但如果接下来表达式整体不匹配时，仍会继续尝试剩下的分支。这种尝试也可以看成一种回溯，例如</p>
<p><code>/&quot;candy&quot;.match(^(?:can|candy)$/)</code></p>
<h2 id="练习题"><a class="header-anchor" href="#练习题">#</a> 练习题</h2>
<h4 id="将每个单词的首字母转换为大写"><a class="header-anchor" href="#将每个单词的首字母转换为大写">#</a> 将每个单词的首字母转换为大写</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'hello world'</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=\b)\w</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// "Hello World"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="字符串-trim-方法模拟"><a class="header-anchor" href="#字符串-trim-方法模拟">#</a> 字符串 trim 方法模拟</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">" foobar "</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\s+|\s+$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// "foobar"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="匹配成对标签"><a class="header-anchor" href="#匹配成对标签">#</a> 匹配成对标签</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'&lt;title>regular expression&lt;/title> &lt;title>regular expression&lt;/title>'</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;(.+)>.*?&lt;\/\1></span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
<span class="token comment">// ["&lt;title>regular expression&lt;/title>", "&lt;title>regular expression&lt;/title>"]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="获取-url-pathname"><a class="header-anchor" href="#获取-url-pathname">#</a> 获取 URL pathname</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'https://github.com/laoergege/laoergege-blog'</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^https?:\/\/[^\/]*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// "laoergege/laoergege-blog"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>