
## Table Content
- [Table Content](#table-content)
- [git 用法](#git-用法)
  - [开始](#开始)
  - [配置设置](#配置设置)
  - [基本使用](#基本使用)
  - [进阶使用](#进阶使用)
- [Git 原理探索](#git-原理探索)
  - [探索 .git 目录](#探索-git-目录)
  - [commit、tree 和 blob 关系](#committree-和-blob-关系)
- [Git 分支](#git-分支)
  - [分支合并](#分支合并)
    - [FastForward Merge](#fastforward-merge)
    - [Merge](#merge)
    - [Rebase](#rebase)
    - [CherryPick](#cherrypick)
  - [Git 工作流](#git-工作流)
  - [分离头指针](#分离头指针)
    - [应用场景](#应用场景)
- [GitLab](#gitlab)
- [参考学习](#参考学习)

## git 用法
### 开始
学习使用命令行时，最好的方式就是多用 help 命令查看其他命令的相关用法。在控制台输入 `git help` 可查看 git 不同命令使用场景:

![git 命令](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/gc.png)

> `git help <command>` 可查看相关命令文档，`git <command> -h` 可在控制台直接简洁打印查看用法。

### 配置设置
git 使用前必须设置 git 用户信息（邮箱、用户名），主要用于记录提交得用户信息。

```
git config --list

git config --local user.username "xxx"
git config --local user.email "xxx"
```

配置信息有三种不同级别，优先级分别是:  
local > global > system

### 基本使用
```
// 初始化
git init

// 暂存文件
git add . // 暂存所有文件
git add <file> // 仅暂存对应文件

// 提交版本
git commit -m "xxx"
```

### 进阶使用
```
// 面向工作区 
git add -u // 只暂存已跟踪文件，避免把工作区没准备好的新文件直接加到暂存区了。
git rm <file> // 删除文件
git mv <source> <destination>

// 面向暂存区
git rm --cached <file> // 取消文件暂存
git reset --hard <commit> // 重置工作区和暂存区

// 面向储存版本
```
**Tip**:
- 多用 `git status` 查看文件状态，git 会有接下来相关操作提示。
- 使用 `git log` 和 `gitk` 能够查看提交日志，`gitk` 会打开图形化界面。(windows 下 gitk 界面乱码，可输入配置命令 `git config gui.encoding utf-8`，重新打开即可。)

## Git 原理探索

### 探索 .git 目录
一个 `git init` 的初始化项目，隐藏的 `.git` 会有以下基础的目录结构:
```
// power shell

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        2019/7/21     23:42                hooks
d-----        2019/7/21     23:42                info
d-----        2019/7/21     23:42                objects
d-----        2019/7/21     23:42                refs
-a----        2019/7/21     23:42            130 config
-a----        2019/7/21     23:42             73 description
-a----        2019/7/21     23:42             23 HEAD
```

主要核心文件和目录为:
- objects: 核心目录，存放 git 核心对象。.git/objects/ 文件夹中的子文件夹都是以哈希值的前两位字符命名 每个object由40位字符组成，前两位字符用来当文件夹，后38位做文件。
- refs: 记录各分支和标签引用
- config: 项目 git 本地配置文件
- HEAD: 当前的分支引用

在项目根目录下新建 `readme` 文件，并首次提交版本，然后进行以下操作步骤:

> Tip: `git cat-file -t`  查看 git 对象的类型，`git cat-file -p`  查看 git 对象的内容

```shell
PS D:\laoergege-demos\git-demo-project\.git> ls                                                    

    目录: D:\laoergege-demos\git-demo-project\.git


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        2019/7/22     23:10                hooks
d-----        2019/7/22     23:10                info
d-----        2019/7/22     23:28                logs
d-----        2019/7/22     23:28                objects
d-----        2019/7/22     23:10                refs
d-----        2019/7/22     23:22                test.txt
-a----        2019/7/22     23:28             14 COMMIT_EDITMSG
-a----        2019/7/22     23:10            130 config
-a----        2019/7/22     23:10             73 description
-a----        2019/7/22     23:10             23 HEAD
-a----        2019/7/22     23:28            137 index


******************************************************************
* 新生成的 index 文件即为暂存区的记录
******************************************************************

PS D:\laoergege-demos\git-demo-project\.git> cat HEAD                                              
ref: refs/heads/master

******************************************************************
* HEAD 记录当前引用的分支
******************************************************************

PS D:\laoergege-demos\git-demo-project\.git> cd refs                                               
PS D:\laoergege-demos\git-demo-project\.git\refs> ls                                               

    目录: D:\laoergege-demos\git-demo-project\.git\refs


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        2019/7/22     23:28                heads
d-----        2019/7/22     23:10                tags

******************************************************************
* heads 存放文支
* tags 存放标签
******************************************************************

PS D:\laoergege-demos\git-demo-project\.git\refs> cd heads                                         
PS D:\laoergege-demos\git-demo-project\.git\refs\heads> ls                                         

    目录: D:\laoergege-demos\git-demo-project\.git\refs\heads


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
-a----        2019/7/22     23:28             41 master

PS D:\laoergege-demos\git-demo-project\.git\refs\heads> cat master                                 
5efd4f420e04e034a3a6335a2b48883a0554da86

******************************************************************
* 当前仅有 master 一条分支，查看内容是 40位哈希值字符，
* 为 git object 文件命名(每个object由40位字符组成，前两位字符用来当文件夹，后38位做文件)。
*
* Git 核心对象类型分别为
* - commit
* - tree
* - blob
******************************************************************

PS D:\laoergege-demos\git-demo-project\.git\refs\heads> git cat-file -t 5efd4f420e04               
commit
PS D:\laoergege-demos\git-demo-project\.git\refs\heads> git cat-file -p 5efd4f420e04               
tree 3712c209d65dc7167d5fdcdd7dec214bc13a953b
author lianyuansheng <lianyuansheng@xiao100.com> 1563809286 +0800
committer lianyuansheng <lianyuansheng@xiao100.com> 1563809286 +0800

add readme.md

******************************************************************
* 每条分支实际指向的是一个 commit 对象
* commit 对象除了记录提交信息外，还包含 tree 对象
* tree 对象记录每次提交的文件blob及目录tree
******************************************************************

PS D:\laoergege-demos\git-demo-project\.git\refs\heads> git cat-file -t 3712c209d65dc716           
tree
PS D:\laoergege-demos\git-demo-project\.git\refs\heads> git cat-file -p 3712c209d65dc716           
100644 blob fdc3d3cd37c23aeb665aa995f395d9c6979bd508    readme.md

******************************************************************
* 该 tree 只包含文件blob 一个子节点
* PS：本实验内容简单，可自行提交更复杂操作，查看更多内容
******************************************************************

PS D:\laoergege-demos\git-demo-project\.git\refs\heads> git cat-file -t fdc3d3cd37c23ae            
blob
PS D:\laoergege-demos\git-demo-project\.git\refs\heads> git cat-file -p fdc3d3cd37c23ae            
Hello Git!

******************************************************************
* Object 文件 fdc3d3cd37c23aeb665aa995f395d9c6979bd508 
* 的内容正是刚刚我们提交的 readme.md 文件内容
* git 使用内部 hash-object 命令把 readme.md 的当前内容压缩成二进制文件，
* 存入 Git。压缩后的二进制文件，称为一个 Git 对象，保存
* 在.git/objects目录。
******************************************************************

```

我们修改 readme.md 内容，并再次上传。

```shell
PS D:\laoergege-demos\git-demo-project> git log
commit 5ca8479f1afc822216aebc6e9a164d5a93f4b911 (HEAD -> master)Author: lianyuansheng <lianyuansheng@xiao100.com>Date:   Tue Jul 23 11:57:03 2019 +0800

    修改 readme
commit 5efd4f420e04e034a3a6335a2b48883a0554da86Author: lianyuansheng <lianyuansheng@xiao100.com>Date:   Mon Jul 22 23:28:06 2019 +0800

    add readme.md

******************************************************************
* git log 查看到 5ca8479f1afc822216aebc6e9a164d5a93f4b911 即为
* 最新的一次提交对象
******************************************************************

PS D:\laoergege-demos\git-demo-project> git cat-file -p 5ca8479f1afc82221
tree 6ca17ac94693a5aedc5ca0deead5ffe676e67092parent 5efd4f420e04e034a3a6335a2b48883a0554da86
author lianyuansheng <lianyuansheng@xiao100.com> 1563854223 +0800
committer lianyuansheng <lianyuansheng@xiao100.com> 1563854223 +0800
修改 readme

PS D:\laoergege-demos\git-demo-project> git cat-file -p 6ca17ac94693a5aedc
100644 blob e1bfe2cd62deac1ff0fa1ab584d4354ec30b5144    readme.md
PS D:\laoergege-demos\git-demo-project> git cat-file -p e1bfe2cd62deac1ff0
Hello Git!
123456

******************************************************************
* 通过层层查看，我们发现hash值为e1bfe2cd62deac1ff0fa1ab584d4354ec30b5144
* 的 Object 对象文件（不是原来的 fdc3d3cd37c23aeb665aa995f395d9c6979bd508）
* 内容即为我们刚刚改写的文件内容。git 会在每次 git add 
* 操作时对每次修改的文件（或者新文件），使用 hash-object 命令对这些文件
* 重新生成新的 Object 文件存储，这就是 git 和其他版本控制系统的主要差别:
* 即重新生成快照，而非差异比较。
******************************************************************

```

当我们在使用 `git add`、`git commit` 等高级命令时，git 实际在调用其底层相关命令。

![git 命令](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/20190723113201.png)

可参考阮一峰的 [Git 原理入门](http://www.ruanyifeng.com/blog/2018/10/git-internals.html)，去尝试使用下底层相关命令。

### commit、tree 和 blob 关系
在上面操作过程中，我们可能发现一种关系：commit 包含 tree，tree 包含 blob。我们再添加新的文件夹src，里面再加入 index.html 文件然后提交。 

```shell
PS D:\laoergege-demos\git-demo-project> git log
commit 9eafc20aba47c34295ba9e77984c08b9003a911d (HEAD -> master)
Author: lianyuansheng <lianyuansheng@xiao100.com>
Date:   Tue Jul 23 23:42:40 2019 +0800

    add src/index.html

commit 5ca8479f1afc822216aebc6e9a164d5a93f4b911
Author: lianyuansheng <lianyuansheng@xiao100.com>
Date:   Tue Jul 23 11:57:03 2019 +0800

    修改 readme

commit 5efd4f420e04e034a3a6335a2b48883a0554da86
Author: lianyuansheng <lianyuansheng@xiao100.com>
Date:   Mon Jul 22 23:28:06 2019 +0800

    add readme.md
PS D:\laoergege-demos\git-demo-project> git cat-file -p 9eafc20aba47c
tree fb4ffaecbfaddbd6296331a1da949cecec619e69
parent 5ca8479f1afc822216aebc6e9a164d5a93f4b911
author lianyuansheng <lianyuansheng@xiao100.com> 1563896560 +0800
committer lianyuansheng <lianyuansheng@xiao100.com> 1563896560 +0800

add src/index.html
PS D:\laoergege-demos\git-demo-project> git cat-file -p fb4ffaecbfadd
100644 blob e1bfe2cd62deac1ff0fa1ab584d4354ec30b5144    readme.md
040000 tree 8251a50aff5d385ceb293feb338725de7a80a7f4    src
PS D:\laoergege-demos\git-demo-project> git cat-file -p 8251a50aff5d3
100644 blob e4fd797cd4752a6d66a59a7e89ae76798b460d1b    index.html
PS D:\laoergege-demos\git-demo-project> git cat-file -p e1bfe2cd62deac
Hello Git!
123456              
```

通过 commit 对象信息，找到 tree，通过查看 tree，发现了新的子 tree 和原来 blob（readme.md）,再通过子 tree 发现了新添加的 index.html 文件转存的 blob，整体关系图如下：

![](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/20190726090455.png)

提交时，Git 创建的 Commit 对象，除了包含相关提交信息以外，还包含着指向这个树对象（项目根目录）的指针，Tree 相当于一次提交的文件目录快照，Blob 叶子节点对应则是文件。

提交时，Git底层的运行流程大概为：当我们添加或者修改了文件并且 add 到 Stage Area 之后，首先会根据文件内容创建不同的blob，当进行提交之后马上创建一个 tree 组件把需要的 blob 组件添加进去，之后再封装到一个 commit 组件中完成本次提交。对于内容相同的文件只会存一个 blob ，不同的 commit 的区别是 commit、tree 和有差异的 blob，多数未变更的文件对应的 blob 都是相同的，这么设计对于版本管理系统来说可以省很多存储空间。其次，随着 blob 文件的增多，git 还会做 pack 整理。使用增量存储的机制，把内容相近的blob做增量存储。

## Git 分支

推荐学习 [git book 分支章节](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B)。

相关主要命令：
```shell
git branch <branch> <base branch> // 创建分支
git checkout <branch> // 切换分支
git checkout -b <branch> <base branch> // 创建并切换到新分支
git branch -d <branch> // 删除分支 -D 强制删除分支
```

使用 gitk 等图形化工具查看分支图谱，其本质是一颗 commidID 树，无论我们 `git checkout <commitID> | <branch> | <HEAD>`，所有本质都是切换到对应的 commitID 节点快照。

### 分支合并
git 的分支合并有三种类型：
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

你可以提取在 bugfix 中引入的补丁和修改，然后在 master 的基础上应用一次。 在 Git 中，这种操作就叫做 变基。 

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

### Git 工作流

### 分离头指针
分离头指针，即 HEAD 指针没有跟分支进行挂钩。在此 HEAD 上产生的 commit 由于没有跟 branch 挂钩，当你切换其他分支时会被 git 清除掉。
```shell
git checkout <commitID> // 切换到指定版本
```

#### 应用场景

## GitLab

## 参考学习

- [git book 中文版](https://git-scm.com/book/zh/v2)
- [猴子都能懂的GIT入门](https://backlog.com/git-tutorial/cn/reference/)