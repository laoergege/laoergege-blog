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
    - - 解构
    - 扩展
    - 剩余
  - 数据结构
    - [数组](./JavaScript%20数组%20API%20总结.md)
    - Map&Set
    - [迭代器和生成器](#迭代器和生成器)
  - [JavaScript 对象](./JavaScript%20对象.md)
  - [JavaScript 异步编程](./JavaScript%20异步编程.md)
  - 运行机制和原理
    - [JavaScript 运行时机制](./JavaScript%20代码执行机制.md)
    - [JavaScript 内存管理机制](./JavaScript%20内存管理机制.md)
  - JavaScript 元编程
  - ECMASCript 规范 & V8
- api
  - [手写 call、apply、bind](https://github.com/laoergege/laoergege-blog/issues/79)
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
  - 迭代器协议
    - next: `(val?: any) => { value, done }`
    - return: 可选，`(value?: any) => { value, done: true }`
    - throw: 可选，`(value?: any) => { value, done: true }`
  - 可迭代：`Symbol.iterator`：定义可迭代对象，即意味着能够隐式转换成迭代器，比如在 `for...of` 中
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
    - 内置可迭代对象
      - 数组类型就是典型既可迭代，又属于 ArrayLike 的类型
      - Map、Set
      - 字符串
    - 能够隐式转换成迭代器的 API
      - `for...of`、`for...in`、`for await (...)`
      - `Map() WeakMap() Set() WeakSet() Promise.all() Promise.allSettled() Promise.race() Promise.any() Array.from()`
      - `...xx`
    - 异步迭代器
      - 类似迭代器，但 next: `(val?: any) => Promise<{ value, done }>` 
      - `Symbol.asyncIterator` 
  - 生成器（Generator）
    - 生成器是一种特殊的迭代器，除了迭代行为，还可以使用 yield 等高级功能,生成器会更合适
    - `function*`
      - `yield [exp]`
      - `return [exp]`
      - `yield*`：嵌套生成器。暂停执行，并且将执行权转移到另一个 Generator 函数或可迭代对象中。直到这个函数或对象迭代结束后，执行权才会返回到原 Generator 函数中
    - 函数体内外的数据交换和错误处理机制
      - `generator.next(val)`、`generator.throw(err)` <=> `yield [exp]`
    - 异步生成器：`async function*`
      - yield 命令后面的值，会被自动包装成一个 Promise 对象
      - `yield [exp]` => `yield Promise.resolve({ value: exp, done })`
    - 生成器场景
      - 状态机、协程
      - 惰性迭代器
      - 无限迭代器、多值、数据流、流式处理



- Thunk
  - 替换程序
  - Thunk 函数的定义，它是“传名调用”的一种实现策略，用来替换某个表达式
  - JavaScript 语言的 Thunk 函数：Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
    - Thunk 函数现在可以用于 Generator 函数的自动流程管理
    - 这种方法就是 Thunk 函数，因为它可以在回调函数里，将执行权交还给 Generator 函数
  - Thunk 函数并不是 Generator 函数自动执行的唯一方案。因为自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。