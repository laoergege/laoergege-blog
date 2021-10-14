---
tags:
 - javascript
 - 数据类型
 - 浮点精确
---
# JavaScript 类型系统

- JavaScript 类型系统
  - 动态类型：类型检查
  - 弱类型：类型转换
  - 类型分类
    - 原始类型
      - undefined
      - Null
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

## 动态类型：类型检查

- typeof
- instanceof
- Object.prototype.toString

## 弱类型：类型转换

## 为什么有的编程规范要求用 void 0 代替 undefined？

JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，为了避免无意中被篡改，我建议使用 void 0 来获取 undefined 值。

### undefined、null 区别使用

- undefined: 表示未初始化、未赋值的自然状态
- null：表示空值

## String

JavaScript 中的字符串是永远无法变更的，一旦字符串构造出来，无法用任何方式改变字符串的内容，所以字符串具有值类型的特征。

**JavaScript 字符串把每个 UTF16 单元当作一个字符来处理**，我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。所以处理非 BMP（超出 U+0000 - U+FFFF 范围）的字符时，你应该格外小心。

> 现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个 Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法，常见的有 UTF16 和 UTF8。 Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）

## 为什么在 JavaScript 中，0.1+0.2 !== 0.3 ?

ECMAScript 中的 Number 类型使用 IEEE754 标准来表示整数和浮点数值。

### 如何判断 0.1 + 0.2 与 0.3 相等？

 ` console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);`

检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法