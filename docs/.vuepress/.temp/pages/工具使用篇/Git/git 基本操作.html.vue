<template><h2 id="文件删除-git-rm"><a class="header-anchor" href="#文件删除-git-rm">#</a> 文件删除（git rm）</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PS D:\laoergege-demos\git_learning&gt; ls                                                             

    目录: D:\laoergege-demos\git_learning


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2019/7/14     22:52                images
d-----         2019/7/14     22:52                js
d-----        2019/10/16     20:00                styles
-a----        2019/10/16     20:00           1422 index.html
-a----        2019/10/20     13:57             53 readme.md


PS D:\laoergege-demos\git_learning&gt; rm readme.md                                                   PS D:\laoergege-demos\git_learning&gt; ls                                                             

    目录: D:\laoergege-demos\git_learning


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2019/7/14     22:52                images
d-----         2019/7/14     22:52                js
d-----        2019/10/16     20:00                styles
-a----        2019/10/16     20:00           1422 index.html


PS D:\laoergege-demos\git_learning&gt; git status                                                     On branch master
Changes not staged for commit:
  (use &quot;git add/rm &lt;file&gt;...&quot; to update what will be committed)
  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)

        deleted:    readme.md

no changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)
PS D:\laoergege-demos\git_learning&gt; git rm readme.md                                               rm 'readme.md'
PS D:\laoergege-demos\git_learning&gt; git status                                                     On branch master
Changes to be committed:
  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)

        deleted:    readme.md
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>在上面我们通过 <code>rm</code> 删除文件，再将删除操作暂存。<code>git rm</code> 可达到上面两步操作效果。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>PS D:\laoergege-demos\git_learning&gt; ls                                                             

    目录: D:\laoergege-demos\git_learning


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2019/7/14     22:52                images
d-----         2019/7/14     22:52                js
d-----        2019/10/16     20:00                styles
-a----        2019/10/16     20:00           1422 index.html
-a----        2019/10/20     14:09             53 readme.md


