## 模板语法
**注意**：虽然在模板中 vue 支持的很多表达式，但切勿实现复杂的表达式，不便于模板阅读，复杂逻辑请放在 vue computed 属性中。

主要模板语法及模板指令：
- 插值表达式 {{}}
- 属性绑定 v-bind （简写： :[attr]）
- 事件绑定 v-on （简写： @[click]）
    - 接收一个需要调用的方法名称
    ` <button v-on:click="greet">Greet</button>`
    - 内联 JavaScript 语句
    `<button v-on:click="say('hi')">Say hi</button>`
    - 访问原生的 DOM 事件
    `<button v-on:click="say('hi', $event)">Say hi</button>`
- 修饰符
- 双向绑定 v-model
- 条件 v-if
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
    - `<div v-for="(val, key, index) in object"></div>` 
    - `<div v-for="(item, index) in items"></div>`
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



## VM 属性
data
生命周期
computed
watch

## 其他
### key
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。

当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。
这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。
建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

### is
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

## 原理

