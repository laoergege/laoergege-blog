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