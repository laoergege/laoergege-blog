# 使用 Github 搭建个人博客

## Github page 及 发布策略

### Github page
GitHub pages 是 Github 提供的一个静态网页托管服务，你可以把你制作的 HTML 静态网页通过 git 工具上传至 GitHub 代码仓库。

Github 提供三种站点类型：
- 项目
- 用户
- 组织

用户和组织站点始名为 `<user>.github.io` 或 `<organization>.github.io` 

项目站点的源文件与其项目存储在同一个仓库中，项目的站点名为 `<user>.github.io/<repository>` 或者 `<organization>.github.io/<repository>`

> [创建GitHub Pages网站](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)

### 发布源及策略
用户和组织站点的默认发布来源是 master 分支。 如果用户和组织站点的仓库是 master 分支，您的站点将从该分支自动发布。 您无法为用户或组织站点选择不同的发布来源。

项目站点的默认发布来源是 gh-pages 分支。 如果项目站点的仓库有 gh-pages 分支，您的站点将从该分支自动发布。项目站点也可以从 master 分支或 master 分支上的 `/docs` 文件夹发布。 

> [配置 GitHub Pages 站点的发布源](https://help.github.com/cn/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)

笔者的发布策略是：选择了项目站点类型，gh-pages 分支作为发布源，master 作为暂存区，通过 page 标签去选择要发布的 git commit。

**这样没写完文章可使用 git 上传 github 暂存，然后通过 page 标签去选择发布到 gh-pages 分支，让 github page 部署 gh-pages 分支的静态资源。**

我们需要为我们的博客项目创建两条分支 master（默认已有）、gh-pages，并且将 gh-pages 作为空分支，接下来我们将通过 Github Action 去自动化构建那些静态资源生成器并将资源发布到 gh-pages 分支。

## 自定义域名
