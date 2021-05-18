<template><h1 id="前端规范实践总结"><a class="header-anchor" href="#前端规范实践总结">#</a> 前端规范实践总结</h1>
<p>本文主要是对项目中一些前端开发的工作流程及一些工具使用规范小总结</p>
<p><strong>内容目录</strong></p>
<ul>
<li><a href="#%E5%89%8D%E7%AB%AF%E8%A7%84%E8%8C%83%E5%AE%9E%E8%B7%B5%E6%80%BB%E7%BB%93">前端规范实践总结</a>
<ul>
<li><a href="#commit-%E8%A7%84%E8%8C%83">Commit 规范</a>
<ul>
<li><a href="#%E5%BF%85%E9%80%89%E7%B1%BB%E5%9E%8B">必选类型</a></li>
<li><a href="#%E5%88%97%E5%AD%90">列子</a></li>
</ul>
</li>
<li><a href="#gitlab-flow-%E8%A7%84%E8%8C%83">GitLab Flow 规范</a>
<ul>
<li><a href="#gitlab-flow-%E6%A8%A1%E5%9E%8B%E5%8E%9F%E5%88%99">GitLab Flow 模型原则</a></li>
<li><a href="#%E6%8F%90%E4%BA%A4%E6%B5%81%E7%A8%8B">提交流程</a></li>
</ul>
</li>
<li><a href="#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83eslint">代码规范（eslint）</a></li>
</ul>
</li>
</ul>
<h2 id="commit-规范"><a class="header-anchor" href="#commit-规范">#</a> Commit 规范</h2>
<blockquote>
<p><a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Commit Message Guidelines(Angular)<OutboundLink/></a></p>
</blockquote>
<p>提交 message 的结构如下所示</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;类型&gt;[可选的作用域]: &lt;描述&gt;

[可选的正文]

[可选的脚注]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="必选类型"><a class="header-anchor" href="#必选类型">#</a> 必选类型</h3>
<p>开发常用</p>
<ul>
<li>fix 修复 BUG</li>
<li>feat 新增功能</li>
<li>refactor 代码重构</li>
<li>perf 优化提升</li>
<li>ui UI 验收调整</li>
</ul>
<p>工具脚本相关</p>
<ul>
<li>build 构建系统（如，npm、webpack 之类）</li>
<li>ci</li>
<li>test</li>
</ul>
<p>项目管理</p>
<ul>
<li>style</li>
<li>revert</li>
<li>docs 文档变更</li>
</ul>
<p>其他</p>
<ul>
<li>chore</li>
</ul>
<h3 id="列子"><a class="header-anchor" href="#列子">#</a> 列子</h3>
<p>包含可选正文、脚注的提交</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>fix: correct minor typos in code

see the issue for details on the typos fixed

