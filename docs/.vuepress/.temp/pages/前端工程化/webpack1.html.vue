<template><blockquote>
<p>本文是对官方文档的学习记录，更多细节请参考 webpack 官方文档</p>
</blockquote>
<h1 id="content-table"><a class="header-anchor" href="#content-table">#</a> Content Table</h1>
<ul>
<li><a href="#content-table">Content Table</a>
<ul>
<li><a href="#webpack-cli">webpack-cli</a></li>
<li><a href="#%E7%BB%93%E5%90%88-npx-%E6%88%96%E8%80%85-npm-script-%E8%BF%90%E8%A1%8C-webpack-%E5%B7%A5%E5%85%B7">结合 npx 或者 npm script 运行 webpack 工具</a></li>
<li><a href="#%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86">资源管理</a>
<ul>
<li><a href="#%E5%B8%B8%E7%94%A8-loader">常用 loader</a>
<ul>
<li><a href="#%E6%A0%B7%E5%BC%8F">样式</a></li>
<li><a href="#imagesfont">images、font</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E8%BE%93%E5%87%BA%E7%AE%A1%E7%90%86">输出管理</a>
<ul>
<li><a href="#%E5%85%B6%E4%BB%96%E8%BE%93%E5%87%BA%E6%96%B9%E5%BC%8F">其他输出方式</a></li>
</ul>
</li>
<li><a href="#%E5%BC%80%E5%8F%91">开发</a>
<ul>
<li><a href="#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">环境变量</a></li>
<li><a href="#sourcemap">SourceMap</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-cheap-%E7%89%B9%E6%80%A7%E4%B8%8B-sourcemap-%E4%B8%8D%E5%8C%85%E5%90%AB%E5%88%97%E4%BF%A1%E6%81%AF%E4%B9%9F%E4%B8%8D%E5%8C%85%E5%90%AB-loaders-%E7%9A%84-sourcemap">什么是 cheap 特性下 sourcemap 不包含列信息，也不包含 loaders 的 sourcemap</a></li>
<li><a href="#%E4%B8%8D%E5%90%8C%E5%9C%BA%E6%99%AF%E4%B8%8B-devtool-%E7%9A%84%E9%80%89%E6%8B%A9">不同场景下 devtool 的选择</a></li>
<li><a href="#chrome-devtool-source">chrome devtool source</a></li>
</ul>
</li>
<li><a href="#webpack-dev-server">webpack-dev-server</a>
<ul>
<li><a href="#%E5%90%AF%E7%94%A8%E7%83%AD%E6%A8%A1%E5%9D%97%E6%9B%BF%E6%8D%A2">启用热模块替换</a></li>
<li><a href="#%E7%83%AD%E6%A8%A1%E5%9D%97%E6%9B%BF%E6%8D%A2%E5%8E%9F%E7%90%86">热模块替换原理</a></li>
<li><a href="#%E8%AE%A9%E4%BB%A3%E7%A0%81%E6%94%AF%E6%8C%81%E7%83%AD%E6%A8%A1%E5%9D%97%E6%9B%BF%E6%8D%A2">让代码支持热模块替换</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%9E%84%E5%BB%BA%E4%BC%98%E5%8C%96">构建优化</a>
<ul>
<li><a href="#%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6">构建速度</a></li>
<li><a href="#%E5%BA%94%E7%94%A8%E4%BC%98%E5%8C%96">应用优化</a>
<ul>
<li><a href="#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86">代码拆分</a></li>
<li><a href="#mini-css-extract-plugin-%E6%8F%90%E5%8F%96%E6%A0%B7%E5%BC%8F"><code>mini-css-extract-plugin</code> 提取样式</a></li>
<li><a href="#tree-shaking%E8%B7%B3%E8%BF%87">tree shaking(跳过)</a></li>
</ul>
</li>
<li><a href="#%E7%BC%93%E5%AD%98">缓存</a></li>
</ul>
</li>
<li><a href="#%E5%85%B6%E4%BB%96">其他</a>
<ul>
<li><a href="#%E9%85%8D%E7%BD%AE%E6%80%9D%E8%B7%AF">配置思路</a></li>
<li><a href="#%E5%86%85%E8%81%94%E8%AF%AD%E6%B3%95">内联语法</a></li>
<li><a href="#mode">mode</a></li>
<li><a href="#%E6%9E%84%E5%BB%BA%E7%9B%AE%E6%A0%87-target">构建目标 target</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="webpack-cli"><a class="header-anchor" href="#webpack-cli">#</a> webpack-cli</h2>
<h2 id="结合-npx-或者-npm-script-运行-webpack-工具"><a class="header-anchor" href="#结合-npx-或者-npm-script-运行-webpack-工具">#</a> 结合 npx 或者 npm script 运行 webpack 工具</h2>
<p>npx 是 npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。npx 会帮你执行依赖包里的二进制文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会临时帮你安装！</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx webpack -v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用 npm scripts，我们可以像使用 npx 那样通过模块名引用本地安装的 npm packages。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
      <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="资源管理"><a class="header-anchor" href="#资源管理">#</a> 资源管理</h2>
