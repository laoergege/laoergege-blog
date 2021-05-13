<template><h1 id="vue-组件渲染流程"><a class="header-anchor" href="#vue-组件渲染流程">#</a> vue 组件渲染流程</h1>
<p>任何前端框架，最主要的核心功能就是渲染视图。</p>
<h2 id="vnode"><a class="header-anchor" href="#vnode">#</a> VNode</h2>
<p>Vue 的内部渲染机制中引入 Virtual DOM 去抽象描述真实的 DOM。Virtual DOM 中每一个节点叫做 VNode，VNode 本质上是用来描述 DOM 的 JavaScript 对象，通过 <code>type</code> 指定不同的类型，比如普通元素节点、组件节点等。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>50px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>

  type<span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span>

  props<span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token string">'class'</span><span class="token operator">:</span> <span class="token string">'btn'</span><span class="token punctuation">,</span>
    style<span class="token operator">:</span> <span class="token punctuation">{</span>
      width<span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
      height<span class="token operator">:</span> <span class="token string">'50px'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token string">'click me'</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-core/src/vnode.ts</span>
<span class="token keyword">export</span> type VNodeTypes <span class="token operator">=</span>
  <span class="token operator">|</span> string
  <span class="token operator">|</span> VNode
  <span class="token operator">|</span> Component
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Text
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Static
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Comment
  <span class="token operator">|</span> <span class="token keyword">typeof</span> Fragment
  <span class="token operator">|</span> <span class="token keyword">typeof</span> TeleportImpl
  <span class="token operator">|</span> <span class="token keyword">typeof</span> SuspenseImpl

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">VNode</span><span class="token operator">&lt;</span>
  HostNode <span class="token operator">=</span> RendererNode<span class="token punctuation">,</span>
  HostElement <span class="token operator">=</span> RendererElement<span class="token punctuation">,</span>
  ExtraProps <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any <span class="token punctuation">}</span>
