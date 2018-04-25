> 更新日期 2018.4.15

## 前言
模板和JSX是各有利弊的东西。模板更贴近我们的HTML，可以让我们更直观地思考语义结构，更好地结合CSS的书写。JSX和直接渲染函数，因为是真正的JavaScript，拥有这个语言本身的所有的能力，可以进行复杂的逻辑判断，进行选择性的返回最终要返回的DOM结构，能够实现一些在模板的语法限制下，很难做到的一些事情。所以在Vue2.0里，两个都是可以选择的。在绝大部分情况下使用模板，但是在需要复杂逻辑的情况下，使用渲染函数。

或许是笔者习惯了 React 用 JSX 去描述用户界面、习惯基于类、面向对象的写法、偏好强语言类型等。因为 JSX 是 JavaScript 的一种扩展，可以把看做 JSX 是一种表达式，配合更多原生语法，能够实现一些在模板的语法限制下，很难做到的一些事情。从某个程度上来说，我们可以偏向依赖 JavaScript 实现一些功能，而不必去熟记一些 API，比如我们可以使用数组 map 去循环渲染，而不必熟记 v-for 的模板语法（PS： 虽然也不难记）

## 搭建

### vue-cli && babel-plugin-transform-vue-jsx
借助 vue-cli 快速搭建项目：

```
vue init wabpack xxx
```

搭建完成，我们可以从 `.babelrc` 文件看到 vue-cli 已经为我们配置好 babel 的 JSX 支持了。

```json
{
 ...
  "plugins": ["transform-vue-jsx", "transform-runtime"],
 ...
}

```
更多了解 Vue 和 JSX 细节请查看 [babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx)。

从 3.4.0 版本起，babel-plugin-transform-vue-jsx 会在 `render` 和 `computed` 中注入 h（createElement ）方法。这意味着我们可以在 `render` 和 `computed` 中使用 JSX。

```javascript
Vue.component('jsx-example', {
  render () { // h will be injected
    return <div id="foo">bar</div>
  },
  myMethod: function () { // h will not be injected
    return <div id="foo">bar</div>
  },
  someOtherMethod: () => { // h will not be injected
    return <div id="foo">bar</div>
  }
})

@Component
class App extends Vue {
  get computed () { // h will be injected
    return <div id="foo">bar</div>
  }
}
```

### 添加 TypeScript 支持

```
// 安装 typescript
 npm i -S typescript
// 建立 ts-config
tsc --init
```

配置 ts-config 主要配置项

```json
// tsconfig.json
{
  "compilerOptions": {
    // 与 Vue 的浏览器支持保持一致
    "target": "es5",
    // 这可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "es2015",
    "moduleResolution": "node",
    // 添加 JSX 支持
    "jsx": "preserve", 
    //装饰器支持
    "experimentalDecorators": true, 
  }
}
```

### class风格
我们可以使用 [vue-class-component](https://github.com/vuejs/vue-class-component) 编写class风格的组件，让代码更有调理。首先需要安装依赖包：

```
npm install --save-dev vue-class-component
```

- methods 可以直接声明为类成员方法。
- 计算属性可以声明为类属性访问器。

- Initial data可以声明为类属性（如果使用Babel，则需要- - - babel-plugin-transform-class-properties）。

- data，render所有的Vue生命周期钩子也可以直接声明为类成员方法，但是你不能在实例本身上调用它们。在声明自定义方法时，应该避免使用这些保留名称。

```typescript
<template>
  <div>
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {
  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}
</script>
```

如果我们要在脚本里使用 JSX，记得 `<script lang="ts">` 换成 `<script lang="tsx">`

使用更多装饰器
[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) 里有：
- `@Emit`
- `@Inject`
- `@Model`
- `@Prop`
- `@Provide`
- `@Watch`
- `@Component (exported from vue-class-component)`

### loader 配置
babel-loader 添加 babel-plugin-transform-vue-jsx 支持 JSX 转换，vue-cli已经为我们做好了，接下来只需安装配置 ts-loader。
```
npm i -D ts-loader@3.5.0
```

> 注意 webpack 和 ts-loader 的版本， 如果出现问题，请降级其中版本以适配，由于 vue-cli 搭建的 webpack 是 3.x 版本，所以 ts-loader 选择 3.5.0 版本

```javascript
//webpack.base.config.js
{
  ...
  resolve: {
    extensions: ['.js', '.vue', '.json', '.tsx', 'ts'],
    alias: {
      '@': resolve('src'),
    }
  },
  ...
  module: {
    rules: [
      ...
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: Object.assign(vueLoaderConfig, {
          loaders: {
            ts: 'ts-loader',
            tsx: 'babel-loader!ts-loader'
          }
        })
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            // 对 .ts 文件编译时使用 ts-loader 进行读取，appendTsSuffixTo 是为了让 tsc 对 vue 文件能够当成一个 module 进行处理，以解决 moudle not found 的问题
            options: { appendTsxSuffixTo: [/\.vue$/] }
          }
        ]
      },
      ...
    ]
  }
  ...
}
```
添加以上配置，我们可以在 vue 单文件支持写 ts 或者 tsx 语法
```typescript
//App.vue
<script lang="tsx">
/* eslint-disable */
import { Component } from "vue-property-decorator";
import Vue, { CreateElement, VNode } from 'vue';

@Component
export default class App extends Vue {
  name: String = 'laoergege';

  render(h: CreateElement): VNode {
    return (
      <div id="app">
        {this.name}
      </div>
    )
  }
}
</script>
```
或者直接写在 tsx 文件中
```typescript
// App.tsx
import { Component } from "vue-property-decorator";
import Vue, { CreateElement, VNode } from 'vue';

@Component
export default class App extends Vue {
  name: String = 'laoergege';

  render(h: CreateElement): VNode {
    return (
      <div id="app">
        {this.name}
      </div>
    )
  }
}
```

相对使用 template，使用 render 函数，我们可以不用注册组件，可以直接导入使用。

```javascript
import Todo from './Todo.js'

export default {
  render (h) {
    return <Todo/> // no need to register Todo via components option
  }
}
```

## 其他

### ElemeFE/webpack-typescript
使用 `ElemeFE/webpack-typescript` 模板，可以省去搭建 typescript。

```
vue init ElemeFE/webpack-typescript my-project
```

### 配置 babel && babel-plugin-transform-vue-jsx

```
npm install\
  babel-plugin-syntax-jsx\
  babel-plugin-transform-vue-jsx\
  babel-helper-vue-jsx-merge-props\
  babel-preset-env\
  babel-loader\
  babel-core\
  --save-dev
```
`.babelrc`:
```
{
  "presets": ["env"],
  "plugins": ["transform-vue-jsx"]
}
```

loader 配置如其上。

## 注意

### 外部模块声明
为了让 vscode 在 ts 文件中识别 vue 结尾文件，引入 Vue 文件的时候需要加上.vue 后缀,否则编辑器识别不到。

一般为外部第三方模块，有些库并没有提供typescript的声明文件，所以就需要自己去添加外部模块声明文件，

解决办法：在src/typings目前下建一个tools.d.ts文件，声明这个模块即可,例如

```
declare module 'vue-awesome-swiper' {
  export const swiper: any
  export const swiperSlide: any
}

declare module 'vue-lazyload'

```

或者使用 typings-cli 工具

```
typings search xxx

typings install xxx
```

## 参考
- [知乎：webpack中 vue + ts + jsx应该怎么配置？](https://www.zhihu.com/question/64147199?answer_deleted_redirect=true)
- [TypeScript+Vue实例教程](https://github.com/SimonZhangITer/MyBlog/issues/13)