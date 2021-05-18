<template><h1 id="nodejs-安装及基本使用"><a class="header-anchor" href="#nodejs-安装及基本使用">#</a> NodeJS 安装及基本使用</h1>
<p>目录</p>
<ul>
<li><a href="#nodejs-%E5%AE%89%E8%A3%85%E5%8F%8A%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">NodeJS 安装及基本使用</a>
<ul>
<li><a href="#%E5%AE%89%E8%A3%85">安装</a>
<ul>
<li><a href="#node-%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86">Node 版本管理</a></li>
</ul>
</li>
<li><a href="#%E4%BD%BF%E7%94%A8">使用</a></li>
<li><a href="#%E8%AF%BB%E5%8F%96%E8%BE%93%E5%85%A5">读取输入</a></li>
<li><a href="#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA">日志输出</a></li>
<li><a href="#%E4%BA%A4%E4%BA%92">交互</a></li>
<li><a href="#node-%E7%A8%8B%E5%BA%8F%E9%80%80%E5%87%BA">Node 程序退出</a></li>
</ul>
</li>
</ul>
<h2 id="安装"><a class="header-anchor" href="#安装">#</a> 安装</h2>
<p>参考 <a href="https://nodejs.dev/how-to-install-nodejs" target="_blank" rel="noopener noreferrer">How to install Node.js<OutboundLink/></a></p>
<h3 id="node-版本管理"><a class="header-anchor" href="#node-版本管理">#</a> Node 版本管理</h3>
<p><a href="https://github.com/creationix/nvm" target="_blank" rel="noopener noreferrer">nvm<OutboundLink/></a></p>
<h2 id="使用"><a class="header-anchor" href="#使用">#</a> 使用</h2>
<p>使用 node 执行 JS 脚本程序：</p>
<ul>
<li>Command Line，例如 <code>node app.js</code></li>
<li><a href="https://nodejs.dev/how-to-use-the-nodejs-repl" target="_blank" rel="noopener noreferrer">Node REPL<OutboundLink/></a>，终端交互式解析器
<ul>
<li>. 命令
<ul>
<li>.help：显示点命令帮助</li>
<li>.editor：使编辑者更容易编写多行JavaScript代码。 进入此模式后，输入ctrl-D运行您编写的代码。</li>
<li>.break：输入多行表达式时，输入.break命令将中止进一步的输入。 与按Ctrl-C相同。</li>
<li>.clear：将REPL上下文重置为空对象，并清除当前正在输入的任何多行表达式。</li>
<li>.load：加载相对于当前工作目录的JavaScript文件</li>
<li>.save：将您在REPL会话中输入的所有内容保存到文件中（指定文件名）</li>
<li>.exit：存在REPL（与按两次Ctrl-C相同）</li>
</ul>
</li>
<li>查询全局对象及方法
<ul>
<li>global. + <code>tab</code> 键</li>
<li>global.String. + <code>tab</code> 键</li>
<li>xx.xx.xx + <code>tab</code> 键</li>
</ul>
</li>
<li><code>_</code> 返回上一计算结果</li>
</ul>
</li>
</ul>
<h2 id="读取输入"><a class="header-anchor" href="#读取输入">#</a> 读取输入</h2>
<ul>
<li>读取环境变量 <code>process.env.[xx]</code></li>
<li>读取命令参数 <a href="https://nodejs.org/dist/latest-v12.x/docs/api/process.html#process_process_argv" target="_blank" rel="noopener noreferrer"><code>process.argv</code><OutboundLink/></a>
<ul>
<li>第一个元素是 node 执行程序路径（process.argv0）</li>
<li>第二个元素是 JS 脚本路径</li>
<li>从第三个位置开始，依次为其他相隔的输入参数</li>
</ul>
</li>
</ul>
<h2 id="日志输出"><a class="header-anchor" href="#日志输出">#</a> 日志输出</h2>
<ul>
<li><a href="https://nodejs.org/api/console.html" target="_blank" rel="noopener noreferrer">console<OutboundLink/></a>
<ul>
<li>console.log 打印结果，eg <code>console.log('My %s has %d years', 'cat', 2)</code>
<ul>
<li><code>%s</code> format a variable as a string</li>
<li><code>%d</code> format a variable as a number</li>
<li><code>%i</code> format a variable as its integer part only</li>
<li><code>%o</code> format a variable as an object</li>
</ul>
</li>
<li>console.count（label）统计调用次数</li>
<li>console.time（label）、console.timeEnd（label） 计算执行时间</li>
<li>console.trace 打印调用栈</li>
<li>自定义输出流<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> output <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">'./stdout.log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> errorOutput <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">'./stderr.log'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Custom simple logger</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Console</span><span class="token punctuation">(</span><span class="token punctuation">{</span> stdout<span class="token operator">:</span> output<span class="token punctuation">,</span> stderr<span class="token operator">:</span> errorOutput <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li>
</ul>
</li>
</ul>
<h2 id="交互"><a class="header-anchor" href="#交互">#</a> 交互</h2>
<p><a href="http://nodejs.cn/api/readline.html" target="_blank" rel="noopener noreferrer">readline<OutboundLink/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> readline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'readline'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建一个进程交互式窗口</span>
<span class="token keyword">const</span> rl <span class="token operator">=</span> readline<span class="token punctuation">.</span><span class="token function">createInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  input<span class="token operator">:</span> process<span class="token punctuation">.</span>stdin<span class="token punctuation">,</span>
  output<span class="token operator">:</span> process<span class="token punctuation">.</span>stdout
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

rl<span class="token punctuation">.</span><span class="token function">question</span><span class="token punctuation">(</span><span class="token string">'你如何看待 Node.js 中文网？'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">answer</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 一旦调用此代码，Node.js 应用程序将不会终止，直到 readline.Interface 关闭，因为接口在 input 流上等待接收数据</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">感谢您的宝贵意见：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>answer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  rl<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><a href="https://github.com/SBoudrias/Inquirer.js" target="_blank" rel="noopener noreferrer">Inquirer<OutboundLink/></a>，一个用于创建功能丰富的交互式命令行用户界面</p>
<h2 id="node-程序退出"><a class="header-anchor" href="#node-程序退出">#</a> Node 程序退出</h2>
<p>默认情况下，退出代码为 0（<code>process.exitCode = 0</code>），表示成功。不同的退出代码具有不同的含义，希望在自己的系统中使用这些退出代码，以使程序与其他程序进行通信，可参考 <a href="https://nodejs.org/api/process.html#process_exit_codes" target="_blank" rel="noopener noreferrer">Exit Codes<OutboundLink/></a></p>
<p>程序退出方式：</p>
<ul>
<li>手动退出按 “ctrl+ c” 两次</li>
<li>编程方式退出 <code>process.exit(code)</code></li>
<li>发送信号，<code>process.kill(pid, 'SIGKILL')</code> 发送信号到指定 node 进程，'SIGKILL' 会直接 kill 该进程，更多<a href="http://nodejs.cn/api/process.html#process_signal_events" target="_blank" rel="noopener noreferrer">信号事件<OutboundLink/></a></li>
</ul>
</template>