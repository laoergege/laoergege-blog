---
release: true
tags:
 - chrome
 - 浏览器原理
 - web
 - html
desc: 浏览器原理及API知识体系总结
---
# 浏览器原理及API

本系列都是以 chrome/chromium 为主，参考学习资料：
- 极客时间《浏览器工作原理与实践》
- [深入了解现代网络浏览器 系列](https://developer.chrome.com/blog/inside-browser-part1/)
- [Blink 文档链接](https://www.chromium.org/blink)

## 浏览器原理

- 多进程架构
  ![图 10](./images/77a95ee1daecd5a8f856a67ef018eaedc6ddd42f36a1b9afe7f907341f4ee984.png)  
  - 浏览器进程，主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。
  - GPU进程 
  - 网络进程，网络资源加载。
  - 渲染进程，渲染页面、运行 JavaScript等。
  - 插件进程 
- [页面导航流程](./页面导航流程.md)
- [页面渲染流程](./页面渲染流程.md)
- [事件循环与消息队列](./消息队列与事件循环.md)
  - [Jake Archibald: 在循环 - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
  - [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

## Web 安全策略

- 同源策略
  - js设置document.domain实现跨域
  - 跨域资源共享(CORS)
- 内容安全策略（CSP）

## Web 性能优化

- [Web 前端性能优化](./Web%20前端性能优化.md)
- 性能测试监控工具
  - Chrome DevTools
  - Lighthouse
  - [PagesTest](https://webpagetest.org/)

## Web API

- Web API 参考资料
  - [MDN](https://developer.mozilla.org/)
- Web API
  - 页面
    - DOM
      - [视图中的各种宽高偏移](./视图中的各种宽高偏移.md)
      - [DOM 事件模型](./DOM%20事件模型.md)
      - [WebComponent](./WebComponent.md)
    - [Canvas](./Canvas.md)
    - 不同上下文（窗口、iframe、worker）通信
      - 同源
        - 引用通信：window.opener + iframe.contentWindow
        - localStorage + storageEvent
        - SharedWorker + 消息通道
        - ServiceWorker
      - 消息通道机制
        - postMessage
        - MessageChannel
        - BroadcastChannel（同源限制）
  - 数据存储
    - cookie
    - localStorage
    - sessionStorage
    - indexDB
  - 资源请求
    - 同源
      - ajax
      - fetch
    - 非同源
      - CORS（[跨域资源共享](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#http_%E5%93%8D%E5%BA%94%E9%A6%96%E9%83%A8%E5%AD%97%E6%AE%B5)）
        - 简单请求：拦截响应
          - 方法：GET、HEAD、POST
          - 头部字段不超
            - `accept`
            - `accept-language`
            - `content-language`
            - Content-Type：`text/plain`、`multipart/form-data`、`application/x-www-form-urlencoded`
          - 非自定义头部
        - 非简单请求：拦截请求
          - 非简单请求在发送正式的request之前，会先发送**预请求**
          - Access-Control-Request-Method
          - Access-Control-Request-Headers
        - 响应头
          - Access-Control-Allow-Origin
            - 限定一个域名或者通配符 *
          - Access-Control-Allow-Methods
          - Access-Control-Allow-Headers
          - Access-Control-Expose-Headers
          - Access-Control-Max-Age：缓存预请求
        - 无论是哪一种，请求都会携带 origin，后端都需要返回 Access-Control-Allow-Origin
        - 发送身份凭证信息或者响应设置 cookie，那必须满足三个条件：
          - 后端 Response header 有 Access-Control-Allow-Credentials: true
          - 后端 Response header 的 Access-Control-Allow-Origin 不能是*，要明确指定
          - 前端
            - 前端请求加上 withCredentials: 'include'
            - 页面元素 `<img crossorigin="use-credentials" src="…" />`
        - [playground](https://jakearchibald.com/2021/cors/playground/)
      - JSONP：利用了 script 标签的 src 属性来实现跨域数据交互的，因为浏览器解析HTML代码时，原生具有src属性的标签，浏览器都赋予其HTTP请求的能力，而且不受跨域限制，使用src发送HTTP请求，服务器直接返回一段JS代码的函数调用，将服务器数据放在函数实参中，前端提前写好响应的函数准备回调，接收数据，实现跨域数据交互
      - Proxy Server
  - 硬件
    - [WebWork](./WebWork.md)
      - [task-worklet](https://github.com/developit/task-worklet)
      - [workerize](https://github.com/developit/workerize)
    - WebAssembly
      - [A cartoon intro to WebAssembly](https://hacks.mozilla.org/2017/02/a-cartoon-intro-to-webassembly/)
      - [Debugging WebAssembly with modern tools](https://developer.chrome.com/blog/wasm-debugging-2020/)
  - 其他
    - [PWA](./PWA.md)
      - https://lavas-project.github.io/pwa-book/
  - ResourceHints
    - [prerender](https://web.dev/speculative-prerendering/)
  - SanitizerAPI
    - [Safe DOM manipulation with the Sanitizer API](https://web.dev/sanitizer/)
  - WebRTC
    - [做一个视频通话给自己用吧](https://juejin.cn/post/7047309196445876231#heading-18)

## 场景分类

- 下载
  - [文件下载，搞懂这9种场景就够了](https://mp.weixin.qq.com/s/PysSe6MykjYzVrWQCKJXvg)
  - [动态表格大文件下载可以这样优化！](https://mp.weixin.qq.com/s/14bJxJ9U9mG76tw-Z93UqQ)
- [登陆鉴权](./%E7%99%BB%E9%99%86%E9%89%B4%E6%9D%83.md)


MVC，其核心思想就是将数据和视图分离
通过通信方式和控制器的不同实现，又分为
MVP
MVVM

![基于 React 和 Redux 构建 MVC 模型](./images/57897eba6bdf54af31cda81e4d711d4d3a621ceac859a695227275d476ec3576.png) 

DOM 操作会引发浏览器重排、重绘、合成操作
对 DOM 操作不当的话甚至还会触发强制同步布局和布局抖动的问题

