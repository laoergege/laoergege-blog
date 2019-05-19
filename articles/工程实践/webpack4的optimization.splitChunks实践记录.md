代码拆分能够把代码拆分到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码拆分可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

一个 webpack 应用包含三种类型代码：
- 你或你的团队编写的源码。
- 你的源码会依赖的任何第三方的 library 或 "vendor" 代码。
- webpack 的 runtime 和 manifest，管理所有模块的交互。

我们可以从对应角度进行代码拆分，故可分为以下三种方式：

- Entry Split：使用 entry 配置 webpack 多个为入口，手动地分离代码（如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中，并且不能动态地将核心应用程序逻辑中的代码拆分出来。）。
- Bundle Split：使用 SplitChunksPlugin 去重和分离公共代码或者第三方库，因此类代码变动较小，可以做浏览器缓存，加快应用访问速度。
- Code Split：使用 `import()` 语句进行对我们编写的应用程序逻辑代码进行动态拆分。动态加载的好处主要是减小代码打包体积，让程序在运行时按需加载模块，提高应用初始化速度。

##### `optimization.splitChunks`
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