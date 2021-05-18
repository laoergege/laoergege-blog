<template><h1 id="pnpm-monorepo-与-gitlab-持续集成结合实践"><a class="header-anchor" href="#pnpm-monorepo-与-gitlab-持续集成结合实践">#</a> pnpm monorepo 与 gitlab 持续集成结合实践</h1>
<h2 id="monorepo"><a class="header-anchor" href="#monorepo">#</a> monorepo</h2>
<p>随着业务复杂度的直线上升，前端项目不管是从代码量上，还是从依赖关系上都爆炸式增长。一个团队可能需要维护多条业务线，每条业务线又有多个业务代码项目，多个项目之间如何配合，如何维护相互关系以及公共代码？</p>
<p>管理组织代码的方式主要分为两种：</p>
<ul>
<li>multirepo</li>
<li>monorepo</li>
</ul>
<p><strong>一种倡导分而治之，一种倡导集中管理</strong></p>
<p><strong>multirepo 存在以下问题：</strong></p>
<ul>
<li>开发调试以及版本更新效率低下</li>
<li>团队技术选型分散，不同的库实现风格可能存在较大差异</li>
<li>多仓库，维护困难，复用困难，产生物理界限</li>
</ul>
<p><strong>monorepo 的优势：</strong></p>
<ul>
<li>所有项目拥有一致的 配套，如 lint，以及构建、测试、发布流程</li>
<li>不同项目之间容易调试、协作</li>
<li>不同项目之间的代码方便复用</li>
</ul>
<p><strong>而 monorepo 缺点也非常明显：</strong></p>
<ul>
<li>
<p>库体积超大，目录结构复杂度上升</p>
</li>
<li>
<p>需要使用维护 monorepo 的工具，这就意味着学习成本比较高</p>
</li>
<li>
<p>在lint、测试、构建、部署、发版各工作流程环节有一定的挑战，至少需要设计<strong>增量方案</strong>，通过分析项目依赖以及拓扑排序，仅对需要的项目进行操作</p>
</li>
</ul>
<p>笔者目前公司存在一种情况：前端项目仓库不断增加，原因以下：</p>
<ol>
<li>根据不同业务线、不同子业务、不同功能模块、不同终端实现进行项目划分</li>
<li>不同项目仓库想使用不同技术栈，但又不想污染原来项目技术栈及配置</li>
</ol>
<p>从第一点来说，确实应该如此，做好划分是很有必要的。但是为了更好学习、业务交流，团队每个同学至少维护两条业务线或者功能模块，这就导致可能每天需要在不同项目仓库中来回切换；不同仓库中某些代码可复用，甚至出现了低级的手工同步复制代码；部门在lint、测试、构建、部署、发版各流程环节是统一的，却需要去每次配置一遍等。</p>
<p><strong>在同一业务范畴内，使用 monorepo 方案去统一维护代码项目</strong>，比如人事与招聘两条业务线分成两个 monorepo，HRMS monorepo 下自个维护子业务、子模块、不同终端实现...，monorepo 可控制保持在一定体量，防止体积超大，目录结构过度复杂。</p>
<p>接下来，探索使用 pnpm monorepo 和 gitlab CI/CD 功能结合，完成一条代码集成、增量构建部署自动化流程。</p>
<h2 id="pnpm-monorepo"><a class="header-anchor" href="#pnpm-monorepo">#</a> pnpm monorepo</h2>
<p>无论是 learn、yarn 还是 pnpm 对 monorepo 的支持，其实实际都是对多项目依赖的管理优化支持。你把两个 JavaScript 项目放在同个文件下，其实同样也是 monorepo 方案，只不过来说过于简陋。你可能需要更多优化：</p>
<ol>
<li>比如把不同项目的 node_modules 中一些相同依赖提升，这样就能节省一定的空间</li>
<li>你可能需要命令工具能够针对所有的子项目或者单个子项目进行操作</li>
<li>...</li>
</ol>
<h3 id="依赖操作"><a class="header-anchor" href="#依赖操作">#</a> 依赖操作</h3>
<p><code>pnpm add &lt;pkg&gt;</code> 添加依赖，如果你想在 root workspace 添加依赖，你需要  <code>-W</code> 可作用于 root workspace，例如</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>// 明确添加 qiankun 到 root workspace
<span class="token function">pnpm</span> <span class="token function">add</span> qiankun -w
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>pnpm add 需要进入子项目 workspace 操作， 操作需要在子项目 workspace 中，不带 <code>-W</code></p>
<p>script 执行</p>
<p>调试</p>
</template>