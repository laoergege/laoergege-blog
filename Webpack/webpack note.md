> 以下为笔者学习 webpack 时遇到的问题收集

问题分类:
- [webpack-dev-server](#webpack-dev-server)

# webpack-dev-server
## 开启 webpack-dev-server 后，源文件访问失败
DevServer 启动的 HTTP 服务器监听在 http://localhost:8080/ ，DevServer 启动后会一直驻留在后台保持运行，访问这个网址你就能获取项目根目录下的 index.html。 用浏览器打开这个地址你会发现页面空白错误原因是 ./dist/bundle.js 加载404了。 同时你会发现并没有文件输出到 dist 目录，原因是 DevServer 会把 Webpack 构建出的文件**默认保存在内存根目录中**，在要访问输出的文件时，必须通过 HTTP 服务访问。 由于 DevServer 不会理会 webpack.config.js 里配置的 output.path 属性，所以要获取 bundle.js 的正确 URL 是 http://localhost:8080/bundle.js

解决方法：

可以修改 publicPath，将 bundle 放在一个目录。

```
 devServer: {
        publicPath: '/dist/'
    }
```

## webpack-dev-server 为什么没监听 index.html
如果尝试修改 index.html 文件并保存，你会发现这并不会触发以上机制，导致这个问题的原因是 Webpack 在启动时会以配置里的 entry 为入口去递归解析出 entry 所依赖的文件，只有 entry 本身和依赖的文件才会被 Webpack 添加到监听列表里。 而 index.html 文件是脱离了 JavaScript 模块化系统的，所以 Webpack 不知道它的存在。

## webpack-dev-server 服务器目录
DevServer 服务器通过 HTTP 服务暴露出的服务器资源分为两类：
- `contentBase`属性控制的本地文件。
- `publicPath` 属性控制 Webpack 构建出的存放在内存的结果，默认根路径。

可通过修改两者来达到资源的访问。

