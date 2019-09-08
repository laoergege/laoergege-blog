## Table
- [Table](#table)
- [Git 分支](#git-分支)
  - [创建分支](#创建分支)
  - [合并分支](#合并分支)
    - [FastForward Merge](#fastforward-merge)
    - [Merge](#merge)
    - [Rebase](#rebase)
    - [CherryPick](#cherrypick)
    - [解决冲突](#解决冲突)
  - [删除分支](#删除分支)
    - [数据恢复](#数据恢复)
  - [远程分支](#远程分支)
    - [远程跟踪分支](#远程跟踪分支)
  - [其他](#其他)

## Git 分支

推荐学习 [git book 分支章节](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B)。

### 创建分支
```
git branch <branch> <base branch> // 创建分支
git checkout <branch> // 切换分支
git checkout -b <branch> <base branch | commitID> // 创建并切换到新分支
```

使用 gitk 等图形化工具查看分支图谱，其本质是一颗 commidID 树，无论我们 `git checkout <commitID> | <branch> | <tag>`，所有本质都是切换到对应的 commitID 节点快照，故 Git 的分支，其实本质上仅仅是指向提交对象的可变指针。

### 合并分支
git 的分支合并有四种合并方式：
- fast-forward merge 快速合并
- merge 普通合并
- rebase 变基
- cherry-pick 挑选

#### FastForward Merge
fast-forward merge，快速合并。当源节点 master 与目标节点 bugfix 同处一条 Commit 对象树的分支上，进行合并时，git 只是简单的将 master 分支指针向前移动。换句话说，当你试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 “快进（fast-forward）”。

![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_1.png)
![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_2.png)

> `git merge --no-ff`  命令 git 不要快合并

#### Merge
当源节点 master 与目标节点 bugfix 不在同一条 Commit 对象树的分支上，进行合并时，会创建新的 commit 节点，其 parent 即为 master、bugfix 的最新提交对象。

![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_4.png)

#### Rebase
跟merge的例子一样，如下图所示，bugfix分支是从master分支分叉出来的。

![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_6.png)

你可以提取在 bugfix 中引入的补丁和修改，然后在 master 的基础上应用一次。 在 Git 中，这种操作就叫做 **变基**。 

你可以使用 rebase 命令将提交到某一分支上的所有修改都移至另一分支上，就好像“重新播放”一样。它的原理是首先找到这两个分支（即当前分支 bugfix、变基操作的目标基底分支 master）的最近共同祖先 B，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底 D, 最后以此将之前另存为临时文件的修改依序应用。

![](https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_8.png)

merge 和 rebase 这两种整合方法的最终结果没有任何区别，但是变基使得提交历史更加整洁。 你在查看一个经过变基的分支的历史记录时会发现，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样，提交历史是一条直线没有分叉。无论是通过变基，还是通过三方合并，整合的最终结果所指向的快照始终是一样的，只不过提交历史不同罢了。 **变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。**

> `git rebase [basebranch] [topicbranch]` 命令可以直接将特性分支变基到目标分支上。这样做能省去你先切换到 server 分支，再对其执行变基命令的多个步骤。

rebase 缺陷?

#### CherryPick
cherry-pick 命令尤如其名一样，精挑细选，可以选择任意 Commit，合并到当前分支。

```
git cherry-pick <commit-ish>...
```

#### 解决冲突
此时 Git 做了合并，但是没有自动地创建一个新的合并提交。 Git 会暂停下来，等待你去解决合并产生的冲突。 你可以在合并冲突后的任意时刻使用 git status 命令来查看那些因包含合并冲突而处于未合并（unmerged）状态的文件。

任何因包含合并冲突而有待解决的文件，都会以未合并状态标识出来。 Git 会在有冲突的文件中加入标准的冲突解决标记。在你解决了所有文件里的冲突之后，对每个文件使用 git add 命令来将其标记为冲突已解决。

>  一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。

### 删除分支
```
/*
 * -d 删除分支 
 * -D 强制删除分支
 * 使用-d 在删除前Git会判断在该分支上开发的功能是否被merge的其它分支。如果没有，不
 * 能删除。如果merge到其它分支，但之后又在其上做了开发，使用-d还是不能删除。-D会强
 * 制删除。
 */
git branch -d <branch>

// 删除远程分支
git push origin :master
git push origin --delete master
```

#### 数据恢复
如果我们强制删除了一个分支而后又想重新使用这个分支，又或者 hard-reset 了一个分支从而丢弃了分支的部分 commit，有什么办法把丢失的 commit 找回来呢？

通常最快捷的办法是使用 `git reflog` 工具。**当你 (在一个仓库下) 工作时，Git 会在你每次修改了 HEAD 时悄悄地将改动记录下来**。当你提交或修改分支时，reflog 就会更新。

```
git reflog // 查看 HEAD 修改历史

git checkout -b <branch> <commitID> // 重新从对应的 commitID 建立分支

git cherry-pick <commit-ish> // 合并丢失的 commitID
```

### 远程分支
```
git remote

// 同步本地与远程分支
git fetch <远程主机名> <分支名>

// 拉取
git pull <远程主机名> <远程分支名>:<本地分支名>

// 推送
git push <远程主机名> <本地分支名>:<远程分支名>

```

#### 远程跟踪分支

远程跟踪分支（以 [remote]/[branch] 形式命名）是远程分支状态的引用，记录最后一次与远程交互时分支的状态。 它们是你不能移动的本地引用，当你做任何网络通信操作时，它们会自动移动。


从一个远程跟踪分支检出一个本地分支会自动创建所谓的“跟踪分支”（它跟踪的分支叫做“上游分支”）。 跟踪分支是与远程分支有直接关系的本地分支。当使用 `git pull`、`git push` 可以省略分支名，git 会自动识别。

当克隆一个仓库时，它通常会自动地创建一个与克隆分支对应的远程跟踪分支

```
// 创建远程跟踪分支
git checkout -b <本地分支名> <远程分支名> 
git checkout --track <远程分支名> 
git branch --track <远程分支名> 

/*
 * 将所有的本地分支列出来并且包含更多的信息，
 * 如每一个分支正在跟踪哪个远程分支与本地分支是否是领先、落后或是都有
 */
git branch -vv
```

### 其他

```
git branch // 查看所有分支
git branch -v // 查看所有分支及其最后一次    
```