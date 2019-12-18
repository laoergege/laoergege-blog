## 认识 browserslist
> browserslist 是用来声明当前项目的适应目标，即适应哪些浏览器或者Node版本。

开发者可以在 `browserslist` 文件、`.browserslistrc` 文件、`package.json` 文件的 browserslist 字段或者环境变量设置 `版本查询语句条件列表` 。通过执行 `npx browserslist` 命令， browserslist 会自动使用 Can I Use 网站的数据来查询浏览器版本范围（PS：browserslist 提供在线的查询条件练习网站 [https://browserl.ist/?q=](https://browserl.ist/?q=)），这样其他开发者们即可快速了解项目的兼容范围了。

除了上述用途，browserslist 还有可以为其他的前端工具提供适配版本信息，例如 [babel](https://github.com/babel/babel) 根据 browserslist 目标导入所有 polyfill。

## 版本查询语句

- [语句组合](https://github.com/browserslist/browserslist#query-composition)
- [语句列表](https://github.com/browserslist/browserslist#full-list)
- [浏览器分类](https://github.com/browserslist/browserslist#browsers)