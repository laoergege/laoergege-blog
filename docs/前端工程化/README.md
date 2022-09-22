---
tags:
 - 前端工程化
 - 架构设计
desc: 前端工程化
---

# 前端工程化及架构设计

- 工程化：将前端工作流程`标准化`、`规范化`、`工具化`、`自动化`。**通过规范和工具来提高前端应用质量及开发效率。**
  - 代码
    - 版本管理（git）
      - 分支管理
      - 提交规范
      - 提案请求
        - merge request & code review
        - rfc 机制
    - 规范
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
    - 框架、技术选型
    - 代码调试
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
    - 单元测试
      - jest
      - [vue: vitest](https://cn.vitest.dev/)
    - e2e 测试
      - [cypress](https://docs.cypress.io/)
      - [playwright](https://playwright.dev/)
  - 集成
    - lint
    - test
      - [性能预测](../浏览器原理及API/Web%20前端性能优化.md)
    - build
      - ci-cache
    - publish
      - [NPM 发包](./pnpm.md#publish-工作流)
  - 部署
  - 监控
  - 文档
    - vue：[vuese](https://github.com/vuese/vuese)
    - [storybook](https://github.com/storybookjs/storybook)
- 架构化
  - [登陆：认证、授权](./%E8%AE%A4%E8%AF%81%E3%80%81%E9%89%B4%E6%9D%83.md)
  - 以组件化架构为代表的 UI 搭建技术
     - 原子组件
     - 原子样式
  - BFF
    - SSR
    - Serverless
  - 微前端
    - [探索微前端的场景极限](https://mp.weixin.qq.com/s/YkUUQX1m-KzjkLVWwOxxxg)
  - Monorepo
  - 低代码
  - 跨端
    - 小程序
- 公共化方案沉淀
  - 方案
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


## 系文

- [《前端代码规范实践总结》](./前端代码规范实践总结.md)

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

## TreeShaking 原理设计


