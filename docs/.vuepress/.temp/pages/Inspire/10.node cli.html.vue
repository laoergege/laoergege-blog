<template><ul>
<li>
<p>制作</p>
</li>
<li>
<ul>
<li>package bin</li>
<li>#! /usr/bin/env node</li>
<li>解析命令行参数</li>
<li>任务执行</li>
<li>npm link 全局测试</li>
</ul>
</li>
<li>
<p>参数解析</p>
<ul>
<li>minimist</li>
<li>commander</li>
<li>yargs</li>
</ul>
</li>
<li>
<p>交互</p>
<ul>
<li><a href="https://github.com/SBoudrias/Inquirer.js" target="_blank" rel="noopener noreferrer">Inquirer.js<OutboundLink/></a></li>
</ul>
</li>
<li>
<p>shell</p>
<ul>
<li>execa</li>
</ul>
</li>
<li>
<p>装饰</p>
</li>
<li>
<ul>
<li>
<p>颜色</p>
</li>
<li>
<ul>
<li>chalk</li>
</ul>
</li>
<li>
<p>动画</p>
</li>
<li>
<ul>
<li>进度条 node-progress</li>
</ul>
</li>
<li>
<p>文字</p>
</li>
<li>
<ul>
<li>boxen</li>
</ul>
</li>
</ul>
</li>
<li>
<p>其他</p>
<ul>
<li>node-tmp</li>
</ul>
</li>
</ul>
<p><code>commander</code>只是实现了命令行参数与回复一对一的固定功能，也就是一个命令必然对应一个回复</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'commander'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  co <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'co'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> appInfo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./../package.json'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  asyncFunc <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./../common/asyncfunc.js'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">allowUnknownOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
program<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span>appInfo<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">'init'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">'初始化当前目录doc.json文件'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">co</span><span class="token punctuation">(</span>asyncFunc<span class="token punctuation">.</span>initAction<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">'show'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">'显示配置文件状态'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">co</span><span class="token punctuation">(</span>asyncFunc<span class="token punctuation">.</span>showAction<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">'run'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">'启动程序'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">co</span><span class="token punctuation">(</span>asyncFunc<span class="token punctuation">.</span>runAction<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">'modifyhook'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">'修改项目下的hook文件'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">co</span><span class="token punctuation">(</span>asyncFunc<span class="token punctuation">.</span>modifyhookAction<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">env</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'不存在命令 "%s"'</span><span class="token punctuation">,</span> env<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'--help'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'  Examples:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'    $ createDOC --help'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'    $ createDOC -h'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'    $ createDOC show'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div></template>