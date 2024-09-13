---
discussionID: IyUm099IoSITvE2KzUTGn
release: true
tags:
 - git
---

# Git

- Git
  - 命令查看
    - `git help <command>` 可查看相关命令文档
    - `git <command> -h` 可在控制台直接简洁打印查看用法
  - 配置设置
    - 配置信息有三种不同级别，优先级分别是: local > global > system
    - 身份设置
      ```shell
        git config --local user.username "xxx"
        git config --local user.email "xxx"
      ```
    - [多个 Git 身份](https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities)
    - 远程 Git：Git SSH Key
  - 合并规范
    - [Git Flow 规范](../前端框架及工程化/前端项目开发中的规范.md#git-flow-规范)
    - 保护主分支，禁止强力推送
    - 使用快速合并策略保持主分支干净
    - 推送代码前先执行一次 `git pull --rebase`，本地解决冲突
    - 打 Tag 标签管理版本
    - 发起 Merge Request（合并主分支请求），并进行 Code Review
  - [Git 原理探索](./Git%20原理探索.md)
  - 仓库
    - .gitignore
      ```
      # 以下规则会了，也基本熟悉写 .gitignore 文件

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
  - 工作流
    - 工作区、暂存区、版本区 ![](https://git-scm.com/book/en/v2/images/reset-workflow.png)
    - 版本区，一般 git 仓库中有多条分支，HEAD 指向当前分支及其最后提交版本
    - 暂存区，预期的下一次提交的快照
    - 工作区，工作目录
  - 分支
    - 分支树的本质是一颗 commidID 树，无论我们 `git checkout <commit> | <branch> | <tag>`，所有本质都是切换到对应的 commitID 节点快照，故 Git 的分支，其实本质上仅仅是指向 Commit 对象的可变指针
    - 创建分支
      - `git branch <branch> <base_branch>`
    - 删除分支：`git branch -d <branch>`
      - `-d`：删除分支，删除前 Git 会判断在该分支上开发的功能是否被 merge 到其它分支，如果有则无法删除
      - `-D`：强制删除分支
    - 切换分支
      - `git switch <branch>`
      - `git switch -d <commit>`：切换到 Commit 节点
      - `git switch -c <new_branch> <base_branch>`:：创建并切换到新的分支
    - 远程分支
      - git 应用下有三种分支
        - 本地分支 master
        - 本地远程分支 origin/master，用于追踪远程分支
        - 远程分支 master
      - Refspec `[+]＜src＞:＜dst＞`
        - `+` 告诉 Git 强制更新引用，即使不是**快进合并**策略
        - `＜src＞:＜dst＞` 是上下游分支关联
        - `git branch -vv`：查看分支映射关系
        - `git branch -u` 设置上游分支
        - Refspec 用于在执行 push 或 fetch 操作时定义上下游分支，设置 Refspec 关系后可省去该参数
      - `git fetch <repository> <refspec>`：更新本地远程分支
      - `git pull`
        - `git pull = git fetch + git merge`
          - `git pull` 使用给定参数执行 `git fetch`
          - 内容下载完成后，根据配置选项或命令行标志，将调用 `git rebase` 或 `git merge` 来合并上游分支到本地分支
        - `git pull --rebase`：使用变基合并策略而不是合并提交
        - `--depth <depth>`：deepen history of shallow clone
        - `git pull <remote> <refspec>`：从远程获取最新版本并将其合并到本地
      - `git push`：将下游分支推送合并到上游分支
        - `-u`：推送同时设置绑定上游分支
        - `git push <repository>`：将当前本地仓库分支推送到指定仓库的同名远程分支
        - `git push <repository> <refspec>`：手动指定本地和远程分支的推送
          - 缺省 `:＜dst＞`： eg，`git push origin master`：推送本地 master 到远程 master 分支
      - 删除远程分支 `git push origin :<branch>`
    - 合并分支
      - Git 默认的合并策略
        - 本地远程分支、远程分支：快进合并策略
        - 本地远程分支、本地分支：合并提交策略
          - `git pull --rebase` ：改为变基策略
      - `git merge`
        - **快速合并(fast-forward only)**：当源节点 master 与目标节点 bugfix 同处一条 Commit 对象树的分支上，进行合并时，git 只是简单的将 master 分支指针向前移动
        - **合并提交**：当源节点 master 与目标节点 bugfix 不在同一条 Commit 对象树的分支上，进行合并时，会创建新的 commit 节点，其 parent 即为 master、bugfix 的最新提交对象
          - `git merge --no-ff`：命令 git 不要快合并
      - `git rebase`：变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起
        - 首先找到这两个分支的最近共同祖先，然后把当前分支与目标分支共同祖先**之后的提交重新一个一个生成新的 commit 提交到目标分支**, 最后将当前分支指向新的提交
        - `git rebase [basebranch] [topicbranch]`
          - 可以直接将将当前分支变基到目标分支上，省去了切换分支的操作
      - **cherry-pick**：可以选择任意 Commit，合并到当前分支
        - `git cherry-pick <commit-ish>...`
  - 历史、diff
  - 恢复
    - `git checkout <commit>` 将整个工作空间恢复到指定的提交状态
    - `git checkout <commit> -- <pathspec>` 将指定路径的文件恢复到指定的提交状态
    - `git checkout -b <new_branch> <base_branch>`：创建新的分支
    - `git restore <path>` 
    - `git restore --staged <path>`
    - `git restore --source <path>`
  - Worktrees：创建多个工作区间
    - `git worktree add <path>`：添加工作空间
    - `git worktree add -b <new_branch> <path> <base_branch>`：基于指定分支创建新的分支工作空间
    - `git worktree list`：列出工作空间
    - `git worktree remove <worktree>`：删除工作空间
  - Subtree
    - 不在提交中混合超级和子项目代码的责任在于您
    - 为子项目在上游贡献代码稍微复杂一些
    - 您必须了解新的合并策略
    - 创建 `git subtree add   --prefix=<prefix> <repository> <ref>`
    - 更新
    - 修改提交
    - 远程仓库
      - git remote add -f tpope-vim-surround https://bitbucket.org/vim-plugins-mirror/vim-surround.git
- Git 工具
  - [gitbutler](https://github.com/gitbutlerapp/gitbutler)