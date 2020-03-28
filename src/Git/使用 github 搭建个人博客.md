# 使用 Github 搭建个人博客

- [使用 Github 搭建个人博客](#使用-github-搭建个人博客)
  - [Github Page 及 发布策略](#github-page-及-发布策略)
    - [Github Page](#github-page)
    - [发布源及策略](#发布源及策略)
  - [自定义域名](#自定义域名)

## Github Page 及 发布策略

### Github Page
GitHub Pages 是 Github 提供的一个静态网页托管服务，你可以把你制作的 HTML 静态网页通过 git 工具上传至 GitHub 代码仓库。

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

我们需要为我们的博客项目创建两条分支 master（默认已有）、gh-pages，并且将 gh-pages 置为空分支，接下来我们将通过 Github Action 去自动化构建那些静态资源生成器并将资源发布到 gh-pages 分支。

## 自定义域名
GitHub Pages 支持两种类型的域名
- 二级域名(eg. blog.example.com)
- 顶级域名(eg. example.com)

如果用户在某个项目下配置了自定义域名，该自定义域名将替换未配置自定义域的任何项目的 Github Page 的域名。例如，如果你有个一个项目自定义域名为 `www.octocat.com`，并且您拥有一个未自定义域名的项目网站 `octo-project`，则该仓库的 GitHub Pages 网站将在 `www.octocat.com/octo-project` 上部署。

> [配置 GitHub Pages 网站的自定义域](https://help.github.com/cn/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)

根据官方文档配置，需要注意的几点
1. 二级域名需要在域名服务商配置 CNAME 记录指向你的 `<user>.github.io`
2. 顶级域名需要在域名服务商配置 A 记录指向 GitHub Page IP 地址
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. 当在 github 配置完自定义域名后，github 会自动在发布源的分支上添加 **CNAME 文件**，其内容为你自定义的域名。每当重新发布时，**你都要确保其分支存有该文件**。

笔者为本次博客项目使用的是 www 作为子域名，这也是 github 推荐的自定义域名。参考 github page 文档说明：

> www 子域名是最稳定的一种自定义域，因为 www 子域名不受 GitHub 服务器 IP 地址变动的影响。 您的网站加载速度也会更快，因为拒绝服务 (DoS) 攻击保护可以更有效地实施。

笔者同时也配置顶级域名，这样方便在在浏览器上输入顶级域名时就能访问到网站，因为请求解析到 GitHub pages 主机上，github page 主机会自动将顶级域 `example.com` 重定向到 `www.example.com`。

