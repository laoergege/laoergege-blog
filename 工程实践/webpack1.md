> 本文是对官方文档的学习记录，更多细节请参考 webpack 官方文档

# Content Table
- [Content Table](#content-table)
  - [webpack-cli](#webpack-cli)
  - [结合 npx 或者 npm script 运行 webpack 工具](#%E7%BB%93%E5%90%88-npx-%E6%88%96%E8%80%85-npm-script-%E8%BF%90%E8%A1%8C-webpack-%E5%B7%A5%E5%85%B7)
  - [资源管理](#%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86)
    - [常用 loader](#%E5%B8%B8%E7%94%A8-loader)
      - [样式](#%E6%A0%B7%E5%BC%8F)
      - [images、font](#imagesfont)
  - [输出管理](#%E8%BE%93%E5%87%BA%E7%AE%A1%E7%90%86)
    - [其他输出方式](#%E5%85%B6%E4%BB%96%E8%BE%93%E5%87%BA%E6%96%B9%E5%BC%8F)
  - [开发](#%E5%BC%80%E5%8F%91)
    - [环境变量](#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
    - [SourceMap](#sourcemap)
      - [什么是 cheap 特性下 sourcemap 不包含列信息，也不包含 loaders 的 sourcemap](#%E4%BB%80%E4%B9%88%E6%98%AF-cheap-%E7%89%B9%E6%80%A7%E4%B8%8B-sourcemap-%E4%B8%8D%E5%8C%85%E5%90%AB%E5%88%97%E4%BF%A1%E6%81%AF%E4%B9%9F%E4%B8%8D%E5%8C%85%E5%90%AB-loaders-%E7%9A%84-sourcemap)
      - [不同场景下 devtool 的选择](#%E4%B8%8D%E5%90%8C%E5%9C%BA%E6%99%AF%E4%B8%8B-devtool-%E7%9A%84%E9%80%89%E6%8B%A9)
      - [chrome devtool source](#chrome-devtool-source)
    - [webpack-dev-server](#webpack-dev-server)
      - [启用热模块替换](#%E5%90%AF%E7%94%A8%E7%83%AD%E6%A8%A1%E5%9D%97%E6%9B%BF%E6%8D%A2)
      - [热模块替换原理](#%E7%83%AD%E6%A8%A1%E5%9D%97%E6%9B%BF%E6%8D%A2%E5%8E%9F%E7%90%86)
      - [让代码支持热模块替换](#%E8%AE%A9%E4%BB%A3%E7%A0%81%E6%94%AF%E6%8C%81%E7%83%AD%E6%A8%A1%E5%9D%97%E6%9B%BF%E6%8D%A2)
  - [构建优化](#%E6%9E%84%E5%BB%BA%E4%BC%98%E5%8C%96)
    - [应用优化](#%E5%BA%94%E7%94%A8%E4%BC%98%E5%8C%96)
      - [代码压缩](#%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9)
      - [代码拆分](#%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86)
        - [`optimization.splitChunks` 提取公共模块](#optimizationsplitchunks-%E6%8F%90%E5%8F%96%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97)
      - [`mini-css-extract-plugin` 提取样式](#mini-css-extract-plugin-%E6%8F%90%E5%8F%96%E6%A0%B7%E5%BC%8F)
      - [tree shaking(跳过)](#tree-shaking%E8%B7%B3%E8%BF%87)
    - [缓存](#%E7%BC%93%E5%AD%98)
  - [其他](#%E5%85%B6%E4%BB%96)
    - [配置思路](#%E9%85%8D%E7%BD%AE%E6%80%9D%E8%B7%AF)
    - [内联语法](#%E5%86%85%E8%81%94%E8%AF%AD%E6%B3%95)
    - [mode](#mode)
    - [构建目标 target](#%E6%9E%84%E5%BB%BA%E7%9B%AE%E6%A0%87-target)

## webpack-cli

## 结合 npx 或者 npm script 运行 webpack 工具
npx 是 npm v5.2.0引入的一条命令（npx），引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。npx 会帮你执行依赖包里的二进制文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会临时帮你安装！

```shell
npx webpack -v
```

使用 npm scripts，我们可以像使用 npx 那样通过模块名引用本地安装的 npm packages。

```javascript
...
"scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack"
    },
    ...
```

## 资源管理
在 web 开发上，除了 JS 代码，还少不了像图片和样式等的管理。webpack 作为一个打包工具，以 JS 代码为入口，除了引入其他模块 JavaScript，还可以通过 loader 引入任何其他类型的文件，根据依赖图，动态打包管理所有依赖。

### 常用 loader

#### 样式
- style-loader 将样式注入到 DOM 中
- css-loader (The css-loader interprets `@import and url()` like `import/require()` and will resolve them. His behavior is like file-loader)
- postcss-loader

#### images、font
图片字体等其他文件处理，一般情况是通过处理相对依赖路径，复制移动到对应构建目录下，并替换成相应路径。
- file-loader (The file-loader resolves `import/require()` on a file into a url and emits the file into the output directory.)
- url-loader (url-loader works like file-loader, but can return a DataURL if the file is smaller than a byte limit)
- html-loader(html)

其他文件类型加载，以及更多 loader 查找及分类参考 [https://webpack.js.org/loaders](https://webpack.js.org/loaders)

## 输出管理
- html-webpack-plugin
- clean-webpack-plugin

### 其他输出方式

## 开发

### 环境变量

### SourceMap
当源码经过编译(babel 之类编译)打包压缩成一个 bundle 文件后，一旦出项错误或警告，堆栈跟踪只会指向该 bundle 文件，而 *source map* 能够让我们准确地知道错误来自于哪个源文件。

关于 scource map 的原理及作用，以下两篇讲得非常详细:
- [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
- [Introduction to JavaScript Source Maps](https://blog.teamtreehouse.com/introduction-source-maps)

但最让人困惑的是 webpack devtool 的 source map 选项:
- none
- cheap-eval-source-map
- cheap-module-eval-source-map
- cheap-module-source-map
- cheap-source-map
- eval
- eval-source-map
- hidden-source-map
- inline-source-map
- inline-cheap-source-map
- inline-cheap-module-source-map
- nosources-source-map
- source-map
  
很容易让人一头雾水，而且官方文档也没有详细说明其差别。

在接下了解之前，我们先了解下一份源码到最终生产环境的经过可能是这样子:

源码 => 转化后代码 => 生成后代码 => 打包后的代码

- 打包后的代码：将所有生成的代码视为一大块代码。你看不到相互分离的模块。
- 生成后的代码：每个模块相互分离，并用模块名称进行注释。可以看到 webpack 生成的代码。示例：你会看到类似 `var module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42); module__WEBPACK_IMPORTED_MODULE_1__.a();，而不是 import {test} from "module"; test();`。
- 转换过的代码：每个模块相互分离，并用模块名称进行注释。可以看到 webpack 转换前、loader 转译后的代码。示例：你会看到类似`import {test} from "module"; var A = function(_test) { ... }(test);，而不是 import {test} from "module"; class A extends test {}`，即似经过babel之类转化后的代码。
- 原始源代码：即我们所编写的代码。

使用不用的模式选项，我们能定位到不同的源之前。例如使用 `source-map` 我们能定位到源码，而 `eval` 只能看到生成后的代码。

看似配置项很多， 其实只是主要五个关键字eval，source-map，cheap，module，inline的任意组合。这五个关键字每一项都代表一个特性， 这四种特性可以任意组合。它们分别代表以下五种特性:

- eval：使用eval包裹生成后的模块代码
- source-map： 产生.map文件
- cheap： 不包含列信息（关于列信息的解释下面会有详细介绍)也不包含loader的sourcemap
- module： 包含loader的sourcemap（比如jsx to js ，babel的sourcemap）
- inline： 将.map作为DataURI嵌入，不单独生成.map文件（这个配置项比较少见）

总结来说，webpack 的 source map 主要只有 `eval` 和 `source-map` 模式。两者区别是 `eval` 模式是使用 eval 将 webpack 中每个模块包裹，然后在模块末尾添加模块来源 `//# souceURL`， 依靠 souceURL 找到原始代码的位置。包含 eval 关键字的配置项并不单独产生.map文件（ eval 模式有点特殊， 它和其他模式不一样的地方是它依靠sourceURL来定位原始代码， 而其他所有选项都使用.map文件的方式来定位）。包含 `source-map` 关键字的配置项都会产生一个.map文件，该文件保存有原始代码与运行代码的映射关系， 浏览器可以通过它找到原始代码的位置。（注：包含inline关键字的配置项也会产生.map文件，但是这个map文件是经过base64编码作为DataURI嵌入）。其他的模式都可看作是这两种衍生而来，多了其他的特性。举个列子：`eval-source-map` 是 `eval` 和 `source-map` 的组合，可知使用eavl语句包括模块，也产生了.map文件。webpack将.map文件作为DataURI替换eval模式中末尾的 `//# souceURL`。

可探究不同 devtool 的[官方示列](https://github.com/webpack/webpack/tree/master/examples/source-map)。

#### 什么是 cheap 特性下 sourcemap 不包含列信息，也不包含 loaders 的 sourcemap
- 不包含列信息：意为着 sourcemap 没有生成列映射(column mapping)，只是映射行数，相关理解可参考 [打破砂锅问到底：详解Webpack中的sourcemap](https://segmentfault.com/a/1190000008315937#articleHeader4)，（PS：上面的内容也是参考该文章）。
- 不包含 loaders 的 sourcemap：意味着只能映射到转化后的代码，例如，`cheap-eval-source-map` 它会忽略源自 loader 的 source map，并且仅显示转译后的代码，当加上 module关键字为 `cheap-module-eval-source-map`, webpack 将会添加 loader 的 sourcemap。

#### 不同场景下 devtool 的选择

[https://webpack.docschina.org/configuration/devtool](https://webpack.docschina.org/configuration/devtool) 继续读

#### chrome devtool source

### webpack-dev-server

webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。

#### 启用热模块替换
热模块替换可以帮助我们在开发过程中无需重新刷新网页而更新相应更改的 JS/CSS 代码，提高开发效率。

> 注：该特性仅适用开发环境

```javascript
...
 const webpack = require('webpack');

  module.exports = {
    ...
    devServer: {
      contentBase: './dist',
      hot: true
    },
    plugins: [
      ...
      new webpack.HotModuleReplacementPlugin()
    ],
    ...
  };
```

#### 热模块替换原理

- https://webpack.docschina.org/concepts/hot-module-replacement/
- http://shepherdwind.com/2017/02/07/webpack-hmr-principle/
- https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack#how-does-it-work
  
> 热更新失败会自动刷新整个页面

#### 让代码支持热模块替换

## 构建优化

- 构建优化
  - 构建速度
    - happypack
    - thread-loader
  - 应用优化
    - 缓存
    - 分离
    - 压缩

### 应用优化
#### 代码压缩

#### 代码拆分
代码拆分能够把代码拆分到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码拆分可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

代码拆分可通过以下途径完成：

- 入口起点：使用 entry 配置 webpack 多个为入口，手动地分离代码（如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中，并且不能动态地将核心应用程序逻辑中的代码拆分出来。）。
- 防止重复，提取公共模块：使用 SplitChunksPlugin 去重和分离公共代码。
- 动态拆分：使用动态 `import()` 语句进行代码拆分，能够做到按需加载。

##### `optimization.splitChunks` 提取公共模块
webpack v4 开始，`CommonsChunkPlugin ` 被移除，`optimization.splitChunks` 配置选项作为替代，也就是分离模块的功能已作为 webpack 内置功能。

webpack 4 内置的 SplitChunksPlugin 的默认配置：

```javascript
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
```

#### `mini-css-extract-plugin` 提取样式

#### tree shaking(跳过)
*tree shaking* 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。

使用 tree shaking 必须注意以下几点:
- 依赖 ES2015 模块语法（即 import 和 export）。
- 确保没有 compiler 将 ES2015 模块语法转换为 CommonJS 模块。
- 在项目 package.json 文件中，添加一个 "sideEffects" 属性。
- 通过将 mode 选项设置为 production，启用 minification(代码压缩) 和 tree shaking。

optimization.usedExports
optimization.sideEffects

### 缓存
[https://webpack.docschina.org/concepts/manifest](https://webpack.docschina.org/concepts/manifest)

## 其他
### 配置思路
1. 多类型文件配置，webpack-merge
2. 使用常量或变量、JS控制流，函数生成配置

webpack 配置可导出为 object, function 或 Promise，还可以将其导出为多个配置。

### 内联语法
import Styles from 'style-loader!css-loader?modules!./styles.css';
使用 ! 将资源中的 loader 分开 + 使用 ? 传递查询参数 + 文件路径

### mode
不同 `mode` 下，webpack 会开启或关闭不同插件配置，详情配置见 [https://webpack.docschina.org/concepts/mode/](https://webpack.docschina.org/concepts/mode/)。

选项	描述
development
会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
production
会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。
none
退出任何默认优化选项

### 构建目标 target
webpack 能够为不同目标环境构建编译，主要是区别不同环境使用什么方法来加载模块