<template><p>微信小程序项目 webpack 工程化，最简单的思路：使用 webpack 输出符合微信项目文件规范！</p>
<p>本项目使用的是 webpack + typescript + sass</p>
<h2 id="entry"><a class="header-anchor" href="#entry">#</a> entry</h2>
<p>微信小程序应用是多页面结构应用，每个页面由 JS、JSON、WXSS、WXML 文件构成</p>
<p><img src="@source/../images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200613134917.png" alt=""></p>
<p>在 app.json 中 pages 注册页面</p>
<p><img src="@source/../images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200613135044.png" alt=""></p>
<p>而我们需要获取 pages 和 app 作为 webpack 的 entry，大概数据结构如下：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  app<span class="token operator">:</span> './app.ts'<span class="token punctuation">,</span>
  'pages/index/index'<span class="token operator">:</span> './pages/index/index.ts'<span class="token punctuation">,</span>
  'pages/logs/logs'<span class="token operator">:</span> './pages/logs/logs.ts'
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>除了需要处理的文件，如 ts、scss、js，其他文件统统通过 <a href="https://github.com/webpack-contrib/copy-webpack-plugin" target="_blank" rel="noopener noreferrer">copy-webpack-plugin<OutboundLink/></a> 复制到 miniprogramRoot 指定的目录下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    patterns<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">from</span><span class="token operator">:</span> <span class="token string">'.'</span><span class="token punctuation">,</span>
            to<span class="token operator">:</span> <span class="token string">'.'</span><span class="token punctuation">,</span>
            globOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
                ignore<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">'**/*.ts'</span><span class="token punctuation">,</span>
                    <span class="token string">'**/*.scss'</span><span class="token punctuation">,</span>
                    <span class="token string">'**/*.js'</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="分离-runtime"><a class="header-anchor" href="#分离-runtime">#</a> 分离 runtime</h3>
<p>每个 entry 文件 webpack 打包后内容都包含 webpack runtime 的代码，开发小程序的包的是由严格的大小限制，我们也要减少多余重复的代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 值"single"会创建一个在所有生成块之间共享的运行时文件</span>
    runtimeChunk<span class="token operator">:</span> <span class="token string">'single'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>上面操作会分离 runtime 成单独文件，而小程序的主入口程序是 app，所以我们需要把 runtime 的代码合并到 app 中去，不然小程序会运行不起来，编写 webpack 插件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> ConcatSource <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack-sources'</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">RuntimePlugin</span> <span class="token punctuation">{</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">'RuntimePlugin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

            <span class="token keyword">const</span> runtime <span class="token operator">=</span> compilation<span class="token punctuation">.</span><span class="token function">getAsset</span><span class="token punctuation">(</span><span class="token string">'runtime.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>source
            <span class="token keyword">const</span> source <span class="token operator">=</span> compilation<span class="token punctuation">.</span><span class="token function">getAsset</span><span class="token punctuation">(</span><span class="token string">'app.js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>source

            <span class="token comment">// merge runtime into app</span>
            compilation<span class="token punctuation">.</span><span class="token function">updateAsset</span><span class="token punctuation">(</span><span class="token string">'app.js'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ConcatSource</span><span class="token punctuation">(</span>runtime<span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token comment">// delete runtime</span>
            <span class="token keyword">delete</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span><span class="token string">'runtime.js'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> RuntimePlugin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="babel-typescript"><a class="header-anchor" href="#babel-typescript">#</a> babel + typescript</h2>
<h2 id="scss-支持"><a class="header-anchor" href="#scss-支持">#</a> scss 支持</h2>
<p>小程序页面的 wxss 和 js 文件是同处于同一级目录下，同样需要多增加 scss 文件的入口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// entry.js</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token comment">// add app entry</span>
    pages<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> pages<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// ts entry</span>
        pre<span class="token punctuation">[</span>next<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>next<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.ts</span><span class="token template-punctuation string">`</span></span>
        <span class="token comment">// scss entry</span>
        pre<span class="token punctuation">[</span>next <span class="token operator">+</span> <span class="token string">'.scss'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>next<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.scss</span><span class="token template-punctuation string">`</span></span>
        <span class="token keyword">return</span> pre
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>通过 <a href="https://github.com/webpack-contrib/file-loader" target="_blank" rel="noopener noreferrer">file-loader<OutboundLink/></a> 将编译后的内容提取复制到对应路径下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">'file-loader'</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
                useRelativePath<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">'[path][name].wxss'</span><span class="token punctuation">,</span>
                context<span class="token operator">:</span> miniprogram_src
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// Compiles Sass to CSS</span>
        <span class="token string">'sass-loader'</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>构建后， dist 目录下会生 <code>xxx.scss.js</code> 文件，这是我们不需要的，需要在构建后进行删除</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token keyword">class</span> <span class="token class-name">RuntimePlugin</span> <span class="token punctuation">{</span>

    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">'RuntimePlugin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token operator">...</span>
            <span class="token comment">// delete the .scss.js file which will emit</span>
            <span class="token keyword">let</span> <span class="token punctuation">{</span> entry <span class="token punctuation">}</span> <span class="token operator">=</span> compiler<span class="token punctuation">.</span>options
            <span class="token keyword">let</span> entryArray <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>entry<span class="token punctuation">)</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> entryArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> entry <span class="token operator">=</span> entryArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'.scss'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">delete</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>entry <span class="token operator">+</span> <span class="token string">'.js'</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="npm-包"><a class="header-anchor" href="#npm-包">#</a> npm 包</h2>
<h2 id="多环境变量"><a class="header-anchor" href="#多环境变量">#</a> 多环境变量</h2>
<p>多环境变量支持，很简单，使用 <a href="https://github.com/mrsteele/dotenv-webpack" target="_blank" rel="noopener noreferrer">dotenv-webpack<OutboundLink/></a> 插件即可。
多环境变量没什么好讲，这里主要是调整 webpack 配置代码结构，将输入、修改，输出分离。按照常用习惯，.env 文件默认为通用环境变量，.env.[env-mode] 则为特定环境模式下的变量，优先级更高。</p>
<p><img src="@source/../images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200616214558.png" alt=""></p>
<ul>
<li>CLI 为与用户交互，获取输入</li>
<li>Input Handle 主要对输入的数据处理</li>
<li>Create Config 创建配置对象</li>
<li>Merge Default Config 合并默认配置</li>
<li>Opreation Config 修改配置操作</li>
<li>Ouput Config For Webpack 输出 webpack 配置</li>
</ul>
<p>这里主要提到下 <a href="https://github.com/neutrinojs/webpack-chain" target="_blank" rel="noopener noreferrer">webpack-chain<OutboundLink/></a>， 将 webpack config 配置对象化，并抽象 webpack 配置为可链式操作的API，方便修改配置且修改方式标准化，有助于跨项目共享。非常值得学习。</p>
</template>