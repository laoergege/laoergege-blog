# PWA

- PWA
  - 移动优先 + 响应式页面
    - grid
    - flex
    - media query
- 技术栈
  - Manifest
  - Service Worker
  - Notification 
  - Push Message
  - Cache API

## Service Worker

- 要求
  - https
  - scpoes
    - 每个范围只允许一名服务人员
    - `navigator.serviceWorker.controller` 获取当前作用域的 Service Worker 实例
- 生命周期
  - 注册：下载、解析和执行 Service Worker
  - 安装：一旦 Service Worker 执行，就激活安装事件 `install`
  - 激活
    - 事件
      - `fetch`
      - `push`
      - `sync`
  - 更新
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
- 实践
  - 开发避免 Service Worker 缓存
  - Service Worker 资源缓存
    - 缓存策略
      - 网络优先
      - 缓存优先
      - 预缓存
      - 动态缓存


## 学习参考

- [sw-101-gdgdf](https://huangxuan.me/2016/11/20/sw-101-gdgdf/)
- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/)

- [渐进式 Web 应用（PWA）](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)
- [Progressive Web App Training](https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)
