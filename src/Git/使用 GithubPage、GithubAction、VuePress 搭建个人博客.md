# 使用 GithubPage、GithubAction、VuePress 搭建个人博客

笔者一直想开发个人博客，类笔记，方便记录自己的技术成长过程。

本文中，笔者将使用 GithubPage 作为个人博客网站静态资源托管，使用 VuePress 生成静态网站，利用 GithubAction 自动化构建部署发布。

**内容目录**
- [使用 GithubPage、GithubAction、VuePress 搭建个人博客](#使用-githubpagegithubactionvuepress-搭建个人博客)
  - [Github Page 及发布源](#github-page-及发布源)
    - [Github Page](#github-page)
    - [发布源](#发布源)
  - [自定义域名](#自定义域名)
  - [VuePress](#vuepress)
  - [GithubAction 自动部署](#githubaction-自动部署)

## Github Page 及发布源

### Github Page

GitHub Pages 是 Github 提供的一个静态网页托管服务，你可以把你制作的 HTML 静态网页通过 git 工具上传至 GitHub 代码仓库。

Github 提供三种站点类型：
- 项目
- 用户
- 组织

用户和组织站点始名为 `<user>.github.io` 或 `<organization>.github.io` 

项目站点的源文件与其项目存储在同一个仓库中，项目的站点名为 `<user>.github.io/<repository>` 或者 `<organization>.github.io/<repository>`

因为我们的博客项目和要静态托管的资源是同处于同个仓库之中，所以我们将使用 github 项目站点的形式，即我们的站点需要例如 `laoergege.github.io/laoergege-blog` 这项的域名地址形式才能访问。如何创建项目站点可参考官方项目文档。

> [创建 GitHub Pages网站](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)

### 发布源

用户和组织站点的默认发布来源是 master 分支，即 master 分支上所有的资源都将被静态托管发布，您无法为用户或组织站点选择不同的发布来源或者发布目录。

而项目站点的默认发布来源是 gh-pages 分支。 如果项目站点的仓库有 gh-pages 分支，您的站点将从该分支自动发布。项目站点也选择从 master 分支或 master 分支上的 `/docs` 文件夹发布，详情可参考以下官方文档。

> [GitHub Pages 站点的发布源](https://help.github.com/cn/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)

本次博客项目因为为 github 项目站点类型，所以选择 master 分支上的 `/docs` 文件夹作为发布资源，这样方便我们把要发布的资源和笔记、代码环境区分开。

## 自定义域名

项目站点类型的网站必须通过 `<xxx>.github.io/repository` 形式进行访问，非常不方便，所幸 GitHub Pages 支持自定义域名，GitHub Pages 支持两种类型的域名：
- 二级域名(eg. blog.example.com)
- 顶级域名(eg. example.com)

另外如果用户在某个项目下配置了自定义域名，该自定义域名将替换其他未配置自定义域的任何项目的 Github Page 的域名。例如，如果你有个一个项目自定义域名为 `www.octocat.com`，并且您拥有一个未自定义域名的项目网站 `octo-project`，则该仓库的 GitHub Pages 网站将在 `www.octocat.com/octo-project` 上部署。

更多详情内容参考

> [关于自定义域名和 GitHub 页面](https://help.github.com/cn/github/working-with-github-pages/about-custom-domains-and-github-pages)

自定义域名配置步骤参考

> [配置 GitHub Pages 网站的自定义域](https://help.github.com/cn/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

配置了二级域名后，需要注意两点：

1. 在域名服务提供商配置 CNAME 记录，指向你的 `<user>.github.io`
2. 确保每次发布的资源文件中存在 CNAME 文件，内容为你配置的域名地址

## VuePress

## GithubAction 自动部署

```yml
name: Build and Deloy

 # 监听 page 标签事件
on:
  push:
    tags: 
      - page

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    # 拉取项目
    - name: Checkout
      uses: actions/checkout@v2
      with:
        token: ${{ secrets.DEPLOY_KEY }}
    # 安装环境
    - name: Install-node
      uses: actions/setup-node@v1
      with: 
        node-version: 10.x 
    # 安装依赖
    - name: Install
      run: yarn
    # 构建
    - name: Build
      run: npm run docs:build
    # 每次构建都会先清除 docs
    # 故构建完成后保证 docs 目录下存在 CNAME 文件
    - name: ADD CNAME
      run: cp CNAME docs/
    # 部署
    - name: Deploy
      run: |
        git config --global user.email "13211239457@163.com"
        git config --global user.name "laoergege"
        git checkout -b tmp
        git add .
        git commit -m 'publish'
        git pull origin master --rebase    
        git push origin tmp:master
```