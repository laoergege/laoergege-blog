- 前端面试准备
  - 简历
  - 自我介绍
  - 项目经验
    - 讲讲项目，说说你的亮点
      - 性能优化？
      - CICD？
  - 规划发展
    - 最大的优点和缺点
  - 提问环节

- 项目经验
  - 性能优化?
  - 监控?
  - H5 
    - 滚动穿透
  - 抓包工具
    - Wireshark
  - 技术、规范相关
  - 项目难点
    - UI 交互





题目

1. 滚动穿透

2. 键入网址再按下回车，后面究竟发生了什么？

   1. 浏览器处理输入网址

   2. DNS 协议查找 IP

      浏览器缓存 > 操作系统缓存 > 本机hosts文件 > “野生DNS服务器” >核心DNS服务器（ 根级DNS > 顶级DNS > 权威DNS）

   3. 建立 TCP 连接


通过 Lighthouse 进行测量，根据 Lighthouse 给出的建议 进行优化
一个网站 SEO 怎么优化

如果不用 Lighthouse，Lighthouse 那不就只是能在谷歌上测吗(大概是这么个问题)

WebPageTest 不过我用的比较少，没深挖

Lighthouse 也可以通过 npm 进行下载使用

SSR 了解及原理

dns 预解析的怎么实现的?

dns 解析的过程？

为什么要用 http2

多路复用

那说下 http1.1 和 http2 区别？

登录鉴权

CSRF 攻击了解吗？

怎么预防那？还有其他办法吗?

如果不通过 img 或者 script 标签，或者说用户不通过点击第三方连接怎么造成 CSRF 攻击吗？

不知道啊，然后面试官给我讲了一些关于 dns 劫持


说了对称加密和非对称加密，具体不清楚

那你说下 https 握手过程？

不知道啊

http 的缺点 明文不加密，内容可能被窃听；不验证通信方身份，可能遭遇伪装，无法证明报文的完整性，可能被篡改。https 就是披着 SSL 外壳的 HTTP，SSL 会建立安全通信线路，查明对手证书...

知道 http 的内容是如何窃听的?

不知道，不过可以一些抓包工具抓

浏览器怎么验证证书的?

那对称加密和非对称加密怎么之间选择？


说下 cdn 缓存？





你所知道的白屏原因

怎么优化？


三列布局

flex: 1; 是复合属性，说下其他属性？

扩展比例，缩放比列，基准大小（x轴覆盖宽度，y 轴覆盖高度）


## 题目整理

- 前端工程
  - babel转换代码的过程
    - parser => transfrom => generator，可以根据自己的理解，展开说说
  - tree-shaking原理？
    - 利用ES Module做静态分析
    - 利用ES Module做静态分析，通过分析ast语法树，对每个模块维护了一个作用域，收集模块内部使用的变量，然后分析作用域，将import进来未被使用的模块删除，最后递归处理文件。
- js 手写题
  - 回文字符串(这个问题好常见)，判断一个字符串最多只删1个字符，是否能成为一个回文字符串，let str = "ABCDABA"
- typescript
  - TypeScript 高级用法， Pick 和 Omit
- 正则
  - 用正则表达式获取 url 中 query 参数 let str = "https://juejin.cn?name=zhangsan&age=18&id=123";
- 浏览器
  - 重绘和重排？
  - 介绍一下同源策略？你知道那些跨域方法？cors跨域的原理是什么有了解过吗？
  - 浏览器渲染过程
  - 键入网址再按下回车，后面究竟发生了什么？
- css
  - flex: 1代表什么意思
  - 用过flex布局吗？都有哪些属性？
  - 说说什么是BFC，一般你都用来干什么，解决了什么问题？
  - 实现元素水平垂直居中？尽可能说多一些方法？
  - 左侧固定 + 右侧自适应布局？说说几种方案？
- 数据结构与算法
  - 排序算法
- 设计模式
  - 什么是抽象工厂模式
  - 发布订阅模式和观察者模式有什么区别
  - 你项目里面都用了哪些设计模式
