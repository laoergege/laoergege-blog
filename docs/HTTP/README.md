---
tags:
 - http
---
# HTTP

- HTTP
  - [http 缓存](./http%20缓存.md)
  - [https](./https.md)


缓存位置
- memory
  - 预解析
  - imgae load
  - preload
- service worker
- http cache
- push cache


原则上，URL 代表的不是网页，而是概念资源，

Accept: text/html在您的请求中包含类似内容的原因。

Vary: Accept，表示服务器根据资源变种判断


Nginx
- 进程池 + 单线程\采用“master/workers”进程池架构，不使用多线程，消除了进程、线程切换的成本；
- I/O 多路复用接口 epoll


HTTP 里的“队头阻塞”，由于 HTTP 基本的“请求 - 应答”（半双工）模型所导致。
HTTP 规定报文必须是“一发一收”，这就形成了一个先进先出的“串行”队列。队列里的请求没有轻重缓急的优先级，只有入队的先后顺序，排在最前面的请求被最优先处理。
“队头阻塞”问题在 HTTP/1.1 里无法彻底解决，只能：
- “并发连接”（concurrent connections），也就是同时对一个域名发起多个长连接，众多浏览器对同一域名的并发请求限制在 6-8 个
- 域名分片

队头阻塞是应用层的问题