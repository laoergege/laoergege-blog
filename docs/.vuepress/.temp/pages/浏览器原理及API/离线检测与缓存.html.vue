<template><h2 id="前言"><a class="header-anchor" href="#前言">#</a> 前言</h2>
<p>阅读 <a href="#">JavaScript 高级程序设计/离线应用与客户端存储</a>
离线 web 应用：即使不能上网的情况下，应用还能运行。开发一个能够离线运行 web 应用首要两点：</p>
<ul>
<li>确定设备是否能上网，以便执行相应的操作</li>
<li>缓存应用文件及数据，以便应用能够访问一定资源</li>
</ul>
<h3 id="离线检测"><a class="header-anchor" href="#离线检测">#</a> 离线检测</h3>
<p><strong>Navigator</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>online<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 正常工作</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">// 执行离线任务</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>为了检测应用是否离线，在页面加载后，最好先通过 navigator.onLine 取得初始状态，然后监听离线事件，确认网络连接状态是否变化。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>window.addEventListener('online/offline', () =&gt; {alert('onLine')})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="缓存"><a class="header-anchor" href="#缓存">#</a> 缓存</h3>
<h4 id="http-cache-之强缓存、协商缓存"><a class="header-anchor" href="#http-cache-之强缓存、协商缓存">#</a> http-cache 之强缓存、协商缓存</h4>
<p>阅读</p>
<ul>
<li><a href="https://mp.weixin.qq.com/s/d2zeGhUptGUGJpB5xHQbOA" target="_blank" rel="noopener noreferrer">彻底理解浏览器的缓存机制<OutboundLink/></a></li>
<li><a href="https://mp.weixin.qq.com/s/yf0pWRFM7v9Ru3D9_JhGPQ" target="_blank" rel="noopener noreferrer">浏览器缓存机制剖析<OutboundLink/></a></li>
</ul>
<p>当浏览器请求资源时，会先进行缓存查看，若强缓存策略（Expires 和 Cache-control）生效则直接使用缓存。若不生效则进行协商缓存策略（Last-Modified / If-Modified-Since 和 Etag / If-None-Match）,由服务器进行缓存验证，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存。</p>
<p><img src="https://mmbiz.qpic.cn/mmbiz_png/meG6Vo0Mevgq38cXiaLvaxNIiatrA806UA6eZ3dqoKdgIhPENicUjaXXict6LuQDYsGNHFrddiayooqibHN50ZUCbYog/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1" alt=""></p>
<h4 id="cookie、storage"><a class="header-anchor" href="#cookie、storage">#</a> Cookie、Storage</h4>
<p>阅读 <a href="https://github.com/amandakelake/blog/issues/13" target="_blank" rel="noopener noreferrer">缓存（三）——数据存储：cookie、Storage、indexedDB<OutboundLink/></a></p>
<h5 id="cookie"><a class="header-anchor" href="#cookie">#</a> Cookie</h5>
<p>Cookie 是存储在客户端的一小段信息，会自动随着同源请求发送到服务器，内容包括：名字、值、域、路径、时间、大小。
路径与域一起构成cookie的作用范围，cookie可以通过设置domain属性值，设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 设置 Document.cookie 属性。</p>
<p>常用的配置属性有以下几个</p>
<ul>
<li>Expires ：cookie最长有效期</li>
<li>Max-Age：在 cookie 失效之前需要经过的秒数。（当Expires和Max-Age同时存在时，文档中给出的是已Max-Age为准，可是我自己用Chrome实验的结果是取二者中最长有效期的值）</li>
<li>Domain：指定 cookie 可以送达的主机名。</li>
<li>Path：指定一个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部</li>
<li>Secure：一个带有安全属性的 cookie 只有在请求使用SSL和HTTPS协议的时候才会被发送到服务器。</li>
<li>HttpOnly:设置了 HttpOnly 属性的 cookie 不能使用 JavaScript 经由 Document.cookie 属性、XMLHttpRequest 和 Request APIs 进行访问，以防范跨站脚本攻击（XSS）。</li>
</ul>
<h6 id="javascritpt-中的-cookie-操作"><a class="header-anchor" href="#javascritpt-中的-cookie-操作">#</a> JavaScritpt 中的 cookie 操作</h6>
<p><code>document.cookie</code> 能够获取仅对当前页面可用的 cookie （根据 cookie 的 demian、path、失效时间、secure），结果如下</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>name1=value1;name2=value2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>所有的名字和值都是经过 URI 编码的，所以在获取或者设置的时候分别使用 decodeURIComponent 和 ecodeURIComponent 来解码或编码。</p>
<p>当设置新的 cookie 时</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>document.cookie = encodeURIComponent(&quot;name&quot;) + '=' + encodeURIComponent(&quot;value&quot;)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这个结果值会被解析添加到原来 cookie 集合中，当 name 值与原有的 cookie 一样时，就会覆盖该 cookie。</p>
<h5 id="localstorage-sessionstorage"><a class="header-anchor" href="#localstorage-sessionstorage">#</a> localStorage，sessionStorage</h5>
<p>localStorage，sessionStorage 明文方式存储字符串内容，api：setItem、getItem、removeItem、key、clear</p>
<p>监听storage事件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>window.addEventListener('storage',function(e){
   console.log('key='+e.key+',oldValue='+e.oldValue+',newValue='+e.newValue);
})
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="localstorage-sessionstorage和cookie的区别"><a class="header-anchor" href="#localstorage-sessionstorage和cookie的区别">#</a> localStorage，sessionStorage和cookie的区别</h5>
<ul>
<li>相同：保存在浏览器，有同源策略</li>
<li>区别：
<ul>
<li>大小
<ul>
<li>cookie 不能超过4K</li>
<li>localStorage，sessionStorage 不能超 5M</li>
</ul>
</li>
<li>生命周期
<ul>
<li>cookie 可以设置过期时间</li>
<li>sessionStorage 仅在当前浏览器窗口关闭之前有效</li>
<li>localStorage 长期存储</li>
</ul>
</li>
<li>作用域
<ul>
<li>sessionStorage 在当前浏览器窗口共享</li>
<li>cookie、localstorage 在同源窗口共享</li>
</ul>
</li>
<li>其他
<ul>
<li>cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下</li>
</ul>
</li>
</ul>
</li>
</ul>
</template>