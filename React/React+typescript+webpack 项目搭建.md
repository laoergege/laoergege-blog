## 前端工程化思考

## 搭建
### 初始化项目
```
// npm 初始化
npm init
// 安装 webpack
npm install -D webpack webpack-cli
// 安装 react
npm install -S react react-dom
```

项目文件结构如下：

![捕获](/assets/捕获.PNG)

### JSX && TypeScript
```
// 安装 typescript
npm install -D typescript
// 由于 React 不是采用 TypeScript 编写的，需要安装 react 和 react-dom 对应的 TypeScript 接口描述
npm install -S @types/react @types/react-dom
// 创建 tsconfig 文件
tsc --init
```

修改 TypeScript 编译器配置文件 tsconfig.json，增加对 JSX 语法的支持，如下：

```
{
  "compilerOptions": {
    "jsx": "react" // 开启 jsx ，支持 React
  }
  "exclude": [
    "node_modules"
  ]
}
```

创建 webpack.config.js，进行如下配置

```javascript
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    resolve: {
        // 识别 ts，tsx 后缀的 TypeScript 源码文件
        extensions: ['js', 'ts', 'tsx']
    },
    module: {
        rules: [
            {
                /**
                 * 匹配 ts，tsx 后缀的 TypeScript 源码文件
                 * 让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码
                 */
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            // 使用任意来自Typescript的sourcemap输出，以此通知webpack何时生成自己的sourcemaps。 这让你在调试最终生成的文件时就好像在调试TypeScript源码一样
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
}
```

安装 awesome-typescript-loader、source-map-loader 

```
npm install -D awesome-typescript-loader source-map-loader
```

### devServer 
安装 devServer ，搭建本地开发服务器。

```
npm install -D webpack-dev-server
```

添加 npm 命令

``
"scripts": {
    "serve": "webpack-dev-server --config build/webpack.config.js"
  },
``

项目结构如下

![32](/assets/32.PNG)

因为 devServer 默认为项目根目录，需添加 devServer 配置，在 webpaco.config 中修改如下

```
  devServer: {
        contentBase: './src/',
        publicPath: '/dist/'
    }
```

devServer 中服务器的文件资源分为两种：

- `contentBase`属性控制的本地文件，默认值为项目根目录。
- `publicPath` 属性控制 Webpack 构建出的存放在内存的结果，默认根路径。

通过 `contentBase` ，我们可以设置静态资源访问，`publicPath` 设置打包资源访问。

## 踩坑

### 不能单独导入 Component
当我们声明组件时，如下：
```
import * as React from "react";
...
export class App extends React.PureComponent<AppProps>{
   ...
}
```

必须得 `extends React.PureComponent`, 为什么不能单独导入 Component，然后继承呢？

```
// 这样写会报错， PureComponent 为 undefine 
import * as React, { PureComponent } from "react";
...
export class App extends PureComponent<AppProps>{
   ...
}
```

CommonJS和AMD都有一个exports对象的概念，它包含了一个模块的所有导出内容。
TypeScript模块支持 export =语法以支持传统的CommonJS和AMD的工作流模型。

![微信图片_20180408221414](/assets/微信图片_20180408221414.png)

我们可以从 react.d.ts 的声明文件中看到

```
export = React
```

`export = `语法定义一个模块的导出对象，若要导入一个使用了`export =`的模块时，必须使用TypeScript提供的特定语法 `import module = require("module")` 或者 `import * as module from "module"` 来加载模块。