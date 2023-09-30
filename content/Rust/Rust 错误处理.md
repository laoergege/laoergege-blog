---
discussionID: dWMz8FK-E8CVoRq3yn_un
release: true
tags:
 - rust
---

# Rust 错误处理

- Rust 错误处理：主要用类型系统来处理错误，辅以异常来应对不可恢复的错误
  - 返回值 + 类型系统
    - 通过类型来表征错误，使用一个内部包含正常返回类型和错误返回类型的复合类型([Result / Option](#result--option))，**通过类型系统来强制错误的处理和传递**
      - 函数式错误处理
      - [使用 ? 操作符自动传播错误](#使用--操作符自动传播错误)
  - [异常：panic! 和 catch_unwind](#异常panic-和-catch_unwind)

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
    io::{Error, Read, ErrorKind},
};
fn main(){
    let path = "./Cargo.toml";
    let file_res = File::open(path);

    let file = {
        if let Err(err) = file_res {
            match err.kind() {
                ErrorKind::NotFound => match File::create(path) {
                    Ok(fc) => fc,
                    Err(e) => panic!("Problem creating the file: {:?}", e),
                },
                _ => panic!("Problem opening the file: {:?}", err)
            }
        } else {
            file_res.unwrap()
        }
    };

    println!("file metata is: {:?}", file.metadata().unwrap())
}
```

## 使用 ? 操作符自动传播错误

用 `?` 操作符可以直接获取料想结果简化代码，并且自动传播错误：

> `?` 只能跟随方法调用后解构 Result、Option

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

? 操作符内部被展开成类似这样的代码：

```rust
match result {
  Ok(v) => v,
  Err(e) => return Err(e.into())
}
```

## 异常：panic! 和 catch_unwind

异常意味着程序进入了一个未知的，不确定的状态

异常是不可恢复的严重错误，Rust 使用 `panic!` ，程序终止运行并得到崩溃信息。

Rust 也提供了特殊的异常处理能力：

- `panic!` 抛出异常
- `panic::catch_unwind` 捕获异常

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

在使用 Option 和 Result 类型时，开发者也可以对其 unwarp() 或者 expect()，强制把 Option 和 Result 转换成 T，如果无法完成这种转换，也会 panic! 出来：

```rs
fn main() {
    fn read_file_contents(path: &str) -> Result<String, Error> {
        let mut content = String::new();

        File::open(path)
            .unwrap()
            .read_to_string(&mut content)
            .unwrap();

        Ok(content)
    }

    read_file_contents("./Cargo.toml").unwrap();
}
```

## 学习参考

- 极客时间 -《陈天 · Rust 编程第一课》