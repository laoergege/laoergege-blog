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