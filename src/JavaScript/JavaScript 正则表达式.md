# JavaScript 正则表达式

正则表达式是搜索和替换字符串的一种强大方式。

正则表达式（可叫作“regexp”或者“reg”）包含**模式**和可选的**修饰符**。

创建 JavaScript 正则表达式的方式有：
- RegExp 实例 `regexp = new RegExp("pattern", "flags");`
- 字面量 `regexp = /pattern/flag;`

> 相比正则字面量的方式 `new RegExp` 允许从字符串中**动态地构造模式**

## 修饰符

- i 不区分大小写
- g 全局搜索所有匹配项
- m 多行模式
- u 开启完整的 unicode 支持
- s . 符号表示任意字符
- y 粘滞模式

## 字符类

- \d 数字0到9
- \D 非 \d
- \s 空格、水平制表符\t、垂直制表符\v、换行符\n、换页页符\f、回车符\r
- \S 非 \s
- \w 拉丁字母、数字、下划线
- \W 非 \w
- .  任意字符，除 \n

### 修饰符 s 与字符类 .
默认情况下字符类 `.` 不匹配换行符`\n`，但修饰符 **s** 下的模式的字符类 `.` 能够匹配换行符`\n`，但是修饰符 s 在兼容性不是特别高，详见 [https://caniuse.com/#search=dotall](https://caniuse.com/#search=dotall)，我们可以通过 `[\s\S]` 模式表示任意字符，`\s` 和 `\S` 相冲，两者用集合的方式结合起来，就表示全部，类似的还有 `[\d\D]`、`[^]` 等

## 锚符 ^、$

符号 `^` 匹配文本开头，而美元符号 `$` 则匹配文本末尾

```javascript
let str1 = "it's fleece was white as snow";
alert( /snow$/.test(str1) ); // true
```

### 多行模式 m 与 ^、$

修饰符 m 开启的多行模式下，^、$ 不仅仅匹配文本的开始与结束，还**匹配每一行的开始与结束**

```
'aaaab\nccccc'.match(/b$/) // null
'aaaab\nccccc'.match(/b$/mg) // ['b']
```

### 锚符 ^$ 对比 \n

上述列子中如果要进行每一行匹配的话，我们还也可以使用换行符 `\n`。
`\n` 和锚符 `$` 的第一个不同点是它不像锚符那样，它会消费 `\n` 即将 `\n` 加入到匹配结果中

```javascript
'aaaab\nccccc'.match(/b\n/mg) // ["b\n"]
```

## 集合和范围 [...]

## 量词

### Unicode：修饰符 “u” 和 class \p{...}


