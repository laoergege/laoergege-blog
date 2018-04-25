我们为什么使用计算属性而不是方法呢？

涉及到计算部分的时候，计算属性是基于它们的依赖进行缓存的，如果说你的 test 值不变，那么它就不会去重新执行，只有当值发生了改变，它才会去重新执行一次，其它时候它都是缓存的。而方法则会反复计算处理。二者之间的差距就在于此。

el
提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。
如果 render 函数和 template 属性都不存在，挂载 DOM 元素的 HTML 会被提取出来用作模板，此时，必须使用 Runtime + Compiler 构建的 Vue 库。


createElement

// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签字符串，组件选项对象，或者
  // 解析上述任何一种的一个 async 异步函数，必要参数。
  'div',

  // {Object}
  // 一个包含模板相关属性的数据对象
  // 这样，您可以在 template 中使用这些属性。可选参数。
  {
    // (详情见下一节)
  },

  // {String | Array}
  // 子节点 (VNodes)，由 `createElement()` 构建而成，
  // 或使用字符串来生成“文本节点”。可选参数。
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)


{
  // 和`v-bind:class`一样的 API
  'class': {
    foo: true,
    bar: false
  },
  // 和`v-bind:style`一样的 API
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 正常的 HTML 特性
  attrs: {
    id: 'foo'
  },
  // 组件 props
  props: {
    myProp: 'bar'
  },
  // DOM 属性
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器基于 `on`
  // 所以不再支持如 `v-on:keyup.enter` 修饰器
  // 需要手动匹配 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅对于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // Scoped slots in the form of
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其他组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其他特殊顶层属性
  key: 'myKey',
  ref: 'myRef'
}





对于所有其他选项，将它们传递给装饰器函数。




render > template > el


#### methods，watch、computed 区别
相比 methods ，computed 会进行计算缓存，当依赖发生改变时才重新计算。
watch，computed 都是能监听依赖，然后执行计算操作，computed 的计算结果像挂载到实例上。但 computed 只能是同步操作，而 watch 能进行异步操作。

data 有两种类型：Object 或 Function，即对象或方法。

它们之间的区别在于，Object 对象在项目全局都可见，而 Function 则只在当前组件可见。所以在组件中使用 Object 对象，会造成变量污染。使用 return 包裹后数据中变量只在当前组件中生效，不会影响其他组件。