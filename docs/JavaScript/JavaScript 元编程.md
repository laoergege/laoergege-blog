---
tags:
 - javascript
 - 元编程
---

# JavaScript 元编程

- 元编程
  - 可以生成代码
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

## JavaScript 沙箱机制

在计算机安全中，沙箱（Sandbox）是一种用于隔离正在运行程序的安全机制，通常用于执行未经测试或不受信任的程序或代码，它会为待执行的程序创建一个独立的执行环境，内部程序的执行不会影响到外部程序的运行。

实现一个 JavaScript 沙箱机制可以从编译和运行时角度进行：

- 编译时：分析程序结构，细度控制每条执行语句
- 运行时：借助语言支持的元编程特性对程序运行时进行控制

### with + proxy

JavaScript 沙箱在运行时对程序上下文进行控制，变量访问
- 作用域链
- 原型链

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

## 参考

- [浅析JavaScript沙箱](https://mp.weixin.qq.com/s/euHJpS6rcRRqVBIPAnbUHA)