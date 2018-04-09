> 以下内容为笔者在学习 React 的一些记录

## 内容列表
- <a href="#JSX">JSX</a>
- <a href="#keys">列表 && keys</a>
- <a href="#control">受控与非受控组件</a>
- <a href="#lifecycle">生命周期</a>


## [JSX](#JSX)
 JSX, 一种 JavaScript 的语法扩展，一种 React API 的语法糖。 React 中使用 JSX 来描述用户界面。JSX 乍看起来可能比较像是模版语言，但事实上它完全是在 JavaScript 内部实现的。**在编译之后，JSX 其实会被转化为普通的 JavaScript 对象**，所以你可以把 JSX 当做一种表达式，配合上 JavaScript 各种语法例如 `if` 或者 `for` 中使用，将它赋值给变量，当作参数传入，作为返回值都可以。
 ```
 function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
 ```

### JSX 属性
```
const element = <div className="num">0</div>;
```
代码中的 className 属性，它其实就是标准 HTML 中的 class 属性。但是因为一些技术上的原因，JSX 把一些 HTML 的内部属性替换成了不同的。你可以在 React 文档支持的 [HTML 属性](https://doc.react-china.org/docs/dom-elements.html)中找到相关的内容。他们都遵守驼峰命名法（camelCase convention）。

### JSX 元素
元素是构成 React 应用的最小单位，元素用来描述你在屏幕上看到的内容：
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
与浏览器的 DOM 元素不同，React 当中的元素事实上是普通的对象:
```
// Babel 转译器会把 JSX 转换成一个名为 React.createElement() 的方法调用
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
```
// React.createElement() 这个方法首先会进行一些避免bug的检查，之后会返回一个类似下面例子的对象
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
```
这样的对象被称为 “React 元素”。描述组件实例或DOM节点及其所需的属性，代表所有你在屏幕上看到的东西。通过抽象成统一的数据模型，再由 react-dom 或者 react-native 读取这些对象来构建真实的 DOM 并保持数据内容一致，从而实现跨平台开发。

推荐阅读 [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html) 介绍 React元素只是一个基本描述界面的普通 JavaScript 对象，组件则是包含一系列 React元素 并拥有内部状态和逻辑的特殊元素，React 自动帮我们创建管理组件类实例。多个元素对象嵌套便组成了元素树，即 Virtaul DOM，react-dom 从根开始遍历识别元素对象，并转为真实 DOM 并保持数据内容一致。

## [列表 && keys](#key)
推荐阅读：
- [协调](https://doc.react-china.org/docs/reconciliation.html#%E9%80%92%E5%BD%92%E5%AD%90%E8%8A%82%E7%82%B9)
- [[React技术内幕] key带来了什么 ](https://github.com/MrErHu/blog/issues/21)

总结：使用像 React 这样的框架，好处就是让我们更加专注于内部数据操作逻辑，而不必去关心每一次状态改变保持 UI更新 一致。每当组件状态或输入属性改变时，会重新调用组件的 render 函数，输出新的元素树，React 在对比新的元素树与旧的元素树，会采用一种启发式算法(启发式算法指人在解决问题时所采取的一种根据经验规则进行发现的方法)。React启发式算法的前提条件主要包括两点:
- 通过`key`属性来标识匹配的元素
- 不同`type`的两个元素会产生不同的树

**React 会对新旧元素树进行逐层对比，对同层元素通过唯一 key 值进行定位比较，不同`type`的两个元素会重建，相同 `type` 的元素进行属性更新**。


### keys 作用
key 是 React 内部使用的属性，所以在组件内部是无法获取到 key 值的，如果你真的需要这个值，就需要自己显示手动设置。Key 是 React 用在比较新旧元素树时匹配元素的。

```
<div>
  <A key="2015">Duke</A>
  <B key="2016">Villanova</B>
</div>

<div>
  <C key="2014">Connecticut</C>
  <A key="2015">Duke</A>
  <B key="2016">Villanova</B>
</div>
```
像这种情况，React 会保留并移动 key值为 “2015”、“2016”  的元素，并创建 “2014” 的元素。

```
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Villanova</li>
  <li>Duke</li>
</ul>
```
像这种一般情况下，key 是天然顺序的，所以 React 会顺序比较并依次更新。

在对比过程中：
- 不相同 `type` 的元素，以它为根节点下所有的元素都会被销毁或重建。
- 相同类型的 DOM元素，React则会观察二者的属性，保持相同的底层 DOM节点，并仅更新变化的属性，在处理完 DOM元素 后，React 递归其子元素。
- 相同类型的组件元素，当组件更新时，实例仍保持一致，以让状态能够在渲染之间保留。React 通过更新底层组件实例的 props 来产生新元素，并在底层实例上依次调用componentWillReceiveProps() 和 componentWillUpdate() 方法。
接下来，render()方法被调用，同时对比算法会递归处理之前的结果和新的结果。

keys 的一个常用场景是在动态数组组件的时候，手动设置组件 key属性，但为什么一般情况不需要呢?
```
//case1
function App() {
    return (
        <ul>
            {
                [
                    <li key={1}>1</li>,
                    <li key={2}>2</li>
                ]
            }
        </ul>
    )
}
//case2
function App() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    )
}
```
JSX编译之后的代码:
```
//case1
function App() {
    return React.createElement('ul',null,[
        React.createElement('li',{key: 1}, "1"),
        React.createElement('li',{key: 2}, "2")
    ])
}
//case2
function App() {
    return React.createElement('ul',
        null,
        React.createElement('li',{key: 1}, "1"),
        React.createElement('li',{key: 2}, "2")
    )
}
```
我们发现第一个场景中，子元素的传入以数组的形式传入第三个参数，但是在第二个场景中，子元素是以参数的形式依次传入的。在第二种场景中，每个元素出现在固定的参数位置上，React就是通过这个位置作为天然的 key 值去判别的，所以你就不用传入 key 值的，但是第一种场景下，以数组的类型将全部子元素传入，React就不能通过参数位置的方法去判别，所以就必须你手动地方式去传入 key 值。

 > 比较常见的场景：为一个有复杂繁琐逻辑的组件添加key后，后续操作可以改变该组件的key属性值，从而达到先销毁之前的组件，再重新创建该组件。  
 推荐阅读[React 实践心得：key 属性的原理和用法](https://www.tuicool.com/articles/UVvaMz)


## [受控和非受控组件](#control)
受控和非受控组件主要是针对表单元素，表单元素和其他元素主要不同点就是：表单元素能够保留内部状态。相应的，其值由React控制的输入表单元素称为“受控组件”。在受控组件中，表单数据由 React 组件处理，相反表单数据由 DOM 处理时，替代方案为使用非受控组件。

要编写一个非受控组件，而非为每个状态更新编写事件处理程序，你可以使用 `ref` 从 DOM 获取表单值。

> ref 属性接受一个回调函数,当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数,当给组件类添加 ref 属性时，ref 回调接收该组件实例

React 对 `<input type="text">`, `<textarea>`, 和 `<select>` 都十分类似 - 他们都通过传入一个value属性来实现对组件的控制。

如果你希望 React 可以为其指定初始值，但不再控制后续更新。要解决这个问题，你可以指定一个 defaultValue 属性而不是 value。
```
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={(input) => this.input = input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
同样，`<input type="checkbox">` 和 `<input type="radio">` 支持 defaultChecked，`<select>` 和 `<textarea>` 支持 defaultValue.

## [生命周期](#lifecycle)
React 组件是一个包含 render 方法的对象，也可以选择性的包含其他生命周期方法。

无论是什么组件式的框架，如 Angular、React 或者 Vue，都会设计组件生命，把组件初始化和渲染、更新、卸载各个阶段暴露出来，赋予开发者更多能力，在组件不同生命时刻执行某些操作，如在 `componentDidMount ` 在初次渲染完成之后被触发，也只会触发一次，在这个方法里你已经可以访问渲染出的DOM元素了或者这个函数中进行一些例如ajax请求的操作。

挂载过程：
- constructor(props)
- componentWillMount()
- render()
- componentDidMount() 

更新过程：
- componentWillReceiveProps(nextProps) 
- shouldComponentUpdate(nextProps, nextState)
- componentWillUpdate(nextProps, nextState)
- render()
- componentDidUpdate(prevProps, prevState)

卸载过程：
- componentWillUnmount()

捕获异常：
- componentDidCatch(error, info)

### 组件更新方式（摘自 [React组件生命周期小结](http://www.jianshu.com/p/4784216b8194)）
- 首次渲染Initial Render
- 调用this.setState （并不是一次setState会触发一次render，React可能会合并操作，再- 一次性进行render）
- 父组件发生更新（一般就是props发生改变，但是就算props没有改变或者父子组件之间没有数据交换也会触发render）
- 调用this.forceUpdate

![](http://upload-images.jianshu.io/upload_images/1814354-4bf62e54553a32b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)