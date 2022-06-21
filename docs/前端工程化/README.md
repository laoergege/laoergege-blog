---
release: true
tags:
 - 工程
desc: 系统化前端工程相关
---

# 前端工程及架构

- 工程化：将前端工作流程`标准化`、`规范化`、`工具化`、`自动化`。**通过规范和工具来提高前端应用质量及开发效率。**
  - 代码
    - 版本管理（git）
      - git flow 分支管理
      - commit msg 提交规范
      - 提案请求
        - merge request & code review
        - rfc 机制
    - 规范
      - [前后端接口规范 - RESTful 版](https://mp.weixin.qq.com/s/DCQGjHizp88FDX7Vgcqggw)
      - 命名规范
      - 代码格式 prettier
      - 代码质量 eslint
      - 类型检测 typescript
    - 项目组织管理
      - multirepo
      - monorepo
    - 目录结构设计
    - 环境
      - 运行环境
        - node
        - chrome
      - 包管理
        - [pnpm](./pnpm.md)
        - 幽灵依赖 
          - [dependency-check](https://github.com/dependency-check-team/dependency-check)
      - 环境锁定
        - node 版本
          - nvm
          - pnpm env
          - [Volta](https://docs.volta.sh/guide/)
          - package: `engines` + `.npmrc: engine-strict`
          - .npmrc: `use-node-version`
        - 包管理
          - [corepack](https://github.com/nodejs/corepack)
          - [Volta](https://docs.volta.sh/guide/)
        - 依赖锁定
          - lockfile
        - pkg.peerDependencies
          - 声明需要一个和宿主环境对等的包
            - 如果用户显式依赖了核心库，则可以忽略各插件的 peerDependency 声明；
            - 如果用户没有显式依赖核心库，则按照插件 peerDependencies 中声明的版本将库安装到项目根目录中；
            - 当用户依赖的版本、各插件依赖的版本之间不相互兼容，会报错让用户自行修复；
  - 开发
    - 框架化
    - 调试
      - 环境区分
      - 本地服务器及服务代理
      - API 管理及数据模拟
      - 浏览器及 DevTools
  - 构建
    - 优化
      - 增量构建
        - husky + Lint-stage
      - 依赖缓存
    - 开发模式
      - 模块化
      - 热模块替换
    - 生产模式
      - 打包/拆包
      - 输出
        - SourceMap
        - HashedURLs
        - TreeShaking
        - 模块格式及加载机制（运行时）
      - 转换
        - 缩小
          - JS
            - [Terser](https://github.com/terser-js/terser)
        - 树摇
        - 符号
        - 转译
          - js
            - [gogocode](https://github.com/thx/gogocode)
            - [parcel-css](https://github.com/parcel-bundler/parcel-css)
          - css
            - less
            - scss
            - postcss
    - *工具*
      - webpack
      - [vite](https://github.com/vitejs/vite)
      - [parcel](https://parceljs.org/)
  - 测试
    - unit
      - jest
      - [vue: vitest](https://cn.vitest.dev/)
    - e2e
      - puppeteer
      - cypress
  - CI/CD
    - lint
    - test
    - build
      - ci-cache
    - [性能测试](../浏览器原理及API/Web%20前端性能优化.md)
    - 发版日志
  - 监控
  - 文档
    - vue：[vuese](https://github.com/vuese/vuese)
    - [storybook](https://github.com/storybookjs/storybook)
- 架构化
  - 以组件化架构为代表的 UI 搭建技术
     - 原子组件
     - 原子样式
  - 以微前端为代表的、前端应用聚合为单体应用的工程方案
- 公共化/方案沉淀
    - 方案
      - CSS
        - [Atomic CSS](#atomic-css原子css)
          - TailwindCSS
            - [如何评价CSS框架TailwindCSS？ - 山月的回答 - 知乎](https://www.zhihu.com/question/337939566/answer/1752928891)
          - https://github.com/antfu/unocss
          - WindiCSS
          - UnoCSS
      - 工具
        - [vue: VueUse](https://vueuse.org/)
      - 表格
        - [tabulator](https://github.com/olifolkerd/tabulator)
      - 表单
        - [XRender](https://x-render.gitee.io/)
      - 图标
      - 跨平台
        - H5 
        - 混合应用
        - 小程序
        - RN
        - Flutter
      - 动画
        - [lottie](https://github.com/airbnb/lottie) 
        - [anime](https://github.com/juliangarnier/anime/)
      - 移动端适配
        - [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)
      - 低代码
        - [lowcode-engine](https://github.com/alibaba/lowcode-engine)
      - 前端数据库
        - [Dexie.js](https://github.com/dexie/Dexie.js)
        - [rxdb](https://rxdb.info/)
    - 架构
      - Monorepo
      - 微前端
        - [探索微前端的场景极限](https://mp.weixin.qq.com/s/YkUUQX1m-KzjkLVWwOxxxg)
      - 组件库
        - WebComponent
    - 应用架构
      - 低代码
      - SSR

## 系文

- [《前端代码规范实践总结》](./前端代码规范实践总结.md)

## Atomic CSS(原子CSS)

[【第2631期】浅谈 Atomic CSS 的发展背景与 Tailwind CSS](https://mp.weixin.qq.com/s/MlkV33ZxMYPoCFXonxgjoA)

- 好处
  - 降低 CSS 文件大小：CSS 大小是线性成长的，重复的规则都会用到同一个 class name
  - 最大程度缩减 scope，让维护变得容易：class name 变得与 context 无关，scope 也变小，因此更好维护也更好改动、而且可以搬来搬去复用还能保证相同样式
  - 规范的 CSS 命名
- 疑问
  - 语义化
    - 借助 HTML 语义标签 和 content
    - 对开发者而言，我们会用 class name，只是因为要跟 JS 或是 CSS 结合在一起
  - 跟 inline style 有什么不同？
    - inline style 的几个坏处：
    - CSS 的优先顺序很高，很难盖过去
    - 很冗长
    - 不支援 pseudo-class 或是 pseudo-element
  - 你说可以降低 CSS 大小，但 HTML 大小不是也会上升吗？那只是把成本转到别的地方而已
    - ACSS 复用高，gzip 的文本压缩率会比较高
- 对比 CSS-in-JS 跟 CSS modules 这两个方案，一样都解决了 scope 的问题，但跟 Atomic CSS 比起来有两样是做不到的。
- 缺点
  - class name 很长，直接看 HTML 的话不好阅读
  - 需要花一段时间上手 Atomic CSS 的语法以及熟悉各种缩写
  - 如果没办法做到 component 化，那就不适合使用 Atomic CSS
- 场景
  - 维护大型项目的时空背景之下诞生
    - CSS 浓郁、复杂度


CSS 项目实践
      - variable 主题控制
      - css utils：原子化 CSS + 工具语法扩展
      - css component：BEM + utils


- Tailwind CSS
  - 动态 class name

```css
// 这样写抓不到
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>

// 这样写才抓得到
<div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>
```

软件开发
服用
功能内聚、原子性

- UI 的定制化
  - 编译
  - 运行时
    - 覆盖

## CSS


```css
.container {
  :global(.ant-button) {
    color: var(--main-color);
  }
}
```