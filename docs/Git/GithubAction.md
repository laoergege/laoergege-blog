## 知识体系

- workflow
  - 由 name、on、jobs 三个基本顶级字段组成
  - 配置
  - 一个 workflow 由这 name、on、jobs 三个基本顶级字段组成
  - [workflow syntax]( https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions)
    - events 定义事件，触发工作流
      - Github 事件
      - 时间调度事件
      - 外部触发事件
    - context and expression syntax
    - [job.needs](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds) 工作流运行由一个或多个作业组成，默认情况下，作业并行运行， 要按顺序运行作业，需要配置 needs 关键字
- [actions](https://help.github.com/en/actions/building-actions)
  - [action.yml](https://help.github.com/en/actions/building-actions/metadata-syntax-for-github-actions)
  - 实现类型
    - JavaScript
    - Docker
  - usage in workflow
  - [toolkit](https://github.com/actions/toolkit)
  - 环境变量
    - [github 默认环境变量](https://help.github.com/en/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables)
      - 自定义环境变量时需注意：保留 `GitHub` 环境变量前缀供 GitHub 内部使用。 如果使用 GITHUB 前缀设置环境变量或 secret，则会导致错误。
      - 设置指向文件系统上某个位置的任何新环境变量都应该有一个 `PATH` 后缀。
    - [GITHUB_TOKEN](https://help.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)
    - webhook event payload（GITHUB_EVENT_PATH，）
  - 开发
    - 测试
    - versioning
- command
  - <https://help.github.com/en/actions/reference/workflow-commands-for-github-actions>
  - <https://github.com/actions/toolkit/blob/master/docs/commands.md>

## workflow

一个 workflow 由这 name、on、jobs 三个基本顶级字段组成

**workflow demo**

```yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the action will run. Triggers the workflow on push or pull request
# events but only for the master branch
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    ...
```


- 实践
  - 缓存加速 https://github.com/marketplace/actions/cache