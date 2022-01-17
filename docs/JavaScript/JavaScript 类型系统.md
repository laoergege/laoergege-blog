---
tags:
 - javascript
 - 类型
---
# JavaScript 类型系统

- JavaScript 类型系统
  - 动态类型：类型检查
    - typeof
      - 无法判断除了 function 类型以外的其他具体引用类型
      - `typeof null === 'object'`
    - instanceof
      - 可以判断具体引用类型，但是不能正确判断基础数据类型
    - Object.prototype.toString.call
      - 能够更加准确判断数据类型并统一返回格式为 “[object Xxx]” 的字符串，`Object.prototype.toString.call(null) // '[object Null]'`
  - [弱类型：类型转换](#弱类型类型转换)
  - 类型分类
    - 原始类型
      - Undefined，表示未定义或者未赋值
      - Null，表示空值
      - Boolean
      - Number
      - String
      - Symbol
        - 创建唯一标识
        - 创建对象的“隐藏”属性
      - BigInt
    - 引用类型
      - Object
      - 内置对象
        - Array
        - RegExp
        - Date
        - Math
        - Function
          - 按值传递
            > 按值传递，即复制实参的值  
            > 引用传递，即复制实参的地址
      - 数据结构
        - Set、WeakSet
        - Map、WeakMap

## 弱类型：类型转换

- 类型转换
  - 显示转换
    - 构造器类型
  - 隐式转换
    - 操作符自动类型转换

强制操作（+、==）

## Number

数字在计算机中是如何表示存储的
- [什么是定点数？](https://zhuanlan.zhihu.com/p/338588296)
- [什么是浮点数？](https://zhuanlan.zhihu.com/p/339949186)

## String

JavaScript 中的字符串是永远无法变更的，一旦字符串构造出来，无法用任何方式改变字符串的内容，所以字符串具有值类型的特征。

**JavaScript 字符串把每个 UTF16 单元当作一个字符来处理**，我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。所以处理非 BMP（超出 U+0000 - U+FFFF 范围）的字符时，你应该格外小心。

> 现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）

## 为什么在 JavaScript 中，0.1+0.2 !== 0.3 ?

ECMAScript 中的 Number 类型使用 IEEE754 标准来表示整数和浮点数值。

### 如何判断 0.1 + 0.2 与 0.3 相等？

 ` console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);`

检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法


类型不同的变量比较时==运算只有三条规则：

- undefined 与 null 相等
- 字符串和 bool 都转为数字再比较
- 对象转换成 primitive 类型再比较
  另一个是对象如果转换成了 primitive 类型跟等号另一边类型恰好相同，则不需要转换成数字。