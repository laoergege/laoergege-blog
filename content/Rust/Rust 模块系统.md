---
release: true
tags: 
 - rust
 - 模块
---

# Rust 模块系统

::tl
- Rust 模块系统
  - Workspace：多个 Package 工作空间
    - Package：Cargo 功能工作的基本单位
      - 至多包含一个库 crate(library crate)；可以包含任意多个二进制 crate(binary crate)
      - 通过将文件放在 `src/bin` 目录下，一个包可以拥有多个二进制 crate：每个 `src/bin` 下的文件都会被编译成一个独立的二进制 crate
    - Crate：crate 是 rustc 编译的代码单位
      - crate 对外使用有两种形式
        - library crate
        - binary crate
      - **crate 是一颗模块树，可以类比文件系统，对模块的引用路径则是基于该模块树**
      - crate root 是一个源文件，Rust 编译器以它为起始点，并构成你的 crate 的根模块
        - `src/main.rs` 就是一个与包同名的二进制 crate 的 crate root
        - `src/lib.rs` 则是与包同名的库 crate 的 crate root
  - 模块定义：`mod xxx {...}`
    - 模块成员默认私有
      - `pub`：公开模块成员
      - `pub struct{ pub xxx, ... }`：即使 struct 公开，但内部字段依旧私有，需要 `pub` 指定字段成员
      - `pub emnu`：所有变体都是公开的
    - `mod xxx;`：可将功能拆分成多个**文件模块**，自动加载链接到目标模块成为其子模块
      - 同个文件模块只能通过 `mod` 声明一次，其他地方引入则需要通过 `use` + 模块路径
      - 编译器会在下列路径中寻找模块代码
        - `aaa/xxx.rs`
        - `aaa/xxx/mod.rs`（旧风格，编译器只允许其中一个风格）
  - 模块路径
    - `::`：rust 语言中引用路径分割符
    - 路径有两种形式
      - 绝对路径（absolute path）是以 crate root 为准 `crate` 字面量开头的全路径
      - 相对路径（relative path）从当前模块开始，以 `self`、`super` 或模块/包标识符开头
    - `use`
      - 使用 `use` 关键字将其他路径模块引入当前作用域
      - 使用 `use` 关键字来引入外部包的模块
      - 嵌套路径，消除重复路径
        - `use xxx::{ ... }`
        - `use xxx::{self, ... }`
      - `use xxx::*`：引入所有公开成员
      - `pub use`：导入导出
      - `as` 定义成员别名：`use std::io::Result as IoResult;`
      - Rust 推荐的最佳实践
        - 使用 use 引入结构体、枚举和其他项时，习惯是指定它们的完整路径
        - 而函数路径只指定到父级，保留父级标识能更好区分是否本地定义
::

## 文件模块示例

有如下目录，main.rs 是 root 模块。

```sh
src
├── main.rs
├── post.rs
└── test.rs
```

main.rs 文件里 `mod post;` 声明 post 模块为其子模块。使用 post 模块内的功能，需要使用 `use` 关键字和其路径将模块功能引入当前作用域。

```rs
// main.rs
mod post;
use post::{Post, Summary};

fn main() {
    trait_demo();
}

fn trait_demo() {
    let post = Post {
        title: "hello rust".to_string(),
        author: "lys".to_string(),
        content: "study rust".to_string(),
    };

    println!("{}", post.summarize());
}
```

```rs
// post.rs
pub trait Summary {
    fn summarize(&self) -> String;
}

impl Summary for Post {
    fn summarize(&self) -> String {
        format!("文章{}, 作者是{}", self.title, self.author)
    }
}

pub struct Post {
    pub title: String,   // 标题
    pub author: String,  // 作者
    pub content: String, // 内容
}

```

在 test.rs 中，我们是无法再次 `mod post;`，同理我需要根据 post 在模块树上路径进行引入。

```rs
// mod post; // err
use crate::post::*;
```