<p>在 web 开发上，除了 JS 代码，还少不了像图片和样式等的管理。webpack 作为一个打包工具，以 JS 代码为入口，除了引入其他模块 JavaScript，还可以通过 loader 引入任何其他类型的文件，根据依赖图，动态打包管理所有依赖。</p>
<h3 id="常用-loader"><a class="header-anchor" href="#常用-loader">#</a> 常用 loader</h3>
<h4 id="样式"><a class="header-anchor" href="#样式">#</a> 样式</h4>
<ul>
<li>style-loader 将样式注入到 DOM 中</li>
<li>css-loader (The css-loader interprets <code>@import and url()</code> like <code>import/require()</code> and will resolve them. His behavior is like file-loader)</li>
<li>postcss-loader</li>
</ul>
<h4 id="images、font"><a class="header-anchor" href="#images、font">#</a> images、font</h4>
<p>图片字体等其他文件处理，一般情况是通过处理相对依赖路径，复制移动到对应构建目录下，并替换成相应路径。</p>
<ul>
<li>file-loader (The file-loader resolves <code>import/require()</code> on a file into a url and emits the file into the output directory.)</li>
<li>url-loader (url-loader works like file-loader, but can return a DataURL if the file is smaller than a byte limit)</li>
<li>html-loader(html)</li>
</ul>
<p>其他文件类型加载，以及更多 loader 查找及分类参考 <a href="https://webpack.js.org/loaders" target="_blank" rel="noopener noreferrer">https://webpack.js.org/loaders<OutboundLink/></a></p>
<h2 id="输出管理"><a class="header-anchor" href="#输出管理">#</a> 输出管理</h2>
<ul>
<li>html-webpack-plugin</li>
<li>clean-webpack-plugin</li>
</ul>
<h3 id="其他输出方式"><a class="header-anchor" href="#其他输出方式">#</a> 其他输出方式</h3>
<h2 id="开发"><a class="header-anchor" href="#开发">#</a> 开发</h2>
<h3 id="环境变量"><a class="header-anchor" href="#环境变量">#</a> 环境变量</h3>
<h3 id="sourcemap"><a class="header-anchor" href="#sourcemap">#</a> SourceMap</h3>
<p>当源码经过编译(babel 之类编译)打包压缩成一个 bundle 文件后，一旦出项错误或警告，堆栈跟踪只会指向该 bundle 文件，而 <em>source map</em> 能够让我们准确地知道错误来自于哪个源文件。</p>
<p>关于 scource map 的原理及作用，以下两篇讲得非常详细:</p>
<ul>
<li><a href="http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html" target="_blank" rel="noopener noreferrer">JavaScript Source Map 详解<OutboundLink/></a></li>
<li><a href="https://blog.teamtreehouse.com/introduction-source-maps" target="_blank" rel="noopener noreferrer">Introduction to JavaScript Source Maps<OutboundLink/></a></li>
</ul>
<p>但最让人困惑的是 webpack devtool 的 source map 选项:</p>
<ul>
<li>none</li>
<li>cheap-eval-source-map</li>
<li>cheap-module-eval-source-map</li>
<li>cheap-module-source-map</li>
<li>cheap-source-map</li>
<li>eval</li>
<li>eval-source-map</li>
<li>hidden-source-map</li>
<li>inline-source-map</li>
<li>inline-cheap-source-map</li>
<li>inline-cheap-module-source-map</li>
<li>nosources-source-map</li>
<li>source-map</li>
</ul>
<p>很容易让人一头雾水，而且官方文档也没有详细说明其差别。</p>
<p>在接下了解之前，我们先了解下一份源码到最终生产环境的经过可能是这样子:</p>
<p>源码 =&gt; 转化后代码 =&gt; 生成后代码 =&gt; 打包后的代码</p>
<ul>
<li>打包后的代码：将所有生成的代码视为一大块代码。你看不到相互分离的模块。</li>
<li>生成后的代码：每个模块相互分离，并用模块名称进行注释。可以看到 webpack 生成的代码。示例：你会看到类似 <code>var module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42); module__WEBPACK_IMPORTED_MODULE_1__.a();，而不是 import {test} from &quot;module&quot;; test();</code>。</li>
<li>转换过的代码：每个模块相互分离，并用模块名称进行注释。可以看到 webpack 转换前、loader 转译后的代码。示例：你会看到类似<code>import {test} from &quot;module&quot;; var A = function(_test) { ... }(test);，而不是 import {test} from &quot;module&quot;; class A extends test {}</code>，即似经过babel之类转化后的代码。</li>
<li>原始源代码：即我们所编写的代码。</li>
</ul>
<p>使用不用的模式选项，我们能定位到不同的源之前。例如使用 <code>source-map</code> 我们能定位到源码，而 <code>eval</code> 只能看到生成后的代码。</p>
<p>看似配置项很多， 其实只是主要五个关键字eval，source-map，cheap，module，inline的任意组合。这五个关键字每一项都代表一个特性， 这四种特性可以任意组合。它们分别代表以下五种特性:</p>
<ul>
<li>eval：使用eval包裹生成后的模块代码</li>
<li>source-map： 产生.map文件</li>
<li>cheap： 不包含列信息（关于列信息的解释下面会有详细介绍)也不包含loader的sourcemap</li>
<li>module： 包含loader的sourcemap（比如jsx to js ，babel的sourcemap）</li>
<li>inline： 将.map作为DataURI嵌入，不单独生成.map文件（这个配置项比较少见）</li>
</ul>
<p>总结来说，webpack 的 source map 主要只有 <code>eval</code> 和 <code>source-map</code> 模式。两者区别是 <code>eval</code> 模式是使用 eval 将 webpack 中每个模块包裹，然后在模块末尾添加模块来源 <code>//# souceURL</code>， 依靠 souceURL 找到原始代码的位置。包含 eval 关键字的配置项并不单独产生.map文件（ eval 模式有点特殊， 它和其他模式不一样的地方是它依靠sourceURL来定位原始代码， 而其他所有选项都使用.map文件的方式来定位）。包含 <code>source-map</code> 关键字的配置项都会产生一个.map文件，该文件保存有原始代码与运行代码的映射关系， 浏览器可以通过它找到原始代码的位置。（注：包含inline关键字的配置项也会产生.map文件，但是这个map文件是经过base64编码作为DataURI嵌入）。其他的模式都可看作是这两种衍生而来，多了其他的特性。举个列子：<code>eval-source-map</code> 是 <code>eval</code> 和 <code>source-map</code> 的组合，可知使用eavl语句包括模块，也产生了.map文件。webpack将.map文件作为DataURI替换eval模式中末尾的 <code>//# souceURL</code>。</p>
<p>可探究不同 devtool 的<a href="https://github.com/webpack/webpack/tree/master/examples/source-map" target="_blank" rel="noopener noreferrer">官方示列<OutboundLink/></a>。</p>
<h4 id="什么是-cheap-特性下-sourcemap-不包含列信息-也不包含-loaders-的-sourcemap"><a class="header-anchor" href="#什么是-cheap-特性下-sourcemap-不包含列信息-也不包含-loaders-的-sourcemap">#</a> 什么是 cheap 特性下 sourcemap 不包含列信息，也不包含 loaders 的 sourcemap</h4>
<ul>
<li>不包含列信息：意为着 sourcemap 没有生成列映射(column mapping)，只是映射行数，相关理解可参考 <a href="https://segmentfault.com/a/1190000008315937#articleHeader4" target="_blank" rel="noopener noreferrer">打破砂锅问到底：详解Webpack中的sourcemap<OutboundLink/></a>，（PS：上面的内容也是参考该文章）。</li>
<li>不包含 loaders 的 sourcemap：意味着只能映射到转化后的代码，例如，<code>cheap-eval-source-map</code> 它会忽略源自 loader 的 source map，并且仅显示转译后的代码，当加上 module关键字为 <code>cheap-module-eval-source-map</code>, webpack 将会添加 loader 的 sourcemap。</li>
</ul>
<h4 id="不同场景下-devtool-的选择"><a class="header-anchor" href="#不同场景下-devtool-的选择">#</a> 不同场景下 devtool 的选择</h4>
<p><a href="https://webpack.docschina.org/configuration/devtool" target="_blank" rel="noopener noreferrer">https://webpack.docschina.org/configuration/devtool<OutboundLink/></a> 继续读</p>
<h4 id="chrome-devtool-source"><a class="header-anchor" href="#chrome-devtool-source">#</a> chrome devtool source</h4>
<h3 id="webpack-dev-server"><a class="header-anchor" href="#webpack-dev-server">#</a> webpack-dev-server</h3>
<p>webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。</p>
<h4 id="启用热模块替换"><a class="header-anchor" href="#启用热模块替换">#</a> 启用热模块替换</h4>
<p>热模块替换可以帮助我们在开发过程中无需重新刷新网页而更新相应更改的 JS/CSS 代码，提高开发效率。</p>
<blockquote>
<p>注：该特性仅适用开发环境</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
 <span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
      contentBase<span class="token operator">:</span> <span class="token string">'./dist'</span><span class="token punctuation">,</span>
      hot<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span>
      <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h4 id="热模块替换原理"><a class="header-anchor" href="#热模块替换原理">#</a> 热模块替换原理</h4>
