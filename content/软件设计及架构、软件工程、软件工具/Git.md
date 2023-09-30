# Git

- Git
  - setUp
    - Git SSH Key
  - 提交规范
  - 分支规范
  - Tag & 版本管理
  - MR & Code Review
  - [vscode-gitlens](https://github.com/gitkraken/vscode-gitlens)
    - Line Blame
    - File Annotations
    - Commit Graph
    - File History
    - Interactive Rebase Editor
  - 仓库
    - `git push —set-upstream origin my-new-branch`
  - 分支、Commit 节点、标签
    - `git branch <branch> <base_branch>`：创建分支
    - `git checkout <branch|commit>`：切换分支/Commit 节点
    - `git checkout -b <new_branch> <base_branch>`：创建新的分支
    - `git switch <branch>`：切换分支
    - `git switch -d <commit>`：切换到 Commit 节点
    - `git switch -c <new_branch>`:：创建新的分支
    - 删除分支：`git branch -d <branch>`
      - `-d`：删除分支，删除前 Git 会判断在该分支上开发的功能是否被 merge 到其它分支，如果有则无法删除
      - `-D`：强制删除分支
    - 删除远程分支：`git push origin :master`
  - 文件
    - 恢复
      - `git checkout [branch|commit] -- <pathspec>`
      - `git restore -- <path>`
  - Worktrees：创建多个工作区间
    - `git worktree add -b <new_branch> <worktree>`
    - `git worktree add <worktree-name> <branch-name>`
    - `git worktree list`：列出工作树
    - `git worktree remove <worktree>`：删除工作树
  - Subtree


## 合并分支

git 的分支合并有四种合并方式：

- fast-forward merge 快速合并
- merge 普通合并
- rebase 变基
- cherry-pick 挑选

## Subtree

- Subtree
  - 不在提交中混合超级和子项目代码的责任在于您
  - 为子项目在上游贡献代码稍微复杂一些
  - 您必须了解新的合并策略
  - 创建 `git subtree add   --prefix=<prefix> <repository> <ref>`
  - 更新
  - 修改提交
  - 远程仓库
    - git remote add -f tpope-vim-surround https://bitbucket.org/vim-plugins-mirror/vim-surround.git