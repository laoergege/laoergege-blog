(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{240:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"table"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#table"}},[t._v("Table")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#git-%E5%88%86%E6%94%AF"}},[t._v("Git 分支")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E5%88%86%E6%94%AF"}},[t._v("创建分支")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF"}},[t._v("合并分支")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#fastforward-merge"}},[t._v("FastForward Merge")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#merge"}},[t._v("Merge")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#rebase"}},[t._v("Rebase")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#cherrypick"}},[t._v("CherryPick")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81"}},[t._v("解决冲突")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E5%88%86%E6%94%AF"}},[t._v("删除分支")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E6%95%B0%E6%8D%AE%E6%81%A2%E5%A4%8D"}},[t._v("数据恢复")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF"}},[t._v("远程分支")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E8%BF%9C%E7%A8%8B%E8%B7%9F%E8%B8%AA%E5%88%86%E6%94%AF"}},[t._v("远程跟踪分支")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E6%81%A2%E5%A4%8D%E8%AF%AF%E5%88%A0%E7%9A%84%E8%BF%9C%E7%A8%8B%E5%88%86%E6%94%AF"}},[t._v("恢复误删的远程分支")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%85%B6%E4%BB%96"}},[t._v("其他")])])])])]),t._v(" "),r("h2",{attrs:{id:"git-分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git-分支"}},[t._v("#")]),t._v(" Git 分支")]),t._v(" "),r("p",[t._v("推荐学习 "),r("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("git book 分支章节"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"创建分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[t._v("#")]),t._v(" 创建分支")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git branch <branch> <base branch> // 创建分支\ngit checkout <branch> // 切换分支\ngit checkout -b <branch> <base branch | commitID> // 创建并切换到新分支\n")])])]),r("p",[t._v("使用 gitk 等图形化工具查看分支图谱，其本质是一颗 commidID 树，无论我们 "),r("code",[t._v("git checkout <commitID> | <branch> | <tag>")]),t._v("，所有本质都是切换到对应的 commitID 节点快照，故 Git 的分支，其实本质上仅仅是指向提交对象的可变指针。")]),t._v(" "),r("h3",{attrs:{id:"合并分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),r("p",[t._v("git 的分支合并有四种合并方式：")]),t._v(" "),r("ul",[r("li",[t._v("fast-forward merge 快速合并")]),t._v(" "),r("li",[t._v("merge 普通合并")]),t._v(" "),r("li",[t._v("rebase 变基")]),t._v(" "),r("li",[t._v("cherry-pick 挑选")])]),t._v(" "),r("h4",{attrs:{id:"fastforward-merge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fastforward-merge"}},[t._v("#")]),t._v(" FastForward Merge")]),t._v(" "),r("p",[t._v("fast-forward merge，快速合并。当源节点 master 与目标节点 bugfix 同处一条 Commit 对象树的分支上，进行合并时，git 只是简单的将 master 分支指针向前移动。换句话说，当你试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 “快进（fast-forward）”。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_1.png",alt:""}}),t._v(" "),r("img",{attrs:{src:"https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_2.png",alt:""}})]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("git merge --no-ff")]),t._v("  命令 git 不要快合并")])]),t._v(" "),r("h4",{attrs:{id:"merge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),r("p",[t._v("当源节点 master 与目标节点 bugfix 不在同一条 Commit 对象树的分支上，进行合并时，会创建新的 commit 节点，其 parent 即为 master、bugfix 的最新提交对象。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_4.png",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"rebase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[t._v("#")]),t._v(" Rebase")]),t._v(" "),r("p",[t._v("跟merge的例子一样，如下图所示，bugfix分支是从master分支分叉出来的。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_6.png",alt:""}})]),t._v(" "),r("p",[t._v("你可以提取在 bugfix 中引入的补丁和修改，然后在 master 的基础上应用一次。 在 Git 中，这种操作就叫做 "),r("strong",[t._v("变基")]),t._v("。")]),t._v(" "),r("p",[t._v("你可以使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上，就好像“重新播放”一样。它的原理是首先找到这两个分支（即当前分支 bugfix、变基操作的目标基底分支 master）的最近共同祖先 B，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底 D, 最后以此将之前另存为临时文件的修改依序应用。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_8.png",alt:""}})]),t._v(" "),r("p",[t._v("merge 和 rebase 这两种整合方法的最终结果没有任何区别，但是变基使得提交历史更加整洁。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。"),r("strong",[t._v("无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。")]),t._v(" "),r("strong",[t._v("变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。")])]),t._v(" "),r("blockquote",[r("p",[r("code",[t._v("git rebase [basebranch] [topicbranch]")]),t._v(" 命令可以直接将特性分支变基到目标分支上。这样做能省去你先切换到 server 分支，再对其执行变基命令的多个步骤。")])]),t._v(" "),r("h5",{attrs:{id:"rebase-使用注意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rebase-使用注意"}},[t._v("#")]),t._v(" rebase 使用注意")]),t._v(" "),r("p",[r("strong",[t._v("一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行变基操作。")])]),t._v(" "),r("h4",{attrs:{id:"cherrypick"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cherrypick"}},[t._v("#")]),t._v(" CherryPick")]),t._v(" "),r("p",[t._v("cherry-pick 命令尤如其名一样，精挑细选，可以选择任意 Commit，合并到当前分支。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git cherry-pick <commit-ish>...\n")])])]),r("h4",{attrs:{id:"解决冲突"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[t._v("#")]),t._v(" 解决冲突")]),t._v(" "),r("p",[t._v("此时 Git 做了合并，但是没有自动地创建一个新的合并提交。 Git 会暂停下来，等待你去解决合并产生的冲突。 你可以在合并冲突后的任意时刻使用 git status 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件。")]),t._v(" "),r("p",[t._v("任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。 Git 会在有冲突的文件中加入标准的冲突解决标记。在你解决了所有文件里的冲突之后，对每个文件使用 git add 命令来将其标记为冲突已解决。")]),t._v(" "),r("blockquote",[r("p",[t._v("一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。")])]),t._v(" "),r("h3",{attrs:{id:"删除分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[t._v("#")]),t._v(" 删除分支")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("/*\n * -d 删除分支 \n * -D 强制删除分支\n * 使用-d 在删除前Git会判断在该分支上开发的功能是否被merge的其它分支。如果没有，不\n * 能删除。如果merge到其它分支，但之后又在其上做了开发，使用-d还是不能删除。-D会强\n * 制删除。\n */\ngit branch -d <branch>\n\n// 删除远程分支\ngit push origin :master\ngit push origin --delete master\n")])])]),r("h4",{attrs:{id:"数据恢复"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[t._v("#")]),t._v(" 数据恢复")]),t._v(" "),r("p",[t._v("如果我们强制删除了一个分支而后又想重新使用这个分支，又或者 hard-reset 了一个分支从而丢弃了分支的部分 commit，有什么办法把丢失的 commit 找回来呢？")]),t._v(" "),r("p",[t._v("通常最快捷的办法是使用 "),r("code",[t._v("git reflog")]),t._v(" 工具。"),r("strong",[t._v("当你 (在一个仓库下) 工作时，Git 会在你每次修改了 HEAD 时悄悄地将改动记录下来")]),t._v("。当你提交或修改分支时，reflog 就会更新。")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git reflog // 查看 HEAD 修改历史\n\ngit checkout -b <branch> <commitID> // 重新从对应的 commitID 建立分支\n\ngit cherry-pick <commit-ish> // 合并丢失的 commitID\n")])])]),r("h3",{attrs:{id:"远程分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程分支"}},[t._v("#")]),t._v(" 远程分支")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git remote\n\n// 同步本地与远程分支\ngit fetch <远程主机名> <分支名>\n\n// 拉取\ngit pull <远程主机名> <远程分支名>:<本地分支名>\n\n// 推送\ngit push <远程主机名> <本地分支名>:<远程分支名>\n\n")])])]),r("h4",{attrs:{id:"远程跟踪分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程跟踪分支"}},[t._v("#")]),t._v(" 远程跟踪分支")]),t._v(" "),r("p",[t._v("远程跟踪分支（以 [remote]/[branch] 形式命名）是远程分支状态的引用，记录最后一次与远程交互时分支的状态。 它们是你不能移动的本地引用，当你做任何网络通信操作时，它们会自动移动。")]),t._v(" "),r("p",[t._v("从一个远程跟踪分支检出一个本地分支会自动创建所谓的“跟踪分支”（它跟踪的分支叫做“上游分支”）。 跟踪分支是与远程分支有直接关系的本地分支。当使用 "),r("code",[t._v("git pull")]),t._v("、"),r("code",[t._v("git push")]),t._v(" 可以省略分支名，git 会自动识别。")]),t._v(" "),r("p",[t._v("当克隆一个仓库时，它通常会自动地创建一个与克隆分支对应的远程跟踪分支")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 创建远程跟踪分支\ngit checkout -b <本地分支名> <远程分支名> \ngit checkout --track <远程分支名> \ngit branch --track <远程分支名> \n\n/*\n * 将所有的本地分支列出来并且包含更多的信息，\n * 如每一个分支正在跟踪哪个远程分支与本地分支是否是领先、落后或是都有\n */\ngit branch -vv\n")])])]),r("h4",{attrs:{id:"恢复误删的远程分支"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#恢复误删的远程分支"}},[t._v("#")]),t._v(" 恢复误删的远程分支")]),t._v(" "),r("h3",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git branch // 查看所有分支\ngit branch -v // 查看所有分支及其最后一次    \n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);