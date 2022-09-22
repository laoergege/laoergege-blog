# PWA

- PWA
  - [Manifest](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
  - Service Worker
  - CacheStorage：离线存储
  - Notification
  - Push Message

## Service Worker

- 要求
  - https
  - scpoe：每个范围只允许一个 ServiceWorker 实例，
    - `navigator.serviceWorker.controller` 获取当前作用域的 Service Worker 实例
    - 作用域设置
      - `navigator.serviceWorker.register('sw.js', {scope: xxx})`
      - 响应设置 Service-Worker-Allowed 头部
- 生命周期
  - 注册：下载、解析和执行 Service Worker
  - 安装：一旦 Service Worker 执行完，就激活 `install` 事件
    - 安装事件触发条件：
      - 页面中尚未安装 Service Worker
      - Service Worker 已安装，并且从服务器获取的文件与本地版本内容存在差异
  - 等待：安装成功后，如果已有旧版本在运行，新版便会进入等待状态
    - 旧版本 Service Worker 控制下的页面被全部关闭
    - 跳过等待 `self.skipWaiting();`
  - 激活：安装成功后进入激活状态，触发 `activate` 事件
    - 当 Service Worker 被首次注册激活时，已打开的页面只有在刷新后才会受控
    - 强制控制页面 `self.clients.claim`
    - 监听事件
      - `fetch`
      - `push`
      - `sync`
  - 更新
  - 注销：`registration.unregister();`
  - 废弃
    - 安装失败
    - 激活失败
    - 用户执行了注销操作
    - 新版本的 Service Worker 替换了它并成为激活状态
- 实践
  - [作用域冲突](#作用域冲突)
  - 缓存策略
    - 网络优先
    - 缓存优先
    - 预缓存
    - SWR

### 作用域冲突

子域注册的服务会优先于父域的服务，这就导致一些全局功能失效：

- 功能拆封，各个域的服务主动引入
- 功能提升：全部整合到根作用域，以插件机制动态注册功能

### 离线检测

**Navigator**

```javascript
if (navigator.online) {
  // 正常工作
} else {
  // 执行离线任务
}
```

为了检测应用是否离线，在页面加载后，最好先通过 navigator.onLine 取得初始状态，然后监听离线事件，确认网络连接状态是否变化。

```
window.addEventListener('online/offline', () => {alert('onLine')})
```

## 学习参考

- [sw-101-gdgdf](https://huangxuan.me/2016/11/20/sw-101-gdgdf/)
- [The service worker lifecycle](https://web.dev/service-worker-lifecycle/)

- [渐进式 Web 应用（PWA）](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)
- [Progressive Web App Training](https://www.youtube.com/playlist?list=PLNYkxOF6rcIB2xHBZ7opgc2Mv009X87Hh)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)
