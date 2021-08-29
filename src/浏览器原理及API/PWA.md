# PWA

PWA, 渐进式 Web 应用，提供一套渐进式的技术方案集合，逐渐拉近与原生应用差距，提高 Web 应用体验。

技术方案

- Manifest
- Service Worker
- Push Message

## Service Worker

由于 Service Worker 还需要会为多个页面提供服务，所以还不能把 Service Worker 和单个页面绑定起来。在目前的 Chrome 架构中，Service Worker 是运行在浏览器进程中的，因为浏览器进程生命周期是最长的，所以在浏览器的生命周期内，能够为所有的页面提供服务

## 参考学习

- [渐进式 Web 应用（PWA）](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)
- [Progressive Web App Training](https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)