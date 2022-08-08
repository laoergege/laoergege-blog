- ts -> js + d.ts
- 第三方代码
- 第三方类型声明库 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) + `npm i @type/xxx`

工具如何声明获取

与该 npm 包绑定在一起。判断依据是 package.json 中有 types 字段，或者有一个 index.d.ts 声明文件。这种模式不需要额外安装其他包，是最为推荐的，所以以后我们自己创建 npm 包的时候，最好也将声明文件与 npm 包绑定在一起。
发布到 @types 里。我们只需要尝试安装一下对应的 @types 包就知道是否存在该声明文件，安装命令是 npm install @types/foo --save-dev。这种模式一般是由于 npm 包的维护者没有提供声明文件，所以只能由其他人将声明文件发布到 @types 里了。

那么我们就需要自己为它写声明文件了

# TypeScript 类型声明文件(d.ts)及类型合并

什么是类型声明文件(d.ts)，即通过额外的类型声明文件，在核心代码文件以外去提供对类型的进一步补全。它是以 `.d.ts` 结尾的文件，会自动地被 TS 加载到环境中，实现对应部分代码的类型补全。

## 如何编写 TS 声明文件

编写声明文件需要用到 `declare` 关键词组成的声明语句，其他跟 ts 文件类型声明一样。但需要明确一点的是，声明文件只是对变量的类型定义，并**不具有实际逻辑**，不能进行赋值等操作，但可做类型逻辑编程如类型兼容性的比较、工具类型的声明与测试等等。

```ts
declare let userName: string | null = '123'; // 赋值会被忽略
```

- 全局变量
- 命名空间、模块
- 扩展全局变量
- 扩展命名空间、模块

### 全局变量

```ts
declare let/const  // 声明全局变量
declare function   // 声明全局方法
declare class      // 声明全局类
declare enum       // 声明全局枚举类型 
declare namespace  // 声明（含有子属性的）全局对象
interface/type     // 声明全局类型
```

**上述声明会直接作用于全局**，在全局变量的声明文件中，是不允许出现 `import`, `export` 关键字的。一旦出现了，那么这文件就会被视为一个模块，里面声明不再作用于全局。

下面进行模块化声明。

### 命名空间、模块

`namespace` 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了。

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

## 声明合并

对于已经有声明定义的模块或者全局变量，可以利用 TS 中的声明合并对其进行拓展。

## 三斜线指令

三斜线指令的作用就是声明当前的文件依赖的其他类型声明文件。

```ts
// 三斜线指令必须被放置在文件的顶部才能生效
/// <reference path="./other.d.ts" />
/// <reference types="node" />
/// <reference lib="dom" />
```

- path：值为一个相对路径，指向你项目内的其他声明文件
- types：types 的值是一个包名，也就是你想引入的 `@types/xxx` 声明
- lib：值为 TypeScript 内置的类型声明