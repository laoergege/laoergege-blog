## 知识体系

- workflow
  - 一个 workflow 由这 name、on、jobs 三个基本顶级字段组成
  - 配置
    - events 定义事件，触发工作流
      - Github 事件
      - 时间调度事件
      - 外部触发事件
    - [syntax]( https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions)
    - context and expression syntax
- actions

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
