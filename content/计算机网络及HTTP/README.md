---
discussionID: 9-vWR4EGaafyX08nLANRM
release: true
tags:
 - 计算机网络
 - http
---

# 计算机网络及 HTTP

- 计算机网络
  - 计算机网络 = 节点 + 边 + 协议
  - [网络协议栈](#网络协议栈)
    - 应用层
      - [HTTP](#http)
      - [DNS](./DNS.md)
      - [CDN](./CDN.md)
    - 传输层
      - [TCP & UDP](./TCP%20%26%20UDP.md)
  - 网络安全
    - DNS 劫持
    - TCP
      - SYN 泛洪攻击：攻击者不回应 ACK 包（第三次握手不进行）
    - HTTP 劫持
    - TSL 证书链
      - 证书私钥泄漏
      - 客户端安装了不信任的证书

## HTTP

- HTTP
  - 超文本传输协议
    - 超文本含义
      - 传输超文本标记语言
      - 超链接，能够从一个“超文本”跳跃到另一个“超文本”
      - 文字、图片、音频、视频等超文本数据
  - [HTTP 各版本协议对比](./HTTP%20各版本协议对比发展.md)
  - [HTTP 基础](./前端必知的%20http%20基础.md)
  - [HTTP 缓存](./HTTP%20缓存.md)
  - [HTTPS](./HTTPS.md)