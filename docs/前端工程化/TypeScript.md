# TypeScript

- TypeScript
  - 类型系统（兼容扩展 JavaScript 类型系统）
    - 类型声明
      - 数据类型
        - 原始类型
        - 复合类型
          - 元组类型（Tuple）
        - 特殊类型
          - any、unkown
            - 与 any 不同的是，unknown 在类型上更安全
            - 可以将任意类型的值赋值给 unknown，但 unknown 类型的值只能赋值给 unknown 或 any
            - 使用 unknown，TypeScript 会强制类型检测，你必须使用*类型缩小*、_类型断言_
          - void 表示没有返回值的函数
          - never 表示永远不会发生值的类型
        - 字面量类型
          - 模板字面量
        - 函数类型
        - 接口
          - 属性修饰符
            - 可选属性
            - 只读属性(onlyread)
            - 索引签名
            - 索引签名 & Record
      - 类型断言
        - `<type>`
        - `as`
        - `as const` 推断为常量类型
        - 非空断言操作符 `!`
    - 类型推导
      - 基于表达式、上下文推断类型的能力称之为“类型推断”
      - 类型拓展
      - 类型收窄
        - 类型守卫
    - 类型增强
      - 类型声明文件(d.ts)
      - 类型声明库 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
    - 类型编程
  - 编译器
    - tsc
      - `--init`
      - `--watch`
    - tsconfig.json
  - 工程实践
    - [Project References](#project-references)
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

## Project References

> 官方文档 [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)

Project References 可以把一个 typescirpt 大项目拆分，分开构建。引入 references 后：

1. 可通过 `tsc --build` 自动、顺序、增量构建 reference project
2. 编译时不会加入 reference project 的代码，只会加载其声明文件

reference project 配置

```json
{
  "references": [
    { 
      "path": "../src",
      "prepend": true
    }
  ]
}
```

```json
{
  "compilerOptions": {
        "composite": true,
        "declaration": true,
        "declarationDir": "types",
        "outDir": "lib",
        "rootDir": "src/node",
    },
    "include": [
        "src/node"
    ]
}
```
