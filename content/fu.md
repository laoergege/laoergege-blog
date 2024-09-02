- 任务管理
  - 主
    - 学习 Go 语言
      - [ ]《Tony Bai · Go语言第一课》
        - ddl 2024.8.12
    - 整理笔记
    - 刷算法
      - ddl 2024.8.15
    - 重学计算机基础
      - [ ]《面向对象是如何工作的》
  - 支
    - goodme前端 文章 一篇
    - Exploring JavaScript (ES2024 Edition) 一章节
- 学习
  - 比特币，股票，金融
    - TODO: 怎么入手
  - 互联网营销
    - 渠道
      - “SEO”（搜索引擎优化）
      - 短视频
    - TODO: 如何利用 GPT 快速做营销图文、视频？
  - 计算机专业
    - 应用开发
      - 软件设计、架构、工程
        - 《设计模式之美》
      - [Web 开发](#web-应用开发)
        - JavaScript
        - 前端框架
          - [@fastify/vite](https://fastify-vite.dev/)
        - 可视化图表、3D
        - 后端服务
          - https://www.bilibili.com/read/cv21266100/
          - Go
            - 《The Go Programming Language》
            - 《Go 语言项目实战》
      - Rust
        - tauri
        - WASM
      - TODO: 音视频
        - file:///Users/lianyuansheng/GitHub/爬取极客时间课程/download/攻克视频技术
        - file:///Users/lianyuansheng/GitHub/爬取极客时间课程/download/快手 · 音视频技术入门课
        - file:///Users/lianyuansheng/GitHub/爬取极客时间课程/download/从 0 打造音视频直播系统
      - Web3、区块链、比特币
        - TODO: 了解Web3、区块链、比特币
        - Web3
          - 技术
            - 区块链技术：Web3 开发的核心是区块链技术，开发者需要了解区块链的基本原理、共识机制、加密算法等基础知识
            - 智能合约开发：智能合约是在区块链上运行的程序，开发者需要了解智能合约的编写语言（如 Solidity）和开发工具，以及合约的部署和调用方法
            - 去中心化应用设计：Web3 应用需要具备去中心化的特点，开发者需要了解去中心化应用的设计原则、用户体验和开发流程等
            - 分布式存储技术：Web3 应用通常需要使用分布式存储技术来存储和管理数据，开发者需要了解常见的分布式存储方案，如 IPFS
          - 以太坊是 Web3 中应用最广泛的区块链平台，学习以太坊的白皮书是了解区块链和智能合约的重要基础
            - [以太坊白皮书](https://ethereum.org/zh/whitepaper/#decentralized-file-storage)
            - Solidity 官方文档：Solidity 是以太坊智能合约的编程语言，学习 Solidity 官方文档可以快速入门智能合约的编写和部署
            - Web3.js 官方文档：Web3.js 是以太坊 JavaScript API，学习 Web3.js 官方文档可以了解如何使用 JavaScript 与以太坊进行交互
            - https://ethereum.org/zh/
    - 计算机
      - 数据结构与算法
      - 计算机组成原理
        - https://csapp.cs.cmu.edu/3e/home.html
      - 编程语言
      - 编译原理
        - TODO: file:///Users/lianyuansheng/GitHub/爬取极客时间课程/download/编译原理实战课
        - TODO: file:///Users/lianyuansheng/GitHub/爬取极客时间课程/download/编译原理之美
        - TODO: file:///Users/lianyuansheng/GitHub/爬取极客时间课程/download/手把手带你写一门编程语言
        - https://sarabander.github.io/sicp/html/index.xhtml
        - [Introduction to Compilers and Language Design](https://www3.nd.edu/~dthain/compilerbook/)
      - 操作系统
        - https://pages.cs.wisc.edu/~remzi/OSTEP/
      - 计算机图形学
      - 计算机网络
      - 数据库
      - 资料
        - https://github.com/izackwu/TeachYourselfCS-CN/blob/master/TeachYourselfCS-CN.md#%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E4%B8%8E%E7%BC%96%E8%AF%91%E5%99%A8
    - 人工智能
      - TODO: 了解人工智能 AI、机械学习 ML、深度学习 DL、大模型 MML
      - TODO: LLM 应用
      - TODO: 探索豆包使用
      - TODO: ocr 服务s
    - 数学
      - 微积分、概率与统计、随机过程
- 生活
  - TODO: 衣物
    - 1件短袖
    - 2条长裤 + 1条短裤
    - 1休闲鞋
- 工作
  - 找工作
    - 程序员
      - remote
      - 开源
      - 搬砖
    - 刷题
      - JS
      - 框架
      - 网络
      - 算法
    - 面试、项目、简历

## 房

- 押金 5w
- 维修基金 10094
- 律师费 2960
- 首付
  - 父母 860025
  - 老二 10w
  - 老小 10w
- 每月还贷
  - 11898.76（2023.10.1 - 至今）
    - 老二 还至 2023.3.1
  - 12998（2022.8.1 - 2023.9.1）
  - 13288.48（2021.8.1 - 2022.7.1）
- 房税+面积差价
- 装修

## Web 应用开发

- Web 应用开发
  - 工作原理
    - 请求 -> 中间件 -> 服务、RPC -> 数据库 -> UI 渲染
  - RPC
    - 序列化
      - API
        - RESTFul
          - 基于 http 特性的架构
            - 资源请求
              - **将接口以资源的形式表达**
            - 请求独立性
            - 无状态
          - 解决互联网级别的信息共享和互操作问题。写接口的目标各自不同。而REST的目标是“实现互联网级别的信息共享系统”
            - “开放接口”。因此可以看到有些开放接口用REST实现还是很不错的，比如github的接口，AWS S3的接口等。
          - [前后端接口规范 - RESTful 版](https://github.com/olivewind/restful-api-specification)
        - JSON-RPC
        - protobuf
      - 序列化原理
    - 传输协议
    - 服务注册和服务发现
  - 中间件
    - WAF 防火墙
    - DNS
    - CDN
    - 消息队列
    - 缓存系统
      - Redis
    - 安全框架
      - 用户认证及授权
      - HTTPS
      - Web
        - CSRF（跨站请求伪造）保护
        - CORS（跨源资源共享）配置
        - 安全头部和内容安全政策
          - 了解如何配置 HTTP 安全头部，如 HSTS、X-Frame-Options。学习内容安全政策（CSP）的基本原理
          - Helmet
    - 搜索引擎
      - Elasticsearch
    - 日志框架
    - API 网关
      - 请求路由
      - 反向代理
      - API聚合
      - 服务发现
      - 负载均衡
      - 限流和熔断
  - Web 服务
    - 参数验证
    - URL 路由
  - 测试
    - 压测 http 服务（ab）
      - QPS
      - 吞吐率
  - 后端
    - 高并发
    - 数据库，网络
    - 业务本身
      - 依赖后端人员对业务的理解来设计架构，拆分业务
    - TODO: fastify ts react prisma pg
      - Prisma 从数据库模型中为后端应用程序生成类型，而 tRPC 则从后端为前端 API 层维护类型安全
      - tRPC 使用 JSON-RPC 作为规范，HTTP 作为传输层
  - 性能优化
    - 数据库
      - 索引
      - 分库分表
    - 请求
      - RPC 链路优化
      - 限流
      - 缓存
      - 负载均衡
    - 服务

## 其他

- 音视频
  - [freeswitch](https://github.com/signalwire/freeswitch)
  - - 输入
    - 输入源可以是物理设备，例如麦克风、网络摄像头或来自用户硬盘或远程网络对等点的本地或远程文件。
  - 媒体流
  - 元素、RTC
  - TCP 传送可靠、有序的数据流：如果中间数据包丢失，则 TCP 会缓冲其后的所有数据包，等待重传，然后按顺序将数据流传送给应用程序
  - 不保证交货顺序
  - 没有确认、重传或超时
  - 无连接状态跟踪
  - 无拥塞控制
  - 信令服务
    - 会话发起协议 (SIP)
  - 连接建立后，应用程序仍然可以在 RTCPeerConnection 对象中添加和删除流。每次发生这种情况时，都会调用自动 SDP 重新协商，并重复相同的初始化过程。
- Cloudflare
  - DNS
  - CDN
  - SSL
  - DDOS防护
  - Cloudflare Pages
  - Cloudflare Workers
  - R2
  - Cloudflare Tunnel
  - Images
- 内网服务外网用
  - 动态公网 IP + DDNS
  - 内网穿透
  - IPv6
- 低代码
  - 表单数据描述模型
  - 表单 UI 描述模型
  - `表单设计器 => 表单 UI 描述模型 => 表单渲染器 => [UI 模型(VNode) => Vue Render =>] UI`
    - 表单 UI 描述模型
      - 表单组件描述
      - 交互逻辑描述
        - 数据校验
          - 必填
          - 大小
          - 格式
          - 联动数据校验
        - 错误提示
  - `表单 UI 描述模型 => 表单数据描述模型`
    - 表单数据描述模型
  - `表单数据描述模型 => 数据模型校验器 check 数据`
  - `表单数据描述模型 => 表格 UI 模型描述 => 表格渲染器 => [UI 模型(VNode) => Vue Render =>] UI`
  - 其他
    - [JSON Schema](https://json-schema.org/)
    - JSON Schema 验证器：[ajv](https://github.com/ajv-validator/ajv)



## 项目、框架、架构、模式

- Admin 系统模块
  - 列表
  - 表单
  - 权限设计
  - 登陆验证
  - 工作流
- 发布 - 消费 - 生产
- 软件架构
  - 业务架构
  - 代码架构
    - 解耦、分离责任
      - 抽象
    - 分层架构
      - 用户界面（UI）：负责与用户进行交互。
      - 应用层
      - 业务逻辑层（BLL）：表示业务概念。它定义了应用程序的行为，使其与其他应用程序独特区别开来。
      - 数据访问层（DAL）：在内存中持久化数据并维护应用程序的状态
    - DDD（领域驱动设计）
  - 物理架构
- 前端业务
  - 用户与UI交互
  - 后端交互
  - 业务逻辑数据处理
  - UI 渲染
- Pina、状态管理设计
  - 状态分类
    - 组件级
      - 通信
        - 父子
        - 跨组件
          - 提升
          - 单例
        - 原生
          - label+for
          - dispatchEvent 和 addEventListener
    - 页面路由级/业务级
      - 栈
    - 应用会话级
      - 全局状态
  - 异步加载
  - 生命周期
- Vue
  - [深入理解单文件组件编译](https://www.bilibili.com/video/BV1Zb421n7dR/?spm_id_from=333.788&vd_source=5e3f59e2a50994ae58323e0f75a50d48)

## 计算机技术栈

- 计算机技术栈
  - 领域
    - Web
      - HTML/CSS
      - WebAPI
        - [ ] PWA：博客 + PWA
      - HTTP
        - [ ]《透视 HTTP 协议》
        - [图解 QUIC 连接](https://cangsdarm.github.io/illustrate/quic)
      - 浏览器
        - [ ] 《浏览器原理及实践》
      - 前端框架及工程化
        - [Vue](./前端框架/README.md)
        - React
        - [前端工程化](./content/前端工程化/README.md)
      - Web 服务
        - [NodeJS 服务开发](./NodeJS)
      - 音视频
        - [ ] 《从 0 打造音视频直播系统》
      - 图表
      - 可视化
        - [I want to talk about WebGPU](https://cohost.org/mcc/post/1406157-i-want-to-talk-about-webgpu)
    - 容器
      - [ ] 《Kubernetes 入门实战课》
  - 软件设计及架构、软件工程及软件工具
    - 软件设计及架构
      - [ ]《软件设计之美》
    - 软件工程及软件工具
      - DevOps
      - Git
      - [SSH](./软件设计及架构、软件工程、软件工具/SSH.md)
        - [ ] [ssh-tutorial](https://github.com/wangdoc/ssh-tutorial)
  - 程序设计语言与实现原理、编译原理
    - [JavaScript](./JavaScript/README.md)
      - [ ] 《JavaScript 核心原理精讲》
      - [ ] 《ES6 入门教程》
      - Typescript
    - Rust
      - [ ] [《Rust 程序设计语言》](https://kaisery.github.io/trpl-zh-cn/title-page.html)
      - [ ] 如何用 napi-rs 搭建一个 Node.js 可以调用的 Rust 库
      - [ ] WebAssembly + 前端
      - [ ] Rust CLI
    - 语言实现原理、编译原理
      - [ ] https://craftinginterpreters.com/contents.html
      - [ ] 《手把手带你写一门编程语言》
      - SICP
        - [ ] https://sourceacademy.org/sicpjs/acknowledgements
        - [MIT 计算机程序的构造和解释](https://github.com/DeathKing/Learning-SICP)
        - [Berkeley 的 61A 课程](https://www.bilibili.com/video/av40460492/?vd_source=5e3f59e2a50994ae58323e0f75a50d48)
      - [《程序语言理论与实现》](https://bobzhang.github.io/courses/)
      - 《编译原理》龙书
      - https://www.edx.org/course/compilers
  - 计算机基础
    - 计算机网络
      - [ ] 《计算机网络通关 29 讲》
      - [ ] 《趣谈网络协议》
      - [ ] 《计算机网络-自顶向下方法》
      - [The TCP/IP Guide](http://www.tcpipguide.com/free/t_TCPSlidingWindowAcknowledgmentSystemForDataTranspo-6.htm)
        - RFC：https://datatracker.ietf.org/doc/rfc1644/
    - 操作系统
      - [ ] 《重学操作系统》
      - [ ]《趣谈 Linux 操作系统》
      - 《现代操作系统：原理与实现》
    - [数据结构与算法](./数据结构与算法/README.md)
      - [ ] leetcode 200 道
      - [ ] 《数据结构与算法之美》
      - [ ] 《算法面试通关 40 讲》
      - [ ] [Hello 算法](https://www.hello-algo.com/)
    - 计算机组成原理
      - [ ]《程序是怎样跑起来的》
      - [ ] https://www.bilibili.com/video/BV1iW411d7hd
  - 数学与应用

## 编程语言

- 概览
  - 语言
    - 语法学习
    - 语言设计与实现
  - 语言工具
    - 代码风格及质量 formatter、linter
    - 包管理
    - 调试工具
    - 测试工具
    - 构建工具
      - resolver
      - 编译
      - link
      - minifer
  - 库、框架：面向领域开发的工具
  - 工程化
- 软件工程
  - 项目管理
  - 语言工程
    - 代码管理 Git
    - 语言工具
  - 软件开发
    - 分析
    - 设计
    - 编码
    - 测试
      - 单元测试
      - 端对端测试
  - 运行部署
    - devop
    - CICD
  - 监控优化
    - 服务监控
      - 错误监控
    - 性能监控
      - CPU Usage
      - Memory Usage
      - Disk Usage
      - Network Usage
    - 日志上报
- 语言学习路线
  - 了解
    - 历史现状
    - 思想特点
    - 缺陷
  - 基础
    - 变量、值和类型
      - 动态语言
        - 运行检测类型
        - 动态赋值
      - 类型
        - 基本数据类型
        - 复合数据类型
          - 结构体及方法
          - 引用类型
            - 接口类型
      - 枚举：枚举类型本质上就是一个由有限数量常量所构成的集合
    - 运算符、表达式、语句
      - 表达式：计算
      - 语句
        - 控制
        - 赋值
    - 函数
      - 将大问题分解为若干小任务与代码复用
    - 程序结构
      - 代码块和作用域
        - 作用域是一个编译期的概念，也就是说，编译器在编译过程中会对每个标识符的作用域进行检查，对于在标识符作用域外使用该标识符的行为会给出编译错误的报错
        - 静态作用域、动态作用域
        - 变量重声明
          - 同名变量遮蔽问题
      - 模块系统
    - 内置数据结构
  - 错误处理
    - 错误的处理流程
      - 生成表达
      - 传递、捕获
      - 处理
        - 忽略
        - 反馈给用户
        - 重试
        - 记录错误日志
    - 语言的错误处理机制
      - 错误码 + 返回值
        - 错误码机制，容易忽略错误，需要显式的传播和捕获 ❌
        - 错误返回值具有二义性：返回值有它原本的语义，强行把错误类型嵌入到返回值原本的语义中 ❌
          - 可类似 Golang **多值**返回，区分开错误返回和正常返回
      - 异常抛出
        - 异常可以通过栈回溯（stack unwind）被一层层自动传递，直到遇到捕获异常的地方，如果回溯到 main 函数还无人捕获，程序就会崩溃
          - 异常看成一种关注点分离（Separation of Concerns）：错误的产生和错误的处理完全被分隔开，调用者不必关心错误，而被调者也不强求调用者关心错误
          - 使用异常来返回错误可以极大地简化错误处理的流程，它解决了返回值的传播问题
      - 错误类型 + 返回值
        - 错误类型提示，强制显示处理
        - 继承扩展 Error 接口类型
          - 根据自定义错误类型或者错误行为做决策处理
            ```js
            // 错误类型
            if( xxx instanceof XxxError) ...

            // 错误行为
            error.ifNoAuth(callBack)
            ```
    - 实践原则
      - 遇到错误，**停止执行，异常反馈**
      - 尽量不要忽略任何一个异常
        - 错误类型化，通过类型系统检查 ✅
      - 区分错误和异常
      - 将正确逻辑和错误处理分隔开
        - 比如 `try-catch`、模式匹配 `match` 等语法机制
      - 异常抛出
  - 接口
  - 并发、异步
    - 并发编程
      - 异步编程
        - 语言层面实现的并发模型 + 异步运行时
      - 多线程编程
    - 并发模型
      - 线程模型
        - *基于系统线程的多线程*
          - 线程数量限制
          - 线程切换消耗
        - 协程（用户线程）
      - 事件驱动模型
        - 事件循环 + 回调队列
    - 并发设计
      - 并发模型
      - 编排调度
      - 协同：并发 -> 数据共享 -> 状态竞争 -> 同步通信
        - 同步原语（互斥锁、条件变量、读写锁）
          - 死锁
    - 异步能力
      - 上下文切换和现场保存工作
      - 事务
        - 逻辑完整性
        - redo/undo
  - 泛型
  - 元编程
    - 宏编程
    - 反射
  - 语言互操
    - FFI 外部函数接口（foreign function interface）
    - IPC 进程间通信（inter-process communication）
  - 指针操作
- 语言设计与实现
  - 编译原理与运行时实现
  - 运行机制
    - 编译方式
    - 解释方式
    - IR + 虚拟机
  - 变量的内存结构
    - 内存布局结构
      - 函数调用栈
      - 动态数据堆
      - 静态区
        - 代码
        - 常量
    - 内存对齐
  - 垃圾回收
  - 代码复用
    - 代码拷贝
    - 代码指针
      - 指针拷贝
      - 委托
        - 隐式 继承
        - 显示 组合
- 软件分类
  - 业务应用系统
  - 嵌入式软件
  - 工具应用软件
  - 基础软件
- 应用开发
  - glob 语法
    - `*`：任何路径段
      - 星号不匹配名称以点开头的“不可见文件”，如果我们想匹配这些，我们必须在星号前加上一个点：`.*`
    - `**`：匹配零个或多个路径段
    - `!`：排除
    - `\{xx,xx\}`：可选匹配
  - 二进制操作、编解码
  - 字符串、文本操作
    - 文本
      - 字符串拆分成行
        - RE_SPLIT_EOL = /\r?\n/;
        - /(?<=\r?\n)/
    - 文本编码
      - Unicode
        - Unicode 只是一个符号集，它只规定了符号的二进制代码
      - 二进制存储格式编码
        - UTF-8
          - 一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度
      - 阅读推荐
        - [字符编码笔记：ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
  - 协议、编译原理
  - 操作系统交互
    - 可执行程序
      - shell 脚本
      - 二进制可执行程序
    - I/O
      - 网络
      - 文件
    - IPC
      - 命名管道
      - Unix Domain Sockets
      - Unix 信号
      - 消息队列
      - 共享内存
      - 内存映射文件
      - I/O 文件（文件和 TCP 套接字）
- 性能优化
  - CPU 计算
    - 减少不必要的计算
    - 空间换时间，即缓存计算结果
    - 提高计算能力
    - 并发，多进程、多线程
  - 内存
    - 减少内存使用
    - 防止内存泄漏
    - *注意内存安全*
- 编译原理
  - 前端
    - parser
      - lexer
      - ast
    - traverser
      - processor
      - verifier
    - codegen
- 软件指标
  - 功能性
  - 性能性
  - 可用性
  - 编码：可维护性和可扩展性指标
  - 安全性
- 编程范式
  - 程序 = 数据 + 算法
  - 面向对象：对象 = 属性 + 行为
  - 函数式：计算表达式
  - （函数）响应式：数据流
  - 结构化编程
    - 无 goto，控制结构：限制使用 goto 语句，**对程序控制权的直接转移施加了约束**
    - 调用栈、局部变量和按值传递：提高子程序独立性
    - 功能化分解：结构化程序设计本质上还是一种面向过程的设计思想，但通过“自顶向下、逐步细化、模块化”的方法，将软件的复杂度控制在一定范围内，从而从整体上降低了软件开发的复杂度
      - 缺点
        - 自定而下功能分解，这种结构下模块具有**强依赖性**、**抽象性不够**：一旦需求变动，经常是牵一发而动全身，关联的模块由于依赖关系的存在都需要变动，**无法有效隔离变化**
        - **可测试性不够**
    - 有两个无法解决的问题，那就是全局变量问题和可重用性差的问题

## 电商

- 做生意
  - 选品
  - 销售
  - 物流
  - 库存
  - 供应链

## Rust

- 静态变量与常量区别？
  - const 系统会在编译时对常量变量进行求值；无论在何处使用，其值都会被内嵌
  - staic 使用时不会内联，并且具有实际关联的内存位置
- 注释、Rustdoc
  - 文档注释

## 其他


- VSCode & 项目配置工具
  - [Vue](https://github.com/vuejs/language-tools)
    - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
    - [TypeScript Vue Plugin (Volar)：支持在 TS 文件中引入 Vue 单文件组件](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
      - [Volar Takeover 模式：项目只用 Vue 的 TS 语言服务实例](https://cn.vuejs.org/guide/typescript/overview)
    - [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
    - 组件文档
      - [vue-component-meta](https://github.com/vuejs/language-tools/tree/master/packages/component-meta)
      - [vite-plugin-vue-component-preview](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview)
  - Typescript
    - 只启用项目 TS 
  - JS
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - 格式化
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)



- Web 安全
  - 身份验证
    - JWT 这类令牌的场景，是多个系统间通过非信任通道（数据发到浏览器再由浏览器发到另一个系统）传递数据（这也是典型的第三方登录的场景）而不是当会话用，也不是在一个完全自己控制的系统中传数据用，也不是在消息队列发消息用。
- 单向数据流：单向数据流」描述的是「组件之间的关系
  - 当状态变化后，变化产生的影响只会从上往下传递




- 缓存置换算法
  - FIFO：先进先出算法，当缓存空间不足时，优先删除最先加入缓存的数据项，该算法主要适用于实时性较强的数据
  - LRU：最近最少使用算法，当缓存空间不足时，优先删除最久没有被使用到的数据，该算法主要适用于热点数据
  - LFU：最不常使用算法，当缓存空间不足时，优先删除使用频率较少的数据，该算法主要适用于数据访问模式不会频繁发生变化的数据






- 就是要做一件事，只需要集齐这件事要发生的要素就行了。行动力不足，就是连拆解工作都不做，其本质是缺乏学习能力
  - 拆解思维，无疑能极大限度提高行动力
- 软连接
  - 实际上是一个特殊的文件。在符号连接中，文件实际上是一个文本文件，其中包含的有另一文件的位置信息
  - A 的目录项中的 inode 节点号与 B 的目录项中的 inode 节点号不相同，A 和 B 指向的是两个不同的 inode，继而指向两块不同的数据块。但是 A 的数据块中存放的只是 B 的路径名（可以根据这个找到 B 的目录项）。A 和 B 之间是“主从”关系，如果 B 被删除了，A 仍然存在（因为两个是不同的文件），但指向的是一个无效的链接。
- git
  - 合并方向为：develop -> test -> master
  - 在实际开发中，在推送代码前，往往都要先执行一次git pull将远程仓库的代码拉取到本地并进行合并




- 亮点
  - 看你项目规模，业务领域，用户量，创造效益，是否使用哪些组件框架，哪些进行定制化改造
  - 我一般面试中意的公司都会看一下他们公司干嘛的  项目有啥需求 往他招人的需求方向上扯犊子
- vite
  - 基于浏览器的 module import，在请求的时候对模块做下编译
  - commonjs 转成 esm
  - 依赖优化：对 node_modules 下的代码做预打包
  - 打包：rollup 兼容
  - 热更新
    - 基于 chokidar 和 websocket 来实现了模块热更新



- TS
  - 额外的复杂性：对于一些简单任务，引入 TS 可能会增加额外的复杂性。例如，监听文本输入事件的代码在 TS 中可能需要更多的类型断言和转换。
    - 经常使用 as、any 或者@ts-ignore 来绕过类型检查，
  - 基础知识：首先，掌握 TypeScript 的基础知识，了解它的语法和特性，确保你能够在项目中使用它。
  - 实战经验：通过参与实际项目，遇到问题并解决问题，不断积累经验。在这个过程中，思考 TypeScript 如何帮助你更好地编写和维护代码。
  - 核心概念和知识体系：深入理解 TypeScript 的核心概念，构建起完整的知识体系，这对于理解更高级的特性和最佳实践至关重要
  
  
- 问题

  - 重塑内核，精神强者
    - 引导自主人生建设、学会争取自身利益
    - 屏蔽创伤性记忆/精神伤害
      - 每天自我勉励
    - 行动
      - 消除模糊，给自己做好行动计划，详细分解
      - 自我与超我的切换
      - 拆分自己的行动目标，由点及面去完成他
  - 困难、能耗大 => 质变
    - 人性 - 优越感 
      - 找有价值的优越感
    - 规则
  - 规定
    - 月初或底一次，每周一部，违规删12部
    - 每晚11睡，早7醒
      - 防脱发
      - 脱发
  - 行动
    - 洗脑
    - 反人性
    - 战胜拖延的唯一方法，去做拖延执行最近的事

- 思想认知 | 情绪 => 行为
  - 恐惧 =/=> 行动
- 人性
  - 爽
  - 低消耗
  - 优越感
  - 人性趋利就能把事坚持下来



- 情绪破坏
- 认知
- 天性
  - 逼
  - 行动
- 拖延症
  - 建立他律规则、潜意识沟通、100%完成、情绪奖惩制度
    - 规则
      - 奖励：情绪本能
      - 惩罚






- setInterval
  - 超时重叠
    - 递归 setTimeout
- EventEmitter
- 函数
  - 函数表达式
    - 箭头函数
      - 它们没有自己的 arguments 或 this 值上下文。相反，它们会从箭头函数的词法封闭环境（提供这些上下文的最近封闭函数）中继承这两个值
  - 对象
    - 原型继承
  - 类
  - 集合
- 依赖说明符
  - 相对说明符
  - 目录索引文件
    - package.json
    - index.js 或 index.ts
  - 裸说明符/包
    - node_modules 目录从导入文件向上搜索。搜索停止于项目根目录
    - 包子路径
      - 文件
      - 目录
  - 内置模块
  - 绝对说明符
    - 绝对说明符以 / 开头，并解析相对于项目根目录的文件。
  - 波形符说明符
    - 波形符说明符以 ~ 开头，并相对于导入文件中最近的包根进行解析
  - 哈希说明符
- 文本格式、二进制格式、文本协议
- 解析
  - 状态机
  - [llhttp是如何使Node.js性能翻倍的？](https://zhuanlan.zhihu.com/p/100660049)
    - [llparse](https://github.com/nodejs/llparse)

- CSS 项目实战
  - 大型项目的 CSS 编写和维护
    - 难点
      - 协作难 易冲突 维护苦 灵活性差
    - 需求
      - 可维护性
      - 可扩展性
      - 可重用
    - CSS 规则难以管理
      - 全局命名空间
      - 权重(特异性)
      - 级联规则
    - CSS 的最佳实践
      - 样式表和关注点分离
      - CSS 方法论
        - BEM
        - CSS Modules
        - Atomic CSS
      - 框架上能力
        - CSS 变量交互
        - JS


- package.json 的 "sideEffects"
  - Link Time Optimization：指link期优化的手段，可以进行跨模块的分析优化，如可以分析模块之间的引用关系，删掉其他模块未使用的导出变量，也可以进行跨模块对符号进行mangle。
  - 一种在Javascript社区流行的一个术语，是一种死代码优化手段，其依赖于ES2015的模块语法，由rollup引入。这里的tree shaking 通常指的是基于module的跨模块死代码删除技术，即基于LTO的DCE，其区别于一般的DCE在于，其只进行top-level和跨模块引用分析，并不会去尝试优化如函数里的实现的DCE。
  - 副作用：对程序状态造成影响，死代码优化一般不能删除副作用代码，即使副作用代码的结果在其他地方没用到
- CSS
  - 基础
  - 最佳实践
    - 关注点分离 + 内容优先 + 语义化的内容类 + BEM + 组件类
      - 关注点分离 + 语义化的内容类
        - HTML 内容是独立的，为内容附上语义化的钩子类
        - CSS 和 HTML 之间仍然存在非常明显的耦合、CSS 依赖 HTML 内容结构
      - BEM：进一步将样式与结构解耦
      - 样式复用困难 => 组件类
        - 语义内容看，没有共同点
        - 但从设计角度来看它们有很多共同点，可以设计出公共的组件类
      - 组件类：CSS 是独立的，与内容无关
      - 组件做的事情越多，或者组件越具体，重用就越困难
        - 扩展 
          - 编译时：@extend 或 mixin
          - 运行时：CSS 样式覆盖
    - 实用优先 + 原子类/工具类 + 组件类
    - 不再有过早的抽象

- vue
  -  @vue/reactivity
  -  Vue.js 3.0 在设计内建组件和模块时也花费了很多精力，配合构建
工具以及 Tree-Shaking 机制，实现了内建能力的按需引入，从而实现
了用户 bundle 的体积最小化
  - 特性开关
  - 可以编写自定义的渲染器，甚
至可以编写编译器插件来自定义模板语法
- 框架设计
  - 警告、提示信息、美化信息
- 想要实现 Tree-Shaking，必须满足一个条件，即模块必须是
ESM（ES Module），因为 Tree-Shaking 依赖 ESM 的静态结构
- /*#__PURE__*/ 注释
  -  JavaScript 是一门动态语言，通过纯静态
分析的手段进行 Tree-Shaking 难度较大，因此大部分工具能够识别
/*#__PURE__*/ 注释，在编写框架代码时，我们可以利用
/*#__PURE__*/ 来辅助构建工具进行 Tree-Shaking。
- 错误处理
  - callWithErrorHandling：
- 组件
  - 虚拟 DOM 和渲染器
    - 渲染器的作用是，把虚
拟 DOM 对象渲染为真实 DOM 元素。它的工作原理是，递归地遍历虚
拟 DOM 对象，并调用原生 DOM API 来完成真实 DOM 的创建。渲染
器的精髓在于后续的更新，它会通过 Diff 算法找出变更点，并且只会
更新需要更新的内容。后面我们会专门讲解渲染器的相关知识
  - 渲染函数
  - 组件
  - 渲染
器在渲染组件时，会先获取组件要渲染的内容，即执行组件的渲染函
数并得到其返回值，我们称之为 subtree，最后再递归地调用渲染器
将 subtree 渲染出来即可
- 响应式系统
  - 响应式数据、副作用
    - WeakMap、Map 和 Set 
      - map =》 target keymap
      - keymap =》 set
  - 分支切换与 cleanup
    - 解决这个问题的思路很简单，每次副作用函数执行时，我们可以
先把它从所有与之关联的依赖集合中删除
  - 嵌套的 effect 与 effect 栈
  - 避免无限递归循环
  - 调度执行


```
01 // 定义一个任务队列
02 const jobQueue = new Set()
03 // 使用 Promise.resolve() 创建一个 promise 实例，我们用它将一个任务添加
到微任务队列
04 const p = Promise.resolve()
05
06 // 一个标志代表是否正在刷新队列
07 let isFlushing = false
08 function flushJob() {
09 // 如果队列正在刷新，则什么都不做
10 if (isFlushing) return
11 // 设置为 true，代表正在刷新
12 isFlushing = true
13 // 在微任务队列中刷新 jobQueue 队列
14 p.then(() => {
15 jobQueue.forEach(job => job())
16 }).finally(() => {
17 // 结束后重置 isFlushing
18 isFlushing = false
19 })
20 }
21
22
23 effect(() => {
24 console.log(obj.foo)
25 }, {
26 scheduler(fn) {
27 // 每次调度时，将副作用函数添加到 jobQueue 队列中
28 jobQueue.add(fn)
29 // 调用 flushJob 刷新队列
30 flushJob()
31 }
32 })
33
34 obj.foo++
35 obj.foo++
```

- Webpack Tree Shaking 主要涉及三种类型的优化
  - usedExports
  - sideEffects
    - sideEffects 优化：这会从模块图中删除不使用导出变量的模块。
  - DCE (Dead Code Elimination) Optimization
- usedExports 侧重于导出变量，sideEffects 侧重于整个模块，DCE 侧重于 JavaScript 语句








- 简历
  - 明确的职业目标
    - 寻求高级工程师角色，能够运用我经过验证的能力来交付规模化服务，为业务带来有价值的创新
  - 只描述活动而非成果
    - 在 Project X 中编写 Java 代码，实现了几个关键的微服务，使其能够支持企业环境，从而吸引了几个关键的新客户购买产品
  - 未能展示个人对团队或业务的影响
    - 简历应该展示求职者如何为团队、产品或业务底线带来积极变化。
    - 强调个人贡献和领导力，而不仅仅是职责描述
  - 提升简历质量的小技巧
链接到具体的项目或成果，以增加可信度。

使用粗体字突出最重要的成就。

使用强有力的动词来描述成就，如 “拥有”、“构建”、“推动” 或 “交付”。

在可能的情况下，包含具体的数字和金钱价值来量化成果。
- 性能优化
  - 传输时间、transferSize、encodedBodySize 和 decodedBodySize
  - gzip 和 brotli 的魅力
  - 体积压缩影响 Web Vitals：LCP、CLS、FID 详解
    - CLS：是网页元素排列的 “稳定性指标”，就像是摆放家具，如果一直晃来晃去，用户会觉得很不安心。观测云可以帮我们找到哪些元素 “不听话”，需要重新摆放
    - 是用户第一次与网页互动的 “时间表”，如果用户按下按钮，却迟迟没有反应，就像是按了电梯却不见动静，用户会感到很无奈。通过云观测，我们可以找到这个 “电梯” 的问题，确保用户按下按钮后秒速响应
    - LCP：就像是网页的 “开场大片”，如果时间太长，用户可能会提前离场。通过云观测，我们可以实时监控这个 “大片” 的播放情况，确保用户在等待过程中没有无聊
- Promise
  - [[PromiseState]]、[[PromiseResult]]、[[PromiseIsHandled]]、[[PromiseFulfillReactions]] 和 [[PromiseRejectReactions]]
- 正则
  - 字符类
  - 范围
  - 或:
  - 量词
  - 分组
    - 反向引用
      - number
      - name
    - 断言
- 对象
  - Object.prototype 上的属性操作
        - for..in 循环在其自身和继承的属性上进行迭代。所有其他的键/值获取方法仅对对象本身起作用
        - let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
- node
  - node --env-file=.env your-script.js
  - process.loadEnvFile()
  - util.parseEnv()
  - .env
    - USER_NAME='John Doe'
    - NODE_OPTIONS='--title="Sample Node App"'
      - console.log(process.title);  
    - CERTIFICATE="-----BEGIN CERTIFICATE-----
MIIDdTCCAl2gAwIBAgIJAKC1hi9s2wfMM...
-----END CERTIFICATE-----"
- vue
  - 尽管VDOM提升了速度和性能，但更新DOM仍然需要遍历节点树并比较每个虚拟节点的属性，这可能导致不必要的内存负担
  - 静态提升 (Static Hoisting)：自动从渲染函数中提取VNode创建，允许在多次重新渲染中重用VNodes。
补丁标志 (Patch Flags)：允许Vue智能地更新DOM，通过识别需要更新的动态绑定类型，有选择性地更新元素。






- TypeScript 
  - 类型系统
    - 集合特性
      - never 空集
      - & 交集
      - | 并集
      - extends 检查一个集合是否是另一个集合的子集
      - {
  [key: string]: boolean | number;
}
    - 类型层级
  - 类型编程
    - 泛型
      - 类型参数
        - 当使用类型参数时，TypeScript 决定分别对联合的每个成员执行子集检查，而不是首先将联合解析为构造的集合
          - type Result = IntrospectT<number | string>;
          - type Result = IntrospectFoo<number> | IntrospectFoo<string>;
          - 元组语法强
    - 条件
      - ?:
    - 类型映射
      - infer
        - ```ts
          type InsideArray<T> = T extends Array<infer R>
            ? R
            : "T is not a subset of Array<unknown>";
          type TheNumberInside = InsideArray<Array<number>>;
          // TheNumberInside = number
          ```
          ```
          type SetToMapOver = "string" | "bar";
          type FirstChacter<T> = T extends `${infer R}${infer _}` ? R : never;
          type Foo = {
            [K in SetToMapOver as `IM A ${FirstChacter<K>}`]: FirstChacter<K>;
          };
          ```
      - in
    - 递归
  - 类型推导






- 为什么说HTTP是无状态的协议呢？因为它的每个请求都是完全独立的，每个请求包含了处理这个请求所需的完整的数据，发送请求不涉及到状态变更








- js 函数
  - 作用域链
  - 闭包
- js 对象
  - 原型
    - 原型链
- js 面向对象
  - instanceof 运算符原理及实现
  - new 运算符原理及实现
  - 原型继承
- React Fiber
  - 所以 React 通过Fiber 架构，让自己的Reconcilation 过程变成可被中断。 '适时'地让出CPU执行权，除了可以让浏览器及时地响应用户的交互
  - 分时让出
    - 空闲调度
      - requestIdleCallback API
    - 2
      - 超时
      - 任务优先级
- css
  - - headlessui
    - ui
    - tailwind
    - css cascade
    - 通常会从重置、主题、基本 CSS 样式和组件开始
- IO 是过程式
- - 函数式编程的精髓是使用一层一层的抽象来解决问题、声明式
- “构造”才是函数式编程的核心（代数数据类型），“解构”才是一切数据的使用方式（所以才有模式匹配）。对于任意类型数据，要使用它，就要对它解构，在它的成员上进行一些操作，再重新组装成返回值类型的对象
- 前端工具
  - - git
  - husky
  - lint-staged
  - commitlint
  - 版本发布：发版与 CHANGELOG 自动化
    - standard-version
    - 根据指定规则自动升级项目不同级别（major、minor、patch）的版本并打 tag
    - 对比历史 commit 提交自动生成不同版本间的可阅读、分类的 CHANGELOG 日志
- 函数式
  - 一切皆是表达式
    - 函数式语言是由表达式构成的。如果对表达式进行求值，就会返回值。通过依次对各个表达式进行求值，再对使用所得到的值的其他表达式进行求值，从而实现程序
    - 在函数式语言中，函数和数据都被看作返回值的表达式

```js
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((v, fn) => fn(v), value);

const asyncPipe =
  (...fns) =>
  (value) =>
    fns.reduce((chain, fn) => chain.then(fn), Promise.resolve(value));

const compose =
  (...fns) =>
  (value) =>
    fns.rightReduce((v, fn) => fn(v), value);
```


- `new Function`
  - `new Function ([arg1, arg2, …argN], functionBody)`
  - 上下文是全局的
  - 场景：动态生成代码、计算


- Q640】如何实现数组函数 reduce #658
- const reduce = (list, fn, ...init) => {
  let next = init.length ? init[0] : list[0]
  for (let i = init.length ? 0 : 1; i < list.length; i++) {
  next = fn(next, list[i], i)
  }
  return next
  }
- 什么是防抖和节流，他们的应用场景有哪些
- 实现一个数组扁平化的函数 flatten
- const flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
- 如何实现一个深拷贝 (cloneDeep)







- Rest 参数与 Spread 语法
  - spread 语法这样操作任何可迭代对象
  - Array.from 适用于类数组对象也适用于可迭代对象。
Spread 语法只适用于可迭代对象


- 箭头函数
  - 箭头函数没有自身的 this，从外部词法环境中查找 this
    - 不能用作构造器
  - 箭头函数没有 "arguments"


- JSDoc
  - [JS Projects Utilizing TypeScript](https://typescriptlang.org/docs/handbook/intro-to-js-ts.html)


- Generator 生成器 = 状态机 + 迭代器模式
  - async generators + for-await
- 闭包是将函数代码和其环境一起存储的一种数据结构
  - 闭包引用的上下文中的自由变量，会被捕获到闭包的结构中，成为闭包类型的一部分。一般来说，如果一门编程语言，其函数是一等公民，那么它必然会支持闭包（closure），因为函数作为返回值往往需要返回一个闭包
  - 闭包是一种特殊的函数，它会捕获函数体内使用到的上下文中的自由变量，作为闭包成员的一部分



- HTTP 协议是无状态的，也就是说每次请求和响应之间是没有关联的，服务器不会记住之前的任何信息，所以会导致每次请求都要重新建立连接



闭包是将函数，或者说代码和其环境一起存储的一种数据结构。闭包引用的上下文中的自由变量，会被捕获到闭包的结构中，成为闭包类型的一部分



- 内存泄漏
  - 内存泄漏的本质是：**没有及时释放不再使用的内存**
  - 常见的内存泄漏
    - 全局变量
    - 闭包
    - 定时器
    - 事件监听
    - 循环引用
  - 如何避免内存泄漏
    - 减少全局变量
    - 减少闭包
    - 减少定时器


- 递归 setTimeout: 模拟 setInterval
  - setInterval 每 n 毫秒启动一个函数，而不考虑函数何时完成执行
- setImmediate（），相当于使用 setTimeout（（） => {}， 0）
 





- 微前端
  - 业务拆分？


- 编程范式设计要点
  - 状态的管理思考
    - 程序 = 数据 + 算法
      - 程序 = 状态 + 计算
  - 逻辑单元抽象表达及复合
- 状态的管理思考
  - 面向对象的方法是将处理职责拆分到不同的类，然后组合和复用这些类来构建程序，但如何拆分和如何给这些细小部分的处理职责定个类名？没有标准答案，这也是OO系统混乱的根源，所以早期为了解决系统混乱，软件工程告诉我们要从业务角度去拆分，所以软工必修UML，用于系统分析设计
  - 函数式编程
    - 计算组合，函数式更关系逻辑本身
    - 分离可变状态、副作用
- 拆 => 分离变与不变 => 抽象 => 封装 => 接口


- React
  - 设计理念
    - 数据驱动视图
      - UI = f(data)
    - data = state
    - f = 组件
      - 组件即函数 范式
      - **为什么 React 要推崇函数式组件？**
        - react 原生的响应式方案是非常依赖数据不可变性的，函数式编程理念与 react 更为接近
        - 隐藏 state、分离 state
          - 函数执行的上下文、每次执行 state 都只是一次映射
  - React 模式
    - 代码重用
      - 高阶组件（HOC）
        - 高阶组件和 render props 
          - 嵌套地狱
      - Render Props
      - React Hooks
        - 闭包陷阱
    - 容器组件/展示组件
      - “关注点分离”
  - Hooks
    - Hooks 的使用规则
      - 只能在 React 的函数组件中调用 Hooks
      - 只能在组件函数的最顶层调用 Hooks
      - FiberNode 上会保存一个记录 Hooks 状态的单向链表，链表的长度与执行组件函数时调用的 Hooks 个数相同
    - 组件状态：useState、useEffect、useContext、useReducer
    - 性能优化 Hooks：useMemo 和 useCallback
    - 当需要封装组件，对外提供命令式接口时，学习掌握 useRef 加 useImperativeHandle
    - 当页面上用户操作直接相关的紧急更新（Urgent Updates，如输入文字、点击、拖拽等），受到异步渲染拖累而产生卡顿，需要优化时，学习掌握 useDeferredValue 和 useTransition 
  - React 原理
    - 并发渲染
      - 运行时用 Fiber 架构重写不依赖原生调用栈，这使 React 能够在渲染阶段暂停工作以允许浏览器处理事件
      - Hooks 解决 Class API 在纯度上约束力不够的问题；不纯的组件在 React 并发模式下很容易出现数据竞态（data race）的问题
    - 渲染原理
      - 虚拟 DOM
        - **why React 为什么要使用虚拟 DOM？**
          - 为了可以使用声明式的程序代码来描述你的 UI，以及跨平台的能力
          - 减少 DOM 操作
            - 相比过去全量更新，React 只更新变化的部分
      - 虚拟 DOM 的 diff 算法
        - 同层对比
        - type 变了就不再对比子节点
        - 移动：复用元素、尽量减少创建新元素
          - 判断 type 么？ 那不行，同 type 的节点可能很多，区分不出来的
          - 每个节点都是有唯一的标识 key，利用 key 复用
          - vue2 双端对比、vue3 最小递增子序列
    - 更新
      - 异步、批量更新
      - 更新调度
        - 时间切片
      - 渲染更新
        - React 循环遍历整个组件树，查找标记为更新的组件
        - 对于每个标记的组件，从它开始，React 将递归渲染其中的所有子组件
          - 在正常渲染中，React 并不关心“props 是否改变”——它会无条件地渲染子组件
    - 事件系统
- React VS Vue
  - 阿里三面：灵魂拷问——有 react fiber，为什么不需要 vue fiber 呢？
    - vue 基于数据劫持 + 编译优化，能够更加精确更新
    - why react fiber
      - 在数据更新时，react 生成了一棵更大的虚拟 dom 树，给第二步的 diff 带来了很大压力，树的递归过程没法暂时停止，阻塞用户响应
      - diff 过程切片，react fiber 使得 diff 阶段有了被保存工作进度的能力
        - 为什么有了 react fiber 就能断点恢复呢；
          - fiber 是链表结构，只要保留下中断的节点索引，就可以恢复之前的工作进度；
  - Vue 与 React 框架的对比
    - 范式
    - 生态
    - 原理


- CSS
  - 样式方案
    - CSS Modules
    - CSS-in-JS
      - emotion
      - [styled-jsx](https://github.com/vercel/styled-jsx?tab=readme-ov-file#how-it-works)
    - Atom CSS
  - 主题切换
    - 主题生成：CSS 原生变量/预构建 + 样式覆盖
    - 切换触发
      - 跟随系统偏好
        - `prefers-color-scheme`
        - `window.matchMedia("(prefers-color-scheme: dark)").matches`
      - 切换模式
        - `class.dark`
        - `[data-theme]=dark`
      - [支持系统偏好和手动选择](https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection)
        - https://color-mode.nuxtjs.org/


- SSR
  - 状态
    - 多例
  - 客户端同步



- 前端项目架构
  - 视图
    - MDV
    - 组件化
      - 组件是对视图以及与视图相关的逻辑、数据、交互等的封装
      - **组件拆分**并无唯一标准。拆分时需要你理解业务和交互，设计组件层次结构（Hierarchy），以关注点分离（Separation Of Concern）原则检验每次拆分。
      - 组件复用
        - **前端框架的组件是应用构成基本单位，而不是逻辑复用的最小单位**：组件包含视图渲染逻辑和状态交互逻辑，比如在某些业务场景下，视图一样但面对用户角色不同需要的业务交互逻辑不一样；反之，同样的业务逻辑在移动端和 PC 端表现的视图又不一样的情况
        - **视图组件、逻辑组件**
      - 视图驱动、组件优先的开发模式
        - 在前后分离的模式下，**大多数前端业务开发流程都是以视图驱动为主**，并且在前端框架**组件**概念的设计下，形成了以**组件优先**的开发模式:
          - 先根据 UI 稿子拆分成组件、面向组件写页面
          - 再根据原型文档与接口完成业务交互
        - 在视图驱动下，State 是围绕 View 的消费和交互需求而产生的，View 是组件真正核心的部分，这就导致在视图组件里编写越来越多的代码，并成了一个流行趋势，**组件同时承载了界面逻辑和业务逻辑**
  - 组件驱动下的前端状态管理
    - 组件化
      - Component Tree => state tree + 单向数据流
      - 通信困难：整个应用最终以组件树的形式组织展示，组件封装状态逻辑，逻辑自治，但分散在组件树，树形结构阻碍了组件数据通信
        - 状态提升、分层
          - 容器模式
          - 单向数据流
    - 全局化
      - 状态与 UI 的分离
        - 状态逻辑分离
        - UI = f(state)，单向数据流 state -> UI
      - 全局状态的生命周期管理很麻烦
        - DI、DI 组件
        - 状态分层
    - 职责分类：业务状态、UI 状态、应用状态
      - 业务状态倾向于放到高层模块里
      - UI 状态作为 UI 的映射关系适合放到组件等局部状态里
      - 应用状态则作为全局状态
  - 项目架构
    - MVC
    - MV*、前后分离
      - View：展示数据、用户交互
        - Event => Logic => State => UI => Event => ...
          - **事件驱动业务逻辑**：人机交互的业务逻辑本身，是【针对人的行为做出反馈】
          - **数据驱动视图**
      - Store：存储应用状态和状态逻辑
      - Servcie：后端接口交互
        - Model 贫血的 data
  - 组件样式
    - 组件级别的样式隔离
    - 组件样式需要响应组件数据变化
  - UI 组件库
    - 设计体系
    - 主题定制






- 算法
  - 问题状态抽象成对应的数据结构、并施加合适的算法
  - 基础算法
    - 迭代
    - 递归
  - 思想
    - 组合状态
      - 回溯：遍历 构建解空间/解答树/决策树
    - 分解状态
      - 分治
      - 递推关系
        - 自顶向下 递归
        - 自底向上 递推
          - 动态规划（多阶段决策最优模型）
    - 最优问题
      - 分阶段计算（选择、递推），每个阶段有多个状态
      - 每个阶段的最优状态可以从之前某个阶段的某个或某些状态直接得到而不管之前这个状态是如何得到的->动态规划。
      - 贪心：局部最优解
        - 每一个阶段，我们都选择当前看起来最优的决策
        - 贪心算法是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法



- hr
  - 你觉得你最大的缺点是什么?



- 今
  - [ ] 完成博客
- 主
  - 找工作
    - 进厂
    - 面试
- 次