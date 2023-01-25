# NodeJS: Web 服务开发

- Web 服务开发
  - API
    - HTTP Server
    - Authentication
    - 路由
      - Restful API
      - GraphQL
    - 数据类型验证
      - JSON Schema
      - typescript 运行验证
  - HTML 渲染
  - 数据库
  - 工程
    - 测试
      - 代码测试
        - Jest
        - [Mocha](https://mochajs.org/)
      - 压测 http 服务（ab）
        - QPS
        - 吞吐率


- BFF
  - 数据
    - 数据聚合和裁剪
    - 协议转换
  - 路由
    - 路由条件
    - 反向代理
      - [fastify/fast-proxy](https://github.com/fastify/fast-proxy)
    - 提供路由分发能力
      - hard coding
      - URL规范化
      - 中心化配置
  - 可用性保障
    - 限流
    - 熔断降级
    - 负载均衡
    - 缓存
  - 安全
    - CORS
    - 合理使用 Content-Security-Policy
    - 使用 HTTPS/HSTS
    - 设置监控报警以及调用链追踪能力
  - 身份验证和权限校验
  - 扩展
    - 中间件
    - 插件：Hooks 设计

## 后端开发

- APIs
- Authentication
  - Cookie-Session
  - JWT
- DBS
  - ORM
  - Native Drivers