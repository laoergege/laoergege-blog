> 本文意译[An imperative guide to forms in Vue.js](https://blog.logrocket.com/an-imperative-guide-to-forms-in-vue-js-7536bfa374e0)

现在几乎所有的 web 应用都有一个共同之处就是：他们需要从用户那里获取输入数据并验证。在我们喜爱的框架中学习使用表单是有价值的，并且可以在开发过程中节省我们一些时间和精力。 在本教程中，我将引导您完成在Vue.js 2.x应用程序中创建，验证和使用表单的输入过程。

开始跟随该教程，你首先必须要有一些 HTML 和 Vue.js 知识。


![image.png](https://api.laoergege.cn//images/IF4-qyq80f7NUMftu5aZKkL5.PNG)

demo [地址](https://github.com/laoergege/vue-form-study)

## 开始准备
我们将首先创建一个简单的 Vue.js 应用程序与一些基本的HTML Form 便签。同时， 我们还将引入 Bulma 样式，美化应用。

## 建立表单模型，数据绑定
通过 v-model 指令，我们能够将表单控件与数据模型间建立双向数据绑定。
> 请注意，v-model将忽略表单输入的 value，checked 或 selected 属性，并将Vue实例数据视为真值的来源。 
```html
...
 <!-- form starts here -->
          <form v-on:submit.prevent="onSubmit()">
            <section class="form">

              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input v-model="form.name" class="input" type="text" placeholder="Text input" name="name" >
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Message" v-model="form.message"></textarea>
                </div>
              </div>

              <div class="field">
                <label class="label">Inquiry Type</label>
                <div class="control">
                  <div class="select is-multiple">
                    <!-- 多选框的选定值存储在数组中。 -->
                    <select multiple v-model="form.inquiry_type">
                      <option disabled value="">Nothing selected</option>
                      <option v-for="option in options.inquiry" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                 <!-- 单个复选选框要求模型值为(true/false)来决定是否 checked -->
                 <!-- 多个复选框的选定值存储在数组中。 -->
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" v-model="form.concepts" value="promises"> I agree to the
                    <a href="#">terms and conditions</a>
                  </label>
                  <label class="checkbox">
                    <input type="checkbox" v-model="form.concepts" value="testing"> Testing
                  </label>
                </div>
              </div>

              <div class="field">
                <label>
                  <strong>Is JavaScript awesome?</strong>
                </label>
               
                <div class="control">
                  <!-- 对于单选按钮，模型属性将使用所选单选按钮的值。 -->
                  <label class="radio">
                    <input v-model="form.js_awesome" type="radio" value="Yes"> Yes
                  </label>
                  <label class="radio">
                    <input v-model="form.js_awesome" type="radio" value="Yeap!"> Yeap!
                  </label>
                </div>
              </div>
            </section>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-primary">Submit</button>
              </div>
            </div>
          </form>
...
```
```
new Vue({
  el: '#app',
  data: {
    form: {
      name: '',
      message: '', // textarea value,
      inquiry_type: [], // single select box value
      terms: false, // single checkbox value
      concepts: [], // multiple checkbox values
      js_awesome: '' // radio input value
    },
    options: {
      inquiry: [
        { value: 'feature', text: "Feature Request" },
        { value: 'bug', text: "Bug Report" },
        { value: 'support', text: "Support" }
      ]
    }
  },
  methods: {
    onSubmit(){
      console.log(this.form)
    }
  }
})
```
## 验证用户输入
我们将使用 [vee-validate](http://vee-validate.logaretm.com/) 来验证我们输入数据，便捷我们的开发。

首先，我们应该安装该 vee-validate 插件并在使用到 vue 中。
```
npm install vee-validate --save
```
```
// main.js
// 使用 VeeValidate 插件
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);
```

现在，我们可以在我们的 input 上使用 v-validate 指令，并将规则作为字符串值传递。 每个规则可以由管道分隔。 以一个简单的例子，我们来验证我们之前定义的名称输入：
```
...
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input name="name" 
      v-model="form.name" 
      v-validate="'required|min:3'" 
      class="input" type="text" placeholder="Full name">
  </div> 
</div>
...
```
在上面的例子中，我们定义了两个规则 - 第一个是名称字段是必需的（必需的），第二个是名称字段中键入的任何值的最小长度应为三（最小：3）。

> Tip: v-validate 指令也能接受对象，例如
v-validate=”{required: true, min: 3}”

在数据无效的情况下，我们可以使用插件创建的 errors 对象。 例如，要在输入下方显示错误，我们可以添加：
```
<p class="help is-danger" v-show="errors.has('name')">
  {{ errors.first('name') }}
</p>
```
- .has() 帮助我们检查要验证的域是否有错误。
- .first() 返回第一条关联该域的错误信息。

其他有用的方法包括 .collect（），all（）和 any（）。 你可以在[这里](http://vee-validate.logaretm.com/#render-errors)阅读更多。

> 注意，表单控件 name 属性必须定义。

Vee-validate 具有很多[内置验证器](http://vee-validate.logaretm.com/#available-rules)来满足通用用例。 如果不满足你的需求，你也可以定义自定义验证规则。

## 自定义验证器
一个自定义的验证器有以下三种自定义方式：

**Function form**
```
const validator = (value, args) => {
  // Return a Boolean or a Promise.
};
```
**Object Form**
```
const validator = {
  getMessage(field, args) {
    // will be added to default English messages.
    // Returns a message.
  },
  validate(value, args) {
    // Returns a Boolean or a Promise.
  }
};
```
**Localized Object Form**
```
const validator = {
  messages: {
    en: (field, args) => {
      // Returns a message.
    },
    cn: (field, args) => {
      // Returns a Chinese message.
    }
  },
  validate(value, args) {
    // Returns a Boolean or a Promise.
  }
};
```
此验证器表单必须具有validate方法，以及一个getMessage方法或一个消息对象。 唯一的区别是，后者将允许您添加本地化消息，前者仅将其添加到英语字典。

> field：验证域、value：要验证的值、args：配置参数

> 验证规则必须实现上述三种形式之一。 不这样做会抛出一个ValidatorException。

### 异步错误消息提示
在上面，我们的错误消息都是初始化时就定义好的了。如果我们某些的数据验证是由服务端完成并返回验证消息结果，我们想依由服务端验证消息来做错误提示。

为了实现这一点，你需要返回一个 Object 而不是 boolean，该对象应该总是包含一个 valid 属性和一个可选的 data 属性，data 属性将被传递给消息生成器函数作为第三个参数，那么你应该使用 data 属性来修改输出消息。
```
// 官方 demo
const myRule = {
  getMessage(field, params, data) {
      return (data && data.message) || 'Something went wrong';
  },
  validate(value) {
    return new Promise(resolve => {
      resolve({
        valid: value === 'trigger' ? false : !! value,
        data: value !== 'trigger' ? undefined : { message: 'Not this value' }
      });
    });
  }
};
```

## 表单提交
为了处理表单提交，我们可以使用Vue的提交事件处理程序。 我们还可以插入.prevent修饰符以防止默认操作，在这种情况下，该表单将在页面刷新时提供：
```
...
<form v-on:submit.prevent="onSubmit()"> 
  ...
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary">Submit</button>
    </div>
  </div>
</form>
...
```

我们可以添加一个验证，以确保用户不允许提交无效的表单。 我们可以使用errors.any（）：
```
<button 
  v-bind:disabled="errors.any()"
  class="button is-primary">
  Submit
</button>
```

## 总结
我们主要知道
- 如何利用 v-model 等指令双向绑定表单中的输入域，
- 以及利用 vee-validate 组件来进行声明式数据校验，并且添加自定义的校验规则，
- 最后如何提交表单数据并且进行响应回显。

提示：
对于表单输入的 v-model，存在一些修饰符，包括.lazy，.number和.trim。 您可以在[这里](https://cn.vuejs.org/v2/guide/forms.html#修饰符)阅读所有关于它们。