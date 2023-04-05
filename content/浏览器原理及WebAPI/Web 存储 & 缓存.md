---
release: true
tags:
 - web
 - cookie
 - storage
---

# Web 存储

- [客户端存储限额及检查](https://web.dev/storage-for-the-web/#%E5%A4%9A%E5%B0%91)
- Web 存储
  - Cookie
    - 大小、数量：不超过 4K，每个域下最多允许有 20+ 个左右的 cookie
    - 生命周期
      - Expires 绝对过期时间
      - MaxAge 相对过期时间，单位是秒，浏览器用收到报文的时间点再加上 Max-Age，就可以得到失效的绝对时间；优先级比 Expires 高；MaxAge = 0 会话结束过期
    - 作用范围：控制 Cookie 的可见范围，可同站共享
      - Domain
        - 默认为当前文档域名
        - 但默认情况下，Cookie 只有显示设置的域下才能被子域共享访问
        - 如果 Set-Cookie 的 Domain 跟请求源不是同站，则代理会拒绝设置
        - document.cookie 设置了 cookie，那么无论脚本来自何处，这个 cookie 都属于当前网页的域
      - Path
        - 默认为当前路径
    - 安全
      - HttpOnly：不允许 js 操作，以防范跨站脚本攻击（XSS）
      - Secure：只允许通过 HTTPS 安全协议通道发送给服务器
      - SameSite：防止跨站请求时被发送 Cookie，从而可以阻止跨站请求伪造攻击（CSRF）
        - Strict：严格禁止在跨站请求时发送 cookie
        - Lax（默认）：禁止在跨站请求时发送 cookie，除非
          - HTTP 方法是“安全的”（"GET", "HEAD", "OPTIONS", and "TRACE"）
          - 顶层导航（更改浏览器地址栏中的 URL）
        - None：允许跨站请求时发送 cookie
          - 具有`SameSite=None` 的 cookie 还必须指定 Secure
      - SameParty
    - 其他
      - [JavaScritpt 中的 cookie 操作](#javascritpt-中的-cookie-操作)
        - Cookie Store API
      - [如何处理多个同名 Cookie](#如何处理多个同名-cookie)
      - [第三方 Cookie](#第三方-cookie)
      - [部署 SameSite 及兼容处理](https://web.dev/samesite-cookie-recipes/#%E5%A4%84%E7%90%86%E4%B8%8D%E5%85%BC%E5%AE%B9%E7%9A%84%E5%AE%A2%E6%88%B7%E7%AB%AF)
  - LocalStorage、SessionStorage
    - 大小：限制为 5MB+，具体取决于浏览器
    - 生命周期
      - LocalStorage：永久
      - SessionStorage：页面关闭即失效
    - 其他
      - 可监听 storage 事件
  - IndexDB
    - 大小：一般不少于 250 MB
    - 生命周期：永久
    - 其他
      - 能够在 Web Worker 及 Service Worker 环境下访问
  - [CacheStorage](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)、[CacheAPI](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
    - 大小：一般不少于 250 MB
    - 生命周期：永久
    - 其他
      - 能够在 Web Worker 及 Service Worker 环境下访问
  - [HTTP Cache](../计算机网络及HTTP/http%20缓存.md)
  - [Back/forward cache](https://web.dev/bfcache/?utm_source=devtools)

## JavaScritpt 中的 cookie 操作

`document.cookie` 能够获取仅对当前页面可用的 cookie，每条 cookie 以"分号和空格 (; )"分隔，结果如下

```
name1=value1; name2=value2
```
写入 cookie 时，键值必须通过 `encodeURIComponent()` (en-US)来保证它不包含任何逗号、分号或空格 (cookie 值中禁止使用这些值)：

```
document.cookie = encodeURIComponent("name") + '=' + encodeURIComponent("value")
```

## 如何处理多个同名 Cookie 

> 参考 https://httpwg.org/specs/rfc6265.html#storage-model 5.3 存储模型章节第 11 小点

1. 客户端代理将同名、同域、同路径的当作同一 Cookie
2. 如果重复设置相同 Cookie 则会替换更新，否则存入新的 Cookie 值

## 第三方 Cookie

如果 cookie 的注册域与当前页面 URL 的 [eTLD+1](https://web.dev/same-site-same-origin/) 相匹配，则认为 cookie 与页面来自同一站点，通常称为第一方 cookie，不同站点的则称为第三方 cookie。

### 行为跟踪

使用 Cookie 最大的优势是可跨站设置、同站共享、跨站请求自动携带。这也是为什么利用 Cookie 进行用户行为跟踪最佳选择：

1. 通过透明小图片等方法访问第三方网站以便植入 Cookie 标记身份、记录行为
2. 通过跨站请求自动携带第三方 Cookie 数据传送到第三方网站

> [附录：第三方 cookie](https://zh.javascript.info/cookie#fu-lu-di-san-fang-cookie)

> [当浏览器全面禁用三方 Cookie](https://mp.weixin.qq.com/s?__biz=Mzk0MDMwMzQyOA==&mid=2247490361&idx=1&sn=ebc8dcc4d095cc7ba748827dff158f2b&source=41#wechat_redirect)

当第三方 Cookie 被全面禁止时，

1. 使用一方 Cookie 替代三方 Cookie
2. Cookie 数据携带改成请求参数
3. 一方 Cookie 的数据无法获取，将数据改为后端记录

## 参考

- [Cookie，document.cookie](https://zh.javascript.info/cookie)