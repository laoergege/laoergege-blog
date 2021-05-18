<template><h1 id="视图中的各种宽高偏移"><a class="header-anchor" href="#视图中的各种宽高偏移">#</a> 视图中的各种宽高偏移</h1>
<h3 id="screen"><a class="header-anchor" href="#screen">#</a> screen</h3>
<ul>
<li>width</li>
<li>height</li>
<li>availHeight 返回浏览器窗口在屏幕上可占用的垂直空间，即最大高度。</li>
</ul>
<p><img src="$%7Bimages%7D/1460000007515042-20210428164112580.jpeg" alt="图片描述"></p>
<h3 id="window"><a class="header-anchor" href="#window">#</a> window</h3>
<ul>
<li>innerWidth</li>
<li>innerHeight</li>
<li>outerWidth</li>
<li>outerHeight</li>
</ul>
<p><img src="$%7Bimages%7D/1460000007515041.png" alt="图片描述"></p>
<h3 id="element"><a class="header-anchor" href="#element">#</a> element</h3>
<ul>
<li>
<p>client</p>
<p>​		元素的内容可视部分宽度和高度，即<code>padding+conten</code> 不包含滚动条</p>
<ul>
<li>
<p>clientWidth</p>
</li>
<li>
<p>clientHeight</p>
<p><img src="$%7Bimages%7D/=Dimensions-client.png" alt="Image:Dimensions-client.png"></p>
<p>元素的边框</p>
</li>
<li>
<p>clientLeft</p>
</li>
<li>
<p>clientTop</p>
</li>
</ul>
</li>
<li>
<p>offset</p>
<p>​		元素整体大小（ content + padding + scroll + border  ）</p>
<ul>
<li>
<p>offsetWidth</p>
</li>
<li>
<p>offsetHeight</p>
<p><img src="$%7Bimages%7D/=Dimensions-offset.png" alt="Image:Dimensions-offset.png"></p>
<p>当前元素相对于  <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent" target="_blank" rel="noopener noreferrer">HTMLElement.offsetParent<OutboundLink/></a> 的偏移</p>
</li>
<li>
<p>offsetLeft</p>
</li>
<li>
<p>offsetTop</p>
<p><img src="$%7Bimages%7D/1240.png" alt="image.png"></p>
</li>
</ul>
</li>
<li>
<p>scroll</p>
<p>​		元素的滚动内容宽高</p>
<ul>
<li>
<p>scrollWidth</p>
</li>
<li>
<p>scrollHeight</p>
<p><img src="$%7Bimages%7D/1240-20210428173346611.png" alt="image.png"></p>
</li>
</ul>
<p>​		元素内容超出的距离</p>
<ul>
<li>
<p>scrollLeft</p>
</li>
<li>
<p>scrollTop</p>
<p><img src="$%7Bimages%7D/1240-20210428174313197.png" alt="image.png"></p>
</li>
</ul>
</li>
</ul>
</template>