---
release: true
tags:
	- javascript
---

# JavaScript

- JavaScript
  - [类型系统](./JavaScript%20类型系统.md)
  - 基础
    - 变量、值和类型
    - 表达式及运算
    - 控制流
      - 循环
      - 分支
    - 函数/过程
    - 注释
    - [JavaScript 模块](./JavaScript%20模块.md)
  - 数据结构
    - [数组](./JavaScript%20数组%20API%20总结.md)
    - Set
    - Map
  - [JavaScript 对象](./JavaScript%20对象.md)
  - 函数式编程
    - [Master the JavaScript Interview: What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976#.kt48h2bfa)
    - 函数柯里化
    - [ts-belt](https://github.com/mobily/ts-belt)
  - [异步编程](./JavaScript%20异步编程.md)
  - 运行时
    - [内存管理机制](./JavaScript%20内存管理机制.md)
      - 堆栈内存
      - 标记-清除
    - 运行原理
      - [编译时](./JavaScript%20代码执行过程（编译时）.md)
      - [JavaScript 代码执行机制](./JavaScript%20代码执行机制.md)
  - 元编程
  - [JavaScript 正则表达式](./JavaScript%20正则表达式.md)
- api
  - [手写 call、apply、bind](https://github.com/laoergege/laoergege-blog/issues/79)
  - [手写 Promise](https://github.com/laoergege/laoergege-blog/issues/81)
    - [JavaScript Promise迷你书（中文版）](http://liubin.org/promises-book/#introduction)
  - [手写 instanceof](https://github.com/laoergege/laoergege-blog/issues/74)
  - [手写 new](https://github.com/laoergege/laoergege-blog/issues/78)
  - [数组扁平化](https://github.com/laoergege/laoergege-blog/issues/64)
  - [数组去重](https://github.com/laoergege/laoergege-blog/issues/63)
  - [手写节流、防抖](https://github.com/laoergege/laoergege-blog/issues/83)
  - [EventEmitter 实现](https://github.com/laoergege/laoergege-blog/issues/84)
- 学习资料
  - [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
  - [ES6 入门教程](https://es6.ruanyifeng.com/)
  - 重新前端
  - [JavaScript开发者应懂的33个概念](https://github.com/stephentian/33-js-concepts)
  - [Deep JavaScript](https://exploringjs.com/deep-js/toc.html)
- js 学习路线
  - 开始
    - 基本语法
    - api
  - 深入
    1. 变量提升机制（历史问题）
    2. 类型系统
    3. 静态作用域（链）
    4. 对象模型
    5. 原型（链）
    6. 闭包
    7. 元编程
       1. function
       2. eval
       3. with
  - 更深
    - ES 语言规范
    - 了解 V8 JS 编译原理
    - 关注 JS 编译器比如 V8 团队，及周边发展
  - 底层
    - 研究 V8 源码
    - 语言设计及编译原理


JavaScript 回对程序代码自动插入分号，其规则总结如下：

要有换行符，且下一个符号是不符合语法的，那么就尝试插入分号。有换行符，且语法中规定此处不能有换行符，那么就自动插入分号。源代码结束处，不能形成完整的脚本或者模块结构，那么就自动插入分号。

1. 阻塞
2. 轮询
3. 事件驱动