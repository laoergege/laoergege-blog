(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{371:function(t,s,a){t.exports=a.p+"assets/img/source.4bec47e3.png"},423:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-githubpage、githubaction、vuepress-搭建个人博客"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-githubpage、githubaction、vuepress-搭建个人博客"}},[t._v("#")]),t._v(" 使用 GithubPage、GithubAction、VuePress 搭建个人博客")]),t._v(" "),n("p",[t._v("笔者一直想开发个人博客，类笔记，方便记录自己的技术成长过程。")]),t._v(" "),n("p",[t._v("首先 git 是非常适合文本文件的管理，市面也有很多基于 git 开发笔记产品，笔者也将个人项目开发放眼到 git 相关技术及生态。本文中，笔者将使用 GithubPage 作为个人博客网站静态资源托管，使用 VuePress 生成静态网站，利用 GithubAction 自动化构建部署发布。")]),t._v(" "),n("p",[n("strong",[t._v("内容目录")])]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-githubpagegithubactionvuepress-%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2"}},[t._v("使用 GithubPage、GithubAction、VuePress 搭建个人博客")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#github-page-%E5%8F%8A%E5%8F%91%E5%B8%83%E6%BA%90"}},[t._v("Github Page 及发布源")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#github-page"}},[t._v("Github Page")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E5%8F%91%E5%B8%83%E6%BA%90"}},[t._v("发布源")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D"}},[t._v("自定义域名")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#vuepress"}},[t._v("VuePress")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#vuepress-%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E7%9A%84%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE"}},[t._v("vuepress 默认主题的菜单配置")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#githubaction-%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2"}},[t._v("GithubAction 自动部署")])])])])]),t._v(" "),n("h2",{attrs:{id:"github-page-及发布源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-page-及发布源"}},[t._v("#")]),t._v(" Github Page 及发布源")]),t._v(" "),n("h3",{attrs:{id:"github-page"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-page"}},[t._v("#")]),t._v(" Github Page")]),t._v(" "),n("p",[t._v("GitHub Pages 是 Github 提供的一个静态网页托管服务，你可以把你制作的 HTML 静态网页通过 git 工具上传至 GitHub 代码仓库。")]),t._v(" "),n("p",[t._v("Github 提供三种站点类型：")]),t._v(" "),n("ul",[n("li",[t._v("项目")]),t._v(" "),n("li",[t._v("用户")]),t._v(" "),n("li",[t._v("组织")])]),t._v(" "),n("p",[t._v("用户和组织站点始名为 "),n("code",[t._v("<user>.github.io")]),t._v(" 或 "),n("code",[t._v("<organization>.github.io")])]),t._v(" "),n("p",[t._v("项目站点的源文件与其项目存储在同一个仓库中，项目的站点名为 "),n("code",[t._v("<user>.github.io/<repository>")]),t._v(" 或者 "),n("code",[t._v("<organization>.github.io/<repository>")])]),t._v(" "),n("p",[t._v("因为我们的博客项目和要静态托管的资源是同处于同个仓库之中，所以我们将使用 github 项目站点的形式，即我们的站点需要例如 "),n("code",[t._v("laoergege.github.io/laoergege-blog")]),t._v(" 这项的域名地址形式才能访问。如何创建项目站点可参考官方项目文档。")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建 GitHub Pages网站"),n("OutboundLink")],1)])]),t._v(" "),n("h3",{attrs:{id:"发布源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布源"}},[t._v("#")]),t._v(" 发布源")]),t._v(" "),n("p",[t._v("至 2020.08.09，github page source 规则发生了变化，可以自行选择分支和发布目录（root 或者 /docs），不再像以前限定 master 上的 /docs 目录或者特定 gh-pages 分支根目录")]),t._v(" "),n("p",[n("img",{attrs:{src:a(371),alt:""}})]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://help.github.com/cn/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages 站点的发布源"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("本次博客项目发布源策略：")]),t._v(" "),n("ul",[n("li",[t._v("master 作为写作分支")]),t._v(" "),n("li",[t._v("site 作为发布分支，且发布的目录为 docs")]),t._v(" "),n("li",[t._v("page tag 作为构建动机（触发 github action）")])]),t._v(" "),n("h2",{attrs:{id:"自定义域名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名"}},[t._v("#")]),t._v(" 自定义域名")]),t._v(" "),n("p",[t._v("项目站点类型的网站必须通过 "),n("code",[t._v("<xxx>.github.io/repository")]),t._v(" 形式进行访问，非常不方便，所幸 GitHub Pages 支持自定义域名，GitHub Pages 支持两种类型的域名：")]),t._v(" "),n("ul",[n("li",[t._v("二级域名(eg. blog.example.com)")]),t._v(" "),n("li",[t._v("顶级域名(eg. example.com)")])]),t._v(" "),n("p",[t._v("另外如果用户在某个项目下配置了自定义域名，该自定义域名将替换其他未配置自定义域的任何项目的 Github Page 的域名。例如，如果你有个一个项目自定义域名为 "),n("code",[t._v("www.octocat.com")]),t._v("，并且您拥有一个未自定义域名的项目网站 "),n("code",[t._v("octo-project")]),t._v("，则该仓库的 GitHub Pages 网站将在 "),n("code",[t._v("www.octocat.com/octo-project")]),t._v(" 上部署。")]),t._v(" "),n("p",[t._v("更多详情内容参考：")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://help.github.com/cn/github/working-with-github-pages/about-custom-domains-and-github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于自定义域名和 GitHub 页面"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("自定义域名配置步骤参考：")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://help.github.com/cn/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 GitHub Pages 网站的自定义域"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("配置了二级域名后，需要注意两点：")]),t._v(" "),n("ol",[n("li",[t._v("在域名服务提供商配置 CNAME 记录，指向你的 "),n("code",[t._v("<user>.github.io")])]),t._v(" "),n("li",[t._v("确保每次发布的资源文件中存在 CNAME 文件，内容为你配置的域名地址")])]),t._v(" "),n("h2",{attrs:{id:"vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[t._v("#")]),t._v(" VuePress")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),n("OutboundLink")],1),t._v(" 是基于 vue 技术开发的静态网站生成器，每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")]),t._v(" "),n("p",[t._v("VuePress 默认情况下，文件将会被生成在 "),n("code",[t._v(".vuepress/dist")]),t._v("，需要 "),n("code",[t._v(".vuepress/config.js")]),t._v(" 中的 dest 字段来修改成 "),n("code",[t._v("docs")]),t._v(" 文件夹，以下是笔者初期的 vuepress config。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基本配置")]),t._v("\n  title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Laoergege Blog'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  description"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Just For Fun'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dest"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../docs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  extraWatchFiles"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听 menu 菜单")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./menu.js'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme")]),t._v("\n  themeConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("menu\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("随着文章的数量越多，我们的菜单也会变多，为了方便维护管理，笔者将菜单配置分离到 menu.js 文件，并开启监听。")]),t._v(" "),n("h3",{attrs:{id:"vuepress-默认主题的菜单配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-默认主题的菜单配置"}},[t._v("#")]),t._v(" vuepress 默认主题的菜单配置")]),t._v(" "),n("p",[t._v("笔者将 vuepress 的 nav 配置为一级菜单（nav 支持嵌套配置），sidebar 作为二三级等菜单配置")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nav 配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nav item")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'menu name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   items"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// side 配置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// side item")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vuepress 会自动获取文件第一个 header 标题作为菜单名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果你想要显示地指定链接的文字 使用一个格式为 [link, text] 的数组")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'menu name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// side item")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n")])])]),n("p",[t._v("link 可以省略 .md 拓展名；如果 link 以 / 结尾的路径将会被视为 */README.md，即我们访问 "),n("code",[t._v("host/Git/")]),t._v(" 地址时将默认访问 "),n("code",[t._v("Git")]),t._v(" 目录下 README 文件；。如果你想要显示地指定链接的文字，使用一个格式为 [link, text] 的数组。")]),t._v(" "),n("p",[n("strong",[t._v("多侧边栏")])]),t._v(" "),n("p",[t._v("将侧边栏的菜单与一级菜单关联映射，实现多侧边栏菜单，我们需要将 sidebar 配置为对象形式，其 key 与 nav 菜单 link 保持一致。")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// menu.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nav"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'JavaScript'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/JavaScript/'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NodeJS'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/NodeJS/'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Git'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            link"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Git/'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sidebar"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// key 与 nav 菜单 link 保持一致")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/NodeJS/'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Node Event Loop'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Git/'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 侧边栏分组")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Git 博客开发系列'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// title 必要")]),t._v("\n                children"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'使用 GithubPage、GithubAction、VuePress 搭建个人博客'")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("分组侧边栏")])]),t._v(" "),n("p",[t._v("上面配置中，实现分组侧边栏需要将 side item 使用以下格式")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'menu name'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// title 必要")]),t._v("\n    children"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        ...\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("参考更多 "),n("a",{attrs:{href:"https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress 默认主题配置"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"githubaction-自动部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#githubaction-自动部署"}},[t._v("#")]),t._v(" GithubAction 自动部署")]),t._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build and Deloy\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" page\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-and-deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Checkout\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ref")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" site\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pull\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        git pull origin master --allow-unrelated-histories")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SetCache\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v1\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/.npm\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),n("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/package-lock.json')")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          ${{ runner.os }}-node-")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("CI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm ci\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm run docs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n        git config --global user.email "13211239457@163.com"\n        git config --global user.name "laoergege"\n        git add .\n        git commit -m \'release\'  \n        git push')]),t._v("\n\n")])])]),n("hr"),t._v(" "),n("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);