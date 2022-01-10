- JavaScript 文法
  - 词法
    - 分词
      - 空格
      - 换行
      - 评论
      - token
        - 标识符
        - 关键词
        - 运算符号
        - 字面量
          - 数字直接量
          - 字符串直接量
          - 字符串模板
          - 等
  - 语法
    - 函数/过程
    - 控制流
      - 分支
      - 循环
    - 表达式及运算符

## 自动插入分号规则

## 表达式

表达式语句实际上就是一个表达式，它是由运算符连接变量或者直接量构成的。

1. PrimaryExpression 主要表达式
   - 各种直接字面量， 如 `123`、`[]`
   - this
   - 变量名
   - 任何表达式加上圆括号，都被认为是 Primary Expression，这个机制使得圆括号成为改变运算优先顺序的手段
2. LeftHandSideExpression 左值表达式
   1. MemberExpression 成员表达式
      - 如 `a.b`、`a["b"]`
      - 以下两种特殊 JS 语法，仅仅意味着它们跟属性运算属于同一优先级，没有任何语义上的关联
        - 带函数的模板，`` f`a${b}c`; ``
        - 带参数列表的 new 运算，`new Cls();`
   2. NewExpression NEW 表达式
      - 特指没有参数列表的表达式，`new Cls`
   3. CallExpression 函数调用表达式
3. 右值表达式（左值与运算符结合）
   1. 更新表达式 UpdateExpression
   2. 一元运算表达式 UnaryExpression
      1. `~` 按位取非运算符
   3. 乘方表达式 ExponentiationExpression
      1. `2**3 === 8`
   4. 乘法表达式 MultiplicativeExpression
      - 乘法表达式有三种运算符：`* / %`
   5. 加法表达式 AdditiveExpression
      - 加法表达式有加号和减号两种运算符
   6. 移位表达式 ShiftExpression
      - `<<` 向左移位
      - `>>` 向右移位
      - `>>>` 无符号向右移位
   7. 关系表达式 RelationalExpression
      1. in
   8. 相等表达式 EqualityExpression
   9. 位运算表达式
      - 按位与表达式 BitwiseANDExpression
      - 按位异或表达式 BitwiseANDExpression
      - 按位或表达式 BitwiseORExpression
   10. 逻辑表达式：`&&`、`||`、`!`
   11. 条件表达式 ConditionalExpression：`condition ? branch1 : branch2`
4. AssignmentExpression 赋值表达式
5. 逗号运算符

### 左值表达式、右值表达式

- 通俗理解出现在赋值表达式左边的叫左值表达式、右边的叫做右值表达式。
  左值表达式就是可以放到等号左边的表达式

new Cls().x
new new Cls()
new Cls.x()

并发

- 多线程多进程
- 异步编程

右移 n 位相当于除以 2 取整 n 次

普通移位会保持正负数。无符号移位会把减号视为符号位 1，同时参与移位：-1 >>> 1 这个会得到 2147483647，也就是 2 的 31 次方，跟负数的二进制表示法相关，这里就不详细讲解了。

类型不同的变量比较时==运算只有三条规则：

- undefined 与 null 相等
- 字符串和 bool 都转为数字再比较
- 对象转换成 primitive 类型再比较

按位或运算常常被用在一种叫做 Bitmask 的技术上。Bitmask 相当于使用一个整数来当做多个布尔型变量

合并
编译
压缩
