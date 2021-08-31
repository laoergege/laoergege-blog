object（属性和值构成的集合）

- 属性

  - 属性名限制

    - 字符串（其他类型会被自动转成字符串）
    - symbol
    - 特殊关键字 `__proto__`

  - 分类

    - 自身属性
    - 继承属性
    - [Symbol 属性](https://zh.javascript.info/symbol#yin-cang-shu-xing)（创建对象的“隐藏”属性、防止对象属性冲突）
    - 可枚举属性

  - 对象属性存在性检测及遍历

    |                             | 自身属性 | 继承属性 | 枚举属性 | 不可枚举属性 | Symbol 属性 |
    | --------------------------- | :------: | :------: | :------: | :----------: | :---------: |
    | in                          |    ✓     |    ✓     |    ✓     |      ✓       |      ✓      |
    | hasOwnProperty              |    ✓     |          |    ✓     |      ✓       |      ✓      |
    | for...in                    |    ✓     |    ✓     |    ✓     |              |             |
    | Object.keys                 |    ✓     |          |    ✓     |              |             |
    | Object.values               |    ✓     |          |    ✓     |              |             |
    | Object.entries              |    ✓     |          |    ✓     |              |             |
    | Object.getOwnPropertyNames  |    ✓     |          |    ✓     |      ✓       |             |
    | Object.getOwnPropertySymbol |          |          |          |              |      ✓      |

  - `Object.defineProperty`

  - 属性排序

    - 数字：当属性的类型时数字类型时，会按照数字的从大到小的顺序进行排序；
    - 字符串：当属性的类型是字符串时，会按照时间的先后顺序进行排序；
    - Symbol：当属性的类型是Symbol时，会按照时间的先后顺序进行排序。

  - 计算属性

  - 属性名简写

  - 扩展运算符

- 对象拷贝

  - 浅拷贝
    - `Object.assign()`
  - 深拷贝