---
discussionID: kBsGfHWKqVuawgv8A0P3E
release: true
tags:
 - javascript
---

# JavaScript

- JavaScript
  - [JavaScript 语法结构](./JavaScript%20语法结构.md)
  - [JavaScript 模块](./JavaScript%20模块.md)
  - [JavaScript 类型系统](./JavaScript%20类型系统.md)
  - [JavaScript 对象](./JavaScript%20对象.md)
    - [迭代器和生成器](#迭代器和生成器)
  - 数据结构
    - [数组](./JavaScript%20数组%20API%20总结.md)
    - Map&Set
  - [JavaScript 异步编程](./JavaScript%20异步编程.md)
  - 运行机制和原理
    - [JavaScript 运行时机制](./JavaScript%20代码执行机制.md)
    - [JavaScript 内存管理机制](./JavaScript%20内存管理机制.md)
    - [编译时](./JavaScript%20代码执行过程（编译时）.md)
  - [JavaScript 元编程](./JavaScript%20%E5%85%83%E7%BC%96%E7%A8%8B.md)
    - Proxy&Reflect
  - [JavaScript 正则表达式](./JavaScript%20正则表达式.md)
  - V8
  - ECMASCript 规范
- api
  - [手写 call、apply、bind](https://github.com/laoergege/laoergege-blog/issues/79)
  - [手写 instanceof](https://github.com/laoergege/laoergege-blog/issues/74)
  - [手写 new](https://github.com/laoergege/laoergege-blog/issues/78)
  - [数组扁平化](https://github.com/laoergege/laoergege-blog/issues/64)
  - [数组去重](https://github.com/laoergege/laoergege-blog/issues/63)
  - [手写节流、防抖](https://github.com/laoergege/laoergege-blog/issues/83)
  - [手写 实现柯里化](https://github.com/laoergege/laoergege-blog/issues/87)
- 资料
  - [ES6 入门教程](https://es6.ruanyifeng.com/)
  - 极客专栏《重新前端》
  - [现代 JavaScript 教程](https://zh.javascript.info/)
  - [Deep JavaScript](https://exploringjs.com/deep-js/toc.html)
  - [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)

## 迭代器和生成器

- 迭代器（Iterators）
  - 迭代协议
    - next: `(val?: any) => { value, done }`
    - return: 可选，`(value?: any) => { value, done: true }`
    - throw: 可选，`(value?: any) => { value, done: true }`
  - `Symbol.iterator`：定义**可迭代**对象
    ```js
    // Satisfies both the Iterator Protocol and Iterable
    const myIterator = {
      next() {
        // ...
      },
      [Symbol.iterator]() {
        return this;
      },
    };
    ```
  - `for...of...`：自动迭代，调用迭代器 next 方法并解构 value
  - 生成器（Generator）
    - 生成器是一种特殊的迭代器，除了迭代行为，还可以使用 yield 等高级功能,生成器会更合适
    - `function*`
      - `yield [exp]`
      - `return [exp]`
      - `yield*`：嵌套生成器。暂停执行，并且将执行权转移到另一个 Generator 函数或可迭代对象中。直到这个函数或对象迭代结束后，执行权才会返回到原 Generator 函数中
    - 数据交互：`generator.next(val)`、`generator.throw(val)` <=> `yield [exp]`
  - 异步迭代器
    - 类似迭代器，但 next: `(val?: any) => Promise<{ value, done }>` 
    - `Symbol.asyncIterator` 
    - 异步生成器：`async function*`
      - yield 命令后面的值，会被自动包装成一个 Promise 对象
      - `yield [exp]` => `yield Promise.resolve({ value: exp, done })`
    - 异步迭代：`for await (...)`
  - 生成器场景
    - 协程
    - 惰性迭代器
    - 无限迭代器、多值、数据流、流式处理
    - 状态机