- es
  - 箭头函数和普通函数的区别
  - for of 和for in的区别，怎么让for of可以遍历一个对象？
  - es6的Map和WeakMap的区别，WeakMap解决了什么问题？
  - promise哪些方法是原型上的，哪些方法是实例上的
  - Symbol 有用过吗？
- JS
  - 模块发展史
  - 面向对象
    - 原型 + 原型链
  - 0.1 + 0.2 !== 0.3？为什么？
    - IEEE 754 二进制浮点数运算
    - 解决
      - Math.js、big.js
      - BigInt
  - 闭包
    - 说一下闭包的本质是什么？
      - 形成：作用域链
      - 问题：内存泄漏
  - event loop
    - 你刚刚说到js是单线程，那线程跟进程有什么区别？
浏览器新开了一个页面，有几个线程？
为什么要设计成微任务先执行，宏任务后执行。
  - 垃圾回收机制
你刚刚提到的标记清除法有什么缺点？怎么解决？
你刚刚提到的引用计数法有什么缺点吗？
v8里面的垃圾回收机制是什么？
v8是怎么解决循环引用的？
- http
  - [http1.1和http2.0有什么区别？](./HTTP/http%20版本对比.md)
  - http2, TCP 丢包阻塞问题
  - UDP 有哪些特性
  - [https为什么比http安全(https 原理)](./HTTP/https.md)
  - 说一下三次握手四次挥手
  - TCP 和 UDP 的区别
- webpack
  - Webpack 了解多少
    1. webapck的四个核心概念，并介绍一些其他的模块，例如mode，依赖图的概念等等。
    2. 介绍几个webpack的插件，如压缩gzip、如何处理dev中的console.log的模块等等
  - loader、plugin 区别
    - loader 主要是对源文件进行转换处理
    - plugin 可以用来监听 webpack 构建生命周期，做一些操作，去扩展 webpack 功能
    - loader本质是一个函数，plugin本质是一个类，
  - loader 执行顺序
    - 从右往左
  - Tree Shaking
  - 代码分割
  - 打包优化技巧
  - webpack有几种 hash，它们有什么区别？一般你在项目里面是用哪种hash？
    - hash，是整个项目的hash值，每次编译之后都会生成新的hash
    - chunkhash，根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值（来源于同一个chunk，则hash值就一样）
    - contenthash，根据文件内容生成hash值，文件内容相同hash值就相同
  - 热模块更新
  - 说了下 webpack 构建流程
  - webpack性能优化你是怎么做的？
    - https://juejin.cn/post/6844904093463347208
  - webpack5 介绍

关键的 webpack 事件节点
compile 开始编译
make 从入口点分析模块及其依赖的模块，创建这些模块对象
build-module 构建模块
after-compile 完成构建
seal 封装构建结果
emit 把各个chunk输出到结果文

从项目的结构、所用到的技术、难点、亮点都要知道，要能够自己描述出项目中用了哪些，自己完成了哪些。





性能问题

有没有做过性能优化
如何定位性能问题
如何解决的









HTTP 1/2

HTTP 有什么缺点
HTTP2 有什么好处
HTTPS 有什么好处， 有什么缺点，为什么。
TCP, UDP 的区别， 最佳场景
为什么说HTTPS 是安全的
解释一下加密过程
三次握手的过程，为什么握手三次, 为什么挥手四次


安全相关

XSS
CSRF


浏览器缓存策略

缓存头相关
浏览器 Cookie 相关


基础的数据结构和算法

Tree,
BFS
DFS
递归
动态规划



输入URL 到页面展示发生了什么

- 数据结构算法
- web
- js
- http
- 框架 vue
  - [x] 虚拟 DOM，以及为什么
  - [x] diff 算法，index key 问题
    - key：建立索引，快速找到复用节点
  - [ ] vue 新旧生命周期
  - [ ] vue2、vue3 区别
  - [ ] vue 响应式原理
  - [ ] vue2、vue3 的 nextTick 原理
  - [x] vue 异步更新机制


## 单词

- stopPropagation
- yield
- fibonacci 斐波那契
- yield
- recursion
- Expires
- revalidate
- traverse
- justify-items: stretch;
- align-content: space-evenly;    