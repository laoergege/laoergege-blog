- 数组构造
  - 构造器
    - `new Array(arg1, arg2,…)`
    - new Array(len)
  - 字面量
  - es6 静态方法
    - Array.of
    - Array.from（Array.from 方法对一个**类数组对象**或**可迭代对象**创建一个新的，浅拷贝的数组实例）
- 类数组
  - 带有 `length` 属性的对象
  - 类数组转换数组
    - Array.from
    - 使用**类数组借用数组方法转数组**特点
      - `Array.prototype.slice.call(likeArray)`
- 数组判断
  - Array.isArray
- api
  - 改变自身的方法（改动到内部元素位置）
    - pop
    - push
    - reverse
    - shift
    - sort
    - **splice**
    - unshift
    - copyWithin
    - fill
    - flat
    - flatMap
  - 不改变自身的方法（数组整体）
    - concat
    - join
    - **slice**
  - 遍历
    - indexOf
    - lastIndexOf
    - includes
    - forEach
    - every
    - some
    - filter
    - map
    - **reduce**
    - **reduceRight**
    - find
    - findIndex
    - entries
    - keys
    - values
- sort

    默认排序顺序是先将元素转换为字符串，按照转换为字符串的各个字符的 Unicode 位点进行排序
- 考题
  - 数组扁平
  - 数组去重


合并两个有序数组
可迭代对象
循环操作
数组遍历
对象属性遍历