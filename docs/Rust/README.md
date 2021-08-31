- Rust
  - 设计理念
    - 安全、性能、并发
  - 语法规范
    - 文法
      - 词法
        - 关键字
        - 标识符
        - 注释
      - 语法
    - 语义
  - 语言特性
    - 基于表达式
    - 多范式
      - 面向过程（命令式）
      - 面向对象
      - 函数式
  - 异步编程
  - WSAI
- 资料
  - [Microsoft Rust 教程](https://docs.microsoft.com/zh-cn/learn/paths/rust-first-steps/)



程序语言本身
语法
语言特性
使用技巧
最佳实践
内存管理
设计哲学
编程范式
常用类库
编译/解释机制和运行环境

1. 语言规范（语法规则）
2. 编程范式（编程思想）
3. 类型系统
4. 内存管理


println! 宏
宏是什么？

- 基础
  - 程序结构
    - main
    - 语句以分号 ; 结尾
  - 变量
    - 声明
      - let
    - 不可变与可变
      - 变量绑定值后默认不可变
      - mut
    - 可重复声明（变量隐藏，原变量不会再被访问到）
  - 数据类型
    > 编译器通常可以根据绑定值推断变量的数据类型
    - 数字
      - 整数数字（默认 i32）
      - 浮点数
    - 布尔
    - 文本
      - 字符 char
      - 字符串 &str
      - String
    - 元组 `(<value>, <value>, ...)`
    - 结构体
      - 经典结构
      - 元组结构
      - 单元结构？
    - 枚举
    - 数组 
      > 数组长度、元素类型永远不会更改
      ```rust
      // Set first day of week
      let first  = days[0];

      // Set second day of week
      let second = days[1];
      ```
    - 向量
      > 向量的大小或长度可以随时增大或缩小
      ```rust
      // 声明和初始化向量的常用方法是使用 vec! 宏
      // Declare vector, initialize with three values
      let three_nums = vec![15, 3, 46];
      // Declare vector, first value = "0", length = 5
      let zeroes = vec![0; 5];

      // 使用 Vec::new() 方法创建向量时，可在向量末尾添加和删除值。
      // Create empty vector, declare vector mutable so it can grow and shrink
      let mut fruit = Vec::new();
      fruit.push("Apple");
      ```
    - 哈希  `HashMap<K, V>`
  - 流程控制
    - 条件 if
    - 循环
      - loop 循环
      - while 条件循环
      - for 集合范围循环
  - 函数
    - 函数的定义位置无所谓
    - 返回值类型 `-> <type>`
    - 在 Rust 中，始终返回代码块 ({ ... }) 中最后一个表达式的值。 可以根据需要显式使用 return 关键字。
- 资料
  - [rust-training](https://github.com/tyrchen/rust-training)
  - [透过 Rust 探索系统的本原：编程语言](https://zhuanlan.zhihu.com/p/365905673)


核心价值观：
- Memory safety
- Speed (Zero cost abstraction)
- Productivity


引入了所有权（ownership）和借用机制来提供内存安全
创造性地使用了类型安全来辅助并发安全
golang 对异步 IO 支持有 green thread，Rust 在 async/await，高级的抽象并不必然以牺牲性能或者添加额外的运行时为代价？
公开透明，Rust 将所有你需要了解的细节明确地在编译环节暴露出来，并且把什么可为什么不可为的边界清晰地展现。很多语言没有明确的边界，有些地方做很多限制，有些地方却什么限制都没有，使得编程本身需要靠开发者额外的自觉或者规范才能保证代码的正确性。


在一个作用域（scope）内，一个值（value）只能有一个所有者（owner）：
当所有者离开作用域时，值被丢弃（Drop）
值可以从一个作用域移动（move）到另一个作用域，但当前所有者立刻失去对值的所有权
值可以被借用（reference），但借用的生存期不能超过所有者的生存期（lifetime）：
在一个作用域内，允许有多个不可变借用
或者至多一个可变借用（可变借用是独占的）
