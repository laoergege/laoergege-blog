<template><h2 id="知识体系"><a class="header-anchor" href="#知识体系">#</a> 知识体系</h2>
<ul>
<li>workflow
<ul>
<li>由 name、on、jobs 三个基本顶级字段组成</li>
<li>配置</li>
<li>一个 workflow 由这 name、on、jobs 三个基本顶级字段组成</li>
<li><a href="https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">workflow syntax<OutboundLink/></a>
<ul>
<li>events 定义事件，触发工作流
<ul>
<li>Github 事件</li>
<li>时间调度事件</li>
<li>外部触发事件</li>
</ul>
</li>
<li>context and expression syntax</li>
<li><a href="https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds" target="_blank" rel="noopener noreferrer">job.needs<OutboundLink/></a> 工作流运行由一个或多个作业组成，默认情况下，作业并行运行， 要按顺序运行作业，需要配置 needs 关键字</li>
</ul>
</li>
</ul>
</li>
<li><a href="https://help.github.com/en/actions/building-actions" target="_blank" rel="noopener noreferrer">actions<OutboundLink/></a>
<ul>
<li><a href="https://help.github.com/en/actions/building-actions/metadata-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">action.yml<OutboundLink/></a></li>
<li>实现类型
<ul>
<li>JavaScript</li>
<li>Docker</li>
</ul>
</li>
<li>usage in workflow</li>
<li><a href="https://github.com/actions/toolkit" target="_blank" rel="noopener noreferrer">toolkit<OutboundLink/></a></li>
<li>环境变量
<ul>
<li><a href="https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables" target="_blank" rel="noopener noreferrer">github 默认环境变量<OutboundLink/></a>
<ul>
<li>自定义环境变量时需注意：保留 <code>GitHub</code> 环境变量前缀供 GitHub 内部使用。 如果使用 GITHUB 前缀设置环境变量或 secret，则会导致错误。</li>
<li>设置指向文件系统上某个位置的任何新环境变量都应该有一个 <code>PATH</code> 后缀。</li>
</ul>
</li>
<li><a href="https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token" target="_blank" rel="noopener noreferrer">GITHUB_TOKEN<OutboundLink/></a></li>
<li>webhook event payload（GITHUB_EVENT_PATH，）</li>
</ul>
</li>
<li>开发
<ul>
<li>测试</li>
<li>versioning</li>
</ul>
</li>
</ul>
</li>
<li>command
<ul>
<li><a href="https://help.github.com/en/actions/reference/workflow-commands-for-github-actions" target="_blank" rel="noopener noreferrer">https://help.github.com/en/actions/reference/workflow-commands-for-github-actions<OutboundLink/></a></li>
<li><a href="https://github.com/actions/toolkit/blob/master/docs/commands.md" target="_blank" rel="noopener noreferrer">https://github.com/actions/toolkit/blob/master/docs/commands.md<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h2 id="workflow"><a class="header-anchor" href="#workflow">#</a> workflow</h2>
<p>一个 workflow 由这 name、on、jobs 三个基本顶级字段组成</p>
<p><strong>workflow demo</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># This is a basic workflow to help you get started with Actions</span>

<span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token comment"># Controls when the action will run. Triggers the workflow on push or pull request</span>
<span class="token comment"># events but only for the master branch</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token comment"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># This workflow contains a single job called "build"</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token punctuation">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></template>