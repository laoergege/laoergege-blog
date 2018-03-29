## Meteor window环境自定义部署
Meteor 归根还是基于 Node.js 的，部署 Meteor 非常简单， 就像 express 一样 “node entry.js” 运行主入口文件。

- 在项目根目录 build 项目
```
meteor build
```

- 将bundle 包上传服务器并解压

- 进入 programs/server 并安装依赖包
```
cd programs/server && npm install
```

- 配置环境变量
bundle目录下 README 有详细的配置介绍
```
   // 配置本地 mongo 服务器地址
  $ export MONGO_URL='mongodb://user:password@host:port/databasename'
  // 配置服务器 host 地址
  $ export ROOT_URL='http://example.com'
  // 配置 email 地址
  $ export MAIL_URL='smtp://user:password@mailhost:port/'
  // 监听端口
  $ export PORT=3000 # 默认 80
```
> 注意上面 $ export 是 linux 环境变量设置命令

window 系统环境配置  
系统属性 > 环境变量 > xxx 的用户变量

![image.png](https://api.laoergege.cn//images/_EpAM_RnyZK0yqxBs6b2fmly.PNG)

- 运行
```
// 根目录
node main.js
```
### 注意事项
注意系统的node版本跟Meteor自带的node版本是否一致。因为执行meteor安装npm包的时候是用Meteor自带的node版本来安装编译的，不一致的话可能会导致有些需要编译的包不能正常运行。

可通过 .node_version.txt 文件查看 meteor 的 node 版本。