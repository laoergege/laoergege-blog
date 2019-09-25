## 前言
`git rebase` 除了用来合并分支，还有强大的交互式来处理 commitID 功能：
- pick commit
- 修改 commit 信息
- 合并 commit


```
git rebase [basebranch]
```
`git rebase` 将当前分支基于目标分支做操作，`git rebase` 工作的过程时，把 HEAD 指向 base 的 commit ，此时如果该 commit 没有对应 branch，就处于分离头指针的状态，然后把当前分支的提交重新一个一个生成新的 commit 提交到目标分支，当 rebase 创建完最后一个 commit 后，结束分离头状态，Git 把当前分支引用指向 HEAD 。[参考  Git 分支 - 分支的变基](https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E5%8F%98%E5%9F%BA)。


> 注意，git rebase 操作的应当是本地未共享 Commit

### 修改旧的 commit message
```
git rebase -i [commit]
```