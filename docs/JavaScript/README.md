---
release: true
tags:
	- javascript
desc: JavaScript 知识体系总结
---

# JavaScript

- JavaScript
  - [JavaScript 语法结构](./JavaScript%20语法结构.md)
  - [JavaScript 模块](./JavaScript%20模块.md)
  - [JavaScript 类型系统](./JavaScript%20类型系统.md)
  - [JavaScript 对象](./JavaScript%20对象.md)
    - 可迭代对象
  - 数据结构
    - [数组](./JavaScript%20数组%20API%20总结.md)
    - Set
    - Map
  - [JavaScript 异步编程](./JavaScript%20异步编程.md)
  - 函数式编程
    - [Master the JavaScript Interview: What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976#.kt48h2bfa)
    - 柯里化（curry）
    - 组合（compose）
    - [ts-belt](https://github.com/mobily/ts-belt)
  - 运行时
    - [内存管理机制](./JavaScript%20内存管理机制.md)
      - 堆栈内存
      - 标记-清除
    - 运行原理
      - [编译时](./JavaScript%20代码执行过程（编译时）.md)
      - [JavaScript 代码执行机制](./JavaScript%20代码执行机制.md)
  - 元编程
    - 程序-元编程-可以生成代码-运行时动态修改程序（反射编程或反射）
      1. function
      2. eval
      3. with
      4. Proxy&Reflect
  - [JavaScript 正则表达式](./JavaScript%20正则表达式.md)
- api
  - [手写 call、apply、bind](https://github.com/laoergege/laoergege-blog/issues/79)
  - [手写 Promise](https://github.com/laoergege/laoergege-blog/issues/81)
    - [JavaScript Promise 迷你书（中文版）](http://liubin.org/promises-book/#introduction)
  - [手写 instanceof](https://github.com/laoergege/laoergege-blog/issues/74)
  - [手写 new](https://github.com/laoergege/laoergege-blog/issues/78)
  - [数组扁平化](https://github.com/laoergege/laoergege-blog/issues/64)
  - [数组去重](https://github.com/laoergege/laoergege-blog/issues/63)
  - [手写节流、防抖](https://github.com/laoergege/laoergege-blog/issues/83)
  - [EventEmitter 实现](https://github.com/laoergege/laoergege-blog/issues/84)
  - [手写 实现柯里化](https://github.com/laoergege/laoergege-blog/issues/87)
- 学习资料
  - [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
  - [ES6 入门教程](https://es6.ruanyifeng.com/)
  - 极客《重新前端》
  - [JavaScript 开发者应懂的 33 个概念](https://github.com/stephentian/33-js-concepts)
  - [Deep JavaScript](https://exploringjs.com/deep-js/toc.html)
  - [现代 JavaScript 教程](https://zh.javascript.info/)
- 语言规范及生态
  - V8
  - ECMASCript 规范

## TC39 提案流程

1. 提案
2. 完善描述
3. 官方认可，草稿书写
4. 候选，厂商跟进实现
5. 正式成为 ECMAScript 标准并推出



所谓暂时死区，就是不能在初始化之前，使用变量。

- hash：每次 hash 值的变化，浏览器不发出请求，也就不会刷新页面，还会触发hashchange
- history：pushState 和 replaceState，通过这两个 API 可以改变 url 地址且不会发送请求
  - 但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求
    - 为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。
