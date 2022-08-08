# TypeScript 类型编程

- 类型编程
  - 类型别名（变量）
  - [泛型](#泛型)（函数）
    - 泛型约束与默认值
    - 应用
      - 类型工具
      - 泛型函数
      - 泛型对象
  - 类型操作
    - 联合类型 `|`
    - 交叉类型 `&`：类型合并
      - 对于对象类型的交叉类型，其内部的同名属性类型同样会按照交叉类型进行合并
    - 索引类型 `keyof`：返回属性联合类型，可用 `keyof any` 去表示一个通用的联合类型
    - 索引签名
      - 索引签名类型也可以和具体的键值对类型声明并存，但这时这些具体的键值类型也需要符合索引签名类型的声明
    - 索引类型访问 `type[expression]`：通过索引类型映射到值类型
    - 映射类型：映射类型(`in`)建立在索引签名的语法之上，基于键名映射到键值类型
      ```ts
      type Stringify<T> = {
        [K in keyof T]: string;
      };
      ```
    - 类型查询 `typeof`：typeof 可以返回 JavaScript 变量的推导类型，并且是最窄的推导程度（即到字面量类型的级别）
      ```ts
      const func = (input: string) => {
        return input.length > 10;
      }

      // (input: string) => boolean
      type FuncType = typeof func
      ```
    - [条件类型](#条件类型)
      - [infer：提取泛型的类型信息](#infer提取泛型的类型信息)
      - [分布式条件](#分布式条件类型)
    - 递归
  - [内置类型工具](#内置类型工具)

## 泛型

- 泛型：类型函数，参数为类型，返回值也未类型
  - 类型工具：带有泛型的类型别名相当于带参的函数
  - 泛型函数
    - 泛型会在函数调用时自动地得填充为对应的参数类型
  - 对象类型中的泛型：泛型类和泛型接口

```ts
// 默认值
type Factory<T = boolean> = T | number | string;
//约束
type ResStatus<ResCode extends number> = ResCode extends 10000 | 10001 | 10002
  ? "success"
  : "failure";
// 无需显式传入泛型参数也能默认调用
type ResStatus<ResCode extends number = 1000> = ResCode extends
  | 10000
  | 10001
  | 10002
  ? "success"
  : "failure";

// 多泛型参数
type Conditional<Type, Condition, TruthyResult, FalsyResult> =
  Type extends Condition ? TruthyResult : FalsyResult;
// 泛型参数联动
type ProcessInput<
  Input,
  SecondInput extends Input = Input,
  ThirdInput extends Input = SecondInput
> = number;

// 接口泛型
interface IRes<TData = unknown> {
  code: number;
  error?: string;
  data: TData;
}

// 泛型函数
function handle<T>(input: T): T {}
const handle = <T>(input: T): T => {};
```

## 条件类型

条件类型一般形式是 `T extends U ? X : Y`。

泛型约束 extends 与 条件类型 extends 的区别：它们产生作用的时机完全不同，泛型约束要求你传入符合结构的类型参数，相当于**参数校验**。而条件类型使用类型参数进行条件判断（就像 if else），相当于**实际内部逻辑运算**。

实例，时常

```ts
function process(text: string | null): string | null {
  return text && text.replace(/f/g, 'p');
}

process('foo').toUpperCase(); // Error!!!
```

```ts
function process<T extends string | null>(text: T): T extends string ? string : null {
  return text && text.replace(/f/g, 'p');
}

process('foo').toUpperCase(); // Okay.
process(null).toUpperCase(); // Error!!!
```

- 当条件类型的判断参数为 any，会直接返回条件类型两个结果的联合类型
        ```ts
        // 直接使用，返回联合类型
        type Tmp1 = any extends string ? 1 : 2;  // 1 | 2

        type Tmp2<T> = T extends string ? 1 : 2;
        // 通过泛型参数传入，同样返回联合类型
        type Tmp2Res = Tmp2<any>; // 1 | 2
        ```
      - 当通过泛型传入的参数为 never，则会直接返回 never
        ```ts
        // 如果判断条件是 never，还是仅在作为泛型参数时才跳过判断
        type Special3 = never extends never ? 1 : 2; // 1
        type Special4<T> = T extends never ? 1 : 2;
        type Special4Res = Special4<never>; // never

        // 通过包裹的方式可以解决 never 直接返回的问题
        type IsNever<T> = [T] extends [never] ? true : false;
        ```

### infer：提取泛型的类型信息

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Num = GetReturnType<() => number>; // number
```

使用 infer 推导相当于占位符，占位符类型信息是动态推导的，TypeScript 4.7 就支持了 **infer 约束功能**来实现对特定类型地提取。

```ts
type GetReturnType<Type> = Type extends (...args: never[]) => (infer Return extends string)
  ? Return
  : never;
 
type Num = GetReturnType<() => number>; // never
```

### 分布式条件类型

条件类型分布式特性即将泛型参数为联合类型拆开来，每个分支分别进行一次条件类型判断，再将最后的结果合并起来。

```ts
type Naked<T> = T extends boolean ? "Y" : "N";

// (number extends boolean ? "Y" : "N") | (boolean extends boolean ? "Y" : "N")
// "N" | "Y"
type Res3 = Naked<number | boolean>;
```

禁止分布式条件类型特征：

- 使用数组包裹泛型参数 `type Wrapped<T> = [T] extends [boolean] ? "Y" : "N";`
- 使用交叉类型 `T & {};`
  ```ts
  export type NoDistribute<T> = T & {};
  type Wrapped<T> = NoDistribute<T> extends [boolean] ? "Y" : "N";
  type Res4 = Wrapped<number | boolean>;
  ```

## 内置类型工具

- 属性修饰工具类型
  - Partial：构造一个新的对象类型，将目标对象类型的所有属性设置为可选
    ```ts
    type Partial<T> = {
        [P in keyof T]+?: T[P];
    };
    ```
  - Required
    ```ts
    type Required<T> = {
        [P in keyof T]-?: T[P];
    };
    ```
  - Readonly
    ```ts
    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    };
    ```
    与之相对：
    ```ts
    type Mutable<T> = {
        -readonly [P in keyof T]: T[P];
    };
    ```
- 结构工具类型
  - Record：声明一个对象结构类型
    ```ts
    type Record<K extends keyof any, T> = {
        [P in K]: T;
    };
    ```
  - Pick：通过一个对象类型选择一组属性构造新的对象类型
    ```ts
    type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };
    ```
  - Omit：从一个对象类型中的所有属性删除指定属性后构造新的对象类型
    ```ts
    type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
    ```
- 集合工具类型：利用条件类型的分布式特性，即当 T、U 都是联合类型（视为一个集合）时，T 的成员会依次被拿出来进行 extends U ? T1 : T2 的计算，然后将最终的结果再合并成联合类型
  - Extract：联合类型之间的交集 
    ```ts
    type Extract<T, U> = T extends U ? T : never;
    ```
  - Exclude：联合类型之间的差集
    ```ts
    type Exclude<T, U> = T extends U ? never : T;
    ```
- 模式匹配工具类型：
  - 函数类型签名的模式匹配
    - Parameters `type Parameters<T extends FunctionType> = T extends (...args: infer P) => any ? P : never;`
    - ReturnType `type ReturnType<T extends FunctionType> = T extends (...args: any) => infer R ? R : any;`
  - class 模式匹配：对 Class 的模式匹配思路类似于函数，即基于放置位置的匹配。放在参数部分，那就是构造函数的参数类型，放在返回值部分，就是 Class 的实例类型了
    - ConstructorParameters
      ```ts
      type ConstructorParameters<T extends ClassType> = T extends abstract new (
        ...args: infer P
      ) => any
        ? P
        : never;
      ```
    - InstanceType
      ```ts
      type InstanceType<T extends ClassType> = T extends abstract new (
        ...args: any
      ) => infer R
        ? R
        : any;
      ```
- 模板字符串工具类型