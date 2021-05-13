<template><blockquote>
<p>本文以 chrome 为例，分析 chrome 的页面渲染流程</p>
</blockquote>
<h2 id="blink-渲染引擎"><a class="header-anchor" href="#blink-渲染引擎">#</a> Blink（渲染引擎）</h2>
<p>浏览器是如何将 web content 转变成屏幕显示的像素，也就是我们看到的页面</p>
<p>web content 一般指的是构成网页的物件（文本、图片、HTML、CSS、JS），
其他内容 <code>&lt;video&gt;</code>, <code>&lt;canvas&gt;</code>, <code>WebAssembly</code>, <code>WebGL</code>, <code>WebVR</code>, <code>PDF</code>, … 则通过其他方式进行。
因为只有 web content 的才是由渲染进程(沙箱模式)进行处理渲染的。</p>
<p><img src="@source/浏览器原理及API/images/content.png" alt=""></p>
<p>其中 Blink 是一个 Web 渲染引擎，主要功能如下：</p>
<ul>
<li>实现了 HTML 标准规范</li>
<li>嵌入 V8 引擎去执行 JavaScript 代码</li>
<li>请求网络资源？TODO</li>
<li>构建 DOM 树</li>
<li>计算样式和布局</li>
<li>嵌入 <a href="https://chromium.googlesource.com/chromium/src/+/HEAD/cc/README.md" target="_blank" rel="noopener noreferrer">Chrome Compositor<OutboundLink/></a> 去绘制图形</li>
</ul>
<p><img src="@source/../images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200606152948.png" alt="Blink"></p>
<p>Blink 作为渲染引擎被嵌入到 Chromium、Opera，WebView 等浏览器客户端中并提供 <a href="https://chromium.googlesource.com/chromium/src/+/HEAD/content/public/README.md" target="_blank" rel="noopener noreferrer">content public APIs<OutboundLink/></a> 使用。</p>
<p>Blink 就像是胶水一样，连接调用不同基础组件（V8、Skia等），处理 web 标准规范的 content。（PS：这也是 web 能够快速发展的原因，并不需要通过编译打包，只需要输入纯文本的HTML、JS、CSS，内部便帮我即时处理渲染）</p>
<p><strong>渲染引擎解析处理 web content 后转换成底层操作系统提供的图形库调用去显示页面像素</strong>，在多平台的今天，有标准 API 图形库 OpenGL，但在 window 平台，还需要额外转换成 DirectX API 调用，未来还将实现更多图形库支持，如 vulkan</p>
<p><img src="@source/浏览器原理及API/images/pixels.png" alt=""></p>
<blockquote>
<p><a href="https://www.chromium.org/blink" target="_blank" rel="noopener noreferrer">Blink 文档链接<OutboundLink/></a></p>
</blockquote>
<h2 id="页面渲染流程"><a class="header-anchor" href="#页面渲染流程">#</a> 页面渲染流程</h2>
<blockquote>
<p>注：由于 Chrome 对 Blank 引擎某些实现的修改，某些我们之前熟知的类名有了变化，比如 RenderObject 变成了 LayoutObject，RenderLayer 变成了 PaintLayer。感兴趣的看以参阅 <a href="https://www.chromium.org/blink/slimming-paint?spm=taofed.bloginfo.blog.2.1d175ac8atKvCQ" target="_blank" rel="noopener noreferrer">Slimming Paint<OutboundLink/></a></p>
</blockquote>
<p>页面渲染有两种情况</p>
<ul>
<li>首次渲染</li>
<li>更新事件
<ul>
<li>JavaScript</li>
<li>user input</li>
<li>asynchronous loading</li>
<li>animations</li>
<li>scrolling</li>
<li>zooming</li>
</ul>
</li>
</ul>
<p>为了提高渲染效率，渲染流程就像是一条流水线，分成多个渲染阶段，每个阶段会有不同产物，当发生更新时，就可以重其中某一阶段开始执行并复用之前的产物，并且分多阶段任务执行，可以提高系统任务调度灵活性</p>
<p><img src="@source/浏览器原理及API/images/stages.png" alt=""></p>
<h3 id="构建-dom-树-parse-html"><a class="header-anchor" href="#构建-dom-树-parse-html">#</a> 构建 DOM 树（Parse HTML）</h3>
<p>浏览器无法直接理解和使用 HTML，所以需要将 HTML 转换为浏览器能够理解的、并且反映 HTML 结构的数据结构——DOM 树</p>
<p><img src="@source/浏览器原理及API/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200606191641.png" alt=""></p>
<h3 id="样式计算-recalculate-style"><a class="header-anchor" href="#样式计算-recalculate-style">#</a> 样式计算（Recalculate Style）</h3>
<h4 id="解析-css-规则"><a class="header-anchor" href="#解析-css-规则">#</a> 解析 CSS 规则</h4>
<p>和 HTML 文件一样，浏览器也是无法直接理解这些纯文本的 CSS 样式，所以当渲染引擎接收到 CSS 文本时，会执行一个转换操作，将 CSS 文本转换为浏览器可以理解的结构——styleSheets，在控制台中输入 document.styleSheets 查看</p>
<h4 id="转换样式表中的属性值-使其标准化"><a class="header-anchor" href="#转换样式表中的属性值-使其标准化">#</a> 转换样式表中的属性值，使其标准化</h4>
<p>CSS 文本中有很多属性值，如 2em、blue、bold，这些类型数值不容易被渲染引擎理解，所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值，这个过程就是属性值标准化</p>
<p><img src="@source/浏览器原理及API/images/1252c6d3c1a51714606daa6bdad3a560.png" alt=""></p>
<h4 id="计算出-dom-树中每个节点的具体样式"><a class="header-anchor" href="#计算出-dom-树中每个节点的具体样式">#</a> 计算出 DOM 树中每个节点的具体样式</h4>
<p>会把解析后的样式规则和浏览器默认的样式规则，遍历 DOM 节点，为元素匹配样式规则并计算出最终样式，储存在 ComputedStyle 属性</p>
<p><img src="@source/浏览器原理及API/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200606201932.png" alt=""></p>
<p>CSS 计算规则涉及以下两个规则</p>
<ul>
<li>样式继承
<img src="@source/浏览器原理及API/images/fe9a0ea868dc02a3c4a59f6080aa80b4.png" alt=""></li>
<li>样式覆盖
<img src="@source/浏览器原理及API/images/88a3aac427cc7c09361eac01a85fc7b2.png" alt=""></li>
</ul>
<h3 id="布局阶段-layout"><a class="header-anchor" href="#布局阶段-layout">#</a> 布局阶段（Layout）</h3>
<h4 id="创建-layout-tree"><a class="header-anchor" href="#创建-layout-tree">#</a> 创建 Layout Tree</h4>
<p>遍历 DOM tree 生成 layout tree，其中每个节点都是 LayoutObject 的子类，其实现相应的布局。</p>
<p><img src="@source/浏览器原理及API/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200606211336.png" alt=""></p>
<p>DOM Nodes 并不是跟 layout object 一对一对应关系，比如有些情况：</p>
<p><img src="@source/浏览器原理及API/images/2020-06-20001908.png" alt=""></p>
<ul>
<li>display：none 的元素不会生成 layout object</li>
<li>伪元素 after 与 before 不会成 DOM Node</li>
<li>文本内联元素将会被隐式 block 包裹</li>
<li>head 标签下面的全部内容</li>
</ul>
<h4 id="布局计算"><a class="header-anchor" href="#布局计算">#</a> 布局计算</h4>
<p><img src="@source/浏览器原理及API/images/2020-06-21222300.png" alt=""></p>
<p>遍历 layout tree，计算每个节点的布局信息（比如，坐标及几何等信息）（布局的计算过程非常复杂，这里不详细展开）</p>
<p>在执行布局操作的时候，会把布局运算的结果重新写回保存布局树中，所以布局树既是输入内容也是输出内容，这是布局阶段一个不合理的地方，因为在布局阶段并没有清晰地将输入内容和输出内容区分开来。针对这个问题，Chrome 团队正在重构布局代码，下一代布局系统叫 LayoutNG，试图更清晰地分离输入和输出，从而让新设计的布局算法更加简单。</p>
<p><img src="@source/浏览器原理及API/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200606215912.png" alt=""></p>
<h3 id="分层-layers"><a class="header-anchor" href="#分层-layers">#</a> 分层（Layers）</h3>
<p>我们看到的页面实际是由多张图层合成的，打开 Chrome 的“开发者工具”，选择“Layers”标签，就可以可视化页面的分层情况，如下图所示：</p>
<p><img src="@source/浏览器原理及API/images/e2c917edf5119cddfbec9481372f8fc0.png" alt=""></p>
<p>通常页面的组成是非常复杂的，有的页面里要实现一些复杂的动画效果，比如点击菜单时弹出菜单的动画特效，滚动鼠标滚轮时页面滚动的动画效果，当然还有一些炫酷的 3D 动画特效。如果没有采用分层机制，从布局树直接生成目标图片的话，那么每次页面有很小的变化时，都会触发重排或者重绘机制，这种“牵一发而动全身”的绘制策略会严重影响页面的渲染效率</p>
<blockquote>
<p>为了提升每帧的渲染效率，Chrome 引入了<strong>分层和合成</strong>的机制</p>
</blockquote>
<p><img src="@source/浏览器原理及API/images/tree.png" alt=""></p>
<p>DOM 中某些具有特定样式的 node 会被转换为单独的 Graphic Layer，并不是 DOM 中的每个节点都包含一个图层，如果一个节点没有对应的层，那么这个节点就从属于父节点的图层</p>
<p>Layout Object 在上面的 layout 阶段生成</p>
<h4 id="paintlayers"><a class="header-anchor" href="#paintlayers">#</a> PaintLayers</h4>
<p>页面是个二维平面，但是层叠上下文能够让 HTML 元素具有三维概念。PaintLayer 是用来实现 stacking contest（层叠上下文），以此来保证页面元素以正确的显示顺序，这样才能正确的展示元素的重叠以及半透明元素等等</p>
<p><img src="@source/浏览器原理及API/images/a03eb12053aac1ac496b61a424f20119.png" alt=""></p>
<p>从图中可以看出，明确定位属性的元素、定义透明属性的元素、使用 CSS 滤镜的元素等，都拥有层叠上下文属性。</p>
<p>形成层叠上下文的属性条件如下：</p>
<p><img src="@source/浏览器原理及API/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200607154033.png" alt=""></p>
<p>若你想要了解更多层叠上下文的知识，参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context" target="_blank" rel="noopener noreferrer">The_stacking_context<OutboundLink/></a></p>
<h4 id="graphicslayers"><a class="header-anchor" href="#graphicslayers">#</a> GraphicsLayers</h4>
<p>要能成为图层的节点必须要有成为 PaintLayer 的层叠上下文属性条件。 但是并不是所有的 PaintLayer 都能成为 GraphicsLayer，<strong>因为生成图层是会占用内存</strong>，只有某些特殊的 PaintLayer 才会被提升为 GraphicsLayer。要形成单独图层的元素需要具有以下条件：</p>
<ul>
<li>根元素</li>
<li>3D transform 或 perspective 的元素</li>
<li>硬件加速的 video</li>
<li>3D 或硬件加速的 2D 的canvas</li>
<li>对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）</li>
<li>will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）</li>
<li>裁剪滚动区域</li>
<li><strong>overlaps a composited layer 的元素</strong></li>
</ul>
<p>以上只列举常见情况，更多详情查看</p>
<ul>
<li><a href="https://fed.taobao.org/blog/taofed/do71ct/performance-composite/?spm=taofed.homepage.header.13.7eab5ac8Ut2aYd" target="_blank" rel="noopener noreferrer">无线性能优化：Composite（推荐）<OutboundLink/></a></li>
<li><a href="https://chromium.googlesource.com/chromium/blink/+/72fef91ac1ef679207f51def8133b336a6f6588f/Source/platform/graphics/CompositingReasons.cpp?autodive=0%2F%2F%2F" target="_blank" rel="noopener noreferrer">CompositingReasons.cpp<OutboundLink/></a></li>
</ul>
<blockquote>
<p>目前 Layers 阶段发生 Paint（下文见）阶段前，未来将被转移 Paint 阶段后面 TODO</p>
</blockquote>
<h3 id="paint-绘制"><a class="header-anchor" href="#paint-绘制">#</a> Paint（绘制）</h3>
<p>在完成图层树的构建之后，渲染引擎会对图层树中的每个图层进行绘制，但 Paint 阶段并不是真正的界面绘制，而是生成绘制指令列表，交给其他线程进行光栅任务，大大减低了主线程的负担，提高主线程效率。</p>
<p>可以打开“开发者工具”的“Layers”标签，选择“document”层，来实际体验下绘制列表，如下图所示：</p>
<p><img src="@source/浏览器原理及API/images/303515c26fcd4eaa9b9966ad7f190370.png" alt=""></p>
<p>每一个图层在 Paint 阶段会分为多个小阶段，并按照层叠顺序对 layout subTree 进行多次遍历</p>
<p>这就可能为什么导致下面案列 float 布局中，一个元素甚至有可能部分地位于另一个元素的前面和一部分之后，我们需要清除浮动</p>
<p><img src="@source/浏览器原理及API/images/paint-phases.png" alt=""></p>
<p>多次遍历产生 DisplayItem 即对应 Paint 多阶段产生的操作</p>
<p><img src="@source/浏览器原理及API/images/2020-06-22000128.png" alt=""></p>
<p><img src="@source/浏览器原理及API/images/paint.png" alt=""></p>
<h3 id="raster"><a class="header-anchor" href="#raster">#</a> Raster</h3>
<p>绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染进场中的合成线程来完成的</p>
<h4 id="bitmap-位图"><a class="header-anchor" href="#bitmap-位图">#</a> bitmap（位图）</h4>
<h4 id="tile"><a class="header-anchor" href="#tile">#</a> tile</h4>
<p>Chromium 目前实际支持三种不同的光栅化和合成的组合方式：软件光栅化 + 软件合成，软件光栅化 + gpu 合成，gpu 光栅化 + gpu 合成。在移动平台上，大部分设备和移动版网页使用的都是 gpu 光栅化 + gpu 合成的渲染方式，理论上性能也最佳。</p>
</template>