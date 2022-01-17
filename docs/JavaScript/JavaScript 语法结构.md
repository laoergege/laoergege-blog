- JavaScript 文法
  - 词法
    - 分词
      - 空格
      - 换行
      - 注释
      - token
        - 标识符
        - 关键词
        - 运算符
        - 字面量
          - 数字直接量
          - 字符串直接量
          - 字符串模板
          - 等
  - 语法
    - JavaScript 有两种源文件
      - 脚本
      - 模块
    - 指令序言（JavaScript 的指令序言是只有一个字符串直接量的表达式语句，它只能出现在脚本、模块和函数体的最前面）
      - `"use strict"`
    - 变量声明
      - var
      - function
      - let
      - const
      - class
    - 函数
      - 普通函数
      - 生成器函数（generator）
      - 异步函数（async）
      - 异步生成器函数
    - 控制流
      - 分支
        - if
        - switch
      - 循环
        - 递归
        - while/do while
        - for
        - for in
          - 对象属性枚举
        - for of
          - 迭代器模式
            - 生成器
        - for await of
      - try-catch-finally
        - 即使在 try 中出现了 return，finally 中的语句也一定要被执行
    - [表达式](#表达式)及运算符

## 自动插入分号规则

JavaScript 代码可以不用写分号符，因为编译器会对自动判断插入分号，但在某些情况下最好写上分号符，因为编译器区分不出是否要插入分号。

```js
function f() {
  return 1 + 2;
}
f(); // 3
```

```js
let a = 1;
let b = 2;
// 相当于
// let a = 1; let b= 2
```

自动插入分号规则总结如下：

1. 有换行符，且下一个符号是不符合语法的，那么就尝试插入分号。
2. 有换行符，且语法中规定此处**不能有换行符**，那么就自动插入分号。
3. 源代码结束处，不能形成完整的脚本或者模块结构，那么就自动插入分号。

### no LineTerminator here （不能有换行符）规则

![图 9](./images/1641360549128.png)

比如后自增、后自减运算符：

```js
let a = 1

a /*no LineTerminator here*/
++
// a; ++

console.log(a) // 1
```

### 手写分号的特殊情况

需要手写分号的都是编译器无法区分的情况，即上一个符号与下一个符号之间组合可能存在意义比如

```js
let a = [[1]][0].map((e) => 2);
// 被当作数组下标运算 [][]
// let a = [[1]][0].map(e => 2)

console.log(a); // [2]
```

总结有：

1. 以**括号**开头的语句，比如 IIFE。

   ```js
   (function (a) {
     console.log(a);
   })()(function (a) {
     console.log(a);
   })();
   ```

   JavaScript 引擎会认为第一个 IIFE 返回的是一个函数，第二 IIFE 会被当作函数调用传参，导致抛出错误。

2. 以**数组**开头的语句。
3. 以正则表达式开头的语句，正则的第一个**斜杠**被理解成了除号。
4. 以 Template 开头的语句。

## 表达式

事实上，真正能干活的就只有表达式语句，其它语句的作用都是产生各种结构，来控制表达式语句执行，或者改变表达式语句的意义。

表达式语句实际上就是一个表达式，它是由运算符连接变量或者直接量构成的。

以下只是 [ECMA 表达式](https://tc39.es/ecma262/#sec-ecmascript-language-expressions)部分，表达式都是从高优先级、粒度从小逐级构成：

1. PrimaryExpression 主要表达式
   - 各种直接字面量， 如 `123`、`[]`
   - this
   - 变量名
   - **任何表达式加上圆括号，都被认为是 Primary Expression，这个机制使得圆括号成为改变运算优先顺序的手段**
2. LeftHandSideExpression 左值表达式
   1. MemberExpression 成员表达式
      - 如 `a.b`、`a["b"]`
      - 以下两种特殊 JS 语法，仅仅意味着它们跟属性运算属于同一优先级，没有任何语义上的关联
        - 带函数的模板，`` f`a${b}c`; ``
        - **带参数列表的 new 运算**，`new Cls();`
   2. NewExpression NEW 表达式
      - 特指没有参数列表的表达式，`new Cls`
   3. CallExpression 函数调用表达式
   4. 可选链 `?.`
   5. 空值合并运算符 `??`
3. 右值表达式（左值与运算符结合）
   1. 更新表达式 UpdateExpression
   2. 一元运算表达式 UnaryExpression
      - `~` 按位取非运算符
   3. 二元运算表达式
      1. 乘方表达式 ExponentiationExpression
         - `2**3 === 8`，\*\* 运算是右结合的
      2. 乘法表达式 MultiplicativeExpression
         - 乘法表达式有三种运算符：`* / %`
      3. 加法表达式 AdditiveExpression
         - 加法表达式有加号和减号两种运算符
      4. 移位表达式 ShiftExpression
         - `<<` 向左移位
         - `>>` 向右移位
           - 右移 n 位相当于除以 2 取整 n 次
         - `>>>` 无符号向右移位
      5. 关系表达式 RelationalExpression
         - in
      6. 相等表达式 EqualityExpression
      7. 位运算表达式
         - 按位与表达式 BitwiseANDExpression
         - 按位异或表达式 BitwiseANDExpression
           - 异或运算
             - 两次异或运算相当于取消，可以用异或运算来交换两个整数的值。
             - 按位或运算常常被用在一种叫做 Bitmask 的技术上。Bitmask 相当于使用一个整数来当做多个布尔型变量
         - 按位或表达式 BitwiseORExpression
      8. 逻辑运算符
         - `&&`
         - `||`
         - `??`
   4. 三元运算符
      - 条件表达式 ConditionalExpression：`condition ? branch1 : branch2`
4. AssignmentExpression 赋值表达式
5. 逗号运算符

### 左值表达式、右值表达式

- 通俗理解出现在赋值表达式左边的叫左值表达式、右边的叫做右值表达式。
  左值表达式就是可以放到等号左边的表达式

new Cls().x
new new Cls()
new Cls.x()











最后留一个小作业，请你找出所有具有 Symbol.iterator 的原生对象，并且看看它们的 for of 遍历行为。确认放弃笔记？放弃后所记笔记将不保留。

