
工具如何声明获取声明
- 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。
  - 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件。
- @types/ 下的包都会自动被加载
- 与该 npm 包绑定在一起。判断依据是 package.json 中有 types 字段，或者有一个 index.d.ts 声明文件。这种模式不需要额外安装其他包，是最为推荐的，所以以后我们自己创建 npm 包的时候，最好也将声明文件与 npm 包绑定在一起。
  - 就会先识别 package.json 中是否存在 types 或 typings 字段。发现不存在，那么就会寻找是否存在 index.d.ts 文件。如果还是不存在，那么就会寻找是否存在 lib/index.d.ts 文件。假如说连 lib/index.d.ts 都不存在的话，就会被认为是一个没有提供类型声明文件的库了。
- 内置类型
- 手写
  - paths
  - typeRoots




# TypeScript 声明文件(d.ts)及类型扩展

无论是个人项目还是第三方代码，在 Typescript 体系下为项目代码增加类型功能有：

- 用 ts 编写代码
- js + **d.ts（声明文件）**

什么是类型声明文件(d.ts)，即通过额外的类型声明文件，在核心代码文件以外去提供对类型信息。它是以 `.d.ts` 结尾的文件，会自动地被 TS 工具加载到环境中，实现对应部分代码的类型提示、补全功能等。

一般第三方代码库可通过 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) + `npm i @type/xxx` 去搜索下载相应的声明文件。

如果没有，那么我们就需要自己为它写声明文件了。

## 如何编写 TS 声明文件

编写声明文件需要用到 `declare` 关键词组成的声明语句，其他跟 ts 文件中变量类型声明一样。但需要明确一点的是，**声明文件只是对变量的类型定义，并不具有实际逻辑**，不能进行赋值等操作，但可做类型逻辑编程如类型兼容性的比较、工具类型的声明与测试等等。

- 声明全局变量
- 声明命名空间、模块
- 通过声明合并
  - 扩展全局变量
  - 扩展命名空间、模块

### 声明全局变量

```ts
declare let/const  // 声明全局变量
declare function   // 声明全局方法
declare class      // 声明全局类
declare enum       // 声明全局枚举类型 
declare namespace  // 声明（含有子属性的）全局对象
interface/type     // 声明全局类型
```

**上述声明会直接作用于全局**，在全局变量的声明文件中是不允许出现 `import`, `export` 关键字的。一旦出现了，那么这文件就会被视为一个模块，里面声明不再作用于全局。

下面进行模块化代码做类型声明。

### 声明命名空间、模块

#### namespace

`namespace` 是 ts 为了解决早期模块化而创造的关键字，称为命名空间。随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了。

在 TypeScript 中命令空间类似模块，其中的变量也需要导出以后才能使用。

```ts
namespace jQuery {
    export function ajax(url: string, settings?: any): void {};
}
jQuery.ajax
```

编译后本质就是一个对象命名空间：

```js
var jQuery;
(function (jQuery) {
    function ajax(url, settings) { }
    jQuery.ajax = ajax;
    ;
})(jQuery || (jQuery = {}));
jQuery.ajax;
```

在类型空间中声明

```ts
declare namespace jQuery {
    // 相比在 ts 中 namespace 用法 不需要 export，内部声明都默认为 export
    function ajax(url: string, settings?: any): void;
}
```

#### module

模块声明：

```ts
declare module 'pkg' {
  export const handler: () => boolean; // 可省略 export，默认成员导出
  export default handler;
}

// 声明其他文件类型的模块
declare module '*.md' {
  const raw: string;
  export default raw;
}
```

```ts
// umd 模块需要声明一个全局变量
// export as namespace 语句，即可将声明好的一个变量声明为全局变量，
// 又可约束在 esm 里用 import 引入，非 es module 可以作为全局类型。
declare module pkg2 {
  export as namespace foo;

  declare function foo(): string;
  declare namespace foo {
      const bar: number;
  }
}
```

## 声明合并

在 TypeScript 中，相同的接口、命名空间、模块会依据一定的规则进行合并。

命名空间也可以进行合并，但需要通过三斜线指令来声明导入。

```ts
interface String {
    prependHello(): string;
}

'foo'.prependHello();
```



```ts
```

使用 `declare global` 可以在模块声明文件中扩展全局变量的类型。

```ts
declare global {
    interface String {
        prependHello(): string;
    }
}

export {};
```

## 三斜线指令

三斜线指令的作用就是引入当前文件所依赖的其他类型声明。

```ts
// 三斜线指令必须被放置在文件的顶部才能生效
/// <reference path="./other.d.ts" />
/// <reference types="node" />
/// <reference lib="dom" />
```

- path：值为一个相对路径，指向你项目内的其他声明文件
- types：types 的值是一个包名，也就是你想引入的 `@types/xxx` 声明
- lib：值为 TypeScript 内置的类型声明

与 `import` 的区别是，**模块声明文件与非模块声明文件之间需要依赖时**，我们才需要使用三斜线指令替代 import，

在全局变量的声明文件引入 jquery 模块文件。

```ts
/// <reference types="jquery" />

declare function foo(options: JQuery.AjaxSettings): string;
```

在模块文件中，引入全局环境声明文件。

```ts
/// <reference types="node" />

export function foo(p: NodeJS.Process): string;
```

