## 代码拆分
代码拆分能够把代码拆分到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码拆分可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

一个 webpack 应用包含三种类型代码：
- 你或你的团队编写的源码。
- 你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
- webpack 的 runtime 和 manifest，管理所有模块的交互。

我们可以从对应角度进行代码拆分，故可分为以下三种方式：

- Entry Split：使用 entry 配置 webpack 多个为入口，手动地分离代码（如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中，并且不能动态地将核心应用程序逻辑中的代码拆分出来。）。
- Bundle Split：使用 SplitChunksPlugin 去重和分离公共代码或者第三方库，因此类代码变动较小，可以做浏览器缓存，加快应用访问速度。
- Code Split：使用 `import()` 语句进行对我们编写的应用程序逻辑代码进行动态拆分。动态加载的好处主要是减小代码打包体积，让程序在运行时按需加载模块，提高应用初始化速度。

而 webpack 中对代码进行拆分，主要是配置 `optimization.splitChunks` 选项。

## `optimization.splitChunks`
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
参数说明如下：

- chunks：表示针对哪些 chunk 做提取分离优化，默认为 'async'，即针对异步加载的 chunk；
- minSize：表示抽取出来的文件在压缩前的最小大小，默认为 30000；
- maxSize：表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；
- minChunks：表示被引用次数，默认为1；
- maxAsyncRequests：按需加载时的最大并行请求数，默认为 5；
- maxInitialRequests：最大的初始化加载次数，默认为 3；
- automaticNameDelimiter：抽取出来 Bundle 的名字由被抽取出来的源文件名组成且由默认分割符 ~ 间隔各个源文件名(e.g. 由 a、b 模块抽取的 bundle名为 vendors~a~b.js)；
- name：抽取出来文件的名字，默认为 true，表示自动生成文件名；
- cacheGroups: 缓存组。（这才是配置的关键）

### cacheGroups
上面的那么多参数，其实都可以不用管，cacheGroups 才是我们配置的关键。 cacheGroups 可以继承和/或覆盖（ splitChunks 中的任何选项，禁止默认的 cacheGroups 设置为 `default: false`。并且还有多了如下配置属性：

- test: 表示要过滤 modules，默认为所有的 modules，可匹配模块路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中；
- priority：表示抽取权重，数字越大表示优先级越高。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；
- reuseExistingChunk：表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
- enforce：

根据以上配置，webpack 会有如下默认代码拆分行为：
默认只作用于按需加载的块，因为拆分初始块会影响到 HTML 的 scirpt 标签，你可以通过配置 HtmlWebpackPlugin，去自动注入 script 标签。

以下情况，webpack 会自动拆分代码：

- New chunk can be shared OR modules are from the node_modules folder
- New chunk would be bigger than 30kb (before min+gz)
- Maximum number of parallel requests when loading chunks on demand would be lower or equal to 5
- Maximum number of parallel requests at initial page load would be lower or equal to 3

## 实战
![](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/images/微信图片_20190519202505.png)

## 本文参考
- [webpack 4 Code Splitting 的 splitChunks 配置探索](https://imweb.io/topic/5b66dd601402769b60847149)
- [Webpack 4 — Mysterious SplitChunks Plugin](https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0)