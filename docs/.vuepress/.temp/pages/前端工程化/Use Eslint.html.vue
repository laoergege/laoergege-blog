<template><h2 id="安装使用"><a class="header-anchor" href="#安装使用">#</a> 安装使用</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install eslint --save-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx eslint --init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>eslint yourfile.js
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="规则配置"><a class="header-anchor" href="#规则配置">#</a> 规则配置</h2>
<p>eslint 有两种配置方式:</p>
<ol>
<li>Configuration Comments - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。</li>
<li>Configuration Files - 使用 JavaScript、JSON 或者 YAML 文件为整个目录（处理你的主目录）和它的子目录指定配置信息。可以配置一个独立的 .eslintrc.* 文件，或者直接在 package.json 文件里的 eslintConfig 字段指定配置，ESLint 会查找和自动读取它们，再者，你可以在命令行运行时指定一个任意的配置文件。</li>
</ol>
<h3 id="eslintrc-文件配置选项"><a class="header-anchor" href="#eslintrc-文件配置选项">#</a> .eslintrc.* 文件配置选项</h3>
<p>书写规则:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>规则名: [值, 参数1, 参数2...]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中值可为:</p>
<ul>
<li>&quot;off&quot; or 0 - 关闭规则</li>
<li>&quot;warn&quot; or 1 - 将规则视为一个警告（不会影响退出码）</li>
<li>&quot;error&quot; or 2 - 将规则视为一个错误 (退出码为1)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// eslintrc.js</span>
<span class="token punctuation">{</span>   
    <span class="token comment">// 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量</span>
    <span class="token comment">// 更多环境变量 http://eslint.cn/docs/user-guide/configuring#specifying-environments</span>
    <span class="token string">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"browser"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
        <span class="token string">"plugin:vue/essential"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。你可以使用注释或在配置文件中定义全局变量。</span>
    <span class="token comment">// xx : "onlyread" | true | false</span>
    <span class="token comment">//      只读 | 可重写 | 不可重写</span>
    <span class="token comment">// 注意：要启用no-global-assign规则来禁止对只读的全局变量进行修改。</span>
    <span class="token comment">// 更多参考 http://eslint.cn/docs/user-guide/configuring#specifying-globals</span>
    <span class="token string">"globals"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"Atomics"</span><span class="token operator">:</span> <span class="token string">"readonly"</span><span class="token punctuation">,</span>
        <span class="token string">"SharedArrayBuffer"</span><span class="token operator">:</span> <span class="token string">"readonly"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 制定解析器</span>
    <span class="token string">"parser"</span><span class="token operator">:</span> <span class="token string">"babel-eslint"</span><span class="token punctuation">,</span>
    <span class="token comment">// 配置解析器</span>
    <span class="token comment">// 更多配置 http://eslint.cn/docs/user-guide/configuring#specifying-parser-options</span>
    <span class="token string">"parserOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"ecmaVersion"</span><span class="token operator">:</span> <span class="token number">2018</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 插件名称可以省略 eslint-plugin- 前缀。</span>
    <span class="token string">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 启用的规则及其各自的错误级别。</span>
    <span class="token string">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"indent"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"error"</span><span class="token punctuation">,</span>
            <span class="token number">4</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">"linebreak-style"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"error"</span><span class="token punctuation">,</span>
            <span class="token string">"windows"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">"quotes"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"error"</span><span class="token punctuation">,</span>
            <span class="token string">"single"</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">"semi"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">"error"</span><span class="token punctuation">,</span>
            <span class="token string">"never"</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="js-注释写法"><a class="header-anchor" href="#js-注释写法">#</a> JS 注释写法</h3>
<p>JS 注释写法控制以下三种规则:</p>
<ul>
<li>Environments -指定脚本的运行环境 每种环境都有一组特定的预定义全局变量</li>
<li>Globals -脚本在执行期间访问的额外全局变量</li>
<li>Rules -启用的规则及各自的错误级别</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>env
<span class="token comment">/* eslint-env node, mocha */</span>

global
<span class="token comment">/* global var1, var2 */</span>
<span class="token comment">/* global var1:false, var2:false */</span>

rules
<span class="token comment">/* eslint quotes: ["error", "double"], curly: 2 */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="开启关闭-eslint"><a class="header-anchor" href="#开启关闭-eslint">#</a> 开启关闭 eslint</h4>
<p>注释块，只控制单块 JS 语法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* eslint-disable */

alert('foo');

/* eslint-enable */
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>你也可以对指定的规则启用或禁用警告:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果在整个文件范围内禁止规则出现警告，将 /* eslint-disable */ 块注释放在文件顶部：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* eslint-disable */

alert('foo');
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以在你的文件中使用以下格式的行注释或块注释在某一特定的行上禁用所有规则：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在某一特定的行上禁用指定单个或者多个的规则：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="其他"><a class="header-anchor" href="#其他">#</a> 其他</h3>
<p>注：如果想重新定义某插件的规则或者制定特定环境变量时</p>
<p>配置写法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
    &quot;plugins&quot;: [&quot;example&quot;],
    &quot;env&quot;: {
        &quot;example/custom&quot;: true
    },
    &quot;rules&quot;: {
        &quot;example/custom&quot;: 0
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>注释写法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>foo(); // eslint-disable-line example/rule-name
foo(); /* eslint-disable-line example/rule-name */
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>用 <code>plugin/xxx</code> 路径写法。</p>
<h2 id="多重配置优先级"><a class="header-anchor" href="#多重配置优先级">#</a> 多重配置优先级</h2>
<h3 id="配置文件"><a class="header-anchor" href="#配置文件">#</a> 配置文件</h3>
<p>使用配置文件的第一种方式是通过 .eslintrc.* 和 package.json 文件。ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录（除非指定 root: true）。</p>
<p>如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：</p>
<ol>
<li>.eslintrc.js</li>
<li>.eslintrc.yaml</li>
<li>.eslintrc.yml</li>
<li>.eslintrc.json</li>
<li>.eslintrc(弃用)</li>
<li>package.json</li>
</ol>
<blockquote>
<p>注：当前文件目录下的配置文件优先级要高于父目录的配置文件</p>
</blockquote>
<h3 id="规则优先级"><a class="header-anchor" href="#规则优先级">#</a> 规则优先级</h3>
<p>完整的配置层次结构，从最高优先级最低的优先级，如下:</p>
<ol>
<li>行内配置
<ol>
<li><code>/*eslint-disable*/</code> 和 <code>/*eslint-enable*/</code></li>
<li><code>/*global*/</code></li>
<li><code>/*eslint*/</code></li>
<li><code>/*eslint-env*/</code></li>
</ol>
</li>
<li>命令行选项（或 CLIEngine 等价物）：
<ol>
<li>--global</li>
<li>--rule</li>
<li>--env</li>
<li>-c、--config</li>
</ol>
</li>
<li>项目级配置：
<ol>
<li>与要检测的文件在同一目录下的 .eslintrc.* 或 package.json 文件</li>
<li>继续在父级目录寻找 .eslintrc 或 package.json文件，直到根目录（包括根目录）或直到发现一个有&quot;root&quot;: true的配置。</li>
</ol>
</li>
<li>如果不是（1）到（3）中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置。</li>
</ol>
<h2 id="集成到工作流"><a class="header-anchor" href="#集成到工作流">#</a> 集成到工作流</h2>
<h3 id="vscode"><a class="header-anchor" href="#vscode">#</a> vscode</h3>
<h3 id="webpack"><a class="header-anchor" href="#webpack">#</a> webpack</h3>
</template>