---
discussionID: q-aVwW1RsqmPdzOpDFMEB
release: true
tags:
 - js
 - 数组
desc: 数组方法总结
---

# 数组API总结

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
      - `Array.prototype.concat.apply([], likeArray)`
      - `Array.apply(null, likeArray)`
- 数组类型判断
  - xxx instanceof Array
  - Object.prototype.toString.call(xxx)
  - Array.isArray
- api
  > 💡 可根据“是否改动到内部元素位置”去判断一个方法是否会改变数组自身
  - 改变自身的方法
    - pop
    - push
    - reverse
    - shift
    - sort
      - 默认排序顺序是先将元素转换为字符串，按照转换为字符串的各个字符的 Unicode 位点进行排序
      - `a-b>0`，倒序
      - `a-b<0`，正序
      - `a-b=0`，不变
    - **splice**
    - unshift
    - copyWithin
    - **fill(value[, start[, end]])**，填充替换数组元素
    - **flat([depth])**
      - 使用 Infinity，可展开任意深度的嵌套数组
    - flatMap
  - 不改变自身的方法
    - **concat**
      - 参数：数组或参数列表
    - join
    - **slice([begin[, end]])**，提取原数组中索引从 begin 到 end 的所有元素
      - begin 可选，默认 0 ，包含在结果集中
        - 负数，则表示从原数组中的倒数第几个元素开始提取
      - end 可选，不会被包含在结果集中
  - 遍历
    - forEach
    - 条件查找
      - indexOf
      - lastIndexOf
      - includes
      - every
      - some
      - find
      - findIndex
    - 转换
      - entries
      - keys
      - values
      - filter
      - map
      - **reduce(previousValue, currentValue, currentIndex, array)**
      - **reduceRight**