<span class="token operator">></span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> VNodeTypes
  props<span class="token operator">:</span> <span class="token punctuation">(</span>VNodeProps <span class="token operator">&amp;</span> ExtraProps<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  children<span class="token operator">:</span> VNodeNormalizedChildren
	<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>我们可以用 vnode 这样表示<code>&lt;button&gt;</code>节点。一个 VNode 节点属性最主要的是 <code>type</code>，<code>props</code>，<code>children</code>。</p>
<p>引入 VNode 的好处：</p>
<ol>
<li>任何常规的 GUI 都能用<strong>类 DOM 数据结构</strong>去描述，引入 VNode，做一层界面抽象，提供了<strong>跨平台</strong>能力。</li>
<li>提供了界面<strong>组件化</strong>的抽象能力。</li>
</ol>
<h2 id="组件"><a class="header-anchor" href="#组件">#</a> 组件</h2>
<img src="${images}/components.png" alt="Component Tree" style="zoom:50%;" />
<p>几乎任意类型的应用界面都可以抽象为一个组件树。每个组件包含各自的模板、状态属性、样式， <strong>抽象组件化后提高了代码复用能力</strong>。</p>
<p>例如，你可能会有页头、侧边栏、内容区等组件，每个组件又包含了其它的像导航链接、博文之类的组件。</p>
<p>前面我们说过，可以通过 vnode 的 type 属性是指定节点类型，在 vue 中如何声明组件类型的节点?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 模板中引入一个组件标签</span>
<span class="token operator">&lt;</span>custom<span class="token operator">-</span>component msg<span class="token operator">=</span><span class="token string">"test"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>custom<span class="token operator">-</span>component<span class="token operator">></span>


<span class="token comment">// 组件标签 转换对于的 vnode </span>
<span class="token keyword">const</span> CustomComponent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在这里定义组件对象</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> CustomComponent<span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span> 
    msg<span class="token operator">:</span> <span class="token string">'test'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>组件类型的 vnode 在 Virtual DOM 树中是个抽象节点，Virtual DOM 到真实 DOM 的映射中是不包含抽象节点，即组件类型节点是不会被渲染在页面上，真正反映在页面的是组件的模板</strong>。</p>
<h2 id="组件渲染流程"><a class="header-anchor" href="#组件渲染流程">#</a> 组件渲染流程</h2>
<ol>
<li>
<p>使用渲染器（renderer）创建（createApp）应用实例app</p>
</li>
<li>
<p>挂载应用（app.mount）</p>
<ol>
<li>
<p>创建 vnode （createVNode）</p>
</li>
<li>
<p>渲染 vnode（render）</p>
<ol>
<li>
<p>diff</p>
</li>
<li>
<p>patch</p>
</li>
</ol>
</li>
</ol>
</li>
</ol>
<h3 id="使用渲染器-renderer-创建-createapp-应用实例app"><a class="header-anchor" href="#使用渲染器-renderer-创建-createapp-应用实例app">#</a> 使用渲染器（renderer）创建（createApp）应用实例app</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 在 Vue.js 3.0 中，标准初始化一个应用的方式如下</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./app'</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>

<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>

<span class="token comment">// 在 web 平台下，runtime-dom 包中可以找到 createApp 方法定义</span>
<span class="token comment">// packages/runtime-dom/src/index.ts</span>
<span class="token keyword">const</span> createApp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 使用自定义渲染器，创建 app 对象</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">ensureRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token operator">=</span> app

  <span class="token comment">// 重写 mount 方法</span>
  app<span class="token punctuation">.</span><span class="token function-variable function">mount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">containerOrSelector</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token function">normalizeContainer</span><span class="token punctuation">(</span>containerOrSelector<span class="token punctuation">)</span>
    <span class="token comment">// 2. 调用 app.mount 核心标准方法，创建 virtual dom, 渲染 vnode</span>
    <span class="token function">mount</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> app
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="渲染器-renderer"><a class="header-anchor" href="#渲染器-renderer">#</a> 渲染器 renderer</h4>
<p>vue 是跨平台支持，不同平台根据接口标准实现自定义渲染器。<code>renderer = createRenderer(nodeOps)</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-dom/src/index.ts</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">ensureRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token comment">// 延迟创建渲染，方便 tree-shakable</span>

<span class="token comment">// 创建自定义渲染器</span>
<span class="token keyword">function</span> <span class="token function">ensureRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> renderer <span class="token operator">||</span> <span class="token punctuation">(</span>renderer <span class="token operator">=</span> createRenderer<span class="token operator">&lt;</span>Node<span class="token punctuation">,</span> Element<span class="token operator">></span><span class="token punctuation">(</span>rendererOptions<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现不同平台的渲染操作接口</span>
<span class="token keyword">const</span> rendererOptions <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span> patchProp<span class="token punctuation">,</span> forcePatchProp <span class="token punctuation">}</span><span class="token punctuation">,</span> nodeOps<span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>nodeOps(packages/runtime-dom/src/nodeOps.ts)</p>
<img src="${images}/image-20210415164529699.png" alt="image-20210415164529699" style="zoom:50%;" />
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-core/src/renderer.ts</span>

<span class="token comment">// createRenderer 是 vue 自定义渲染器的核心方法</span>
<span class="token keyword">function</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">baseCreateRenderer</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">baseCreateRenderer</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件渲染的核心逻辑</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    render<span class="token punctuation">,</span>
    <span class="token comment">// createAppAPI 创建 createApp </span>
    createApp<span class="token operator">:</span> <span class="token function">createAppAPI</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="createapp"><a class="header-anchor" href="#createapp">#</a> createApp</h4>
<p>createApp 函数内部的 app.mount 方法是一个标准的可跨平台的组件渲染流程：<strong>标准的跨平台渲染流程是先创建 vnode，再渲染 vnode</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Vue.js 利用闭包和函数柯里化，createAppAPI 包装 render</span>
<span class="token keyword">function</span> <span class="token function">createAppAPI</span><span class="token punctuation">(</span><span class="token parameter">render</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// createApp createApp 方法接受的两个参数：根组件的对象和 prop</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token parameter">rootComponent<span class="token punctuation">,</span> rootProps <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token punctuation">{</span>
      _component<span class="token operator">:</span> rootComponent<span class="token punctuation">,</span>
      _props<span class="token operator">:</span> rootProps<span class="token punctuation">,</span>
      <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">rootContainer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建根组件的 vnode</span>
        <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>rootComponent<span class="token punctuation">,</span> rootProps<span class="token punctuation">)</span>
        <span class="token comment">// 利用渲染器渲染 vnode</span>
        <span class="token function">render</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> rootContainer<span class="token punctuation">)</span>
        app<span class="token punctuation">.</span>_container <span class="token operator">=</span> rootContainer
        <span class="token keyword">return</span> vnode<span class="token punctuation">.</span>component<span class="token punctuation">.</span>proxy
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> app
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>这里的代码的执行逻辑都是与平台无关的，启动标准渲染流程。但我们可能需要在外部重写这个方法，来完善特定平台下的渲染逻辑。</p>
<p>进入应用挂载阶段后，接下来就是核心渲染流程。</p>
<h3 id="核心渲染流程-创建-vnode-和渲染-vnode"><a class="header-anchor" href="#核心渲染流程-创建-vnode-和渲染-vnode">#</a> 核心渲染流程：创建 vnode 和渲染 vnode</h3>
<h4 id="创建-vnode"><a class="header-anchor" href="#创建-vnode">#</a> 创建 vnode</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// packages/runtime-core/src/vnode.ts</span>
<span class="token keyword">function</span> <span class="token function">_createVNode</span><span class="token punctuation">(</span>
  <span class="token parameter">type<span class="token operator">:</span> VNodeTypes <span class="token operator">|</span> ClassComponent <span class="token operator">|</span> <span class="token keyword">typeof</span> <span class="token constant">NULL_DYNAMIC_COMPONENT</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">(</span>Data <span class="token operator">&amp;</span> VNodeProps<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> unknown <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  patchFlag<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  dynamicProps<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  isBlockNode <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>

  <span class="token comment">// 对 vnode 类型信息编码</span>
  <span class="token keyword">const</span> shapeFlag <span class="token operator">=</span> <span class="token function">isString</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span>
    <span class="token operator">:</span> __FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> <span class="token function">isSuspense</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
      <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span>
      <span class="token operator">:</span> <span class="token function">isTeleport</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
        <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span>
        <span class="token operator">:</span> <span class="token function">isObject</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
          <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span>
          <span class="token operator">:</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
            <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">FUNCTIONAL_COMPONENT</span>
            <span class="token operator">:</span> <span class="token number">0</span>

  <span class="token keyword">const</span> vnode<span class="token operator">:</span> VNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    type<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
    key<span class="token operator">:</span> props <span class="token operator">&amp;&amp;</span> <span class="token function">normalizeKey</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
	
  <span class="token comment">// 标准化子节点，把不同数据类型的 children 转成数组或者文本类型</span>
  <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">)</span>

  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>工厂模式创建 vnode，并且对 props 做标准化处理、对 vnode 的类型信息编码、创建 vnode 对象，标准化子节点 children 。</p>
<h4 id="渲染-vnode"><a class="header-anchor" href="#渲染-vnode">#</a> 渲染 vnode</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> render<span class="token operator">:</span> <span class="token function-variable function">RootRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> isSVG</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 销毁组件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建或者更新组件</span>
    <span class="token function">patch</span><span class="token punctuation">(</span>container<span class="token punctuation">.</span>_vnode <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 缓存 vnode 节点，表示已经渲染</span>
  container<span class="token punctuation">.</span>_vnode <span class="token operator">=</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>patch 的功能是对比新旧节点，然后挂载 DOM 或者更新 DOM。</p>
<p>patch 会根据不同的组件类型派发任务给 process 处理。根 vnode 是个组件类型，故 processComponent进行处理，初次渲染调用 mountComponent 方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> patch<span class="token operator">:</span> <span class="token function-variable function">PatchFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token parameter">n1<span class="token punctuation">,</span>
    n2<span class="token punctuation">,</span>
    container<span class="token punctuation">,</span>
    anchor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentComponent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentSuspense <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    isSVG <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    slotScopeIds <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    optimized <span class="token operator">=</span> <span class="token boolean">false</span></span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果存在新旧节点, 且新旧节点类型不同，则销毁旧节点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isSameVNodeType</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      anchor <span class="token operator">=</span> <span class="token function">getNextHostNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
      n1 <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> shapeFlag <span class="token punctuation">}</span> <span class="token operator">=</span> n2
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> Text<span class="token operator">:</span><span class="token operator">...</span>
      <span class="token keyword">case</span> Comment<span class="token operator">:</span><span class="token operator">...</span>
      <span class="token keyword">case</span> Static<span class="token operator">:</span><span class="token operator">...</span>
      <span class="token keyword">case</span> Fragment<span class="token operator">:</span><span class="token operator">...</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token operator">...</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">processComponent</span><span class="token punctuation">(</span>
            n1<span class="token punctuation">,</span>
            n2<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token operator">...</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
          

 <span class="token keyword">const</span> <span class="token function-variable function">processComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> isSVG<span class="token punctuation">,</span> optimized</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 挂载组件</span>
   <span class="token function">mountComponent</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> isSVG<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 更新组件</span>
    <span class="token function">updateComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 

<span class="token comment">// 挂载组件</span>
<span class="token keyword">const</span> <span class="token function-variable function">mountComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">initialVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> isSVG<span class="token punctuation">,</span> optimized</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

  <span class="token comment">// 创建组件实例</span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">(</span>initialVNode<span class="token punctuation">.</span>component <span class="token operator">=</span> <span class="token function">createComponentInstance</span><span class="token punctuation">(</span>initialVNode<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// 设置组件实例</span>
  <span class="token function">setupComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>

  <span class="token comment">// 设置并运行带副作用的渲染函数，渲染组件内容</span>
  <span class="token function">setupRenderEffect</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> initialVNode<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> isSVG<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div></template>