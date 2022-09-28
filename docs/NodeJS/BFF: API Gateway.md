## API 网关功能设计

- API 网关
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