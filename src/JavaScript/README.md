---
title: 'JavaScript'
tags:
	- javascript
---
## JavaScript

- JavaScript
  - JavaScript 是一种弱类型的、动态的语言
    - 使用之前就需要确认其变量数据类型的称为静态语言；而 JavaScript 只有在运行中才能确定变量数据类型，意味着同一个变量可以保存不同类型的数据，这类语言称为动态语言
  - 语言规范
    - 词法（定义组成语言的单词， 是语言中最小单元）
    - 语法（将单子组织成有含义的短语和句子的规则）
    - 语义（结合上下文，可以推导出语句的真实含义）
  - 类型系统
    - 原始类型
    - 对象类型（引用类型）
    - [函数类型（特殊对象类型）](./JavaScript%20函数.md)
    - 类型检测
      - typeof
        - 缺点 `typeof null === 'object'`
      - instanceof
        - 缺点 `[引用类型] instanceof Object // true`
      - Object.prototype.toString
  - 语言范式
    - 面向对象编程
    - 函数式编程
  - 运行时（运行时环境，与语言特性实现相关）
    - [内存管理机制](./JavaScript%20内存管理机制.md)
      - 堆栈内存
      - 标记-清除
    - 执行过程
      - [编译时](./JavaScript%20代码执行过程（编译时）.md)
      - [运行时](./JavaScript%20代码执行过程（运行时）.md)
        - 作用域
        - 变量提升
        - 调用栈
        - 执行上下文
          - [this 指针](./this 指针.md)
        - 闭包
        - [微任务、Promise](./JavaScript 微任务、Promise.md)
    - 对象模型
    - 异步模型
      - 回调
      - Promise
      - async/await（generator + promise）同步
    - 元编程
      - defineObjectProperty
      - Proxy & Reflect
  - ES Next

  - JavaScript 专题
    - [JavaScript 正则表达式](./JavaScript%20正则表达式.md)
    - [JavaScript 模块](./JavaScript%20模块.md)
    - 手写 Promise 实现
    - 序列化
      - [JSON.stringify() 的 5 个秘密特性](https://medium.com/javascript-in-plain-english/5-secret-features-of-json-stringify-c699340f9f27)

- 学习资料
  - [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)


强制类型
- 报错
- 返回错误值
- 类型转换