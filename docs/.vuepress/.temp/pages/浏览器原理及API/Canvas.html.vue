<template><h1 id="canvas"><a class="header-anchor" href="#canvas">#</a> Canvas</h1>
<h2 id="目录"><a class="header-anchor" href="#目录">#</a> 目录</h2>
<ul>
<li><a href="#canvas">Canvas</a>
<ul>
<li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li>
<li><a href="#canvas-%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB">Canvas 知识体系</a></li>
<li><a href="#%E5%BC%80%E5%A7%8B">开始</a>
<ul>
<li><a href="#%E5%9D%90%E6%A0%87%E7%B3%BB">坐标系</a></li>
<li><a href="#%E8%B7%AF%E5%BE%84">路径</a>
<ul>
<li><a href="#%E6%8F%8F%E7%BB%98%E8%B7%AF%E5%BE%84">描绘路径</a></li>
<li><a href="#%E7%BB%98%E5%88%B6%E8%B7%AF%E5%BE%84">绘制路径</a></li>
</ul>
</li>
<li><a href="#%E7%94%BB%E5%B8%83%E7%8A%B6%E6%80%81">画布状态</a></li>
</ul>
</li>
<li><a href="#%E7%BB%98%E5%88%B6%E5%9B%BE%E5%83%8F">绘制图像</a>
<ul>
<li><a href="#%E8%A3%81%E5%89%AA%E5%90%88%E6%88%90">裁剪、合成</a></li>
</ul>
</li>
<li><a href="#%E5%8A%A8%E7%94%BB">动画</a></li>
<li><a href="#canvas-%E9%AB%98%E6%B8%85%E9%80%82%E9%85%8D">Canvas 高清适配</a></li>
</ul>
</li>
</ul>
<h2 id="canvas-知识体系"><a class="header-anchor" href="#canvas-知识体系">#</a> Canvas 知识体系</h2>
<ul>
<li>基础
<ul>
<li>坐标系</li>
<li>绘制上下文
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noopener noreferrer">CanvasRenderingContext2D<OutboundLink/></a></li>
<li>API
<ul>
<li>状态</li>
<li>绘制
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D#%E8%B7%AF%E5%BE%84" target="_blank" rel="noopener noreferrer">路径绘制<OutboundLink/></a></li>
<li>文本绘制</li>
<li>图像绘制</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>二次贝塞尔曲线及三次贝塞尔曲线</li>
</ul>
</li>
<li>进阶
<ul>
<li>动画</li>
<li>优化
<ul>
<li>Path2D 缓存或记录绘画指令</li>
</ul>
</li>
</ul>
</li>
<li>常见问题
<ul>
<li>Canvas 高清适配</li>
<li>Canvas 跨域</li>
</ul>
</li>
</ul>
<h2 id="开始"><a class="header-anchor" href="#开始">#</a> 开始</h2>
<p>Canvas API 提供了一个通过JavaScript 和 HTML的 <code>&lt;canvas&gt;</code> 元素来绘制图形的方式，相比较浏览器 HTML 的渲染页面方式，Canvas 更像似更接近底层，使用绘制指令，在 canvas 区域绘制图像</p>
<p>Canvas API 支持</p>
<ul>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noopener noreferrer">CanvasRenderingContext2D<OutboundLink/></a> 接口的2D渲染</li>
<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL2RenderingContext" target="_blank" rel="noopener noreferrer">WebGL2RenderingContext<OutboundLink/></a> 接口的硬件加速的 2D、3D 渲染</li>
</ul>
<blockquote>
<p>本文主要以 CanvasRenderingContext2D 渲染为主</p>
</blockquote>
<p>Canvas 基本模板骨架</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            ctx<span class="token punctuation">.</span>fillColor <span class="token operator">=</span> <span class="token string">'yellow'</span>
            ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">canvas</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tutorial<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>请升级最新浏览器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>Canvas <strong>元素及画布</strong>的默认大小为一致，且为 300像素×150像素（宽×高，像素的单位是px），可通过 css 样式去改变 canvas 元素在页面布局的大小，画布内容会自适应元素大小</p>
<p><img src="@source/浏览器原理及API/images/iShot2020-07-08pm11.20.08.png" alt=""></p>
<p>上面案例中，我们画布大小为 150 <em>150，元素大小 300</em> 300，最后图像自适应填充了整个元素大小</p>
<blockquote>
<p>注意：如果CSS的尺寸与初始画布的比例不一致，它会出现扭曲</p>
</blockquote>
<h3 id="坐标系"><a class="header-anchor" href="#坐标系">#</a> 坐标系</h3>
<p>在画布中所有元素的位置都是在按照以左上角位置为原点（0，0），y 轴向下的坐标系中</p>
<p><img src="@source/浏览器原理及API/images/Canvas_default_grid.png" alt="Canvas_default_grid"></p>
<h3 id="路径"><a class="header-anchor" href="#路径">#</a> 路径</h3>
<p>CanvasRenderingContext2D 只提供矩形绘制的 API（fillRect、strokeRect），其他复杂的图形需要我们自己绘制路径形成</p>
<p><strong>路径是有一条或多条直线、曲线形成；而图形都是通过一条或者多条路径闭合形成的</strong></p>
<p>创建图形的步骤如下：</p>
<h4 id="描绘路径"><a class="header-anchor" href="#描绘路径">#</a> 描绘路径</h4>
<p>CanvasRenderingContext2D 提供了一些<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D#%E8%B7%AF%E5%BE%84" target="_blank" rel="noopener noreferrer">描绘路径方法列表<OutboundLink/></a>，其中：</p>
<ul>
<li>
<p>beginPath 声明开始创建路径</p>
<p>路径是由很多子路径构成，这些子路径都是在一个<strong>列表</strong>中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形</p>
</li>
<li>
<p>moveTo 确定路径起点</p>
</li>
<li>
<p>closePath 闭合路径</p>
<p>closePath 会通过绘制一条从当前点到开始点的直线来闭合图形。以 fill 填充方式绘制路径，会自动闭合</p>
</li>
</ul>
<p>还有其他生成路径的，如线型 lineTo、贝赛尔曲线型 bezierCurveTo、圆型 arcTo 等，请参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D#%E8%B7%AF%E5%BE%84" target="_blank" rel="noopener noreferrer">文档<OutboundLink/></a></p>
<h4 id="绘制路径"><a class="header-anchor" href="#绘制路径">#</a> 绘制路径</h4>
<p>描绘完路径后，就需要把路径绘制到屏幕上，主要有两种方式 stroke 描边和 fill 填充的方式将路径绘制到画布中</p>
<h3 id="画布状态"><a class="header-anchor" href="#画布状态">#</a> 画布状态</h3>
<p>save</p>
<p>restore</p>
<ul>
<li>色彩</li>
<li>透明</li>
<li>线条</li>
</ul>
<h2 id="绘制图像"><a class="header-anchor" href="#绘制图像">#</a> 绘制图像</h2>
<h3 id="裁剪、合成"><a class="header-anchor" href="#裁剪、合成">#</a> 裁剪、合成</h3>
<h2 id="动画"><a class="header-anchor" href="#动画">#</a> 动画</h2>
<h2 id="canvas-高清适配"><a class="header-anchor" href="#canvas-高清适配">#</a> Canvas 高清适配</h2>
</template>