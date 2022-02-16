## 前端工程化

> 前端工程化本质：将前端工作流程`标准化`、`规范化`、`工具化`、`自动化`。**通过规范和工具来提高前端应用质量及开发效率。**

- 前端工作流
  - git
    - git flow 分支规范
    - commit msg 提交信息
    - merge request & code review
  - 开发
    - 代码风格
      - 命名规范
      - 代码格式 prettier
      - 代码质量 eslint
    - 项目组织管理
      - multirepo
      - monorepo
    - 目录结构
    - 环境
      - 运行环境
      - 包管理
    - 调试
      - 本地服务器
      - 代理
      - mock
      - 热模块更新
  - 构建
    - 模块化
    - 编译
      - [gogocode](https://github.com/thx/gogocode)
    - 打包/分包
    - webpack
    - vue：[vite](https://github.com/vitejs/vite)
  - 测试
    - unit（单元） jest
    - e2e（端对端） jest + puppeteer
  - CI
  - CD
    - 发版日志
  - 监控
  - 文档
    - vue：[vuese](https://github.com/vuese/vuese)
  - 架构化及方案沉淀
    - table
      - [tabulator](https://github.com/olifolkerd/tabulator)
    - 组件库
    - 微前端
      - [探索微前端的场景极限](https://mp.weixin.qq.com/s/YkUUQX1m-KzjkLVWwOxxxg)


- 前端工作流
  - 规范
    - 代码
      - 规范 [《前端代码规范实践总结》](./前端代码规范实践总结.md)

    - 项目
     
      - 项目架构
        - 组织结构
      - 结构组织
        - 模块、分层
        - 基础库
          - 组件库
          - http
      - 项目搭建
        - 脚手架工具
          - 创建项目模板(用于快速生成新项目的目录模板，并集成一系列体系化工具的安装，能够提升前端开发人员的效率，减少copy操作)，参考 vue-cli 交互及设计思路
  - 开发
    - 依赖管理工具
    - 构建工具
      - webpack
      - [parcel](https://parceljs.org/)
    - 框架
  - 测试
  - CI/CD
    - CI
      - lint
      - 构建

        

    



- 依赖管理
      - 管理工具
        - npm
        - yarn
        - pnpm
      - 依赖算法
        - 嵌套依赖
        - 扁平依赖
      - 循环依赖（在工程实践中，循环引用的出现往往是由设计不合理造成的）
      - 依赖版本不一致（版本 lock）

  - 开发

    - 模块化

      - JS 模块化

      - CSS 模块化

        - 作用域
          - BEM
          - css module
          - css in js
        - 文件模块（CSS预处理器）
          - sass
          - postcss

      - 资源模块化

        *前端开发过程中，我们要面对的文件类型碎片化，相比后台开发主要面对仅仅只是一类类型文件，如 go 对应的就是 .go文件，而前端开发需要面对多种文件类型，如 JS 文件、CSS 文件、HTML文件、图片、字体等*

        *怎么在前端项目中更高效地管理和维护项目中的每一个文件资源及其关系？*

        *如，Webpack 是一个模块化打包工具，但它通过“万物皆模块”这种设计思想，巧妙地实现了整个前端项目的模块化，统一标准模块化处理。在 Webpack 的理念中，前端项目中的任何资源都可以作为一个模块，任何模块都可以经过 Loader 机制的处理，最终再被打包到一起*

    - 框架化（Vue）

      *具有复杂数据状态的应用开发过程就必须要有合适的框架，选用 MVVM 之类的框架，采用数据驱动开发的方式增强可维护性*

      - 组件化，是对UI层面的分解，将特定的样式及交互逻辑等封装成一个独立的功能，便于复用
      - 数据驱动化
      - 数据流
      - 逻辑复用
      - 前端路由

    - 开发方案化

      - 安全
        - https://mp.weixin.qq.com/s/s1doq884nreQPwbvqopL0g
      - 存储
        - https://mp.weixin.qq.com/s/E4SdYEkEzurfrnJrBu3bjA
      - http
        - https://mp.weixin.qq.com/s/By-iXlONjSZLKFG2Xd7rpg 重复
        - https://mp.weixin.qq.com/s/NfyxtWUzjHh6ucXvBF9B4Q 缓存
        - https://mp.weixin.qq.com/s/E4SdYEkEzurfrnJrBu3bjA 并发下载
        - https://mp.weixin.qq.com/s/8RJSBwCDTvwX3Oql31ckkg 重试
        - https://mp.weixin.qq.com/s/lGqnGg-Zdnt-b7grdh9NnQ。压缩
      - icon
      - 表单
      - [CSS 项目实践指南](../HTML&CSS/CSS 项目实践指南.md)
      - h5
        - 移动端适配
        - 混合开发
      - pc

    - 服务端渲染（SSR）

      - Nuxt.js

    - 静态页面生成器(SSG)

      - Vuepress

    - 跨平台框架

      - Flutter

    - 桌面应用开发

      - Electron

 

- 自动化集成方式

  - 编辑器 vscode
  - git hooks
    - husky（git hook）
    - lint-staged（changed file）
  - npm script + script hooks
  - webpack hooks
  - web hooks

零配置打包工具
- [microbundle](https://github.com/developit/microbundle)
