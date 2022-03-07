# TypeScript

- TypeScript
  - 类型系统
    - 函数类型
    - 属性修饰符
      - 可选属性
      - 只读属性(onlyread)
      - 索引签名
        - 索引签名 & Record
  - 类型推断
  - tsconfig
  - 类型增强
    - declare
  - 类型声明文件(d.ts)
  - 类型声明库 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
  - VSCode 集成
    - TypeScript Language Service
    - VS Code 中指定项目 ts 版本
  - 工程实践
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


## VS Code 中指定项目 ts 版本

```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
