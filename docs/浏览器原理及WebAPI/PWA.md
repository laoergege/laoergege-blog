# PWA

- PWA 需求设计
  - 移动优先 + 响应式页面
    - grid
    - flex
    - media query
- 程序设计
  - Manifest
  - Service Worker


PWA, 渐进式 Web 应用，提供一套渐进式的技术方案集合，逐渐拉近与原生应用差距，提高 Web 应用体验。

技术方案包括

- Manifest
- Service Worker
- Notification 
- Push Message
- Cache API

## Service Worker

由于 Service Worker 还需要会为多个页面提供服务，所以还不能把 Service Worker 和单个页面绑定起来。在目前的 Chrome 架构中，Service Worker 是运行在浏览器进程中的，因为浏览器进程生命周期是最长的，所以在浏览器的生命周期内，能够为所有的页面提供服务

- 要求
  - https
- 控制范围
  - 每个范围只允许一名服务人员
  - `navigator.serviceWorker.controller` 获取 Service Worker 实例
- 生命周期
  - 初始化
    - 注册
    - 安装
    - 激活
  - 更新
    - 注册 register：Service Worker 下载、执行，触发 Install 事件
    - 安装：Service Worker 执行后立即触发
      ```js
      self.oninstall = (e) => {
        e.waitUntil(
          caches.open('installation')
            .then(cache =>  cache.addAll([
              '/styles.css',
              '/script.js'
            ]))
        )
      });
      ```
    - 等待
    - 激活
  - 寿命
- 事件
  - Fetch
  - Push
  - Sync
- 实践
  - 开发避免 Service Worker 缓存
  - Service Worker 资源缓存
    - 缓存策略
      - 离线优先
      - 网络优先

### The service worker lifecycle

- register：下载、解析和执行 Service Worker 文件
- install：缓存文件
- waiting
- activate
- event

register 下载、解析和执行

第一次安装

## 学习参考

- [sw-101-gdgdf](https://huangxuan.me/2016/11/20/sw-101-gdgdf/)
- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/)

- [渐进式 Web 应用（PWA）](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)
- [Progressive Web App Training](https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)
