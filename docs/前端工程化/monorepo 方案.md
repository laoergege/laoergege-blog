- monorepo
  > 把一个项目拆分或者内聚
  - 依赖安装
    - 依赖安装算法
    - hoist，提升依赖，利用 nodejs 依赖机制节省空间
    - nohoist
      - yarn [nohoist in Workspaces](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)
  - link 各个相互关联的包，便于开发
  - scripts
    - 依赖关系图
    - 子集操作
    - 增量操作 git diff
  - 发版流程
    - independent 模式
    - fixed 模式
  - 变更日志
- 工具栈
  - lerna + yarn + yarn workspaces
  - pnpm + rush


需要什么安装什么，别想着幽灵复用

https://github.com/microsoft/rushstack

- pnpm
  - 