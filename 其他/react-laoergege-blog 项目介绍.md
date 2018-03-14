# react-laoergege-blog
一个基于 GitHub Pages 和 GitHub Api，无需本地生成静态文件或搭建服务器的博客, 用途便于随时任意设备查看 github 上的文章笔记。

![Post Screenshots](https://github.com/laoergege/react-laoergege-blog/blob/master/screenshots/20180313175921.png?raw=true)

# Features
- 使用 create-react-app cli
- React + React-Router + RxJS
- Hosting on GitHub Pages
- SessionStorage cache

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
参考[这里](https://pages.github.com/)。