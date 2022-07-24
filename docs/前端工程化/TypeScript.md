# TypeScript

- TypeScript
  - 类型系统
    - 数据类型
      - 原始类型
      - 复合类型
        - 数组
        - 元组类型（Tuple）
        - 对象
          - Class
            - 属性修饰符：`public / private / protected / readonly / override`
            - static
            - abstract
        - 联合类型及枚举
      - 字面量类型
        - 对象字面量
        - 模板字面量
        - 字符串字面量
        - 数字字面量
        - 布尔字面量
      - 函数类型
        - 函数类型声明
        - 重载：按照重载的声明顺序往下查找的
        - void 类型能更好地说明一个函数没有进行返回操作
      - 接口：声明函数结构，也可以声明类的结构
      - 内置类型
        - any、unkown 区别
          - any 表示任意类型，可以将其他类型赋值给 any 或者将 any 赋值给其他类型，相当于 typescript 逃生门，会跳过类型检查
          - unkown 表示未知类型，可以将任意类型的值赋值给 unknown，但 unknown 类型的值只能赋值给 unknown 或 any，并且使用 unknown，TypeScript 会强制类型检测，你必须使用**类型缩小、类型断言**手段去确定类型
        - never、void 区别
          - never 表示永远不会发生值的类型，比如函数抛出异常、死循环、
          - never 类型的变量能够赋值给另一个 never 类型变量
    - 类型断言：在 TypeScript 类型分析不正确或不符合预期时，将其断言为此处的正确类型
      - `variable as type`、`<type>variable`
      - `as const` 推断为常量类型
      - 非空断言 `!`
      - 可选链 `?`
    - 类型推导
      - 基于表达式、上下文推断类型的能力称之为“类型推断”
      - 类型拓展
      - 类型收窄
        - 类型守卫与类型控制流分析
    - 类型编程
      - 类型工具
      - 泛形
    - [类型层级](#类型层级)
  - 编译器
    - tsc
      - `--init`
      - `--watch`
    - tsconfig.json
      - `strictNullChecks`：没有开启情况下，null 与 undefined 会被视作其他类型的子类型
      - [`rootDir` + `outDir`：控制输出的目录结构生成](https://www.typescriptlang.org/zh/tsconfig#rootDir)
      - `noImplicitAny: true`：防止隐式地推导类型为 any
  - 工程实践
    - [Monorepo & Project References](#monorepo--project-references)
    - 类型增强
      - 类型声明文件(d.ts)
      - 类型声明库 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
    - [Monorepo & Project References](#monorepo--project-references)
    - VSCode 集成
      - 内置 TypeScript Language Service
      - VS Code 中指定项目 ts 版本
        ```js
        {
          "typescript.tsdk": "node_modules/typescript/lib"
        }
        ```
    - JS + JSDoc + DTS
      - [typescript & jsdoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
    - 配置复用(extends)
      > 配置文件中的相对路径都是相对于它们的源配置文件，故相对路径配置选项时必须在子配置文件中，不能进行继承
    - 模块声明解析
      - 第三方模块
      - 自定义模块
    - 声明文件生成
  - 学习资料
    - [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)

## 函数类型声明

```ts
function foo(name: string): number {
  return name.length;
}

const foo = function (name: string): number {
  return name.length;
};

const foo = (name: string): number => {
  return name.length;
};

type FuncFoo = (name: string) => number;

const foo: FuncFoo = (name) => {
  return name.length;
};

interface FuncFooStruct {
  (name: string): number;
}
```

```ts
interface FooStruct {
  new (): Foo;
}
```

## 类型层级

- 类型层次
  - any、unkown
  - 特殊的 Object ，它也包含了所有的类型，但和 Top Type 比还是差了一层
  - String、Boolean、Number 这些装箱类型
  - 原生类型、复合类型
  - 字面量类型、undefined、null
  - void（父类 undefined、null）
  - never

在此下的心智模型：

1. 子类型可赋值给父类型，即向上转换（upcast）：根据 Liskov 替换原则，向上转换是安全的，因此编译器可以让您隐式执行它，无需提出任何问题。
   
   ```ts
   let t: number = 123;
   let a: any = t;
   ```

   实际上类型断言的工作原理也和类型层级有关，在判断断言是否成立，即差异是否能接受时，实际上判断的即是这两个类型是否能够找到一个公共的父类型。

   ```ts
   let t: number = 123;
   let a: any = t;
   // (t as string) = '123'

   // 先向上断言，再向下断言
   (t as unknown as string) = "123";
   ```

   当然 TypeScript 也有不允许隐式向上转换的情况：
   将子类字面量对象分配给父类字面量类型
   ```ts
   type UserWithEmail = { name: string; email: string };
   type UserWithoutEmail = { name: string };

   type A = UserWithEmail extends UserWithoutEmail ? true : false // true
   // 但是下面情况却不被允许 
   let userB: UserWithoutEmail = { name: "foo", email: "foo@gmail.com" };
   ```

2. 父类型不可以赋值给子类型，即向下转换（downcast），但在 Typescirpt 还是存在一些特例情况：

   any 类型可赋值给任意子类型，any 类型的存在是为了作为 Typescript 逃到 JavaScript 世界的后门

   ```ts
   let any: any;

   let num: number = any;
   ```

   实践的时候更多推荐使用 unknown，毕竟可以将任意类型的值赋值给 unknown，但 unknown 类型的值只能赋值给 unknown 或 any

## typescirpt 场景技巧

### 使用类型断言跨类型转换

## Monorepo & Project References

> 官方文档 [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)

Project References 可以把一个 typescirpt 大项目拆分，分开构建。引入 references 后：

1. 可通过 `tsc --build` 自动、顺序、增量构建 reference project 及目标项目
2. 编译时不会加入 reference project 的代码，只会加载其声明文件

在 monorepo 项目结构中根项目 tsconfig.json 中通过 `references` 引入其他项目，即可在根工作路径下享受 `tsc -b` 一个命令启动相关项目编译，无需编写多个 `tsc -p` 命令编排。

root tsconfig.json

```json
{
    "references": [
        {
            "path": "./tsconfig.esm.json"
            "prepend": true
        },
        {
            "path": "./tsconfig.cjs.json"
        }
    ],
    "files": []
}
```

> ⚠️ 必须添加 `"files": []` 不然会造成重复编译

reference project tsconfig.json

```json
{
  "compilerOptions": {
    "composite": true, // 必须开启
    "declaration": true, // 必须开启
    "declarationDir": "types",
    "outDir": "lib",
    "rootDir": "src/node"
  },
  "include": ["src/node"]
}
```

1. **composite，必须开启**
2. declaration 自动默认为 true。
3. **必须 include 或者 files 指定包含编译文件**。如果违反了这一约束，tsc 将告诉你哪些文件没有被指定。
4. 如果没有明确指定 rootDir，则默认为包含 tsconfig.json 文件的目录。

可以参考笔者这个[项目](https://github.com/laoergege/laoergege-blog/tree/master/packages/vuepress-plugin-vssue-next-compat)配置。

## 学习参考

- [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901)
- [The Type Hierarchy Tree](https://www.zhenghao.io/posts/type-hierarchy-tree#the-bottom-of-the-tree)





never what how

TypeScript 创建 never 了一个空类型（又名不可居住的类型）：一种我们在运行时无法获得实际值的类型，我们也不能对该类型做任何事情，例如访问其实例上的属性。典型的用例 never 是当我们想从一个永远不会返回的函数中输入一个返回值。

一个函数可能不会返回有几个原因：它可能会在所有代码路径上抛出异常，它可能会永远循环，因为它有我们想要连续运行的代码，直到整个系统关闭，比如事件循环。所有这些场景都是有效的。

any 类型的万能性也导致我们经常滥用它，比如类型不兼容了就 any 一下，类型不想写了也 any 一下，不确定可能会是啥类型还是 any 一下

产生 never 类型的另一种方法是使两种不兼容的类型相交 - 例如{x: number} & {x: string}.
