---
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
    - 项目依赖管理
      - Multirepo
      - Monorepo
    - 目录结构设计
    - 项目模板及代码段
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
  - Lint
  - 构建
    - webpack
    - [vite](https://github.com/vitejs/vite)
    - [parcel](https://parceljs.org/)
  - 测试
    - jest
    - [vue: vitest](https://cn.vitest.dev/)
    - [cypress](https://docs.cypress.io/)
    - [playwright](https://playwright.dev/)
  - CI/CD
    - lint
    - test
      - [性能预测](../浏览器原理及API/Web%20前端性能优化.md)
    - build
      - ci-cache
    - publish
      - [NPM 发包](./pnpm.md#publish-工作流)
  - 监控
  - 文档
    - vue：[vuese](https://github.com/vuese/vuese)
    - [storybook](https://github.com/storybookjs/storybook)
- 架构化
  - [登陆：认证、授权](./%E8%AE%A4%E8%AF%81%E3%80%81%E9%89%B4%E6%9D%83.md)
  - 以组件化架构为代表的 UI 搭建技术
     - 原子组件
     - 原子样式
  - 以微前端为代表的、前端应用聚合为单体应用的工程方案
  - 前端项目开发架构
    - 中后台项目架构
    - H5 项目架构
    - 同构应用架构
  - 跨端方案
  - BFF
    - SSR
    - Serverless
- 公共化方案沉淀
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
      - [表单配置化](#表单配置化)
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

## 表单配置化

- 技术
  - 表单协议：JSON Schema
    - 逻辑联动
      - 逻辑指令
    - 数据校验
  - 渲染器
- 案例
  - formliy
  - [XRender](https://x-render.gitee.io/)
  - [ajv](https://github.com/ajv-validator/ajv)
  - Angular 表单

## NodeJS ESM

- `.js` + `"type": "module"`
- `.mjs`

## 现代化前端构建工具的设计及考量

- 考量
  - 设计
  - 功能
  - 性能
- 功能考量
  - 性能优化
    - 增量模式
      - husky + Lint-stage
    - 构建缓存
    - 并行模式
  - 开发模式
    - 模块化
      - 模块依赖机制
      - 一切皆模块：非 JavaScript 类型资源支持导入
    - 热模块替换
    - SourceMap
    - DevServer
  - 生产模式
    - 代码分割（Code Splitting）
      - 提取公共模块
      - 按需加载/懒加载
    - 资源哈希（Hashing）
      - Hash vs ChunkHash vs ContentHash
    - 输出格式
      - ESM
      - CommonJS
      - SystemJS
      - Lib
    - 转换
      - 缩小、压缩
        - 混淆：符号压缩
          - JS
            - [Terser](https://github.com/terser-js/terser)
        - 对无用代码的删除（DCE/TreeShaking：指的是基于module的跨模块死代码删除技术）
          - tree shaking负责移除未引用的top-level 语句，而DCE删除无用的语句
          - 原理
            - 依赖 ESModules 静态结构做分析
            - 副作用评估
            - 静态属性分析
            - 范围提升和编译时间 
              - 代码评估轻松地发现没有被调用的模块并删除它们
          - JS
            - [Terser](https://github.com/terser-js/terser)
      - 符号：做环境变量替代
        - cross-env 
      - 转译
        - js
        - jsx
        - css
          - less
          - scss
          - postcss
          - [parcel-css](https://github.com/parcel-bundler/parcel-css)

packages 声明副作用

```json

{
    "name": "my-package",
    "sideEffects": false
}

```

内联注释

```js
const x = */@__PURE__*/eliminated_if_not_called()
```




- 使用 ESM
- 确保您确切知道哪些依赖项（如果有）尚未声明sideEffects或将它们设置为true
- 在使用带有副作用的包时，使用内联注释来声明纯粹的方法调用
- 如果您要输出 CommonJS 模块，请确保在转换导入和导出语句之前优化您的包
  - 避免过早的转译：这些编译器会在代码优化之前到达您的代码。而且无论是默认还是错误配置，这些编译器通常会输出 CommonJS 模块，而不是 ESM。如前一节所述，CommonJS 模块是动态的，因此无法正确评估死代码消除



- ESM 导出
- `"type": "module"`
- `"module": "./path/entry.js"`

```json
{
    // ...
    "main": "./index-cjs.js",
    "module": "./index-esm.js",
    "exports": {
        "require": "./index-cjs.js",
        "import": "./index-esm.js"
    }
    // ...
}
```

### TreeShaking 原理设计


Vite，一个基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回。

## 前端项目开发架构

1. 框架化
   1. 组件化
   2. MDV
   3. 数据状态管理方案
2. 构建层
   1. 构建工具
   2. babel
3. 依赖
4. 命令工具及脚手架

## 其他

- 前端工程化管理工具
- 现代化前端开发和架构生态
- 核心框架原理与代码设计模式
- 前端全链路——Node.js 全栈开发