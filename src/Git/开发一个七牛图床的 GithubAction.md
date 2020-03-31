---
title: '开发一个七牛图床的 GithubAction'
tags:
  - github
  - git
---

# 开发一个七牛图床的 GithubAction

一般情况，笔者喜欢将图片和文件置于同个项目中，写作的时候方便直接引用显示，构建时替换成 Github Raw 线上地址。但由于国内访问 Github 上仓库的图片速度是比较慢的，使用 Github 作为图床是不太理想。我们可以使用国内 Gitee 作为图床，Gitee 的访问速度相对 Github 快。本文中笔者将使用开发一个 Github Action，用于将项目中指定的图片文件夹同步到 Gitee 上。

## 修改 vuepress webpack 构建配置

根据上述的策略，我们在项目中创建一个 `src/images` 目录用于存放图片，静态写作时，我们只需要相对引用图片，笔者用 vscode 及相关 markdown 插件进行编写及同步预览。有时我们也需要线下 vuepress dev 开发模式，查看效果如何，通过查看 vuepress 源码，了解 vuepress 构建时使用 [url-loader](https://github.com/webpack-contrib/url-loader) 对图片资源进行处理，10KB 大小下的图片转成 base64 嵌入。

```javascript
// node_modules/@vuepress/core/lib/node/webpack/createBaseConfig.js

config.module
    .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: inlineLimit // 10KB,
          name: `assets/img/[name].[hash:8].[ext]`
        })
```

这在 dev 模式下依旧符合我们期望，但在 build 模式下构建出来的资源对图片的引用，我们需要构建时替换成 Gitee Raw 线上地址 `'https://gitee.com/${user}/${repo}/raw/master/${path}'`，我们需要对 vupress webpack config 进行修改。

```javascript
// vue.config.js

...
 chainWebpack: (config, isServer) => {
    config.module
      .rule('images')
      .clear()

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 100 * 1024, // 100KB
          name: process.env.NODE_ENV === 'production' ? '[name].[hash:8].[ext]' : `assets/img/[name].[hash:8].[ext]`,
          publicPath: process.env.NODE_ENV === 'production' ? GITEE_RWA_URL : '/'
        })
  }
...
```

做完上面，接下来的一个主要需求就是：将 `src/images` 目录下的图片同步到 Gitee 上。我们可以将这个功能开发成一个 Github Action，方便以后其他项目使用。

## 关于 Github Action

Github Action 就像是一个实现某些功能的库，比如说可以读写仓库、发送短信、或者调用 github 或第三方的 API。你能够将某些功能抽成一个 Github Action，使用在你的 workflow 中或者通过公开仓库、 github 商城分享给其他人使用（Docker 实现的 Action 则通过 Docker Hub 等镜像仓库平台分享）。

推荐将 Github Action 作为一个独立仓库进行维护，而不是放在在某个应用的仓库中，这样方便**分享、跟踪、迭代**。如果不是想分享，而是想自我单独快速使用，推荐放在 `.github/actions` 文件下，比如 `.github/actions/action-a` 和 `.github/actions/action-b`，并使用相对路径引用。

```yml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: ./.github/actions/my-action
```

Github Action 分成两类实现：

- Docker 容器实现，Docker 实现更为强大自由，可以自定义操作系统和工具，但由于构建延迟，Docker 容器操作比JavaScript操作慢。
- JavaScript 实现，直接运行在机器上，执行速度更快。

本次开发中我们选择以 JavaScript 实现的方式。

## 开发 img-to-gitee-action

### 创建项目

创建项目我们可以使用官方提供的开发模板 [actions/javascript-action](https://github.com/actions/javascript-action)

#### 模板调整

删除多余文件（包括 .github/workflows/test.yml）、调整目录，如下

![test](../../images/20200310140855.png)

#### action.yml

action.yml 相当 npm 包 package.json ，用于描述 action 包的相关信息。

input 大写将被转成小写，input的value将被作为环境变量，格式 `INPUT_<VARIABLE_NAME>`

```yml
name: "img-to-gitee-action"
description: "a github action to sync images to gitee"
inputs:
  folder:
    description: "The files in the folder will be synced to Gitee"
    required: true
runs:
  using: "node12"
  main: "src/index.js"
```

更多的 action.yml 语法详情参考 [Metadata syntax for GitHub Actions](https://help.github.com/en/actions/building-actions/metadata-syntax-for-github-actions)

### 安装 GitHub Actions Toolkit

[GitHub Actions Toolkit](https://github.com/actions/toolkit) 是 Github 提供的一些列开发工具包用于 action 开发，并且提供各种模板有 JavaScript 开发项目模板和 Typescript 项目模板等。

### 代码实现

### README

创建一个标准的 Action README

A detailed description of what the action does.
Required input and output arguments.
Optional input and output arguments.
Secrets the action uses.
Environment variables the action uses.
An example of how to use your action in a workflow.

[参考](https://help.github.com/en/actions/building-actions/creating-a-javascript-action#create-a-readme)

### 代码提交及版本管理

#### release 分支

#### 打包

action 在 workflow 中作为一个单独的运行程序，所以我们需要将它及其依赖一同打包。
[zeit/ncc](https://github.com/zeit/ncc) 是一个快速的零配置且内置支持 typescript 的 node module 打包工具。

```
...
"package": "ncc build index.js -o dist",
...
```

### 在 workflow 中测试你的 action

私有 action

### 发布 Github Marketplace

<https://help.github.com/en/actions/building-actions/publishing-actions-in-github-marketplace>