closes issue #12
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>包含可选作用域的提交说明</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>feat(lang): add polish language 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>包含 issue 或者 task ID</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>feat: allow provided config object to extend other configs(#1357)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>包含了可选的 ! 字符以提醒注意破坏性变更的提交说明</p>
<h2 id="gitlab-flow-规范"><a class="header-anchor" href="#gitlab-flow-规范">#</a> GitLab Flow 规范</h2>
<blockquote>
<p>1.以下默认熟悉 git 相关操作</p>
<p>2.阅读 <a href="https://docs.gitlab.com/ee/topics/gitlab_flow.html#commit-often-and-push-frequently" target="_blank" rel="noopener noreferrer">Introduction to GitLab Flow<OutboundLink/></a></p>
</blockquote>
<p>个人总结来说相比 <a href="https://docs.gitlab.com/ee/topics/gitlab_flow.html#github-flow-as-a-simpler-alternative" target="_blank" rel="noopener noreferrer">Github Flow<OutboundLink/></a> 的单一和 <a href="https://docs.gitlab.com/ee/topics/gitlab_flow.html#git-flow-and-its-problems" target="_blank" rel="noopener noreferrer">Git FLow<OutboundLink/></a> 的复杂，GitLab Flow 的单向流动合并模型更为清晰明了和多版本环境部署优势</p>
<p><img src="@source/前端工程化/images/WechatIMG149.jpeg" alt=""></p>
<ul>
<li>version 版本存储分支</li>
<li>developer 个人开发分支</li>
<li>master 持续集成分支</li>
<li>test 测试服分支</li>
<li>pre 预发服分支</li>
<li>prd 正式服分支</li>
</ul>
<p>如果按照长短期分支区分，除了 developer 为短期分支，其他都为长期分支。短期分支按照特性划分可以为 Hotfix、Feature、Optimize 分支等</p>
<h3 id="gitlab-flow-模型原则"><a class="header-anchor" href="#gitlab-flow-模型原则">#</a> GitLab Flow 模型原则</h3>
<p><strong>持续集成原则</strong></p>
<p><em>Commit often and push frequently</em>，反正就是<strong>多 commit 多 push，保证每个 commit 变动明确及只包含相关变动文件，尽量多次合并到 master</strong>，这样才能及早发现冲突，尤其是愈多人合作参与开发的项目显得更为重要</p>
<p><strong>上游优先原则</strong></p>
<p>代码合并的顺序，要按环境依次推送，确保代码被充分测试过,才会从上游分支合并到下游分支。除非是很紧急的情况，才允许跳过上游分支，直接合并到下游分支。这种规则称之为 “upstream first”，也就是 “上游优先”</p>
<p>在 GitLab Flow 中，master 永远作为最新版本及持续集成的分支，每当 master 上的版本要发生变更时，建议的做法是每一个稳定版本，都要从 master 分支拉出一个 version 分支，比如 2-3-stable、2-4-stable等等。发现问题，就从对应版本分支创建修复分支，完成之后，先merge 到 master，才能再 merge 到 release 分支，遵循 “上游优先” 原则</p>
<p><img src="@source/前端工程化/images/1597559691893.jpg" alt=""></p>
<h3 id="提交流程"><a class="header-anchor" href="#提交流程">#</a> 提交流程</h3>
<ol>
<li>从对应版本切换相应短期个人开发分支进行开发</li>
<li><code>git rebase -i</code> 压缩整理提交</li>
<li><code>git pull origin master --rebase</code> 提交前先合并 master</li>
<li>发起 merge request ，进行 code review</li>
<li>Git merge --no-ff myfeature</li>
<li>CI Pipe Stage</li>
<li>逐步自动合并到下游环境分支</li>
</ol>
<blockquote>
<p>Rebae 变基的本质是创建新的 Commit，不要对已经上交到远程分支共享的 Commit 进行变基</p>
<p>https://docs.gitlab.com/ee/topics/gitlab_flow.html#squashing-commits-with-rebase</p>
</blockquote>
<h2 id="代码规范-eslint"><a class="header-anchor" href="#代码规范-eslint">#</a> 代码规范（eslint）</h2>
<p>好的编码规范不仅可以大幅提高代码可读性，甚至会提高代码质量。很多优秀的团队，都根据最佳实践设定了特别优秀的编码规范，如 <a href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">airbnb javascript style<OutboundLink/></a>。<em>不要重复造轮子</em>，从工程化复用的角度，可以选择继承第三方团队定制的规范。</p>
<p>在 vue 项目中，选择 vue 官方 recommended 插件及定制的 airbnb 版本</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
<span class="token string">'extends'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'plugin:vue/recommended'</span><span class="token punctuation">,</span>
    <span class="token string">'@vue/airbnb'</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>再根据团队项目情况，进行部分 rule 配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>rules<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**************** eslint rules ******************/</span>
    <span class="token string">'no-console'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'warn'</span> <span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string">'no-debugger'</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'warn'</span> <span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string">'object-shorthand'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string">'no-plusplus'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token string">'consistent-return'</span><span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>或者使用 eslint-disabled 代码注释去跳过某些规则</p>
<p><img src="@source/前端工程化/images/eslint1.png" alt=""></p>
<p><img src="@source/前端工程化/images/eslint2.png" alt=""></p>
<blockquote>
<p><a href="https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments" target="_blank" rel="noopener noreferrer">Disabling Rules with Inline Comments<OutboundLink/></a></p>
</blockquote>
<p>一个良好的编码规范会带来解放强迫症的舒适感，但过于严格的代码风格有时也会使人烦躁，失去开发体验，比如你正在快速修改一个 bug，修改后的代码打算测试验证是否符合期望，但是严格的规范要求阻断你的节奏，你不得不停下来重新修改代码使其通过规范，如此反复确实容易令人失望。最好的做法是在提交代码时候才进行规范校验，不打断开发体验。</p>
<p>为了平衡开发体验与编程规范的意义，对工作流程分为几层进行渐进式的限制</p>
<p><strong>Dev 环境下分离 eslint 集成</strong></p>
<p>webpack 是当今主流的前端构建工具，得益于强大的扩展性，越来越多的流程可以轻松集成在一起，前端工程化才能有巨大的提升。但是随着项目规模的增加，构建流程的繁重也会导致项目的开发体验下降，这也是为什么现在前端构建工具有分离或者部分工具替换成其他语言平台开发的工具的趋势</p>
<p>分离 eslint 的好处不仅可以带来编译速度的提升，而且也不会阻断开发流程</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 本地开发环境停用 eslint-loader，便于加快编译</span>
  lintOnSave<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'error'</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
  <span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以上是 vue-cli 的配置，同理 webpack 上 es-loader 也是一样</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.(js|mjs|jsx|ts|tsx)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
  enforce<span class="token operator">:</span> <span class="token string">'pre'</span><span class="token punctuation">,</span>
  use<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        cache<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 可结合 webpack 与 eslint-loader，根据当前环境的环境变量配置 emitWarning</span>
        emitWarning<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      loader<span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'eslint-loader'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>IDE &amp;&amp; eslint plugin</strong></p>
<p>从构建流程分离了 eslint 后，需要借助 IDE 配合 eslint 插件下做到错误提示</p>
<p>以 VSCode 及 eslint 插件做到自动提示为例</p>
<p><img src="@source/前端工程化/images/vscode-eslint.png" alt=""></p>
<p>并通过 VSCode 配置，保存时自动化 fix 部分错误</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vscode settings</span>
<span class="token string">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"javascript"</span><span class="token punctuation">,</span>
        <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>
        <span class="token string">"vue"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string">"eslint.codeAction.showDocumentation"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">"enable"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//关闭 vetur template validate，使用自定义 rules</span>
    <span class="token string">"vetur.validation.template"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
    <span class="token operator">...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><strong>GIT Hooks 自动化 eslint 代码</strong></p>
<p>利用 git 提供的 hooks 自动化在代码提交的时候进行检验，<a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">husky<OutboundLink/></a> 是一个使 git hooks 变得更简单的工具， 再结合 <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged<OutboundLink/></a> 工具，只对每次增量的 git staged 文件进行操作，而不用对全量文件操作，提高效率</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// package.json</span>
...
<span class="token comment">// gitHooks 是 vue 官方对 husky 的封装，用法大体跟 husky 相同</span>
<span class="token property">"gitHooks"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token property">"pre-commit"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span><span class="token punctuation">,</span>
 <span class="token property">"commit-msg"</span><span class="token operator">:</span> <span class="token string">"commitlint -E GIT_PARAMS"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token property">"*.{js,jsx,vue}"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token string">"vue-cli-service lint"</span><span class="token punctuation">,</span>
   <span class="token string">"git add"</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>husky 说到底还是利用了 git hooks，git 也提供了 <code>git commit -n</code> 命令去跳过 hooks，所以最终还是要在服务器上 CI 时进行检测</p>
<p><strong>在 CI/CD 中自动化 eslint 代码</strong></p>
<p>TODO 后续...</p>
</template>