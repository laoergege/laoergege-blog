(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{450:function(t,s,a){t.exports=a.p+"assets/img/WechatIMG149.89698f4e.jpeg"},451:function(t,s,a){t.exports=a.p+"assets/img/1597559691893.ae15dec9.jpg"},452:function(t,s,a){t.exports=a.p+"assets/img/eslint1.c159fabc.png"},453:function(t,s,a){t.exports=a.p+"assets/img/eslint2.bc099a4d.png"},454:function(t,s,a){t.exports=a.p+"assets/img/vscode-eslint.a7ac1df8.png"},587:function(t,s,a){"use strict";a.r(s);var e=a(47),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前端规范实践总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端规范实践总结"}},[t._v("#")]),t._v(" 前端规范实践总结")]),t._v(" "),e("p",[t._v("本文主要是对项目中一些前端开发的工作流程及一些工具使用规范小总结")]),t._v(" "),e("p",[e("strong",[t._v("内容目录")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%89%8D%E7%AB%AF%E8%A7%84%E8%8C%83%E5%AE%9E%E8%B7%B5%E6%80%BB%E7%BB%93"}},[t._v("前端规范实践总结")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#commit-%E8%A7%84%E8%8C%83"}},[t._v("Commit 规范")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%BF%85%E9%80%89%E7%B1%BB%E5%9E%8B"}},[t._v("必选类型")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%88%97%E5%AD%90"}},[t._v("列子")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#gitlab-flow-%E8%A7%84%E8%8C%83"}},[t._v("GitLab Flow 规范")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#gitlab-flow-%E6%A8%A1%E5%9E%8B%E5%8E%9F%E5%88%99"}},[t._v("GitLab Flow 模型原则")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E6%8F%90%E4%BA%A4%E6%B5%81%E7%A8%8B"}},[t._v("提交流程")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83eslint"}},[t._v("代码规范（eslint）")])])])])]),t._v(" "),e("h2",{attrs:{id:"commit-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-规范"}},[t._v("#")]),t._v(" Commit 规范")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit Message Guidelines(Angular)"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("提交 message 的结构如下所示")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<类型>[可选的作用域]: <描述>\n\n[可选的正文]\n\n[可选的脚注]\n")])])]),e("h3",{attrs:{id:"必选类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#必选类型"}},[t._v("#")]),t._v(" 必选类型")]),t._v(" "),e("p",[t._v("开发常用")]),t._v(" "),e("ul",[e("li",[t._v("fix 修复 BUG")]),t._v(" "),e("li",[t._v("feat 新增功能")]),t._v(" "),e("li",[t._v("refactor 代码重构")]),t._v(" "),e("li",[t._v("perf 优化提升")]),t._v(" "),e("li",[t._v("ui UI 验收调整")])]),t._v(" "),e("p",[t._v("工具脚本相关")]),t._v(" "),e("ul",[e("li",[t._v("build 构建系统（如，npm、webpack 之类）")]),t._v(" "),e("li",[t._v("ci")]),t._v(" "),e("li",[t._v("test")])]),t._v(" "),e("p",[t._v("项目管理")]),t._v(" "),e("ul",[e("li",[t._v("style")]),t._v(" "),e("li",[t._v("revert")]),t._v(" "),e("li",[t._v("docs 文档变更")])]),t._v(" "),e("p",[t._v("其他")]),t._v(" "),e("ul",[e("li",[t._v("chore")])]),t._v(" "),e("h3",{attrs:{id:"列子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列子"}},[t._v("#")]),t._v(" 列子")]),t._v(" "),e("p",[t._v("包含可选正文、脚注的提交")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("fix: correct minor typos in code\n\nsee the issue for details on the typos fixed\n\ncloses issue #12\n")])])]),e("p",[t._v("包含可选作用域的提交说明")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("feat(lang): add polish language \n")])])]),e("p",[t._v("包含 issue 或者 task ID")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("feat: allow provided config object to extend other configs(#1357)\n")])])]),e("p",[t._v("包含了可选的 ! 字符以提醒注意破坏性变更的提交说明")]),t._v(" "),e("h2",{attrs:{id:"gitlab-flow-规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-flow-规范"}},[t._v("#")]),t._v(" GitLab Flow 规范")]),t._v(" "),e("blockquote",[e("p",[t._v("1.以下默认熟悉 git 相关操作")]),t._v(" "),e("p",[t._v("2.阅读 "),e("a",{attrs:{href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html#commit-often-and-push-frequently",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction to GitLab Flow"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("个人总结来说相比 "),e("a",{attrs:{href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html#github-flow-as-a-simpler-alternative",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Flow"),e("OutboundLink")],1),t._v(" 的单一和 "),e("a",{attrs:{href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html#git-flow-and-its-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git FLow"),e("OutboundLink")],1),t._v(" 的复杂，GitLab Flow 的单向流动合并模型更为清晰明了和多版本环境部署优势")]),t._v(" "),e("p",[e("img",{attrs:{src:a(450),alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("version 版本存储分支")]),t._v(" "),e("li",[t._v("developer 个人开发分支")]),t._v(" "),e("li",[t._v("master 持续集成分支")]),t._v(" "),e("li",[t._v("test 测试服分支")]),t._v(" "),e("li",[t._v("pre 预发服分支")]),t._v(" "),e("li",[t._v("prd 正式服分支")])]),t._v(" "),e("p",[t._v("如果按照长短期分支区分，除了 developer 为短期分支，其他都为长期分支。短期分支按照特性划分可以为 Hotfix、Feature、Optimize 分支等")]),t._v(" "),e("h3",{attrs:{id:"gitlab-flow-模型原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-flow-模型原则"}},[t._v("#")]),t._v(" GitLab Flow 模型原则")]),t._v(" "),e("p",[e("strong",[t._v("持续集成原则")])]),t._v(" "),e("p",[e("em",[t._v("Commit often and push frequently")]),t._v("，反正就是"),e("strong",[t._v("多 commit 多 push，保证每个 commit 变动明确及只包含相关变动文件，尽量多次合并到 master")]),t._v("，这样才能及早发现冲突，尤其是愈多人合作参与开发的项目显得更为重要")]),t._v(" "),e("p",[e("strong",[t._v("上游优先原则")])]),t._v(" "),e("p",[t._v("代码合并的顺序，要按环境依次推送，确保代码被充分测试过,才会从上游分支合并到下游分支。除非是很紧急的情况，才允许跳过上游分支，直接合并到下游分支。这种规则称之为 “upstream first”，也就是 “上游优先”")]),t._v(" "),e("p",[t._v("在 GitLab Flow 中，master 永远作为最新版本及持续集成的分支，每当 master 上的版本要发生变更时，建议的做法是每一个稳定版本，都要从 master 分支拉出一个 version 分支，比如 2-3-stable、2-4-stable等等。发现问题，就从对应版本分支创建修复分支，完成之后，先merge 到 master，才能再 merge 到 release 分支，遵循 “上游优先” 原则")]),t._v(" "),e("p",[e("img",{attrs:{src:a(451),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"提交流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交流程"}},[t._v("#")]),t._v(" 提交流程")]),t._v(" "),e("ol",[e("li",[t._v("从对应版本切换相应短期个人开发分支进行开发")]),t._v(" "),e("li",[e("code",[t._v("git rebase -i")]),t._v(" 压缩整理提交")]),t._v(" "),e("li",[e("code",[t._v("git pull origin master --rebase")]),t._v(" 提交前先合并 master")]),t._v(" "),e("li",[t._v("发起 merge request ，进行 code review")]),t._v(" "),e("li",[t._v("Git merge --no-ff myfeature")]),t._v(" "),e("li",[t._v("CI Pipe Stage")]),t._v(" "),e("li",[t._v("逐步自动合并到下游环境分支")])]),t._v(" "),e("blockquote",[e("p",[t._v("Rebae 变基的本质是创建新的 Commit，不要对已经上交到远程分支共享的 Commit 进行变基")]),t._v(" "),e("p",[t._v("https://docs.gitlab.com/ee/topics/gitlab_flow.html#squashing-commits-with-rebase")])]),t._v(" "),e("h2",{attrs:{id:"代码规范-eslint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码规范-eslint"}},[t._v("#")]),t._v(" 代码规范（eslint）")]),t._v(" "),e("p",[t._v("好的编码规范不仅可以大幅提高代码可读性，甚至会提高代码质量。很多优秀的团队，都根据最佳实践设定了特别优秀的编码规范，如 "),e("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("airbnb javascript style"),e("OutboundLink")],1),t._v("。"),e("em",[t._v("不要重复造轮子")]),t._v("，从工程化复用的角度，可以选择继承第三方团队定制的规范。")]),t._v(" "),e("p",[t._v("在 vue 项目中，选择 vue 官方 recommended 插件及定制的 airbnb 版本")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'extends'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:vue/recommended'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vue/airbnb'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("p",[t._v("再根据团队项目情况，进行部分 rule 配置")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**************** eslint rules ******************/")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-console'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warn'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-debugger'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warn'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object-shorthand'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-plusplus'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'consistent-return'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[t._v("或者使用 eslint-disabled 代码注释去跳过某些规则")]),t._v(" "),e("p",[e("img",{attrs:{src:a(452),alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(453),alt:""}})]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disabling Rules with Inline Comments"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("一个良好的编码规范会带来解放强迫症的舒适感，但过于严格的代码风格有时也会使人烦躁，失去开发体验，比如你正在快速修改一个 bug，修改后的代码打算测试验证是否符合期望，但是严格的规范要求阻断你的节奏，你不得不停下来重新修改代码使其通过规范，如此反复确实容易令人失望。最好的做法是在提交代码时候才进行规范校验，不打断开发体验。")]),t._v(" "),e("p",[t._v("为了平衡开发体验与编程规范的意义，对工作流程分为几层进行渐进式的限制")]),t._v(" "),e("p",[e("strong",[t._v("Dev 环境下分离 eslint 集成")])]),t._v(" "),e("p",[t._v("webpack 是当今主流的前端构建工具，得益于强大的扩展性，越来越多的流程可以轻松集成在一起，前端工程化才能有巨大的提升。但是随着项目规模的增加，构建流程的繁重也会导致项目的开发体验下降，这也是为什么现在前端构建工具有分离或者部分工具替换成其他语言平台开发的工具的趋势")]),t._v(" "),e("p",[t._v("分离 eslint 的好处不仅可以带来编译速度的提升，而且也不会阻断开发流程")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 本地开发环境停用 eslint-loader，便于加快编译")]),t._v("\n  lintOnSave"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[t._v("以上是 vue-cli 的配置，同理 webpack 上 es-loader 也是一样")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  test"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(js|mjs|jsx|ts|tsx)$")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  enforce"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  use"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可结合 webpack 与 eslint-loader，根据当前环境的环境变量配置 emitWarning")]),t._v("\n        emitWarning"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      loader"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" require"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("strong",[t._v("IDE && eslint plugin")])]),t._v(" "),e("p",[t._v("从构建流程分离了 eslint 后，需要借助 IDE 配合 eslint 插件下做到错误提示")]),t._v(" "),e("p",[t._v("以 VSCode 及 eslint 插件做到自动提示为例")]),t._v(" "),e("p",[e("img",{attrs:{src:a(454),alt:""}})]),t._v(" "),e("p",[t._v("并通过 VSCode 配置，保存时自动化 fix 部分错误")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vscode settings")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint.validate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascriptreact"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"editor.codeActionsOnSave"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source.fixAll.eslint"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint.codeAction.showDocumentation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enable"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭 vetur template validate，使用自定义 rules")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vetur.validation.template"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[e("strong",[t._v("GIT Hooks 自动化 eslint 代码")])]),t._v(" "),e("p",[t._v("利用 git 提供的 hooks 自动化在代码提交的时候进行检验，"),e("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1),t._v(" 是一个使 git hooks 变得更简单的工具， 再结合 "),e("a",{attrs:{href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),e("OutboundLink")],1),t._v(" 工具，只对每次增量的 git staged 文件进行操作，而不用对全量文件操作，提高效率")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n...\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// gitHooks 是 vue 官方对 husky 的封装，用法大体跟 husky 相同")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gitHooks"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commit-msg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -E GIT_PARAMS"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint-staged"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"*.{js,jsx,vue}"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service lint"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n...\n")])])]),e("p",[t._v("husky 说到底还是利用了 git hooks，git 也提供了 "),e("code",[t._v("git commit -n")]),t._v(" 命令去跳过 hooks，所以最终还是要在服务器上 CI 时进行检测")]),t._v(" "),e("p",[e("strong",[t._v("在 CI/CD 中自动化 eslint 代码")])]),t._v(" "),e("p",[t._v("TODO 后续...")]),t._v(" "),e("hr"),t._v(" "),e("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);