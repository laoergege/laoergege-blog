# TypeScript

- TypeScript
  - 类型注释
  - 类型系统
    - 原始类型
      - null vs undefined vs void
        - 在 JavaScript 中，null 与 undefined 分别表示“这里有值，但是个空值”和“这里没有值”，而在 TypeScript 中，null 与 undefined 类型都是有具体意义的类型
        - void：表示一个空值类型，常用于表示一个函数没有返回操作或者没有显式返回一个值的函数的返回值
          - void 类型无法赋值给其他类型
          - 如果一个变量为 void 类型，只能赋予 undefined 或者 null
    - 复合类型
      - 数组
        - 只读数组
          - `ReadonlyArray`
          - `let arr: readonly any[] = [1, 2, 3];`
        - 元组（Tuple）
          - 具名元组 `const arr7: [name: string, age: number, male: boolean] = ['linbudu', 599, true];`
      - 对象
        - 属性修饰符
          - readonly
          - 可选属性 `?`
        - Interface：声明描述对象的结构，也可以声明函数对象结构
        - Class
          - 访问修饰符：`public / private / protected / readonly / override`
            - override：确保派生类尝试覆盖的方法一定在基类中存在定义
          - 抽象类 abstract vs Interface
            - 都是描述类的结构，Interface 还能描述函数结构
            - Interface 编译后就不存在，而 abstract 则会存在
        - 实践推荐
          - 使用 interface、class 去表示描述具体对象
          - 对于“模糊”对象，不要使用 Object 以及类似的装箱类型、{}，使用 object 去表示对象类型。更推荐进一步区分，也就是使用 `Record<string, unknown>` 表示对象，`unknown[]`表示数组，`(...args: unknown[]) => unknown` 表示函数
      - [枚举](#枚举)
        - 特征
          - 枚举和对象的重要差异在于，对象是单向映射的，枚举是双向映射的，即你可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员
          - 字符串枚举只会进行单次映射
          - 数字枚举在不指定初始值的情况下，枚举值会从0开始递增
        - 枚举 vs 常量枚举
          - 枚举是可双向映射使用，常量枚举只能单向映射使用
          - 枚举会被编译时会编译成一个对象，可以被当作对象使用
          - const 枚举会在 ts 编译期间被删除，对应使用的位置直接内联替换成值
        - 实践推荐
          - 字面量类型与联合类型 vs 枚举/常量枚举的使用区别
            - 数字枚举得使用“枚举/常量枚举”方式
            - 字符串枚举两者皆可
    - 字面量类型：无论是原始类型还是对象类型的字面量类型，它们的本质都是类型而不是值，它们在编译时同样会被擦除
      - 对象字面量：对象字面量类型就是一个结构化对象类型，并且这个对象的值全都为字面量值
      - 字符串字面量
      - 数字字面量
      - 布尔字面量
    - [函数类型](#函数类型声明)
    - 内置特殊类型
        - any、unkown 区别
          - any 表示任意类型，可以将其他类型赋值给 any 或者将 any 赋值给其他类型（除 never），相当于 typescript 逃生门，会跳过类型检查
          - unkown 表示未知类型，可以将任意类型的值赋值给 unknown，但 unknown 类型的值只能赋值给 unknown 或 any，并且使用 unknown，TypeScript 会强制类型检测，你必须使用**类型缩小、类型断言**手段去确定类型
        - never、void 区别
          - never 表示永远不存在的类型，比如函数总抛出异常或者死循环、两个不存在交集的类型强行进行交集运算，这些都不会产生值产生类型
            - never 类型仅能被赋值给另外一个 never 类型
          - void：表示一个空值类型，常用于表示一个函数没有返回操作或者没有显式返回一个值的函数的返回值
            - void 类型无法赋值给其他类型
            - 如果一个变量为 void 类型，只能赋予 undefined 或者 null
  - [类型推导](./TypeScript%20类型推导.md)
  - [类型编程及类型工具](./Typescript%20%E7%B1%BB%E5%9E%8B%E7%BC%96%E7%A8%8B.md)
  - 编译器
    - tsc
      - `--init`
      - `--watch`
    - tsconfig.json
      - [`rootDir` + `outDir`：控制输出的目录结构生成](https://www.typescriptlang.org/zh/tsconfig#rootDir)
      - JS
        - `"checkJs": true`：开启对所有 JS 类型检查
      - 模块
        - baseUrl：定义文件进行解析的根路径
        - allowUmdGlobalAccess：允许对 AMD 模块直接全局访问，不必导入
      - 类型检查
        - `strictNullChecks`：没有开启情况下，null 与 undefined 会被视作其他类型的子类型，**实践推荐开启**，因为在 TypeScript 中，void、undefined、null 都是切实存在、有实际意义的类型
        - `noImplicitAny: true`：防止隐式地推导类型为 any
        - `skipLibCheck: true`：跳过声明文件的类型检查
          - 减少类型检查时间
          - 防止声明依赖之间的错误导致编译不通过
        - `useUnknownInCatchVariables: true`：catch 的 error 类型会被更改为 unknown 
        - `alwaysStrict: true`：确保您的文件在 ECMAScript 严格模式下解析，并为每个源文件发出“use strict”
        - types 与 typeRoots
        - moduleResolution
        - moduleSuffixes
        - paths
          - paths 的解析是基于 baseUrl 作为相对路径的
      - 构建
        - incremental
        - target 与 lib、noLib
        - files、include 与 exclude
        - rootDir、rootDirs 与 outDir
          - rootDir、rootDirs：虚拟目录
          - 如果你显式指定 rootDir ，需要确保其包含了所有 “被包括” 的文件
        - outDir 与 outFile
        - noEmit 与 noEmitOnError
        - module
        - 声明文件
          - declaration
          - declarationDir
          - declarationMap
          - emitDeclarationOnly：只构建出的声明文件
      - 工程
        - extends
      - 功能
        - experimentalDecorators 与 emitDecoratorMetadata
        - jsx
    - 注释指令
      - `@ts-ignore`：禁用掉对下一行代码的类型检查
      - `@ts-expect-error`：类似`@ts-ignore`，但必须下一行代码真的存在错误时才能被使用
      - `@ts-nocheck`：作用于整个文件，不再接受类型检查
      - `@ts-check`：为 JavaScript 文件启动类型检查
        - 配置文件 `"checkJs": true`：开启对所有 JS 类型检查
  - 工程实践
    - [Typescript 项目工程搭建](./Typescript%20%E9%A1%B9%E7%9B%AE%E5%B7%A5%E7%A8%8B%E6%90%AD%E5%BB%BA.md)
    - 类型增强：声明文件(d.ts)及声明合并
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
  - 学习资料
    - [TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial)
    - [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)
    - [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901)
    - [类型体操](https://github.com/type-challenges/type-challenges)
  - VSCode 插件
    - [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
    - [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)

## 枚举

```ts
// 如果你没有声明枚举的值，它会默认使用数字枚举，并且从 0 开始，以 1 递增
enum Items {
  Foo, // 0
  Bar, // 1
  Baz, // 2
}

// 编译结果
("use strict");
var Items;
(function (Items) {
  Items[(Items["Foo"] = 0)] = "Foo";
  Items["Bar"] = "BarValue";
  Items["Baz"] = "BazValue";
})(Items || (Items = {}));

enum Items {
  Foo, // 0
  Bar = 599, // 下一项从当前数值开始递增
  Baz, // 600
  Tea = "fefe", // 遇到非数字项，下一项得初始化
  Taa = 44, // 必须初始化
  Tee, // 45
}

// 编译结果
var Items;
(function (Items) {
  Items[(Items["Foo"] = 0)] = "Foo";
  Items[(Items["Bar"] = 599)] = "Bar";
  Items[(Items["Baz"] = 600)] = "Baz";
  Items["Tea"] = "fefe"; // 字符串枚举成员仍然只会进行单次映射
  Items[(Items["Taa"] = 44)] = "Taa";
  Items[(Items["Tee"] = 45)] = "Tee";
})(Items || (Items = {}));

// 常量枚举
const enum Items {
  Foo,
  Bar,
  Baz,
}
// 只能通过枚举成员访问枚举值（而不能通过值访问成员）
const fooValue = Items.Foo; // 编译时是直接内联替换为枚举的值
```

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

// JS 函数类型本质上也是一个结构固定的类型
interface FuncFooStruct {
  (name: string): number;
}

// 可选参数
function foo(name: string, age?: number): number {}

// 剩余参数
function foo1(arg1: string, ...rest: [number, boolean]) {}

// 函数重载
function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
// 实现签名必须兼容重载签名
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

// 构造器函数
interface FooStruct {
  new (): Foo;
}
```

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
