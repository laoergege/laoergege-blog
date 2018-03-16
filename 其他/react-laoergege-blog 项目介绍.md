# react-laoergege-blog
一个基于 GitHub Pages 和 GitHub Api，无需本地生成静态文件或搭建服务器的博客, 使用用途：便于随时任意设备查看 github 上的文章笔记。

# Demo
[https://github.com/laoergege/laoergege.github.io](https://github.com/laoergege/laoergege.github.io)

![Post Screenshots](https://github.com/laoergege/react-laoergege-blog/blob/master/screenshots/20180313175921.png?raw=true)

# Features
- 使用 create-react-app cli 构建
- React + React-Router + RxJS
- Hosting on GitHub Pages
- SessionStorage cache（使用 axios 拦截请求，并 api 数据保存到 sessionStroge 中，防止多次访问，以及页面刷新数据丢失问题）

# Develop and Use
## 约定

github 建立自己的 blog 仓库，本项目默认取根目录为 Tabs 组件 tab 名，故约定俗成：在根目录建立文件夹用以区分文章类别

![](https://github.com/laoergege/react-laoergege-blog/blob/master/screenshots/20180313201354.png?raw=true)
![](https://github.com/laoergege/react-laoergege-blog/blob/master/screenshots/20180313201651.png?raw=true)

文章目录是抓取内容的 H 标签

![](https://github.com/laoergege/react-laoergege-blog/blob/master/screenshots/20180314100548.png?raw=true)

## 配置 config 文件
**注意: 使用前需要配置 `src/config.js` 文件，配置自己成 blog**。

config.js
```
 //前端基本配置：
//获取近期更新提交，默认近一个月
recentTMonth: 1,
//配置忽略的tab
ignoreDir: ['image'],
//首页 Others 板块配置，可配置你特别显示的文章
others:[
    {key: '项目介绍以及地址', path: '其他/react-laoergege-blog 项目介绍.md'},
    {key: '求职简历', path: '其他/简历.md'},
    {key: '社交联系', path: '其他/concat.md'}                
],

//github基本配置：
//文章仓库
repo: 'laoergege-blog',

//gittalk基本配置：
//Github Application Client ID
clientID: '49ecffd2b6139e31b3aa',
//Github Application Client Secret
clientSecret: 'f79a9c45f39b745f8ce4a66956949300fc0d4c14',
//评论仓库
commentRepo: 'laoergege-blog',
//仓库所有者
owner: 'laoergege',
//Github repository 的所有者和合作者 (对这个 repository 有写权限的用户)。
admin: ['laoergege']
```

关于 OAuth应用程序 注册请点击这里[申请](https://github.com/settings/applications/new)。

## 创建 github page
请参考[这里](https://pages.github.com/)。

## 开发
```
# Install dependencies
npm install
# Develop with hot reload
npm start
# Lint and Test
npm run test
# build
npm run build
```

# 问题
## 关于 github api 访问限制次数
开发过程有可能频繁访问 github api，对于过度的访问会被 github 禁止（状态码为 403），大家可以查看 github 官方文档 [Rate limiting](https://developer.github.com/v3/#rate-limiting)，`If your OAuth application needs to make unauthenticated calls with a higher rate limit, you can pass your app's client ID and secret as part of the query string.` 你可以把你 client ID 和 secret 作为请求参数，但是介于本项目只有客户端，并没有可信的服务端，所以不建议把 client ID 和 secret 放在客户端，一般使用来说，github 提供次数是够用的。