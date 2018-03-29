# 起步安装

## 安装
```
npm install --save-dev webpack
```

## build

需要通过路径调用 `webpack` bin 文件，
```
node_modules\.bin\webpack --config webpack.config.js。
```
安装 `webpack-cli` 可省取路径调用。

## 输出管理
### HtmlWebpackPlugin（动态将入口文件引入到主页）
安装
```
npm install --save-dev html-webpack-plugin
```
使用
```
...
 plugins: [
        new HtmlWebpackPlugin({
            title: 'init',
            template: './index.html', // 自定义模板
            chunks: ['index'] // 自定义引入 chunks
        })
    ]
...
```
其他  
- 控制 chunks 注入位置，[参考](https://segmentfault.com/q/1010000006591131)。

### HtmlWebpackPlugin（新构建前清除旧文件）
安装
```
npm install clean-webpack-plugin --save-dev
```
使用
```
...
plugins: [
        new CleanWebpackPlugin(['dist']),
        ...
    ]
```

## 缓存
浏览器使用一种名为缓存的技术。可以通过命中缓存，以降低网络流量，使网站加载速度更快，然而，如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。
### 使用 [chunkhash] 给每一个文件创建基于内容变化的缓存标识
webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件。
```
...
 output: {
        path: path.resolve(__dirname, 'dist'),
        /**
         * [hash] 会每次构建都创建新的 hash
         * [chunkhash] 则是基于内容生成hash
         */
        filename: '[name].[chunkhash].js' 
    },
...
```
> 不要在开发环境中使用 [chunkhash]，这会导致每次的编译时间边长。把开发环境和生成环境的配置文件分开，在开发环境使用 [name].js ，在生产环境中使用 [name].[chunkhash].js

### CommonsChunkPlugin（提取 webpack 模板和第三方库）
在webpack 在入口 chunk 中，包含了某些样板(boilerplate)，特别是 *runtime* 和 *manifest*。（译注：样板(boilerplate)指 webpack 运行时的引导代码）
```
// 入口文件
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		}; .....
```

由于入口文件是混杂着 webpack 模板代码，如果 webpack 版本改变，会导致入口文件名 hash 发生改变，通过 CommonsChunkPlugin 把 webpack 模板作为单独的 chunk，来保证入口文件名 hash 名不变。
```
...
plugins: [
        ...
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ]
...
```

以上可能只是 webpack 版本问题，但在 webpack 版本固定的情况还有一个情况：  
为了压缩生成文件的大小，webpack 使用 id 代替名字来识别模块。再编译过程中，id 已经被生成，映射到代码块的名字并且放到一个 JavaScript 对象中，被叫做代码块清单（ chunk manifest）。它会被放到入口文件中，确保打包后的文件能够正常工作。

这会有和之前一样的问题：无论修改任何地方的文件，即使其它地方都没有修改，更新后的入口需要包含清单文件。这会生成一个新的 hash 值，导致问们的入口文件名修改，无法享受长期缓存带来的好处。

该问题解决可参考[【翻译向】webpack2 指南（下）](https://blog.kisnows.com/2017/01/18/webpack2-guide-3/)的 “确定的 hashes (Deterministic hashes)” 章节。

将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致。这可以通过使用新的 entry(入口) 起点，以及再额外配置一个 CommonsChunkPlugin 实例的组合方式来实现：
```
entry: {
        index: './src/index.js',
        vender: [
            'lodash'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        /**
         * [hash] 会每次构建都创建新的 hash
         * [chunkhash] 则是基于内容生成hash
         */
        filename: '[name].[chunkhash].js' 
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Extracting Boilerplate',
            template: './index.html', // 自定义模板
            chunks: ['runtime', 'vender', 'index'] // 自定义引入 chunks
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ]
```
> 注意，引入顺序在这里很重要。CommonsChunkPlugin 的 'vendor' 实例，必须在 'runtime' 实例之前引入。

### 模块标识符
假设我们现在有三个 bundle 文件：
 - runtime（webpack 的 runtime 和 manifest，管理所有模块的交互）
- vender（第三方依赖）
- main（你或你的团队编写的源码）

如果我们在 main 入口文件再引入一个依赖模块，会发现这三个文件的 hash 都变化了。这是因为每个 module.id 会基于默认的解析顺序(resolve order)进行增量。你打开一份 bundle  文件，你会发现里面大概是这样的结构：
```
webpackJsonp([0],[  // chunkid为0
/* 0 */
/***/ (function(module, exports, __webpack_require__) {
    ...
/***/ }),
/* 1 */
/***/ (function(module, exports) {
    ...
/* 2 */
    ...
/* 9 */
/***/ (function(module, exports, __webpack_require__) {
    ...
/***/ }),
/* 10 */,   // 此处moduleid=10的模块为空
/* 11 */
/***/ (function(module, exports) {
    ...
/***/ }),
    ...
]);
```

> **webpackJsonp**：chunk文件加载后的callback函数，主要将文件中的模块存储到modules对象中，同时标记chunk文件的下载情况，对于入口chunk来说，等所有的模块都放入modules之后，执行入口模块函数。

webpackJsonp 函数有三个参数：

（1）每个文件的chunkid放在第一个参数；

（2）模块都放在第二个参数，每个模块都有对应的id，数组都是从moduleid=0开始，依次增加，如果该模块不在该文件中，则使用空值来代替；所有的模块函数的索引值是连续编码的，如果第一个bundle里的模块函数的索引是0-7，第二个bundle里的模块函数的索引就从8开始，从而保证索引和模块函数一一对应。

（3）入口文件中的函数多了一个参数，参数里面传入了一个moduleid，视为入口模块。

当我们引入一个新的模块时，webpack 就会重新解析模块顺序，所以ID 也会随之改变。

因此，简要上面三个文件变化原因概括
- main bundle 会随着自身的新增内容的修改，而发生变化。
- vendor bundle 会随着自身的 module.id 的修改，而发生变化。
- runtime bundle 会因为当前包含一个新模块的引用，而发生变化。

第一个和最后一个都是符合预期的行为 -- 而 vendor 的 hash 发生变化是我们要修复的。可以使用 HashedModuleIdsPlugin来解决该问题，推荐用于生产环境构建：
```
plugins: [
        new webpack.HashedModuleIdsPlugin(),
        ...
    ]
```
## 代码分割
### 第三方库分割
一个典型的应用会依赖很多第三方的框架和库文件。不像应用代码本身，这些第三方代码的变更非常频繁。
如果我们保持这些库在它本身的代码包中，从应用代码本身分离出来，那么我们就可以使用浏览器的缓存策略去在一个长时间内把这些代码缓存到最终用户的机器上。

为了达到这个效果，第三方代码的 verndor 包的 hash 部分必须保持不变，不管应用代码如何变化。如何通过 CommonsChunkPlugin 来分割 verndor/libray 代码，可参考前面 *CommonsChunkPlugin（提取 webpack 模板和第三方库）* 章节。

### CSS 分割
对 css 的处理，有两种方法：
- 一种是，在引入css时，在最后生成的js文件中进行处理，动态创建style标签，塞到head标签里。这样，html页面引用这个js文件时，就可以让样式生效了。[教程参考](https://doc.webpack-china.org/guides/asset-management/#-css)。
- 另一种方法是，打包时把css文件拆出来，css相关模块最终打包到一个指定的css文件中，我们手动用link标签去引入这个css文件就可以了。

在 webpack 中，当你使用 css-loader 并且在 JavaScript 中引入 CSS 文件，那么 CSS 文件会被打包在你的 JavaScript 文件中。这有一个不好的地方，就是你无法使用**浏览器异步并行加载 CSS 的能力**。相反，你的页面会等到整个 JavaScript 文件加载完成，才完成了样式文件的加载。Webpack 可以通过使用 extract-text-webpack-plugin 和 css-loader 来把样式文件分离出来去解决这个问题。

```
plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'code split',
            template: './index.html', // 自定义模板
            chunks: ['index'] // 自定义引入 chunks
        }),
        new ExtractTextPlugin({
            filename: 'style.[contenthash].css', // 推荐在生产环境中使用 hash 设定文件名
            // allChunks: true // 是否从所有 chunk 中分离 css
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", // 当 css 未能被提取时，附加在 js chunk 中
                    use: "css-loader"
                })
            }
        ]
    }
```
更多 extract-text-webpack-plugin [API](https://github.com/webpack-contrib/extract-text-webpack-plugin#api)。

### 项目代码分割
在缓存章节，我们分割了 webpack 的运行环境代码。使用 CommonsChunkPlugin 去重和分离 第三方库代码。接下来我们将对章节的项目源码进行分割，有三种常用的代码分离方法：
- 入口起点：使用 entry 配置手动地分离代码。
- 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
- 动态导入：通过模块的内联函数调用来分离代码。

#### 入口起点
我们有一下目录及其文件

![image.png](https://api.laoergege.cn//images/PS_Nt_DcAMG3oRDxsN408bJl.PNG)

```
// util.js
// 首字母大写
export function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.toLowerCase().substr(1);
}
```
```
// another-module.js
import { ucFirst } from "./util";

console.log(
    ucFirst('hello lys!')
);
```
```
// index.js
import './style.css'
import { ucFirst } from "./util";

document.body.innerHTML = ucFirst('hello world!');
```

多入口主要配置 entry 属性如下：
```
module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
...
```
这种方法存在一些问题:

- 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
- 这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。

对于入口文件包含重复模块，并且重复模块被打包到各个 bundle 中这个问题，我们可以使用 CommonsChunkPlugin 来移除重复的模块。
#### 防止重复
CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。
```
...
plugins: [
        ...
        new webpack.optimize.CommonsChunkPlugin({
            // common 提取重复代码， 
            // runtime 提取 webpack 运行代码，方便查看各 bundle 打包效果
            name: ['common', 'runtime'] 
        })
    ],
...
```
重新构建后，你能从 index.bundle 和 another-module.bundle 中发现看不到 util 中的代码。

#### 动态导入
##### ES6 import() 语法。
