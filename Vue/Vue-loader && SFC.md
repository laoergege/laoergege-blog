> 更新日期 2018.4.16

## Vue-loader && SFC
使用 vue 构建应用时的工作就是编写 .vue 单文件组件（single file component，简称 SFC）。
vue-loader 是一个 webpack 的 loader，可以将用下面这个格式编写的 Vue 单文件组件转换为 JavaScript 模块：
![](http://blog.evanyou.me/images/vue-component.png)

每个 .vue 文件包含三种类型的顶级语言块 `<template>`、`<script>` 和 `<style>`，还允许添加可选的自定义块。vue-loader 会解析文件，提取每个语言块，如有必要会通过其它 loader 处理，最后将他们组装成一个 CommonJS 模块，module.exports 出一个 Vue.js 组件对象。

### 语言块
每个 .vue 文件包含三种类型的顶级语言块 `<template>`、`<script>` 和 `<style>`，`lang` 属性分别默认 html、js、css。vue-loader 会根据 `<template>`、`<script>` 和 `<style>` 的 `lang` 值去选用对应的 loader 编译处理该块的代码。例如，通过设置语言块的 lang 属性，你可以像下面这样使用 Sass 语法编写样式：

```
<style lang="sass">
  /* write Sass! */
</style>
```

### Src 导入
如果你喜欢分隔你的 .vue 文件到多个文件中，你可以通过 src 属性导入外部文件：

```
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

### CSS && scoped && module
`<style>` 语言块可以有多个。可以分为 Css 作用域和 Css Modules。

#### Css 作用域
```html
 <style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

转换结果：

```html
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

`<style>` 则表示全局样式，当需要对所有组件进行样式控制的时候，可以将样式提升到全局，否则一般推荐还是使用`<style scoped>`。`<style scoped>` 表示本地样式，只对该组件有效，就不会发生样式向上入侵，
使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件有作用域的 CSS 和子组件有作用域的 CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

##### 组件样式向下入侵
有时已封装好的组件不再妥协父组件而重新修改样式，父组件把样式向下入侵，可以做到更进一步控制字组件。如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 >>> 操作符：

```html
<style scoped>
.a >>> .b { /* ... */ }
</style>
```

上述代码将会编译成：

```html
.a[data-v-f3f3eg9] .b { /* ... */ }
```

有些像 Sass 之类的预处理器无法正确解析 >>>。这种情况下你可以使用 /deep/ 操作符取而代之——这是一个 >>> 的别名，同样可以正常工作。

#### CSS Modules
CSS 工程化最主要的问题是
- 全局作用域
- 模块化

相比 Css 作用域 ，CSS Modules 除了有局部作用域功能外，还有模块依赖功能。根据单一职责原则，我们可以把不同样式分模块，然后导入、组合样式。

在你的 `<style>` 上添加 module 属性：

```html
<style module>
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
</style>
```

这将为 css-loader 打开 CSS Modules 模式，生成的 CSS 对象将为组件注入一个名叫 $style 的计算属性，你可以在你的模块中使用动态 class 绑定：

```html
<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>
```

在 .vue 中你可以定义不止一个 `<style>`，为了避免被覆盖，你可以通过设置 module 属性来为它们定义注入后计算属性的名称。

```html
<style module="a">
  /* identifiers injected as a */
</style>

<style module="b">
  /* identifiers injected as b */
</style>
```

Css module是webpack的css-loader直接支持的，不管是用什么框架，都可以用这套规范。然后scoped用的属性选择器，相比之下css Module只是把你的class name改一个不一样的string，感觉要更直接一些。然后css Module还可以支持class的compose，这个还是很有用的。

更多了解及用法参考
- [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [在Vue工作流中使用CSS Modules](https://segmentfault.com/a/1190000007468604)
- [css-modules](https://github.com/css-modules/css-modules)

### 函数式组件
当组件仅仅是展示数据，而没有保留状态或逻辑，请将 functional 特性添加到模板块中。这样做以后就可以省略 `<script>` 块中的 functional 选项。

这意味着在模板中，prop 需要以 props.xxx 的形式访问：
```
<template functional>
  <div>{{ props.foo }}</div>
</template>
```

### 配置 lang 对应的 loaders 
