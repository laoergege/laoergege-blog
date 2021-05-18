## 文件删除（git rm）
```
PS D:\laoergege-demos\git_learning> ls                                                             

    目录: D:\laoergege-demos\git_learning


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2019/7/14     22:52                images
d-----         2019/7/14     22:52                js
d-----        2019/10/16     20:00                styles
-a----        2019/10/16     20:00           1422 index.html
-a----        2019/10/20     13:57             53 readme.md


PS D:\laoergege-demos\git_learning> rm readme.md                                                   PS D:\laoergege-demos\git_learning> ls                                                             

    目录: D:\laoergege-demos\git_learning


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2019/7/14     22:52                images
d-----         2019/7/14     22:52                js
d-----        2019/10/16     20:00                styles
-a----        2019/10/16     20:00           1422 index.html


PS D:\laoergege-demos\git_learning> git status                                                     On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    readme.md

no changes added to commit (use "git add" and/or "git commit -a")
PS D:\laoergege-demos\git_learning> git rm readme.md                                               rm 'readme.md'
PS D:\laoergege-demos\git_learning> git status                                                     On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        deleted:    readme.md
```

在上面我们通过 `rm` 删除文件，再将删除操作暂存。`git rm` 可达到上面两步操作效果。

```
PS D:\laoergege-demos\git_learning> ls                                                             

    目录: D:\laoergege-demos\git_learning


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         2019/7/14     22:52                images
d-----         2019/7/14     22:52                js
d-----        2019/10/16     20:00                styles
-a----        2019/10/16     20:00           1422 index.html
-a----        2019/10/20     14:09             53 readme.md


PS D:\laoergege-demos\git_learning> git rm readme.md                                               rm 'readme.md'
PS D:\laoergege-demos\git_learning> git status                                                     On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        deleted:    readme.md
```

## 撤销及重置
资料阅读 [Git-工具-重置揭密](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86)。

在工作过程，我们肯定会有错误的操作，当发生错误时，我们希望撤销操作或者重置，恢复回原来我们想要的样子。

### 恢复工作区、暂存区、版本区
![](https://git-scm.com/book/en/v2/images/reset-workflow.png)

git 的基本工作流如上图，其中：
- 版本区，一般 git 仓库中有多条分支，HEAD 指向当前分支及其最后提交版本
- 暂存区，预期的下一次提交的快照
- 工作区，工作目录

当发生某些情况时想要恢复时，一般情况：
1. 暂存区恢复成HEAD：`git reset`
2. 工作区恢复成暂存区：`git checkout -- <file> `

![](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/微信截图_20191020124515.png)

#### git reset
```
git reset [--soft | --mixed | --hard ] [-q] [<commit>]
```

`git reset` 可用来重置 `HEAD` 版本区、`Index` 暂存区、`Working` 工作区内容，reset，若如其名，重置，具有一定毁灭，强制的操作性，会完全覆盖指定区域的内容，checkout 则会相对智能些（下述）。

`git reset` 执行时有三个参数可用于指定执行步骤时，一般情况下，git 会顺序执行以下过程：
1. 更新 HEAD：移动 `HEAD` 及 **HEAD 所在的 branch** 指针（若只指定了 --soft，执行到此步骤为止）
2. 更新 Index：同步 `Index` 暂存区的版本内容同 `HEAD` 一致（若只指定了 --mixed，执行到此步骤为止，默认执行到 mixed 步骤）
3. 更新 Work：同步 `Working` 工作区的版本内容同 `Index` 一致（若指定了 --hard，执行到此步骤）

> *--hard* 是一种危险的行为，它会强制覆盖工作目录中的文件，以致跟 Index 保持同步

#### git reset 单个文件
```
git reset [commit] <file>
```

若指定了一个文件路径，reset 将会跳过上述第 1 步，因为其作用范围限定为指定的文件或文件集合，而 HEAD 指向的是一个 commit 对象，故跳过更新 HEAD 的步骤。但第三步不会执行，因为 `git reset` 默认行为只执行到第二步，添加指定参数命令 `git reset --hard <file>` 即可。

> *--patch* 可批量重置多文件

#### git reset 和 git checkout 区别
`git reset` 和 `git checkout` 都能更新 HEAD、Index、Work 三个区域内容，但主要区别：

当作为操作 commitID 指向时，`git reset` 和 `git checkout` 的行为区别是：
- `git reset` 会移动 HEAD 所在分支指针，`git checkout` 则不会。![](https://git-scm.com/book/en/v2/images/reset-checkout.png)
- 不同于 `reset --hard`，`checkout` 对工作目录是安全的，它会通过检查来确保不会将已更改的文件弄丢，其实它还更聪明一些。它会在工作目录中先试着简单合并一下,而 `reset --hard` 则会不做检查就全面地替换所有东西。

当作为操作对象为 file 时，`git checkout` 和 `git reset --hard [branch] file` 的行为一样。

总结：`git reset` 和 `git checkout` 两者在使用上总有些相似，那么如何区分使用场景，我觉得应该注意两点：
- 是否会移动 HEAD 所在的分支
- 是否对文件强覆盖

## .gitignore
以下规则会了，也基本熟悉写 .gitignore 文件。
```
# 注释
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
a/**/b  matches "a/b", "a/x/b", "a/x/y/b" and so on
```