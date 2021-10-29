---
tags:
 - chrome
 - 浏览器原理
---
# 浏览器原理及API

本系列都是以 chrome/chromium 为主  
参考学习资料：
- 极客时间《浏览器原理及API》
- [Inside look at modern web browser 系列](https://developers.google.com/web/updates/2018/09/inside-browser-part1)

- [Blink 文档链接](https://www.chromium.org/blink)


## 浏览器原理

- [多进程架构](./Chrome 多进程架构.md)
- [页面导航流程](./页面导航流程.md)
- [页面渲染流程](./页面渲染流程.md)
- [消息队列与事件循环](./消息队列与事件循环.md)
  - [Jake Archibald: 在循环 - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
  - [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

Web 安全策略
- 同源策略
  - 跨域资源共享(CORS)
- 内容安全策略（CSP）

## Web 应用性能优化

- [Web 前端性能优化](./Web%20前端性能优化.md)
- 性能测试监控工具
  - Chrome DevTools
  - Lighthouse
  - [PagesTest](https://webpagetest.org/)

## Web API

- Web API 参考资料
  - [MDN](https://developer.mozilla.org/)
- Web API
  - DOM
    - [视图中的各种宽高偏移](./视图中的各种宽高偏移.md)
    - [DOM 事件模型](./DOM%20事件模型.md)
  - 页面通信
    - 同源
      - Broadcast Channel API
      - postMessage API
      - localStorage + storage 事件
    - 非同源
      - postMessage API
  - [PWA](./PWA.md)
  - [WebComponent](./WebComponent.md)
  - [WebWork](./WebWork.md)
  - [Canvas](./Canvas.md)
  - WebAssembly
    - [A cartoon intro to WebAssembly](https://hacks.mozilla.org/2017/02/a-cartoon-intro-to-webassembly/)

### 场景分类

- 下载
  - [文件下载，搞懂这9种场景就够了](https://mp.weixin.qq.com/s/PysSe6MykjYzVrWQCKJXvg)


MVC，其核心思想就是将数据和视图分离
通过通信方式和控制器的不同实现，又分为
MVP
MVVM

![基于 React 和 Redux 构建 MVC 模型](./images/57897eba6bdf54af31cda81e4d711d4d3a621ceac859a695227275d476ec3576.png) 

DOM 操作会引发浏览器重排、重绘、合成操作
对 DOM 操作不当的话甚至还会触发强制同步布局和布局抖动的问题

虚拟 DOM？

浏览器 GC 触发时机？

事件触发流程

CSS 加载不会阻塞 DOM 的解析，解析呢？