- 前端面试准备
  - 简历
  - 自我介绍
  - 基础
    - HTML&CSS
      - HTML
      - DOM 操作与性能
        - DOM 操作有哪些？哪些 DOM 操作会带来性能问题
        - 渲染1万个DOM，性能如何提升？操作1万个DOM，性能如何提升？
      - 事件冒泡与委托机制
        - 事件委托到 DOM 节点好还是 doc 节点好？
        - 绑定子元素会绑定很多次的事件，而绑定父元素只需要一次绑定。

将事件委托给父节点，这样我们对子元素的增加和删除、移动等，都不需要重新进行事件绑定。性能提升
      - 页面布局原理
        - 盒子模型
      - 常见布局手段
        - flex、 grids
    - JavaScript
      - ES Next
    - 框架 Vue
      - 什么是虚拟 DOM？有哪些好处
    - 前端工程
    - Http
    - 算法
    - 设计模式
    - nodejs
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

单词

- stopPropagation
- yield
- fibonacci 斐波那契
- yield
- recursion



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


http 和 https

说了对称加密和非对称加密，具体不清楚

那你说下 https 握手过程？

不知道啊

http 的缺点 明文不加密，内容可能被窃听；不验证通信方身份，可能遭遇伪装，无法证明报文的完整性，可能被篡改。https 就是披着 SSL 外壳的 HTTP，SSL 会建立安全通信线路，查明对手证书...

知道 http 的内容是如何窃听的?

不知道，不过可以一些抓包工具抓

浏览器怎么验证证书的?

那对称加密和非对称加密怎么之间选择？


说下 cdn 缓存？

webpack
loader 和 plugins 的区别
- plugins 对打包过程各个生命阶段及结果进行干预

说了下 webpack 构建流程


你所知道的白屏原因

怎么优化？


三列布局

flex: 1; 是复合属性，说下其他属性？

扩展比例，缩放比列，基准大小（x轴覆盖宽度，y 轴覆盖高度）


Symbol 有用过吗？

手写 bind 的时候用过，防止覆盖掉对象上的原有属性


WeakMap 和 Map 了解吗? 说下他们的区别？
- WeakMap 的键必须是对象
- 原生weakmap持有对关键对象的“弱”引用。由于这样的原生weakmap不阻止垃圾收集，从而最终删除对键对象的引用。“弱”引用还避免了对映射中的值进行垃圾收集。当将键映射到只有在键未被垃圾收集时才有价值的键的信息时，weakmap是特别有用的构造。


回文字符串(这个问题好常见)，判断一个字符串最多只删1个字符，是否能成为一个回文字符串
let str = "ABCDABA"


0.1 + 0.2 !== 0.3 为什么
IEEE 754 了解吗


TCP 拥塞控制？

不知道，只了解丢包阻塞的情况，(网络的知识就看过图解HTTP和面经, 唉...)...

TCP 和 UDP 的区别

三次挥手四次握手


TypeScript 高级用法， Pick 和 Omit

泛型的理解


devServe 做了哪些优化了解吗

热模块更新


讲讲常用的 hook 打出来


用正则表达式获取 url 中 query 参数
let str = "https://juejin.cn?name=zhangsan&age=18&id=123";







http
1. http2, TCP 丢包阻塞问题
2. UDP 有哪些特性

webpack
1. Webpack 了解多少
   1. webapck的四个核心概念，并介绍一些其他的模块，例如mode，依赖图的概念等等。
   2. 介绍几个webpack的插件，如压缩gzip、如何处理dev中的console.log的模块等等

关键的 webpack 事件节点
compile 开始编译
make 从入口点分析模块及其依赖的模块，创建这些模块对象
build-module 构建模块
after-compile 完成构建
seal 封装构建结果
emit 把各个chunk输出到结果文