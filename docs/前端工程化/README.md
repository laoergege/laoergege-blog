---
release: true
tags:
 - 工程
desc: 系统化前端工程相关
---

# 前端工程化

> 前端工程化本质：将前端工作流程`标准化`、`规范化`、`工具化`、`自动化`。**通过规范和工具来提高前端应用质量及开发效率。**

## 系文

- [《前端代码规范实践总结》](./前端代码规范实践总结.md)

## 知识体系

- 前端工作流
  - 版本管理（git）
    - git flow 分支管理
    - commit msg 提交信息
    - 提案请求
      - merge request & code review
  - 代码
    - 代码风格
      - 命名规范
      - 代码格式 prettier
      - 代码质量 eslint
      - 类型检测 typescript
    - 项目组织管理
      - multirepo
      - monorepo
    - 目录结构
    - 环境
      - 运行环境
        - node
      - 包管理
        - pnpm
          - 依赖
          - store：存储所有的node_modules依赖
            - hard link 文件：.pnpm/node_modules中存储项目的hard links
            - symbolic link 目录：通过symbolic link链接到.pnpm/node_modules目录
          - workspace
      - 环境锁定
        - node
          - nvm
          - package: `engines` + `.npmrc: engine-strict`
          - .npmrc: `use-node-version`
        - 包管理：[corepack](https://github.com/nodejs/corepack)
        - 依赖锁定：lockfile
  - 开发
    - 调试
      - 本地服务器
      - 代理
      - mock
      - 环境区分
    - 构建
      - 特性
        - 模块化
        - 热模块替换
        - 编译
          - [gogocode](https://github.com/thx/gogocode)
        - 增量
          - husky + Lint-stage
        - 打包/分包
    - 工具
      - webpack
      - [vite](https://github.com/vitejs/vite)
      - [parcel](https://parceljs.org/)
  - 测试
    - unit（单元） jest
    - e2e（端对端） jest + puppeteer
    - Vitest
    - cypress
  - CI
    - lint
    - test
    - 包大小限制：[size-limit](https://github.com/ai/size-limit)
  - CD
    - 发版日志
  - 监控
  - 文档
    - vue：[vuese](https://github.com/vuese/vuese)
  - 架构化及方案沉淀
    - 列表
      - [tabulator](https://github.com/olifolkerd/tabulator)
    - 表单
    - 图标
    - 组件库
      - WebComponent
    - 微前端
      - [探索微前端的场景极限](https://mp.weixin.qq.com/s/YkUUQX1m-KzjkLVWwOxxxg)
    - SSR
    - 跨平台
      - Flutter
      - Electron
    - 动画
      - [lottie](https://github.com/airbnb/lottie) 
      - [anime](https://github.com/juliangarnier/anime/)



    





  - 开发

  

        *如，Webpack 是一个模块化打包工具，但它通过“万物皆模块”这种设计思想，巧妙地实现了整个前端项目的模块化，统一标准模块化处理。在 Webpack 的理念中，前端项目中的任何资源都可以作为一个模块，任何模块都可以经过 Loader 机制的处理，最终再被打包到一起*

  
    - 开发方案化

     
    
      - http
        - https://mp.weixin.qq.com/s/By-iXlONjSZLKFG2Xd7rpg 重复
        - https://mp.weixin.qq.com/s/NfyxtWUzjHh6ucXvBF9B4Q 缓存
        - https://mp.weixin.qq.com/s/E4SdYEkEzurfrnJrBu3bjA 并发下载
        - https://mp.weixin.qq.com/s/8RJSBwCDTvwX3Oql31ckkg 重试
        - https://mp.weixin.qq.com/s/lGqnGg-Zdnt-b7grdh9NnQ 压缩

 