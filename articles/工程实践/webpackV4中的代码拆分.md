- [代码拆分](#代码拆分)
- [`optimization.splitChunks`](#optimizationsplitchunks)
  - [默认配置](#默认配置)
  - [cacheGroups](#cachegroups)
- [实战](#实战)
  - [体积分析](#体积分析)

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

而 webpack 中对代码进行 Bundle Split，主要是配置 `optimization.splitChunks` 选项。

## `optimization.splitChunks`
webpack v4 开始，`CommonsChunkPlugin ` 被移除，`optimization.splitChunks` 配置选项作为替代，也就是分离模块的功能已作为 webpack 内置功能。

> 注意，以下说的“拆分” 是指 Bundle Split，而不是 Code Split

### 默认配置
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

- chunks：表示针对哪些 chunk 做拆分优化
  - async 仅对按需加载的 chunk 优化
  - initial 仅对初始的 chunk 优化
  - all 对所有 chunk 优化，意味着初始块和按需加载块可以共享相同的块
- minSize：表示抽取出来的文件在压缩前的最小大小，默认为 30000；
- maxSize：表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；
- minChunks：表示模块被引用次数，默认为1；
- maxAsyncRequests：按需加载时的最大并行请求数，默认为 5；
- maxInitialRequests：最大的初始化加载次数，默认为 3；
- automaticNameDelimiter：抽取出来 chunk 的名字由被抽取出来的源文件名组成且由默认分割符 ~ 间隔各个源文件名(e.g. 由 a、b chunk抽取的 vender chunk 名为 vendors~a~b.js)；
- name：抽取出来文件的名字，默认为 true，表示自动生成文件名(使用 chunk 名和 cache key)；如果名称与入口点名称匹配，则将删除入口点。
- cacheGroups: 缓存组。（这才是配置的关键）

可以通过以下两篇的实验体会 chunks 的意思：
- [Webpack 4 — Mysterious SplitChunks Plugin](https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0)
- [webapck4 玄妙的 SplitChunks Plugin](https://juejin.im/post/5c08fe7d6fb9a04a0d56a702)

通过观察两篇文章时，我们需要注意的一个点是

> 当为不同的拆分块分配相同的 `name` 时，所有的拆分出来的块都会合并成同一个块，这样可能会导致下载无相关的其他代码

### cacheGroups
上面的那么多参数，其实都可以不用管，cacheGroups 才是我们配置的关键。 cacheGroups 可以继承和/或覆盖（ splitChunks 中的任何选项，禁止默认的 cacheGroups 设置为 `default: false`。并且还有多了如下配置属性：

- test: 表示要过滤 modules，默认为所有的 modules，可匹配模块路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中；
- priority：表示抽取权重，数字越大表示优先级越高。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；
- reuseExistingChunk：选项 reuseExistingChunk 告诉 SplitChunks 插件在当前cachingGroup 的现有块中进行额外查找，如果可能的话，尽量不为匹配的模块生成额外的块。（[example](https://github.com/webpack/webpack.js.org/issues/2122)）。
- enforce：忽略除 test、priority、reuseExistingChunk 其他的限制条件

根据以上配置，webpack 会有如下默认代码拆分行为：

- 只针对异步加载的 chunk 优化，因为对初始化 chunk 拆分，必须在 HTML 中引入新拆分的 chunk 才会工作
- 新产生的 chunk 来自 node_modules 或者被多个地方复用 2 次以上。
- 新 chunk 需要大于 30kb。
- 对 chunks 的最大同时请求数小于等于 5。换句话说，如果拆分后导致 bundle 需要同时异步加载的 chunk 数量大于 5 个或更多时，则不会进行拆分，因为增加了请求数，得不偿失。
- 拆分后需要尽量做到对于入口文件中最大同时请求数控制在 3 个以内。

在满足最后两个条件时，决定了 chunk 应越大越好，而不是越多。

<<<<<<< HEAD
## 实战
webpack 优化策略主要分为构建速度优化和应用体积优化。webpack 应用体积优化策略有：
- 代码拆分
- Tree shaking
- 压缩

那么如何对现有应用进行代码拆分，以达到体积优化？
=======
## 实践
>>>>>>> 77a97a30bc8dc2eb448274561ee51bd0f70ff2ee

### 体积分析
应用体积分析如下方法有：
- 应用程序的架构及其加载的脚本
- linghthouse 对 JavaScript 执行时间进行审计
- chromw devtool 的 source 面板输入 `show coverage`
- [webpagetest](https://www.webpagetest.org/)