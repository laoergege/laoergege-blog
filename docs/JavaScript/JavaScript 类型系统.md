---
release: true
tags:
 - javascript
 - 类型系统
---
# JavaScript 类型系统

- JavaScript 类型系统
  - 动态类型
    - 运行阶段才能确定变量类型
    - [类型判断](#类型判断)
  - [弱类型：隐式类型转换](#弱类型：隐式类型转换)
  - 分类
    - 原始类型
      - Undefined：表示未定义或未初始赋值
        - JavaScript 的代码 undefined 是一个变量，而并非是一个关键字
        - 全局 undefined 是无法修改，但可以被作为局部变量篡改
        - 为了避免无意中被篡改，建议使用 void 0 来获取 undefined 值
      - Null：表示空值
      - Boolean
      - Number
        - IEEE 754 规定的双精度浮点数规则
      - String
        - Unicode 字符集，UTF16 编码方式
        - JavaScript 中的字符串一旦构造出来就无法改变（原内存空间），变量重新赋值只是重新创建新的字符串
      - Symbol
        - 创建对象的唯一标识符
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

## 类型判断

- typeof
  - 无法判断除了 function 类型以外的其他具体引用类型
  - `typeof null === 'object'`
- instanceof
  - 可以判断具体引用类型，但是不能正确判断基础数据类型
  - instanceof本质上是判断右边的构造函数的prototype对象是否存在于左边的原型链上。根据原型链，`... instanceof Object` 都返回 true。
- Object.prototype.toString.call
  - 能够更加准确判断数据类型并统一返回格式为 “[object Xxx]” 的字符串，`Object.prototype.toString.call(null) // '[object Null]'`
- 数组
  - Array.isArray

## 弱类型：隐式类型转换

- 类型转换
  - 显示转换，如 `String('123')`
  - 隐式转换，如 `+'123'`
    - 运算符会触发自动类型转换
      - 类型转换规则  
        在 JS 中类型转换情况：toNumber 、 toString 、 toBoolean、toObject
        ![图 11](./images/1642863972248.png)  
        - StringToNumber
          - Number 是比 parseInt 和 parseFloat
        - NumberToString
        - 对象跟基本类型之间的转换
          - 装箱转换
          - 拆箱转换
            1. valueOf
            2. toString
            3. Symbol.toPrimitive(o [ , PreferredType ])

类型不同的变量比较时==运算只有三条规则：

- undefined 与 null 相等
- 字符串和 bool 都转为数字再比较
- 对象转换成 primitive 类型再比较
  另一个是对象如果转换成了 primitive 类型跟等号另一边类型恰好相同，则不需要转换成数字。

## Number

数字在计算机中是如何表示存储的
- [什么是定点数？](https://zhuanlan.zhihu.com/p/338588296)
- [什么是浮点数？](https://zhuanlan.zhihu.com/p/339949186)



## 为什么在 JavaScript 中，0.1+0.2 !== 0.3 ?

ECMAScript 中的 Number 类型使用 IEEE754 标准来表示整数和浮点数值。

### 如何判断 0.1 + 0.2 与 0.3 相等？

 ` console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);`

检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法






判断属性是否存在 in


- bigint


js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息
000：对象
010：浮点数
100：字符串
110：布尔
1：整数
但对于 undefined 和 null 来说，这两个值的信息存储是有点特殊的：
null：所有机器码均为0
undefined：用 −2^30 整数来表示
所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待。


Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON)




