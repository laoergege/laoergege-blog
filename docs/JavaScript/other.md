







1. 理解功能需求
2. 实现猜想
3. 功能源码主流程 debugger
4. 源码细节
   1. 看 issue
   2. 看测试用例



js debug
- debugger client
  - cmd
    - node debugger
  - ui
    - chrome devtool
    - vscode debugger



- 系统路径大小写及系统分割符号问题

Block Tree

createVnode

createComponentInstance
setupComponent
setupRenderEffect

renderComponentRoot
updateComponentPreRender


vnode
- type
- props
- children

component
- props
- setup(data)
- render
- slots


setupComponent
updateComponentPreRender
renderComponentRoot 
shouldUpdateComponent

尽量忽略其他不相干 case 情况，保持主逻辑功能流程分析
**这里有个小技巧：看源码过程一般建议关注主线逻辑，像各种特殊情况可通过注释、issue 或者测试用例查看原由**。

生命周期
api 抽象


vnode
- type
- props
- children



- before-created
- created
- before-mount
- mounted
- before-updated
- updated
- before-unmount
- unmounted 
- render-tracked
- render-triggered 
- activated  
- deactivated 
- error-captured
- server-prefetch

IIFE


采用静态（词法）作用域的变量就叫词法变量。
词法“环境”一词指的是在变量或函数在定义时围着它的词法内容，即实际代码中围着它的最近的代码块或是全局环境：


“With” 和 “eval” — ECMAScript中的动态作用域
，使用with和eval虽然加强了静态作用域，但相比之下，with和eval在实现上也可能会削弱变量查找和词法环境储存的性能（译注：因为这相当于扩充了当前作用域，增加了存储消耗和查找范围）。因此在ES5中，with在严格模式下被移除了，此外严格模式下的eval方法不再会在当前上下文创建变量。所以，ES5的严格模式下是完全遵守词法环境的实现。


 ES（译注：ECMAScript，下同）中的词法环境由两部分组成：一个环境记录项和一个对外部环境的引用。

- 执行上下文
  - 变量环境组件VariableEnvrionment
    - 变量声明和函数声明的初始储存位置
  - 词法环境组件LexicalEnvrionment
    - 词法环境组件和变量环境组件最初是同一个值，词法环境组件复制于变量环境，变量环境组件永远不会变，而词法环境组件可能会变。
    - 词法环境组件的改变发生在代码执行阶段

执行上下文的变量环境组件还是词法环境组件都是属于词法环境的概念

with语句和catch语句会在它们的代码执行阶段替代掉当前的执行上下文环境


渲染器模块。渲染器包含将组件渲染到网页上的 3 个不同阶段的代码。

渲染阶段。 当渲染函数被调用并返回一个被称为虚拟 DOM 的实际 DOM 的表示时。虚拟 DOM 是将呈现到浏览器中的内容的 JavaScript 对象表示。
挂载（或创建）阶段：渲染器获取虚拟 DOM 对象并进行实际的 DOM JavaScript 调用以创建网页。
补丁（或更新）阶段：渲染器采用两个虚拟 DOM 对象，一个旧的和一个新的，并仅更新使用 DOM JavaScript 调用更改的网页部分。

是什么，为什么，怎么办

JavaScript 性能提升：
1. typescript + JIT
2. WebAssembly（就如js的“+”操作，我们最终极的目标就是“+”能够直接被转换为一条简单CPU指令操作。）

- 文档编辑器
  - HTML + CSS
  - contenteditable