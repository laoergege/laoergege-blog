# Review

- 专业工作
  - 外包工作
  - 外包项目
  - 兼职
  - [量化交易](#量化交易)
- [专业技术学习](#计算机技术栈)
  - [Rust](#rust)
  - 算法
  - Web
    - JS 
    - 前端
    - 图表
    - 音视频
    - Nodejs
- 英语学习
- 金融学习
  - 股票

## 量化交易

- 量化交易
  - 金融知识
    - 金融市场的交易
      - what 金融市场
      - how 金融市场是怎么交易的
        - 股票，基金，期权，债券
        - 一级市场，二级市场
    - CFA课程
      - CFA一级二级就是金融知识的学习与补充，如果题主能够掌握一级和二级的内容的话，金融基础也就掌握了
  - 数学建模、交易策略
  - A+和机器学习提高分析能力

## 计算机技术栈

- 计算机技术栈
  - 领域
    - Web
      - HTML/CSS/JS
      - HTTP
        - [ ]《透视 HTTP 协议》
      - 浏览器
        - [ ] 《浏览器原理及实践》
      - 前端框架及工程化
        - Vue
          - [ ] 深入 Vue 框架源码及生态
          - [ ] 技术输出：vue 深入系文
        - 低代码框架
          - [amis](https://github.com/baidu/amis)
        - [前端工程化](./content/前端工程化/README.md)
      - 后端
        - [NodeJS](./NodeJS)
      - 音视频
        - [ ] 《从 0 打造音视频直播系统》
      - 可视化、3D、XR
      - 跨端
      - 游戏
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
    - 语言实现原理、编译原理
      - [ ] https://craftinginterpreters.com/contents.html
      - [ ] 《手把手带你写一门编程语言》
      - SICP
        - [MIT 计算机程序的构造和解释](https://github.com/DeathKing/Learning-SICP)
        - [Berkeley 的 61A 课程](https://www.bilibili.com/video/av40460492/?vd_source=5e3f59e2a50994ae58323e0f75a50d48)
      - [《程序语言理论与实现》](https://bobzhang.github.io/courses/)
      - 《编译原理》龙书
      - https://www.edx.org/course/compilers
  - 计算机基础
    - 数据库
      - [ ] SQL 必知必会
    - 计算机网络
      - [ ] 《计算机网络通关 29 讲》
      - [ ] 《趣谈网络协议》
      - [ ]《网络是怎样连接的》
      - [ ] 《抓包》
      - [The TCP/IP Guide](http://www.tcpipguide.com/free/t_TCPSlidingWindowAcknowledgmentSystemForDataTranspo-6.htm)
        - RFC：https://datatracker.ietf.org/doc/rfc1644/
      - 《计算机网络-自顶向下方法》
    - 操作系统
      - [ ] 《重学操作系统》
      - 《趣谈 Linux 操作系统》
      - 《现代操作系统：原理与实现》
      - https://wiki.osdev.org/Main_Page
    - [数据结构与算法](./数据结构与算法/README.md)
      - [ ] leetcode 200 道
      - [ ] 《数据结构与算法之美》
      - [ ] 《算法面试通关 40 讲》
      - [ ] [Hello 算法](https://www.hello-algo.com/)
    - 计算机组成原理
      - [ ]《程序是怎样跑起来的》
      - 《计算机是怎样跑起来的》
      - https://www.bilibili.com/video/BV1iW411d7hd
  - 数学与应用

## Rust

- 静态变量与常量区别？
  - const 系统会在编译时对常量变量进行求值；无论在何处使用，其值都会被内嵌
  - staic 使用时不会内联，并且具有实际关联的内存位置
- 注释、Rustdoc
  - 文档注释

## 低代码-表单

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

## 扫码枪

- 需求
  - 商品扫码
    - 录入价格
    - 计算价格
    - 价格查询
- 扫码枪系统
  - 商品信息
    - 扫码录入
      - ocr
    - 扫码查询
  - 结算台
    - 扫码累计价格
    - 订单生成
  - 订单信息
  - 控制台
    - 移动设备链接
- 原型
- CS 架构
  - 客户端：扫码枪 + 扫码 APP
- 扫码枪对接原理
  - 系统对焦输入获取数据
  - 通讯协议
- [html5-qrcode](https://github.com/mebjas/html5-qrcode)

### 知识体系

- 跨端框架
  - CEF
  - Flutter
  - ReactNative
  - Electron
    - 基础
      - Electron 架构
        - Chromium
        - Electorn API
          - GUI
        - 集成 Node.js  ![图 0](./images/1706539885891.png)  
          - node add-on
          - node-ffi
          - OS API
            - Shell
        - 多进程架构
          - 主进程
          - 渲染进程
        - Chromium 和 Node 如何交互？
      - 进程通信
        - 渲染 =》 主
          - ipcRenderer.invoke
          - ipcMain.handle
        - 主 =》 渲染
          - ipcRenderer.on
          - webContents.send
    - 工程
      - electron 与构建工具集成
        - [electron-vite](https://github.com/alex8088/electron-vite)
    - 请求+响应模式，设置超时
- Monorepo
  - pnpm
  - git
- Node Server







- 按键
  - 跨平台
  - 特殊键组合
- 穿透类型
- stun
  - onice
    - if pc.remote
- 流畅
  - sdp
  - ice


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


- 后端
  - 高并发
  - 数据库，网络
  - 业务本身
    - 依赖后端人员对业务的理解来设计架构，拆分业务



- 了解和学习：了解一些 AI 的基本概念，例如“人工智能”、“机器学习”、“深度学习”是什么，他们直接的关系是什么等等。你不必了解具体算法、模型的实现细节，但需要了解些简单的、基本的概念，这将有助于你理解和使用 AI
- 使用和拓展：多使用如 ChatGPT 等 AI 工具，例如你在学习上述的 AI 概念时，就可以使用 ChatGPT。并且可以在你所处的领域尝试拓展 AI 的使用方向，例如你是程序员，可以尝试将 AI 融合到当前已有项目中，优化用户体验等等；
- 多做分享：在 AI 时代初期，大部分人其实还没有太多使用 AI。如果你能够学习并应用 AI，那你可以将你的学习和使用 AI 的过程及心得体会分享出来，顺便做自媒体。分享会让你对知识理解更透彻，让你形成个人影响力，甚至通过分享（自媒体）可以获得切实的收入。虽然自媒体红利似乎殆尽，但我觉得 AI 内容自媒体目前还很有前景


- 软件系统的复杂度来源
  - 需求变动，可能会破坏原有的代码架构，导致系统越来越臃肿复杂，维护也越来越难
  - 技术复杂度
- 架构设计 => 复杂度：架构设计可以降低满足需求和需求变化带来的复杂度
  - why
    - 对于复杂的需求，架构设计通过对系统抽象和分解，把复杂系统拆分成若干简单的子系统
- 架构设计原则
  - 架构即决策。选择合适、简单、演化
- 部署运行架构
  - 分布式的架构，可以把高访问量分摊到不同的服务器，这样即使流量很大，分流到单台服务器的压力并不大
  - 异地多活这样的架构方案可以保证即使一个机房宕机，还可以继续提供服务
- 架构设计
  - how
    - 常见架构
      - 分层架构
- 架构模式
  - 分层架构
    - 表现层（presentation）：用户界面，负责视觉和用户互动
    - 业务层（business）：实现业务逻辑
    - 持久层（persistence）：提供数据，SQL 语句就放在这一层
    - 数据库（database） ：保存数据


- “所谓架构就是“用最小的人力成本来满足构建和维护系统需求”的设计行为”
- “大型物理建筑通常可以用比例模型分层描述细节信息，但是软件项目内部结构是很难用模型分层描述的。”
- “软件系统的架构质量是由它的构建者所决定的，软件架构这项工作的实质就是规划如何将系统切分成组件，并安排好组件之间的排列关系，以及组件之间互相通信的方式。 
 而设计软件架构的目的，就是为了在工作中更好地对这些组件进行研发、部署、运行以及维护”



- 架构设计，就是通过组织人员和技术，低成本满足需求以及需求的变化，保障软件稳定高效运行
- 架构设计的目标，是用最小的人力成本来满足需求的开发和响应需求的变化，用最小的运行成本来保障软件的运行



用最小的人力成本来满足需求的开发和响应需求的变化，用最小的运行成本来保障软件的运行
    - 架构设计的道，就是组织人员和技术把系统和团队拆分，并安排好切分后的排列关系，让拆分后的部分能通过约定好的协议相互通信，共同实现最终的结果。

  - 高性能架构
    - 软件系统中高性能带来的复杂度主要体现在两方面
      - 单台计算机内部为了高性能带来的复杂度
        - 并发 - 多进程多线程
        - 进程间通信
        - 共享内存 - 互斥锁
      - 多台计算机集群为了高性能带来的复杂度
        - 任务分配：每个执行单元都可以处理完整的任务，将任务请求分配到不同的单元上执行
          - 分配器设计
            - 连接管理：连接建立、连接检测、连接中断后如何处理等
            - 分配算法：轮询算法、按权重分配、负载分配
        - 任务分解：对任务拆分降解，再分配到不同的机器上执行
          - 通信成本
    - How
      - 面对“不确定性”时架构设计的三原则
        - 合适优于业界领先
        - 简单优于复杂
        - 演化优于一步到位
      - 流程
        - 识别复杂度




- 系统是分层，哪些角色模块应该属于同一层，或者说怎么分更合适？
- 系统是独立的，模块是系统的组成逻辑
- 架构是解决某个或某类问题
- 如何做业务架构

- 软件架构层面
  - 代码
  - 部署运行
  - 模型、表、API




- 函数式编程
  - 范式：思想及风格
  - 思想
    - FP 的基础是通过计算由组合在一起的函数构建的表达式来生成所需的结果
  - 好处
    - 模块化
      - 可重用、组合
    - 可理解的
    - 可测试


var billTheUser = (clicked => {
return (some, sales, data) => {
if (!clicked) {
clicked = true;
window.alert("Billing the user...");
// actually bill the user
}
};
})(false);


闭包+高阶解决方案

基础功能 + 高阶函数


- JavaScript 函数时编程
  - 使用函数作为第一类对象
  - 箭头函数——现代方式


- 函数式编程
  - 纯函数
    - 给定相同的参数，该函数总是计算并返回相同的结果
      - 不能依赖于任何外部 信息或状态
      - 函数结果也不能依赖于 I/O 结果、随机数、其他一些外部变量或不可直接控制的值
    - 无副作用：这包括输出到 I/O 设备、对象的突变、函数外部程序状态的更改等
  - 容器 - 函数数据类型





- 常见系统开发功能模块
  - 角色和权限
  - 主题设计
  - 组件库


- HMR 
  - 大多数捆绑器使用 ECMAScript 模块 (ESM) 作为模块，因为它更容易分析导入和导出


- 用概念指代事物，是（第一层次）抽象能力
- 共同点，可以抽离出来一个概念（抽象）类


- React 严重依赖严格的相等检查来了解变量是否发生了变化，这是一种花哨的说法，即使用 === 和 Object.is() 来比较新旧变量。当您使用 === 比较 JavaScript 基元（如字符串）时，JS 会通过值来比较它们（您已经知道了）。但当 JS 将数组、对象或函数相互比较时，==== 的使用是在比较它们的身份，换句话说，是在比较它们的内存分配。这就是为什么在 JavaScript 中 {} === {} 是假的，因为它们在内存中是两个不同的对象。


- 物流
- 销售
- 库存
- 供应链





- GitButler
  - 多分支工作
    - 单独修改
    - 独立推送
- 多分支工作