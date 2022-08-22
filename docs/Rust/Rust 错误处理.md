---
tags:
 - rust
---

# Rust 错误处理

## Rust 的错误处理

Rust 的错误处理方式是“返回值 + 类型系统”，通过类型系统来构建主要的错误处理流程：1. 强制现实处理 2. 通过类型手段简化错误的处理。

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

Result 类型声明时还有个 must_use 的标注，编译器会对有 must_use 标注的所有类型做特殊处理：如果该类型对应的值没有被显式使用，则会告警。这样，保证错误被妥善处理。

### 使用模式匹配来安全地访问给定类型的所有可能值

### Result 与 ? 操作符

如果你只想像异常处理那样进行传播错误，不想就地处理，可以用 ? 操作符：

```rust
fn read_file_contents(path: &str) -> Result<String, std::io::Error> {
    let mut content = String::new();

    File::open(path)?.read_to_string(&mut content)?;

    Ok(content)
}
```

? 操作符内部被展开成类似这样的代码：

```rust
match result {
  Ok(v) => v,
  Err(e) => return Err(e.into())
}
```

### Option、Result 与函数式错误处理方式

Rust 还为 Option 和 Result 提供了大量的辅助函数，如 map / map_err / and_then，你可以很方便地处理数据结构中部分情况

### panic! 和 catch_unwind

> 使用 Option 和 Result 是 Rust 中处理错误的首选。一般而言，panic! 是不可恢复或者不想恢复的错误，我们希望在此刻，程序终止运行并得到崩溃信息。

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