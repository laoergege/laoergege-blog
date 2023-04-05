---
tags:
 - web
 - pwa
---

# PWA

- PWA：渐进式 Web 应用程序，是一系列技术集合
  - [Manifest](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
  - [Service Worker](#service-worker)
  - CacheStorage
  - Notification
  - Push Message
- PWA 实践
  - 设计标准
    - 移动优先、响应式设计
    - 渐进增强，功能检测
      - 使用 `@supports` 检查浏览器是否支持 CSS 功能
      - 发布现代 JavaScript，您可以使用 module/nomodule 模式
    - 提供快速且良好的用户体验
      - Web Vitals 
        - 加载中
        - 交互的
        - 视觉稳定性
  - 应用分发与安装
    - 分发
      - 应用商城
      - Web 搜素
    - Manifest + 离线模式
      - 图标
      - 主题
        - 主题颜色
        - 背景颜色
        - 强调色
  - 应用更新
    - 更新类型
      - Manifest
      - 应用程序数据
      - [Service Worker 实践](#service-worker-实战)
        - 版本管理
        - 资源缓存
    - 更新提醒
      - 使用 DOM 或画布 API在屏幕上呈现通知
      - Message push
      - 图标提示：[Badging API](https://developer.mozilla.org/en-US/docs/Web/API/Badging_API)

## Service Worker

- 安全限制：HTTPS/localhost
- 控制范围
  - 默认下由 SW 文件路径决定其控制范围：比如 `//example.com/foo/sw.js` 它的默认范围是 `//example.com/foo/`
  - 手动作用域设置
    - `navigator.serviceWorker.register('sw.js', {scope: xxx})`
    - HTTP 响应设置 Service-Worker-Allowed 头部
  - `navigator.serviceWorker.controller` 获取当前作用域的 Service Worker 实例
  - **作用域冲突**
    - 每个范围只允许一个 ServiceWorker 实例
    - 子域注册的服务会优先于父域的服务，这就导致一些全局功能失效：
      - 功能拆封，各个域的服务主动引入
      - 功能提升：全部整合到根作用域，以插件机制动态注册功能
- [生命周期](#生命周期)
  - [SW 更新触发](#sw-更新触发)

### 生命周期

- 注册：`navigator.serviceWorker.register()` 下载、解析 Service Worker
  ```js
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
  }
  ```
- 安装：激活 `install` 事件（首次安装、更新安装时触发）
  - `installEvent.waitUntil()` 延迟安装完成
  - 安装阶段通常是实现预缓存方案
    ```js
    // /sw.js
    self.addEventListener("install", (event) => {
      const cacheKey = "MyFancyCacheName_v1";

      event.waitUntil(
        caches.open(cacheKey).then((cache) => {
          // Add all the assets in the array to the 'MyFancyCacheName_v1'
          // `Cache` instance for later use.
          return cache.addAll([
            "/css/global.bc7b80b7.css",
            "/css/home.fe5d0b23.css",
            "/js/home.d3cc4ba4.js",
            "/js/jquery.43ca4933.js",
          ]);
        })
      );
    });
    ```
- 等待：安装成功后，如果已有旧版本在运行，新版便会进入等待状态，除非
  - 旧版本 Service Worker 控制下的页面全部关闭，重启页面
  - 强制跳过等待 `self.skipWaiting()`
- 激活：触发 `activate` 事件
  - 首次注册激活时，已打开的页面只有在刷新后才会受控，可以强制控制页面 `self.clients.claim()`
- 监听事件
  - `fetch`
    ```js
    // fetch event handler in your service worker file
    self.addEventListener("fetch", event => {
        // 可以创建新的响应或者从缓存中响应
        const response = .... // a response or a Promise of response
        event.respondWith(response);
    });
    ```
  - `push`
  - `sync`
  - `notification`
  - `periodic-sync`
- 终止与启动
- 废弃
  - 安装失败
  - 激活失败
  - 用户执行了注销操作 `registration.unregister();`
  - 新版本的 Service Worker 替换了旧版本

### SW 更新触发

- 更新触发
  - Scope 内导航
  - 注册的 SW 的 URL 或者 Scope 发生改变
  - A functional events such as push and sync, unless there's been an update check within the previous 24 hours.
- 检测原理
  - 检测 SW 及 importScript 内容字节是否发生变化
- 手动触发更新检查
  ```js
  navigator.serviceWorker.register('/sw.js').then(reg => {
    // sometime later…
    reg.update();
  });
  ```
- 自定义更新处理逻辑
  ```js
    navigator.serviceWorker.register('/sw.js').then(reg => {
      reg.installing; // the installing worker, or undefined
      reg.waiting; // the waiting worker, or undefined
      reg.active; // the active worker, or undefined

      // 检测服务工作者的变化
      reg.addEventListener('updatefound', () => {
        // A wild service worker has appeared in reg.installing!
        const newWorker = reg.installing;

        newWorker.state;
        // "installing" - the install event has fired, but not yet complete
        // "installed"  - install complete
        // "activating" - the activate event has fired, but not yet complete
        // "activated"  - fully active
        // "redundant"  - discarded. Either failed install, or it's been
        //                replaced by a newer version

        newWorker.addEventListener('statechange', () => {
          // newWorker.state has changed
        });
      });
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // This fires when the service worker controlling this page
      // changes, eg a new worker has skipped waiting and become
      // the new active worker.
    });
  ```

### Service Worker 实战

- SW 版本管理
  - 原则：更新检测时机最好在不影响应用的体验的时候
  - SW 自动更新
  - SW 版本降级
- 资源缓存
  - 原则
    - 合理使用空间和带宽，在快速或离线体验之间找到平衡点
    - 不要一次性缓存所有资产，在 PWA 的生命周期内合理得安排多次缓存资产
  - 缓存时机
    - 在安装 service worker 时缓存最少的资产集
    - 网络空闲或者主线空闲的时候
    - 当用户导航到某个部分或路线时按需缓存
    - 激活时清除旧版本
    - 响应式缓存
  - 缓存策略
    - 预缓存
    - 按需缓存
    - 运行时缓存：指在运行时从网络请求资源时的缓存策略（[代码示例](https://web.dev/learn/pwa/serving/)）
      - 仅缓存  
      - 仅限网络
      - 缓存优先：优先使用缓存，资源不存在则退为网络请求 
      - 网络优先：优先网络请求，网络失败则退为使用缓存 
      - SWR(Stale-while-revalidate)
  - 跨域资源
    - 响应必须返回 2xx 状态代码，否则 `cache.add()`、`cache.addAll()` 会失败
    - 将被当作**不透明响应**：意味着您的代码将无法查看或修改该响应的内容或标头，及其大小
  - 更新及清除
  - WorkBox
    - 路由拦截
    - Workbox 模块在不同的上下文中工作
      - 

### SW 版本管理（注册更新）

避免更改你的 service worker 脚本的 URL

```html
 <!-- In index.html, for example: -->
 <script>
   // Don't register the service worker
   // until the page has fully loaded
   window.addEventListener("load", () => {
     // Is service worker available?
     if ("serviceWorker" in navigator) {
       navigator.serviceWorker
         .register("/sw.js")
         .then(() => {
           console.log("Service worker registered!");
         })
         .catch((error) => {
           console.warn("Error registering service worker:");
           console.warn(error);
         });
     }
   });
 </script>
 ```



- 离线模式下 index 会被缓存，导致 sw 的脚本依旧是旧内容
  - 避免更改 Service Worker 脚本的 URL
  - 由 SW 内部机制触发更新检测

## 学习参考

- [Progressive Web Apps](https://web.dev/progressive-web-apps/)
- [Learn PWA](https://web.dev/learn/pwa/)
- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/)