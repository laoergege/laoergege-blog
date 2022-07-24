# JavaScript 函数式编程

- 函数式编程范式
  - 函数作为一等公民
  - 纯函数：指数学上的函数，即自变量的映射。相同的输入，永远会得到相同的输出，而且没有任何显著的副作用（对外部因素的依赖和修改）
    - 好处
      - 确定性、可预测性，便于文档化和移植、测试
      - 可做缓存
      - 并行代码：纯函数根本不需要访问共享的内存，而且根据其定义，纯函数也不会因副作用而进入竞争态（race condition）
  - 不可变数据：纯函数式编程语言中的变量也不是命令式编程语言中的变量，即存储状态的单元，而是代数中的变量，即一个值的名称，这就意味着变量的值是不可变的
  - 无状态
  - loop 、递归
  - 与数据结构和逻辑交织在一起的面向对象编程不同，函数式编程强调数据和逻辑的分离
- 工具
  - Thunk
  - Curry
  - Composite
    - pipe
    - compose 从右往左


## Monad

## 代数效应（Algebraic Effects）

实际开发中是很难避免副作用。代数效应，就是把函数式编程中的副作用 Effect 当作代数，将副作用从函数中隔离开，着重关注函数主逻辑 What（做什么），而解耦副作用How（怎么实现），使函数关注点保持纯粹。

如何将副作用代数化，我总结了以下两种方法：

1. 函数参数模型：将副作用当作函数参数

```js
async function biz(id) {
  const infoId = /* do some calc */ id; // 这里可以理解为是一大段计算逻辑
  const info = await getInfo(infoId);   // 副作用，与 server 通信
  const dataId = /* do some calc */ info.dataId; // 这里可以理解为是一大段计算逻辑
  const data = getData(dataId);         // 副作用，非幂等操作
  return /* do some calc */ data.finalCalcData;  // 这里可以理解为是一大段计算逻辑
}
```

代数效应化后：

```js
async function biz(id, getInfo, getData) {
  const infoId = /* do some calc */ id; // 这里可以理解为是一大段计算逻辑
  const info = await getInfo(infoId);   // 副作用，与 server 通信
  const dataId = /* do some calc */ info.dataId; // 这里可以理解为是一大段计算逻辑
  const data = getData(dataId);         // 副作用，非幂等操作
  return /* do some calc */ data.finalCalcData;  // 这里可以理解为是一大段计算逻辑
}
```

2. 可恢复的调用栈模型：暂停函数执行，将控制权返回其他地方，由外部执行副作用结果后传回来重新执行

```js
function getName(user) {
  let name = user.name;
  if (name === null) {
    name = perform 'ask_name'; // 执行 代数
  }
  return name;
}

function makeFriends(user1, user2) {
  user1.friendNames.add(getName(user2));
  user2.friendNames.add(getName(user1));
}

const arya = { name: null };
const gendry = { name: 'Gendry' };
try {
  makeFriends(arya, gendry);
} handle (effect) {
  if (effect === 'ask_name') {
    resume with 'Arya Stark';
  }
}
```

### 学习参考

- [函数式编程中的 algebraic effects 是什么？ - Malcolm Yu的回答 - 知乎](https://www.zhihu.com/question/300095154/answer/1744221759)

命令式编程是面向计算机硬件的抽象，有变量（对应着存储单元），赋值语句（获取，存储指令），表达式（内存引用和算术运算）和控制语句（跳转指令），一句话，命令式程序就是一个冯诺依曼机的指令序列。



就将编程语言分成了两部分：expressive power & application power。即语言的表达能力和语言的应用能力。后者通常是跟外界交互的 IO 等副作用接口。

函数式语言将代码的运行，分成 pure code & system wrapper 两部分，前者只关乎数据和行为的表达，而后者则是应用接口调用管理中心

- react 为什么函数式开发范式
  - 函数式的数据不可变契合 react 原理
  - 并发
  - this.state 问题
  - React 并发模式下很容易出现数据竞态（data race）的问题。
    - this.state 是一个对象，每次更新局部，更新时也可新加 state 进去，这就让 state 整体比较混沌。
    - 使用高阶组件等模式时，会造成 this.props 中的数据来源不透明，同样混沌。
    - 因为 this 魔法指针的存在，很容易挂一大堆东西上去，互相随意调用，就会让逻辑缠绕。
  - 复用状态逻辑
    - 提供逻辑共享，以替代高阶组件。
  - 逻辑关注点
  - algebraic effects

- 框架体系不同
  - Vue
    - 面向对象
    - 可变、响应式
    - Vue 在组件方面的心智模型仍然是「拥有数据与行为且自响应式的对象」
    - 接近大家习惯的 JS
  - React
    - 函数
    - 副作用受控的「执行上下文（evaluation context）」
    - React 在组件方面的心智模型是「副作用受上下文托管的纯函数」


「框架/库是编程语言上的抽象」，并不意味着框架的设计就无法跳脱出其实现语言的习语（idioms）与编程范式（paradiams）


- Redux
  - mvc
- cf


tail call、curry、partial、pipe、compose，还有pure、high-order func