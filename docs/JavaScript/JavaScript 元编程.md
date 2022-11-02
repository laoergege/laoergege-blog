---
tags:
 - javascript
 - 元编程
---

# JavaScript 元编程

- JavaScript 元编程
  - 可以生成代码执行
    - eval
    - Function
  - 可以在运行时修改语言结构，这种现象被称为反射编程或反射
    - 自省（Introspection）：代码能够自我检查、访问内部属性，我们可以据此获得代码的底层信息。
      - Reflect
    - 自我修改（Self-Modification）：顾名思义，代码可以修改自身。
      - Object
    - 调解（Intercession）：字面意思是“代他人行事”。在元编程中，调解的概念类似于包装（wrapping）、捕获（trapping）、拦截（intercepting）。
      - Proxy
      - Object.defineProperty
- JavaScript 沙箱机制
  - 沙箱逃逸（Sandbox Escape）

## JavaScript 沙箱机制

沙箱（Sandbox）是一种用于隔离、控制正在运行程序的环境的安全机制，通常用于执行未经测试或不受信任的程序或代码，它会为待执行的程序创建一个独立的执行环境，内部程序的执行不会影响到外部程序的运行。

实现一个 JavaScript 沙箱机制可以从编译和运行时角度进行：
- 编译时：分析程序结构，细度控制每条执行语句
- 运行时：借助语言元编程特性对程序运行时进行控制

JavaScirpt 函数的变量查找机制有两种：

- 作用域链机制
- 原型链机制

在对运行时上下文控制中通过这两种方式的方法有：
- 通过作用域链拦截
  - 函数作用域
  - `with`
  - `iframe` 独立的全局对象环境
- 通过对象属性、原型链拦截
  - `Proxy & Reflect`
  - `Object.defineProperty`

对于第三方代码变量访问控制，使用函数作用域显明要麻烦很多，需要编码静态声明变量；我们更加倾向 `with` 去用动态变量进行访问拦截。

```js
// 执行上下文对象
const ctx = 
    func: variable => {
        console.log(variable)
    },
    foo: 'foo'
}

// 最简陋的沙箱
function poorestSandbox(code, foo, func) {  // 声明对于的函数参数
    eval(code) // 为执行程序构造了一个函数作用域
}

// 第三方代码
const code = `
    foo = 'bar'
    func(ctx.foo)
`
poorestSandbox(
  // 代码
  code,
  'foo', 
  variable => {
      console.log(variable)
  }) // bar
```

`with` 会在作用域链顶部加上一个作用域对象，变量访问时会优先查找该对象的属性：

```js
// 执行上下文对象
const ctx = {
    func: variable => {
        console.log(variable)
    },
    foo: 'foo'
}

// 非常简陋的沙箱
function veryPoorSandbox(code, ctx) {
    with(ctx) { // Add with
        eval(code)
    }
}

// 待执行程序
const code = `
    foo = 'bar'
    func(foo)
`
veryPoorSandbox(code, ctx) // bar
```

当 ctx 不存在对应变量属性时，就可能发生作用域的沙箱逃逸，污染外部作用域。

### with + proxy

- `Proxy.has()` 来拦截 `with` 代码块中的任意变量的访问，并设置一个白名单，在白名单内的变量可以正常走作用域链的访问方式
- Proxy 中的 get 和 set 方法只能拦截已存在于代理对象中的属性

JavaScript 沙箱在运行时对程序上下文进行控制，变量访问



```js
const ctx = Object.create(null);
const _ctx = new Proxy(ctx, {
  get(target, key, receiver) {
    if (key !== "window" && key in window) {
      const value = window[key];
      return typeof value === "function" ? value.bind(window) : value;
    }
    return Reflect.get(target, key, receiver);
  },
  has(target, key) {
    if (key !== "window" && key in window) {
      return false;
    }
    return true;
  },
});
ctx.window = _ctx;
```

### 沙箱逃逸

## Proxy & Reflect

## new Function & eval 区别

## 参考

- [浅析JavaScript沙箱](https://mp.weixin.qq.com/s/euHJpS6rcRRqVBIPAnbUHA)

new Function、eval、with 总结 Symbol.unscopables