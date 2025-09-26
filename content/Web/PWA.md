---
discussionID: 3k_7aC2ri9lgf-gcm7-7S
release: true
tags:
 - web
 - pwa
---

# PWA

- PWA：渐进式 Web 应用程序，是一系列技术集合
  - [Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
  - [Service Worker](#service-worker)
  - CacheStorage
  - Notification
  - Push Message
- PWA 实践
  - 独立窗口、离线模式
  - ServiceWorker 
    - 作用域冲突
      - 功能拆封成各个域的服务
      - 功能提升：全部整合到根作用域，以插件机制动态注册功能
    - 版本管理
      - 基于 URL 版本地址，避免 index.html 缓存
      - 保持 URL 地址不变，由 SW 内部机制触发更新检测
        > 离线模式下 index 会被缓存，避免更改你的 service worker 脚本的 URL，会导致 sw 的脚本依旧是旧内容
    - [更新提示](https://developer.chrome.com/docs/workbox/handling-service-worker-updates)
  - 资源缓存
    - [ServiceWorker 缓存与 HTTP 缓存](https://mp.weixin.qq.com/s/OlOMm20cSRaQESiZ_DC7mQ)
    - 原则：合理使用空间和带宽，在快速或离线体验之间找到平衡点
    - 缓存时机
      - 预缓存
      - [运行时缓存](https://developer.chrome.com/docs/workbox/caching-strategies-overview)
        - 仅缓存  
        - 仅限网络
        - 缓存优先：优先使用缓存，资源不存在则退为网络请求 
        - 网络优先：优先网络请求，网络失败则退为使用缓存 
        - SWR(Stale-while-revalidate)
    - 跨域资源
      - 响应必须返回 2xx 状态代码，否则 `cache.add()`、`cache.addAll()` 会失败
      - 将被当作**不透明响应**：意味着您的代码将无法查看或修改该响应的内容或标头，及其大小
    - 更新及清除
  - [Service Worker 启动可能会延迟网络请求](https://developer.chrome.com/docs/workbox/service-worker-deployment#service_worker_startup_can_delay_network_requests)
    - [Service Worker 注册](https://web.dev/articles/service-workers-registration?hl=zh-cn)
    - [导航预加载提高 Service Worker 启动速度](https://web.dev/blog/navigation-preload)

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
    - 子域注册的服务会优先于父域的服务
- [生命周期](#生命周期)
- [更新触发](#更新触发)

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
  - `message`
- 终止与启动
  - Service Worker 并不会一直运行在后台。相较于传统的 Web Workers，Service Worker 是事件驱动的，它的生命周期和运行方式受到浏览器的管理，以节省资源和电量。具体来说，Service Worker 只会在需要时启动，完成任务后就会在没有任何事件处理且闲置，一段时间后会被自动关闭
- 废弃
  - 安装失败
  - 激活失败
  - 用户执行了注销操作 `registration.unregister();`
  - 新版本的 Service Worker 替换了旧版本

### 更新触发

- 更新触发
  - Scope 内导航
  - 注册的 SW 的 URL 或者 Scope 发生改变
  - A functional events such as push and sync, unless there's been an update check within the previous 24 hours.
- 检测原理（[Fresher service workers, by default](https://developer.chrome.com/blog/fresher-sw)）
  - 检测 SW 及 importScript 内容字节是否发生变化
  - updateViaCache 
    - import（默认）：请求 Service Worker 更新时将忽略 HTTP 缓存，对 importScripts 的请求仍将通过 HTTP 缓存
    - all
    - none
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

## 学习参考

- [Learn PWA](https://web.dev/learn/pwa/)
- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/)
- [【第2596期】如何构建可控,可靠,可扩展的 PWA 应用](https://mp.weixin.qq.com/s/4fuP1puANOOGdGj0oAny1Q)