- monorepo
  - 依赖安装
    - hoist，提升依赖，利用 nodejs 依赖机制节省空间
    - nohoist
      - yarn [nohoist in Workspaces](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)
  - link 各个相互关联的包，便于开发
  - scripts
    - filter
    - 按照依赖关系执行
    - 增量构建
  - 发版流程
    - independent 模式
    - fixed 模式
- 工具栈
  - lerna + yarn + yarn workspaces
  - pnpm + rush


需要什么安装什么，别想着幽灵复用

https://github.com/microsoft/rushstack