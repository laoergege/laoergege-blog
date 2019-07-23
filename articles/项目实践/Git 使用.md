
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

## git 原理探索

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
* 为 git object 文件命名。
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

```

### commit、tree 和 blob 关系

文件内容相同，git眼里就是唯一的blob ， 这很常见，就是享元模式吧。 lua，Python等语言中，相同字符串，其实只分配一次内存，地址一样，指向同一个对象，可以节省内存。

## 参考学习