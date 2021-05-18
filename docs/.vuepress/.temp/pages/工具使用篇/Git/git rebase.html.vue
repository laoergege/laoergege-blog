<template><h2 id="前言"><a class="header-anchor" href="#前言">#</a> 前言</h2>
<p><code>git rebase</code> 除了用来合并分支，还有强大的交互式来处理 commitID 常用功能：</p>
<ul>
<li>pick commit</li>
<li>reword commit message</li>
<li>squash commit</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git rebase -i [basebranch]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="原理"><a class="header-anchor" href="#原理">#</a> 原理</h2>
<p><code>git rebase</code> 工作的过程时，把 HEAD 指向 base 的 commit ，此时如果该 commit 没有对应 branch，就处于分离头指针的状态，然后把当前分支与目标分支共同祖先<strong>之后的提交重新一个一个生成新的 commit 提交到目标分支</strong>，当 rebase 处理完最后一个 commit 后，结束分离头状态，Git 把当前分支引用指向 HEAD 。</p>
<p><a href="https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E5%8F%98%E5%9F%BA" target="_blank" rel="noopener noreferrer">参考  Git 分支 - 分支的变基<OutboundLink/></a>。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PS D:\laoergege-demos\git_learning&gt; git log                                                        commit 8b064c3749e716e8e7bda7246a8c85eb05166c75 (HEAD -&gt; master)                                   Author: lianyuansheng &lt;lianyuansheng@xiao100.com&gt;                                                  Date:   Sun Jul 14 23:49:39 2019 +0800                                                                                                                                                                    mv readme readme.md                                                                                                                                                                               commit 0c1f13699bb30ad86a6a064677dc0b2de0ca69b4                                                    Author: lianyuansheng &lt;lianyuansheng@xiao100.com&gt;                                                  Date:   Sun Jul 14 22:59:42 2019 +0800                                                                                                                                                                    add a refering foot                                                                                                                                                                               commit 091ce6347f5a7eee991f0d6d2c11489d05bcfe2e                                                    Author: lianyuansheng &lt;lianyuansheng@xiao100.com&gt;                                                  Date:   Sun Jul 14 22:57:12 2019 +0800                                                                                                                                                                    initial                                                                                        PS D:\laoergege-demos\git_learning&gt; git rebase -i 091ce6347f5a7e                                   [detached HEAD 3ba10f6] add a a refering foot
 Date: Sun Jul 14 22:59:42 2019 +0800
 2 files changed, 76 insertions(+), 49 deletions(-)
 rewrite index.html (78%)
Successfully rebased and updated refs/heads/master.
PS D:\laoergege-demos\git_learning&gt; git log                                                        commit ec8569461c00b21bdca9e92d3b38f4395d4e5992 (HEAD -&gt; master)                                   Author: lianyuansheng &lt;lianyuansheng@xiao100.com&gt;                                                  Date:   Sun Jul 14 23:49:39 2019 +0800                                                                                                                                                                    mv readme readme.md                                                                            
commit 3ba10f63206f49e76a960faf99e89b83404661b9
Author: lianyuansheng &lt;lianyuansheng@xiao100.com&gt;
Date:   Sun Jul 14 22:59:42 2019 +0800

    add a a refering foot

commit 091ce6347f5a7eee991f0d6d2c11489d05bcfe2e
Author: lianyuansheng &lt;lianyuansheng@xiao100.com&gt;
Date:   Sun Jul 14 22:57:12 2019 +0800

    initial
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="注意"><a class="header-anchor" href="#注意">#</a> 注意</h3>
<p><code>注意变基的本质是重新生成 commit对象</code>：一个 commit 对象还包括 commit 的 message，作者，变更时间，父亲等属性，这些其中的一个发生变化了，在git眼里就是不同的commit。我们用 <code>git rebase</code> 操作了 commit 使其应用到目标分支，git 就必须重新记录相关信息。</p>
<blockquote>
<p>不要 rebase 共享过的 commit</p>
</blockquote>
<h3 id="修改旧的-commit-message"><a class="header-anchor" href="#修改旧的-commit-message">#</a> 修改旧的 commit message</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git rebase -i [commit]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="合并"><a class="header-anchor" href="#合并">#</a> 合并</h2>
</template>