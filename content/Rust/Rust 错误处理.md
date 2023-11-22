---
discussionID: dWMz8FK-E8CVoRq3yn_un
release: true
tags:
 - rust
---

# Rust 错误处理

- Rust 错误处理
  - [异常：panic! 和 catch_unwind](#异常panic-和-catch_unwind)
  - 返回值 + 类型系统：使用一个内部包含正常返回类型和错误返回类型的复合类型（[Result / Option](#result--option)），**通过类型系统来强制错误的处理和传递**
  - 错误处理及传递
    - [错误匹配](#错误匹配)
    - [unwrap、expect](#unwrapexpect)
    - [? 操作符](#操作符)
    - 函数式错误处理


## 异常：panic! 和 catch_unwind

异常是不可恢复的严重错误，Rust 使用 `panic!` 抛出异常，程序将可有两种形式：

- 展开（默认）
  - 调用栈往回走
  - 清理栈帧数据
- 终止
  - 直接停止程序，让 OS 清理数据
  - cargo.toml 配置 `panic = abort`

> 使用 `panic::catch_unwind` 可以捕获异常并将其转成 `Result`

```rust
fn main() {
    // 手动抛出错误，并捕获
    if let Err(error) = panic::catch_unwind(error) {
        println!("panic captured: {:#?}", error)
    };
}
fn error() {
    panic!("发生错误")
}
```

## Result / Option

Option：表示可能缺少值的情况。

```rust
pub enum Option<T> {
    None,
    Some(T),
}
```

Result：表示可能处理成功或失败的结果。

```rust
#[must_use = "this `Result` may be an `Err` variant, which should be handled"]
pub enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

> 编译器会对有 must_use 标注的所有类型做特殊处理：如果该类型对应的值没有被显式使用，则会告警

## 错误匹配

```rs
use std::{
    fs::File,
    io::{Error, ErrorKind, Read},
};

fn main() {
    let path = "./Cargo.toml";

    // 打开对应路径的文件，不存在则直接创建
    match File::open(path) {
        Ok(file) => file,
        Err(err) => match err.kind() {
            ErrorKind::NotFound => match File::create(path) {
                Ok(file) => file,
                Err(e) => panic!("Problem creating the file: {:?}", e),
            },
            _ => panic!("Problem opening the file: {:?}", err),
        },
    };
}
```

使用错误匹配必须处理正确、错误两种情况，有时我们可能仅仅关注正确的逻辑路径，而希望错误自动传播，Rust 为我们提供以下方法：

- `unwrap()`、`expect()`
- `?` 操作符

## unwrap、expect

在使用 Option 和 Result 类型时，开发者也可以对其 `unwarp()` 或者 `expect()` 强制把 Option 和 Result 转换成 T，如果无法完成这种转换，也会 panic 出来：

> expect 跟 unwarp 类似，但可以自定义错误信息 

```rs
use std::{
    fs::File,
    io::{Error, ErrorKind, Read},
};
use std::panic;
fn unwrap_demo() {
    fn read_file_contents(path: &str) -> usize {
        let mut content = String::new();

        File::open(path)
            .unwrap()
            .read_to_string(&mut content)
            .unwrap()
    }

    panic::catch_unwind(|| read_file_contents("./Cargo.toml")).unwrap();
}
```

## `?` 操作符

- `?` 操作符可以直接获取 `Result/Option` 内容并且自动传播错误
  - 被 `?` 所应用的错误发生时会隐式得调用其 from 函数
  - `Trait std::convert::From` 上的 from 函数用于错误类型之间的转换
  - `?` 所应用的错误类型必须能够通过 from 转换为函数所返回的错误类型才行

```rust
use std::{
    fs::File,
    io::{Error, Read},
};
fn main() -> Result<(), Error>{
    fn read_file_contents(path: &str) -> Result<String, Error> {
        let mut content = String::new();

        File::open(path)?.read_to_string(&mut content)?;

        Ok(content)
    }

    println!("{}", read_file_contents("/Users/lianyuansheng/GitHub/rust-demos/err/Cargo.toml")?);
    Ok(())
}
```