PS D:\laoergege-demos\git_learning&gt; git rm readme.md                                               rm 'readme.md'
PS D:\laoergege-demos\git_learning&gt; git status                                                     On branch master
Changes to be committed:
  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)

        deleted:    readme.md
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="撤销及重置"><a class="header-anchor" href="#撤销及重置">#</a> 撤销及重置</h2>
<p>资料阅读 <a href="https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86" target="_blank" rel="noopener noreferrer">Git-工具-重置揭密<OutboundLink/></a>。</p>
<p>在工作过程，我们肯定会有错误的操作，当发生错误时，我们希望撤销操作或者重置，恢复回原来我们想要的样子。</p>
<h3 id="恢复工作区、暂存区、版本区"><a class="header-anchor" href="#恢复工作区、暂存区、版本区">#</a> 恢复工作区、暂存区、版本区</h3>
<p><img src="https://git-scm.com/book/en/v2/images/reset-workflow.png" alt=""></p>
<p>git 的基本工作流如上图，其中：</p>
<ul>
<li>版本区，一般 git 仓库中有多条分支，HEAD 指向当前分支及其最后提交版本</li>
<li>暂存区，预期的下一次提交的快照</li>
<li>工作区，工作目录</li>
</ul>
<p>当发生某些情况时想要恢复时，一般情况：</p>
<ol>
<li>暂存区恢复成HEAD：<code>git reset</code></li>
<li>工作区恢复成暂存区：<code>git checkout -- &lt;file&gt; </code></li>
</ol>
<p><img src="https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20191020124515.png" alt=""></p>
<h4 id="git-reset"><a class="header-anchor" href="#git-reset">#</a> git reset</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git reset [--soft | --mixed | --hard ] [-q] [&lt;commit&gt;]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>git reset</code> 可用来重置 <code>HEAD</code> 版本区、<code>Index</code> 暂存区、<code>Working</code> 工作区内容，reset，若如其名，重置，具有一定毁灭，强制的操作性，会完全覆盖指定区域的内容，checkout 则会相对智能些（下述）。</p>
<p><code>git reset</code> 执行时有三个参数可用于指定执行步骤时，一般情况下，git 会顺序执行以下过程：</p>
<ol>
<li>更新 HEAD：移动 <code>HEAD</code> 及 <strong>HEAD 所在的 branch</strong> 指针（若只指定了 --soft，执行到此步骤为止）</li>
<li>更新 Index：同步 <code>Index</code> 暂存区的版本内容同 <code>HEAD</code> 一致（若只指定了 --mixed，执行到此步骤为止，默认执行到 mixed 步骤）</li>
<li>更新 Work：同步 <code>Working</code> 工作区的版本内容同 <code>Index</code> 一致（若指定了 --hard，执行到此步骤）</li>
</ol>
<blockquote>
<p><em>--hard</em> 是一种危险的行为，它会强制覆盖工作目录中的文件，以致跟 Index 保持同步</p>
</blockquote>
<h4 id="git-reset-单个文件"><a class="header-anchor" href="#git-reset-单个文件">#</a> git reset 单个文件</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git reset [commit] &lt;file&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>若指定了一个文件路径，reset 将会跳过上述第 1 步，因为其作用范围限定为指定的文件或文件集合，而 HEAD 指向的是一个 commit 对象，故跳过更新 HEAD 的步骤。但第三步不会执行，因为 <code>git reset</code> 默认行为只执行到第二步，添加指定参数命令 <code>git reset --hard &lt;file&gt;</code> 即可。</p>
<blockquote>
<p><em>--patch</em> 可批量重置多文件</p>
</blockquote>
<h4 id="git-reset-和-git-checkout-区别"><a class="header-anchor" href="#git-reset-和-git-checkout-区别">#</a> git reset 和 git checkout 区别</h4>
<p><code>git reset</code> 和 <code>git checkout</code> 都能更新 HEAD、Index、Work 三个区域内容，但主要区别：</p>
<p>当作为操作 commitID 指向时，<code>git reset</code> 和 <code>git checkout</code> 的行为区别是：</p>
<ul>
<li><code>git reset</code> 会移动 HEAD 所在分支指针，<code>git checkout</code> 则不会。<img src="https://git-scm.com/book/en/v2/images/reset-checkout.png" alt=""></li>
<li>不同于 <code>reset --hard</code>，<code>checkout</code> 对工作目录是安全的，它会通过检查来确保不会将已更改的文件弄丢，其实它还更聪明一些。它会在工作目录中先试着简单合并一下,而 <code>reset --hard</code> 则会不做检查就全面地替换所有东西。</li>
</ul>
<p>当作为操作对象为 file 时，<code>git checkout</code> 和 <code>git reset --hard [branch] file</code> 的行为一样。</p>
<p>总结：<code>git reset</code> 和 <code>git checkout</code> 两者在使用上总有些相似，那么如何区分使用场景，我觉得应该注意两点：</p>
<ul>
<li>是否会移动 HEAD 所在的分支</li>
<li>是否对文件强覆盖</li>
</ul>
<h2 id="gitignore"><a class="header-anchor" href="#gitignore">#</a> .gitignore</h2>
<p>以下规则会了，也基本熟悉写 .gitignore 文件。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 注释
! 相反
\ 转义字符
? 正则，单一字符，除 /
[a-zA-Z]，正则，可选字符范围，除 /
* 匹配所有文件或者目录
a 匹配任意字符，除 /
*.js 匹配js结尾的文件
/a 匹配根目录下的a文件或者目录
/a/b a/b 匹配根目录下的a目录的b文件或者目录
a/ 匹配任何a目录
a/* 匹配任何a目录下的文件和目录，相比 a/ 可防止git继续在a目录匹配a目录
**/a/b 任何路径下a目录里的b文件或者目录
a/** 深度匹配root下a目录的文件或者目录
a/**/b  matches &quot;a/b&quot;, &quot;a/x/b&quot;, &quot;a/x/y/b&quot; and so on
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>