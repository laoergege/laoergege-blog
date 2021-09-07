---
tags:
 - http
 - cache
 - control
 - 缓存
---
# HTTP 缓存

- HTTP 缓存
  - [Cache-Control](#cache-control)
  - [缓存代理](#缓存代理)
  - [协商缓存](#协商缓存)
  - [缓存策略](#缓存策略)
    - 服务端缓存控制
    - 客户端缓存控制
    - 现代 Web 前端资源缓存策略
## Cache-Control

http 中控制缓存的主要字段有一下三个：

1. Cache-Control(HTTP/1.1，优先级高)
2. Expires(HTTP/1.0)
3. Pragma: no-cache(相当于 Cache-Control: no-cache，主要是为了兼容 HTTP/1.0)
  
- Cache-Control
  - no-store，不允许存储缓存资源
  - no-cache，不允许使用缓存资源，强制发送请求（协商缓存验证）
  - max-age，缓存时间，相对响应报文的创建时刻
    > 当没有显示设置 cache-control 或是 expire 时, 大部分浏览器会使用**启发式缓存**, 把资源缓存下来; 如果真的不想用缓存, 还是主动设置一下cache-control: no-store。  
    > 启发式计算缓存在 RFC 里的建议是 **(Date - Last-modified) * 10%**
  - must-revalidate，当缓存失效时必须与回源服务器验证
    >  当缓存失效时，其实带不带 must-revalidate，都会发送请求，那么 must-revalidate 好像没什么作用？主要有一下两个使用场景:
    > 1. HTTP 规范是允许客户端在某些特殊情况下直接使用过期缓存的，比如服务器关闭或失去连接，导致请求发送失败的时候，即使设置了 `Cache-Control: max-age=0` 还是回继续使用缓存；还有比如有配置一些特殊指令（stale-while-revalidate、stale-if-error等）的时候也会导致继续使用缓存，可以使用 must-revalidate 进行阻止。
    > 2. 与 proxy-revalidate（下文介绍）做区别，must-revalidate 强调**回源服务器**
### 缓存代理

![图 6](./images/6561aa12c52e04d459ba53c9d9eaba278a41bcacba1af8a51f64bda2ecfb6db9.png)  

缓存代理身份特殊，即是客户端也是服务端，所以还需要有一些新的“Cache-Control”属性来对它做细致的控制。

- Cache-Control
  - private，表示缓存只能在客户端保存，不能放在代理上与别人共享
  - public，缓存完全开放，谁都可以存，谁都可以用
  - proxy-revalidate，缓存失效时代理服务器验证即可
  - s-maxage，单独设置代理服务器缓存时间，与 max-age 区别开
  - no-transform，禁止代理服务对资源做转换
#### Vary

> vary 虽然不是 cache-control 的属性值，是内容协商的结果，带在响应头部，表示一个内容版本
> 但却作为代理缓存的缓存决策依据

URL 原则上是一种网络上的资源概念，同个 URL 可以有多种资源版本形式。

![图 10](./images/a88d34744c98992ce0bd38df170fbf74743743e010f0f7e558738bd9d1d72dfd.png)  

比如，你可以 `Accept: text/html`，也可以 `Accept: text/csv` 改为以不同的格式获取相同的资源，这些都是服务器[内容协商](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Content_negotiation)的结果。

下图是代理缓存根据 vary 缓存依据流程：

![图 9](./images/7d679f31875e7cfb7cc3f3f99efc6030698374dbedcc437da771db25f34c7551.png)  

## 协商缓存

HTTP 协议就定义了一系列“If”开头的“条件请求”字段，专门用来与服务器检查验证资源是否过期。**当请求带有条件字段，服务器就会验证资源是否过期**。

- If-Modified-Since 、Last-modified，根据文件修改日期做验证
- If-None-Match 、ETag，

ETag 是“实体标签”（Entity Tag）的缩写，是资源的一个唯一标识。比 Last-modified 做判断更精准，做验证时**优先级比 Last-modified 高**， 因为有时一个文件内容没什么变化，但修改时间发生了变化。

ETag 还有“强”“弱”之分。强 ETag 要求资源在字节级别必须完全相符，弱 ETag 在值前有个“W/”标记，只要求资源在语义上没有变化，但内部可能会有部分发生了改变（例如 HTML 里的标签顺序调整，或者多了几个空格）。

ETag 工作原理：

![图 7](./images/afaff54aeae0a40176e285f89da7fe10d6a1cd77a34b4da13dcb4ffb3b6b67b4.png)  

Last-modified 也同样类似。 

## 缓存控制策略

缓存代理有时候也会带来负面影响，缓存不良数据，需要及时刷新或删除
### 服务端的缓存控制

服务端的缓存控制主要面向客户端，如浏览器缓存、缓存代理

![](./images/server-cache-control.svg)  
### 客户端的缓存控制

`Cache-Control` 是个通用字段，客户端也可以发送附带 `Cache-Control` 缓存指令的请求。客户端在 HTTP 缓存体系里要面对的是代理和源服务器。

> `Cache-Control` 是个可选选项，

![图 1](./images/9b4fa558a294f0716e7dad1d5d8e20b9ffdd5056ac5ad2efa02d3c2ed9cc0756.png) 

- max-stale，表明客户端愿意接收一个超过指定过期时间范围内的资源，比如 `max-stale：3，max-age: 5` 条件下相当于 `max-age: 8`
- min-fresh，表示客户端只接受一个靠近过期时间的最小过期时间的资源，比如 `min-fresh：3，max-age: 5` 条件下相当于 `max-age: 2`
- only-if-cached，表示只接受代理缓存的数据，不接受源服务器的响应
- no-transform，禁止代理服务对资源做转换


> 💡 浏览器某些行为会在请求头带上“私货”以控制缓存：  
> - 刷新行为会自动请求带上 `Cache-Control:max-age=0`，导致浏览器缓存失效
> - 禁止缓存会带上 `Cache-Control: no-cache` ，屏蔽 If 条件验证，强制请求，不做协商。

### 现代 Web 前端 http 缓存策略

1. 内容长期不变的：版本化 URL 的长期缓存 max-age
2. 经常变化的内容：协商缓存

版本化 URL，就是在 URL 后面（通常是文件名后面）会加上版本号。像 js、css
像 js、css 之类长期变化

index.html 不做版本化控制，不缓存控制 no-cache，协商验证
## 参考学习

- [HTTP 缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching#Cache_validation)
- [可能是最被误用的 HTTP 响应头之一 Cache-Control: must-revalidate](https://zhuanlan.zhihu.com/p/60357719)
- [caching-best-practices](https://jakearchibald.com/2016/caching-best-practices/)





浏览器判断缓存流程
1. 除非 no-store，不然现代浏览器都会启发式缓存
2. 是否命中缓存
   1. service worker
   2. memory cache
      1. preloader
      2. preload
   3. disk cache
3. 缓存是否失效
4. 缓存是否要验证


服务器响应慢
网络有问题
 - 丢包，需要不断重传



浏览器
- 缓存
  - service worker cache
  - http cache