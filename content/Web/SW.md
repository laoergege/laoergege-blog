# Service Worker

- Service Worker
  - 安全限制：HTTPS/localhost
  - 控制范围
    - 默认下由 SW 文件路径决定其控制范围：比如 `//example.com/foo/sw.js` 它的默认范围是 `//example.com/foo/`
    - 手动作用域设置
      - `navigator.serviceWorker.register('sw.js', {scope: xxx})`
      - HTTP 响应设置 Service-Worker-Allowed 头部
    - `navigator.serviceWorker.controller` 获取当前作用域的 Service Worker 实例
    - **作用域冲突**
      - 只允许一个 ServiceWorker 实例
      - 子域注册的服务会优先于父域的服务
  - [生命周期](#sw-生命周期)
  - [更新触发](#sw-更新触发)
  - 事件同步
    - 将任务派发到后台同步完成
      - 页面发起的请求会随着页面的关闭而终止
      - 在离线状态下，很难将用户的网络请求缓存起来，并在网络恢复正常后再次进行请求
    - 重试机制
  - 推送通知

## SW 生命周期

- 注册：下载、解析 Service Worker 脚本
  ```js
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
  }
  ```
- 安装：激活 `install` 事件（首次安装、更新安装时触发）
  - 安装阶段通常是实现处理缓存方案
    ```js
    // /sw.js
    self.addEventListener("install", (event) => {
      const cacheKey = "MyFancyCacheName_v1";

      // `installEvent.waitUntil()` 延迟安装完成
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
- 等待：安装成功后，如果已有旧版本在运行，则暂时没有控制页面的权力，需要等待从当前 worker 获得控制权
  - 等待阶段时强制跳过等待 `self.skipWaiting()`
- 激活：触发 `activate` 事件
  - 旧版本 Service Worker 控制下的页面全部关闭，重启页面
  - 首次注册激活时，已打开的页面只有在刷新后才会受控，可以强制控制页面 `self.clients.claim()`
- 监听事件
  - `message`
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

## SW 更新

- 检测原理
  - 检测 SW 及 importScript 内容字节是否发生变化
  - 在检查已注册的 Service Worker 脚本的更新时，可 `navigator.serviceWorker.register()` 时传入一个新选项：`updateViaCache` 对是否忽略脚本的 http 缓存
- 更新触发
  - 自动
    - 在 Scope 内页面导航
    - `.register()` 的 SW 的 URL 或者 Scope 发生改变
    - 每 24 小时内检查一次
  - 手动
    ```js
    navigator.serviceWorker
        .register("./update.js")
        .then(function (registration) {
          registration.addEventListener("updatefound", () => {
            console.log("updatefound");
          });

          registration.update();
        })
        .catch(function (err) {
          // do domething...
          console.log(err);
          console.log("register failure");
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

## 最佳实践

- 作用域冲突
  - 功能拆封，各个域的服务主动引入
  - 功能提升：全部整合到根作用域，以插件机制动态注册功能
- SW 更新管理
  - 避免更改你的 sw 脚本的 URL。在离线模式下 index 会被缓存，导致 sw 的脚本依旧是旧内容
  - 避免缓存 sw 脚本
  - 更新通知：慎用 skipWaiting 去直接控制页面，最好通知用户刷新更新
- 资源缓存
  - 缓存时机
  - 请求策略
    - 仅缓存  
    - 仅限网络
    - 缓存优先：首先从缓存中进行匹配，如果存在相关请求的响应，返回该响应，否则通过网络获取
    - 网络优先：首先通过网络获取，如果请求异常，则从缓存中获取
    - SWR(Stale-while-revalidate)：先缓存后网络。如果在缓存中匹配到相关请求的响应，在返回该响应的同时依旧会发起网络请求，并更新相关缓存，否则直接请求
- 导航预加载

## 学习参考

- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/)
- [Fresher service workers, by default](https://developer.chrome.com/blog/fresher-sw/#checks_for_updates_to_imported_scripts)

- [GlacierJS](https://github.com/JerryC8080/glacierjs)