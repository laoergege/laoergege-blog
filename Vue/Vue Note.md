## Table of Contents
- [Table of Contents](#table-of-contents)
    - [templating syntax](#templating-syntax)
    - [ViewModel](#viewmodel)
    - [Others](#others)
        - [IS Feature](#is-feature)
        - [Component Communication](#component-communication)
    - [响应式原理](#)

### templating syntax 
虽然在模板中 vue 支持的很多表达式，但切勿实现复杂的表达式，不便于模板阅读，复杂逻辑请放在 vue computed 属性中。

主要模板语法及模板指令：

**主要：**
- 插值表达式 `{{}}`
- 属性绑定 `v-bind （简写： :attr）`
- 事件绑定 `v-on （简写： @click）`
    - 接收一个需要调用的方法名称
    ` <button v-on:click="greet">Greet</button>`
    - 内联 JavaScript 语句
    `<button v-on:click="say('hi')">Say hi</button>`
    - 访问原生的 DOM 事件
    `<button v-on:click="say('hi', $event)">Say hi</button>`
- 修饰符
- 双向绑定 v-model
- 条件渲染
    - v-if、v-else-if、v-else
    ```html
    <div v-if="type === 'A'">
    A
    </div>
    <div v-else-if="type === 'B'">
    B
    </div>
    <div v-else-if="type === 'C'">
    C
    </div>
    <div v-else>
    Not A/B/C
    </div>
    ```
    - 在 `<template>` 元素上使用 v-if 条件渲染分组,`<template>` 不会被最终渲染，避免浪费占用元素。
    ```html
    <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </template>
    ```

- 循环 v-for 
    - 遍历对象 `<div v-for="(val, key, index) in object"></div>` 
    - 遍历数组 `<div v-for="(item, index) in items"></div>`
    - v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。
    ```html
    <li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo }}
    </li>
    ```
    - 当在组件中使用 v-for 时，key 现在是必须的。
- Class 绑定
    - 对象语法：`<div v-bind:class="{ active: isActive }"></div>`
    - 数组语法：`<div v-bind:class="[activeClass, errorClass]"></div>`
    - 当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面
- Style 绑定
    - 对象语法：`<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>`
    - 数组语法： `<div v-bind:style="[baseStyles, overridingStyles]"></div>`
    - 多重值：`<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>` 只会渲染数组中最后一个被浏览器支持的值。
    - 当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。

**其他：**
- v-html 输出 html 代码
- v-show 控制元素显示


### ViewModel
data
生命周期
computed
watch

### Others
#### IS Feature
```
<div id="todo-list-example">
  <input
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo"
  >
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>
```
注意这里的 is="todo-item" 属性。这种做法在使用 DOM 模板时是十分必要的，因为在 `<ul>` 元素内只有 `<li>` 元素会被看作有效内容。这样做实现的效果与 `<todo-item>` 相同，但是可以避开一些潜在的浏览器解析错误。


#### Component Communication

1. 父->子

    - props(v-bind)

    - $refs

2. 子->父

    - events(v-on)

    - `$parent`、`$root`

3. 非父子组件

    - event bus

    - vuex

### 响应式原理
