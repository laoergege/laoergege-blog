---
release: true
tags:
 - rust
---

# Rust 基础

- Rust 编程基础
  - 变量
    - Rust 的变量命名规范：蛇形命名法 (snake_case)
    - 变量声明：`let <xxx>`
      - 默认不可变
      - 隐藏变量：即可重复声明变量
      - 可变变量声明：`let mut <xxx>`
    - 常量声明：`const <xxx> :<type>`
      - 使用**必须注明值的类型**
      - 常量在其声明的作用域之中，整个程序生命周期中都有效
        ```rust
        fn main() {
            println!("Hello, world!");

            let mut p;
            {
                const N: usize = 10;
                let a = 20;

                fn printN() {
                    println!("{}", N);
                    println!("{}", a); // error
                }

                p = printN
            }

            p(); // 10
        }
        ```
        - TODO: 
  - 值和类型
    - 类型是对值的区分，它包含了值在内存中的长度、对齐以及值可以进行的操作等信息；值是无法脱离具体的类型讨论的
    - rust 编译器会自动隐式类型推导
    - 类型分类
      - 标量类型
        - 数字类型
          - TODO: [整型溢出](https://kaisery.github.io/trpl-zh-cn/ch03-02-data-types.html#%E6%95%B4%E5%9E%8B%E6%BA%A2%E5%87%BA)
          - 整数除法会向零舍入到最接近的整数 `let truncated = -5 / 3; // 结果为 -1`
      - 复合类型：多个类型值组合在一起共同表达单个类型值的复杂数据结构
        - 元组
          - TODO: 单元（unit） 元组，表示空值或空的返回类型
        - 数组
          - `let a = [1, 2, 3, 4, 5];`
          - `let a: [i32; 5] = [1, 2, 3, 4, 5];`
          - `let a = [3; 5];` 创建一个长度为 5 的数组，每个元素都为 3
        - 结构体 `struct`
      - 枚举 `enum`
    - 类型转换
  - 函数 `fn xxx_xxx(<arg:type>, ...) -> <type>{...}`
    - 函数是一等公民
    - 函数声明提升
    - 返回值
      - `return`：指定返回值
      - 语句块会对里面最后表达式的值作为其值返回，否则默认 `; -> ()`
    - 不支持函数重载
    - 闭包
      - 使用两个竖线符号`||`定义，而不是用`fn ()`来定义
  - 语句、表达式及运算符
    - 语句（Statements）是执行一些操作但不返回值的指令，以分号";"结尾； 表达式（Expressions）计算并产生一个值
    - **面向表达式**：
      - 一切皆是表达式，即一切皆类型
      - 在 Rust 中，无论是（大多数）语句还是表达式会产生值，值即类型，rust 就是通过一切类型检查保证内存安全、并发安全
      - 比如，分号也是一种表达式，返回单元类型 `; -> ()`
    - 控制流
      - 顺序
      - 跳转
        - 分支 
          - 分支表达式：`let a = if [condition] {...} else {...}`
        - 循环
          - `loop {...}`：一直循环
            - 循环中断返回值 `let a = loop { break <exp> }`
          - `while [expr] {...}`：条件循环
          - `for ... in [迭代器] {...}`：集合迭代
            - 次数循环 `for _ in 0..5` 循环 5 次
        - 模式匹配（基于类型的分支）
          - `match expr {}`
            - 解构
            - _
          - `if let`
          - `while let`
  - 枚举 `enum`
  - 结构体 `struct`
    - 默认可变
    - 使用**字段初始化**简写语法
      ```rs
      fn build_user(email: String, username: String) -> User {
          User {
              active: true,
              username,
              email,
              sign_in_count: 1,
          }
      }
      ```
    - 使用结构体更新语法从其他实例创建实例
      ```rs
      fn main() {
          let user2 = User {
              email: String::from("another@example.com"),
              ..user1
          };
      }
      ```
    - 实现方法成员：`impl [Type] { fn xx(&self) -> [Type] {...} }`
      - 方法：以 `&self` 为第一参数的函数
        - `&self` 实际上是 `self: &Self` 的缩写
        - 仅仅使用 `self` 作为第一个参数来使方法获取实例的所有权是很少见的；这种技术通常用在当方法将 self 转换成别的实例的时候
      - 静态方法：不以 `&self` 为第一参数的函数
        - 访问：`Xxx::method`
      - 自动引用和解引用机制
        - 当使用 `object.something()` 调用方法时，Rust 会自动为 object 添加 `&`、`&mut` 或 `*` 以便使 object 与方法签名首个参数匹配
          ```rs
          struct Foo;

          impl Foo {
              fn foo(&self) {
                  println!("foo");
              }
          }

          fn main() {
              let f = Foo;
              f.foo();  // Rust 会自动将 f 转换为其引用 &f 来匹配 foo 方法的签名
          }
          ```
    - 元组结构体 `struct Xxx(xxx, xxx, xxx, ...)`：匿名字段，通过索引访问
    - 单元结构体 `struct Xxx`：如果你定义一个类型，但是不关心该类型的内容, 只关心它的行为时，就可以使用单元结构体
  - 接口 `trait`：定义抽象的公共行为
    - 定义 `trait Xxx{...}`
    - 实现 `impl [trait] for [type]{...}`
    - 默认实现 `trait Xxx{ fn xxx() {}; ...}`
    - `trait` 必须和类型一起引入作用域
      ```rs
      #![allow(dead_code)]

      mod shapes {
          pub struct Circle;

          impl Circle {
              pub fn new() -> Self {
                  Circle
              }
          }
      }

      mod traits {
          pub trait Drawable {
              fn draw(&self);

              // 默认实现
              fn test(&self) {}
          }

          impl Drawable for super::shapes::Circle {
              fn draw(&self) {
                  println!("Drawing a circle.");
              }
          }
      }

      fn main() {
          // 必须同时引入 Circle 类型和 Drawable 特征
          use shapes::Circle;
          use traits::Drawable;

          let circle = Circle::new();
          circle.draw(); // 现在可以调用 draw 方法

          circle.test();
      }
      ```
    - 不能为外部类型实现外部 `trait`，确保了其他人编写的代码不会破坏你代码
    - Trait Bound
      - `impl<T: Trait> Xxx<T, ...> {...}`
      - 通过 + 指定多个 trait bound
      - 通过 where 简化 trait bound
    - 
    - Trait Object
      - impl Trait
