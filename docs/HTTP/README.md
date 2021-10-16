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


HTTP 里的“队头阻塞”