<ul>
<li>https://webpack.docschina.org/concepts/hot-module-replacement/</li>
<li>http://shepherdwind.com/2017/02/07/webpack-hmr-principle/</li>
<li>https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack#how-does-it-work</li>
</ul>
<blockquote>
<p>热更新失败会自动刷新整个页面</p>
</blockquote>
<h4 id="让代码支持热模块替换"><a class="header-anchor" href="#让代码支持热模块替换">#</a> 让代码支持热模块替换</h4>
<h2 id="构建优化"><a class="header-anchor" href="#构建优化">#</a> 构建优化</h2>
<ul>
<li>构建优化
<ul>
<li>构建速度
<ul>
<li>编译
<ul>
<li>happypack</li>
<li>thread-loader</li>
<li>webpack.DllPlugin</li>
</ul>
</li>
<li>压缩</li>
</ul>
</li>
<li>应用优化
<ul>
<li>缓存</li>
<li>代码拆分</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="构建速度"><a class="header-anchor" href="#构建速度">#</a> 构建速度</h3>
<p>提高 webpack 构建速度，可从提高编译和压缩速度两方面入手。</p>
<h3 id="应用优化"><a class="header-anchor" href="#应用优化">#</a> 应用优化</h3>
<h4 id="代码拆分"><a class="header-anchor" href="#代码拆分">#</a> 代码拆分</h4>
<p>JS 代码拆分请移步到 <RouterLink to="/前端工程化/webpack4%E7%9A%84optimization.splitChunks%E5%AE%9E%E8%B7%B5%E8%AE%B0%E5%BD%95.html">webpack4的optimization.splitChunks实践记录</RouterLink>。</p>
<h4 id="mini-css-extract-plugin-提取样式"><a class="header-anchor" href="#mini-css-extract-plugin-提取样式">#</a> <code>mini-css-extract-plugin</code> 提取样式</h4>
<h4 id="tree-shaking-跳过"><a class="header-anchor" href="#tree-shaking-跳过">#</a> tree shaking(跳过)</h4>
<p><em>tree shaking</em> 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。</p>
<p>使用 tree shaking 必须注意以下几点:</p>
<ul>
<li>依赖 ES2015 模块语法（即 import 和 export）。</li>
<li>确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块。</li>
<li>在项目 package.json 文件中，添加一个 &quot;sideEffects&quot; 属性。</li>
<li>通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shaking。</li>
</ul>
<p>optimization.usedExports
optimization.sideEffects</p>
<h3 id="缓存"><a class="header-anchor" href="#缓存">#</a> 缓存</h3>
<p><a href="https://webpack.docschina.org/concepts/manifest" target="_blank" rel="noopener noreferrer">https://webpack.docschina.org/concepts/manifest<OutboundLink/></a></p>
<h2 id="其他"><a class="header-anchor" href="#其他">#</a> 其他</h2>
<h3 id="配置思路"><a class="header-anchor" href="#配置思路">#</a> 配置思路</h3>
<ol>
<li>多类型文件配置，webpack-merge</li>
<li>使用常量或变量、JS控制流，函数生成配置</li>
</ol>
<p>webpack 配置可导出为 object, function 或 Promise，还可以将其导出为多个配置。</p>
<h3 id="内联语法"><a class="header-anchor" href="#内联语法">#</a> 内联语法</h3>
<p>import Styles from 'style-loader!css-loader?modules!./styles.css';
使用 ! 将资源中的 loader 分开 + 使用 ? 传递查询参数 + 文件路径</p>
<h3 id="mode"><a class="header-anchor" href="#mode">#</a> mode</h3>
<p>不同 <code>mode</code> 下，webpack 会开启或关闭不同插件配置，详情配置见 <a href="https://webpack.docschina.org/concepts/mode/" target="_blank" rel="noopener noreferrer">https://webpack.docschina.org/concepts/mode/<OutboundLink/></a>。</p>
<p>选项	描述
development
会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
production
会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。
none
退出任何默认优化选项</p>
<h3 id="构建目标-target"><a class="header-anchor" href="#构建目标-target">#</a> 构建目标 target</h3>
<p>webpack 能够为不同目标环境构建编译，主要是区别不同环境使用什么方法来加载模块</p>
</template>