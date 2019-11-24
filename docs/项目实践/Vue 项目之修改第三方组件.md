## 前言
在公司内部的项目中我们用了第三方UI组件 *element-ui*，然而某一天 UI 小姐姐突然心血来潮，要求修改某些基础组件样式。对于一般情况，我们可能会选择样式覆盖的方式。但有时涉及到 HTML 结构的改动或者一些效果是很难借助样式覆盖实现的。如果重新选用其他 UI 组件库的组件或者直接自己重写，但是要涉及原来组件 API 的兼容，这往往带来隐患和成本偏大了。

## Vue 配置对象的编程方式
相比 Angular 和 React 带来的面向组件类的编程方式来说， Vue 更像是一种配置对象的编程方式。

```html
<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
// vue 组件配置对象
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
```

在导入导出中，得到的既然是一个对象，那么我们可以对这个对象进行解构或者属性覆盖达到我们要的效果。

```html
<template>
  <div ref="root" :class="[
    type === 'textarea' ? 'el-textarea' : 'el-input',
    inputSize ? 'el-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'el-input-group': $slots.prepend || $slots.append,
      'el-input-group--append': $slots.append,
      'el-input-group--prepend': $slots.prepend,
      'el-input--prefix': $slots.prefix || prefixIcon,
      'el-input--suffix': $slots.suffix || suffixIcon || clearable
    }
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="el-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="el-input__inner"
        v-bind="$attrs"
        :type="type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autoComplete || autocomplete"
        :value="currentValue"
        ref="input"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @focus="handleFocus();toggleAnimate($refs.root, true)"
        @blur="handleBlur();toggleAnimate($refs.root, false)"
        @change="handleChange"
        :aria-label="label"
      >
      <!-- 前置内容 -->
      <span class="el-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <i class="el-input__icon"
           v-if="prefixIcon"
           :class="prefixIcon">
        </i>
      </span>
      <!-- 后置内容 -->
      <span
        class="el-input__suffix"
        v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon">
        <span class="el-input__suffix-inner">
          <template v-if="!showClear">
            <slot name="suffix"></slot>
            <i class="el-input__icon"
              v-if="suffixIcon"
              :class="suffixIcon">
            </i>
          </template>
          <i v-else
            class="el-input__icon el-icon-circle-close el-input__clear"
            @click="clear"
          ></i>
        </span>
        <i class="el-input__icon"
          v-if="validateState"
          :class="['el-input__validateIcon', validateIcon]">
        </i>
      </span>
      <!-- 后置元素 -->
      <div class="el-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      :tabindex="tabindex"
      class="el-textarea__inner"
      :value="currentValue"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @input="handleInput"
      ref="textarea"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autoComplete || autocomplete"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    >
    </textarea>
  </div>
</template>
<script>
import { Input } from 'element-ui';

// 去除 render 方法
Input.render = null;

export default {
  ...Input,
  methods: {
    ...Input.methods,
    toggleAnimate(inputEle, res) {
      debugger;
      if (res) {
        inputEle.classList.add('is-focus');
      }else {
        inputEle.classList.remove('is-focus');
      }
    }
  },
};
</script>
```

像上例子代码中，我需要在 `element-ui` 中 `el-input` 组件监听 `input` 的 `focus` 和 `blur` 事件做相应 CSS 过渡效果，这是一个基础表单组件，要在所有引用该表单组件的地方添加监听器是不可能的。我们可以对原 `el-input` 组件进行高阶包装，但之后还有涉及 HTML 结构改动的需求，思来故去决定重写该组件的 `render` 方法。

我们在对应文件引入了 `Input` 组件，得到是一个编译后具有 `render` 方法的配置的对象。如果打算采用模板方式写法，我们就必须去除原来的 `render` 方法。

> Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。

```javascript
export default {
  ...Input, // 解构原配置对象属性
  // 重新解构 methods 对象，添加新的方法
  methods: {
    ...Input.methods,
    toggleAnimate(inputEle, res) {
      debugger;
      if (res) {
        inputEle.classList.add('is-focus');
      }else {
        inputEle.classList.remove('is-focus');
      }
    }
  },
};
```

在 `<template>` 标签内，我直接先复制了原代码，并在相应的位置添加事件处理

```
// 原
...
<input
    ...
    @focus="handleFocus()"
    @blur="handleBlur()"
    ...
    >
</input>
...

// 修改后
...
<input
    ...
    @focus="handleFocus();toggleAnimate($refs.root, true)"
    @blur="handleBlur();toggleAnimate($refs.root, false)"
    ...
    >
</input>
...
```

然后在全局组件注册，覆盖原组件的注册:

```javascript
Vue.component('el-input', Input //新组件对象);
```

我们复用原组件的配置对象，这样就不必担忧 API 的兼容，可以做到全局替换。另外，在重写模板中，需要注意以及兼容的是 `slot` API。

## 其他

#### 其他高阶组件的修改
像 `el-select` 组件中，也引用到 `el-input` 组件，但其源码中，是引用原`el-input` 组件并局部注册，我们同样可以像上述操作一样，只要覆盖 `el-input` 组件在 `el-select` 组件中的注册就行。