## Symbol

- Symbol
  - Symbol 表示一个独一无二的值
    - 可以作为对象属性的标识符使用，不会与其他属性产生命名冲突
  - Symbol.iterator：自定义对象的迭代器
  - Symbol.asyncIterator：自定义对象的异步迭代器
  - Symbol.toPrimitive：自定义对象转换原始类型的值
  - Symbol.toStringTag：自定义对象的 toString 方法返回的标签
  - Symbol.for()：注册全局共享 Symbol

## 迭代器

- 迭代器（Iterators）
  - 迭代器协议
    ```ts
    {
      next: (value?: any) => { value, done },
      return?: (value?: any) => { value, done: true }
      throw?: (value?: any) => { value, done: true }
    }
    ```
  - 可迭代对象，即 实现了 `Symbol.iterator`（定义转化成迭代器的方法）的对象，能够隐式被调用，比如在 `for...of` 中
    ```js
    // Satisfies both the Iterator Protocol and Iterable
    const myIterator = {
      next() {
        // ...
      },
      [Symbol.iterator]() {
        return this;
      },
    };
    ```
    ```js
    let arrobj = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
    };

    arrobj[Symbol.iterator] = function () {
      let i = 0;
      let s = Object.keys(this).length;
      // 关注点分离，迭代器对象和与其进行迭代的对象分开
      return {
        next: () => {
          i++;
          return {
            value: this[i],
            done: i > s,
          };
        },
      };
    };

    for (const i of arrobj) {
      console.log(i);
    }
    ```
    - 内置可迭代对象
      - 数组、字符串、类数组
      - Map、Set
    - 能够隐式转换成迭代器的 API
      - `for...of`、`for...in`、`for await (...)`
      - `Map() WeakMap() Set() WeakSet() Promise.all() Promise.allSettled() Promise.race() Promise.any() Array.from()`
      - `...xx`
    - 异步迭代器
      - 类似迭代器，但 next: `(val?: any) => Promise<{ value, done }>` 
      - `Symbol.asyncIterator` 

## 生成器

- 生成器（Generator）
  - 生成器是一种特殊的迭代器，除了迭代行为，还可以使用 yield 等高级功能,生成器会更合适
  - `function*`
    - `yield [exp]`
    - `return [exp]`
    - `yield*`：嵌套生成器。暂停执行，并且将执行权转移到另一个 Generator 函数或可迭代对象中。直到这个函数或对象迭代结束后，执行权才会返回到原 Generator 函数中
  - 函数体内外的数据交换和错误处理机制
    - `generator.next(val)`、`generator.throw(err)` <=> `yield [exp]`
  - 异步生成器：`async function*`
    - yield 命令后面的值，会被自动包装成一个 Promise 对象
    - `yield [exp]` => `yield Promise.resolve({ value: exp, done })`
  - 生成器场景
    - 状态机、协程
    - 惰性迭代器
    - 无限迭代器、多值、数据流、流式处理


- Thunk
  - 替换程序
  - Thunk 函数的定义，它是“传名调用”的一种实现策略，用来替换某个表达式
  - JavaScript 语言的 Thunk 函数：Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。
    - Thunk 函数现在可以用于 Generator 函数的自动流程管理
    - 这种方法就是 Thunk 函数，因为它可以在回调函数里，将执行权交还给 Generator 函数
  - Thunk 函数并不是 Generator 函数自动执行的唯一方案。因为自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。