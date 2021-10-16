---
release: true
tags:
 - javascript
---

# JavaScript 代码执行过程（运行时）

- JavaScript 执行机制
  - 变量提升
  - 作用域
  - 调用栈
  - 作用域链
    - 闭包
  - 执行上下文
    - 变量环境
      - arguments
      - 变量声明
      - 函数声明
    - 词法环境
    - scopes 作用域链
    - this

## 变量提升（Hoisting）

所谓的变量提升，就是代码执行之前 JavaScript 引擎把**变量的声明部分和函数的声明部分**提升到代码开头的“行为”。

![图 3](./images/88c7ce0dcf04f89a50e15ea72293ca242378e4b35486d2b2de6a1c2b1b7ad998.png)  

> 如果一段代码如果定义了两个相同名字的函数，那么最终生效的是最后一个函数；  
> 如果函数声明名称跟变量名相同，函数声明优先

**变量提升，发生在 JavaScript 代码编译阶段。实际上变量和函数声明在代码里的位置是不会改变的，而且是在编译阶段被 JavaScript 引擎放入内存中**。一段 JavaScript 经过编译后，会生成两部分内容：**执行上下文（Execution context）和可执行代码（会被编译为字节码）**。

![图 4](./images/733bc7f970934ca264426d36b79f605cc41a41a9f2d1109ecb61c03ce0681f22.png)  

- 执行上下文是 JavaScript 执行一段代码时的运行环境
- 执行上下文中存在一个变量环境的对象（Viriable Environment）
- 变量环境的对象保存了变量提升的内容

有了执行上下文和可执行代码了，那么接下来就到了执行阶段了，JavaScript 引擎会从变量环境中去查找自定义的变量和函数。

## 作用域

作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期。通俗地理解，**作用域就是变量与函数的可访问范围**，即作用域控制着变量和函数的可见性和生命周期。

- JavaScript 作用域
  - 全局作用域
  - 函数作用域
  - 块级作用域（ES6）

在 ES6 之前，ES 的作用域只有两种：全局作用域和函数作用域。var 声明的变量具有全局或者函数级别作用域，因为变量提升机制，使得变量声明都被提升到函数顶部或者全局，这就导致 JavaScript 的代码并不像其他语言直观。

> 函数声明同样具有全局或者函数级别作用域

```js
console.log(myname); // undefined
var myname = "极客时间"
function showName(){
  if(true){
   var myname = "极客邦"
  }
  console.log(myname); // "极客邦"
}
showName()
```

而且变量容易在不被察觉的情况下被覆盖掉

```js
var myname = "极客时间"
function showName(){
  console.log(myname); // undefined
  if(true){
   var myname = "极客邦"
  }
  console.log(myname); // 极客邦
}
showName()
```

本应销毁的变量没有被销毁

```js
function foo(){
  for (var i = 0; i < 7; i++) {
  }
  console.log(i); 
}
foo()
```

### let、const 声明的块级作用域原理及暂时性死区

ES6 引入了 let 和 const 关键字作为块级作用域变量声明，同时为了保证向下兼容，ES6 在执行上下文新增加了**词法环境**

```js
function foo(){
    var a = 1
    let b = 2
    {
      let b = 3
      var c = 4
      let d = 5
      console.log(a)
      console.log(b)
    }
    console.log(b) 
    console.log(c)
    console.log(d)
}   
foo()
```

词法环境内部，维护了一个小型栈结构，进入一个作用域块后，就会把该作用域块内部的变量压到栈顶，**JavaScript 查找变量时沿着词法环境的栈顶向下查询，然后变量环境**。

![图 6](./images/4045250b79269be3fb95da41a366f055a60a03c88331a333d2d8737bc963ca24.png)  

#### 暂时性死区

由于变量提升机制，所有的声明（function、var、let、const 和 class）都在 JavaScript 编译期间被提升，而 var 声明的变量提升会被初始化为 undefined，而 let 和 const 则未初始化。

只有在 JavaScript 引擎在执行源代码中声明的位置时，它们才会被初始化。

```js
let a; // 如果声明语句没有初始化赋值则默认 undefined
console.log(a); // outputs undefined
a = 5;
```

这意味着在引擎在源代码中声明的位置之前，您无法访问该变量，因为该变量还未初始化。这就是我们所说的“临时死区”，变量创建和初始化之间的时间跨度，在那里它们不能被访问。

```js
console.log(a); // ReferenceError: a is not defined
let a = 3;
```

暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

> 推荐阅读 [Hoisting in Modern JavaScript — let, const, and var](https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda)

#### 函数声明与块级作用域：

1. 允许在块级作用域内声明函数。
2. 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
3. 同时，函数声明还会提升到所在的块级作用域的头部。

```js
console.log(f) // outside f
function f() { console.log('I am outside!'); }

(function () {
  console.log(f) // undefined
  if (true) {
    console.log(f) // inside f
    function f() { console.log('I am inside!'); }
  }
}());
```

## 调用栈

执行上下文是 JavaScript 代码的运行环境，哪些情况下一段代码才会在执行之前就进行编译并创建执行上下文？一般说来，有这么三种情况：

- 全局代码
- 函数代码
- eval 执行的代码

大多数命令式编程语言都支持过程式调用，都使用栈的数据结构来管理函数之间的调用关系，即函数嵌套调用情况。

![图 5](./images/9d1ff0fa83857785c90abd14974958ea964190751a17a38c061ff4823e205585.png)  


JavaScript 引擎也是利用栈的这种结构来管理执行上下文的。在执行上下文创建好后，JavaScript 引擎会将执行上下文压入栈中，通常把这种用来管理执行上下文的栈称为执行上下文栈，又称**调用栈**。

```js
function multiply(x, y) {
  return x * y;
}

function printSquare(x) {
  var s = multiply(x, x);
  console.log(s);
}

printSquare(5);
```

![图 9](./images/20bc07b5deed579457df4f5dfc2281e1643f2a5d9b26fc1c4549a5b0ee419813.png)  

其中

1. 调用栈底是全局执行上下文
2. 当前函数执行完毕后，栈顶该函数的执行上下文会被弹出栈

## 作用域链

执行上下文是 JavaScript 代码的运行环境，当一段代码使用了一个变量时，JavaScript 引擎首先会在“当前的执行上下文”中查找该变量，如果查找不到，就会向外层作用域的执行上下文查找，依次类推，这一条查找链路就是作用域链。

而该函数的**作用域链是由其词法作用域决定的**。

### 词法作用域

**词法作用域就是指作用域是由代码中函数声明的位置来决定的**，所以词法作用域是静态的作用域，通过它就能够预测代码在执行过程中如何查找标识符。

![图 10](./images/db09c4e7adfde3898f824d5b5572639d585af3402a3a396419c1dabe2c8372e1.png)  

词法作用域是代码编译阶段就决定好的，和函数是怎么调用的没有关系。

#### 变量查找总结

```mermaid
flowchart LR
  subgraph 作用域1
  direction LR
  scope01(词法环境) --> 02(变量环境)
  end
  subgraph 作用域2
  direction LR
  scope11(词法环境) --> 12(变量环境)
  end
  subgraph 作用域3
  direction LR
  依次类推...
  end
  作用域1 --> 作用域2 --> 作用域3
```

### 闭包

闭包定义

在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量，当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束了，但是内部函数引用外部函数的变量依然保存在内存中，我们就把这些变量的集合称为闭包。

理解作用域链是理解闭包的基础，闭包就是作用域链中的一环。

```javascript
function foo() {
    var myName = "极客时间"
    let test1 = 1
    const test2 = 2
    var innerBar = { 
        setName:function(newName){
            myName = newName
        },
        getName:function(){
            console.log(test1)
            return myName
        }
    }
    return innerBar
}
var bar = foo()
bar.setName("极客邦")
bar.getName()
console.log(bar.getName())
```


1. 当在编译 foo 函数过程中，遇到内部函数 setName，JavaScript 引擎会**对内部函数做一次快速的词法扫描**，发现该内部函数引用了 foo 函数中的 myName 变量，由于是内部函数引用了外部函数的变量，所以 JavaScript 引擎判断这是一个闭包，于是在堆空间创建换一个“closure(foo)”的对象（这是一个内部对象，JavaScript 是无法访问的），用来保存 myName 变量。
2. 接着继续扫描到 getName 方法时，发现该函数内部还引用变量 test1，于是 JavaScript 引擎又将 test1 添加到“closure(foo)”对象中。这时候堆中的“closure(foo)”对象中就包含了 myName 和 test1 两个变量了。
3. 由于 test2 并没有被内部函数引用，所以 test2 依然保存在调用栈中。
4. 当执行到 foo 函数时，闭包就产生了；当 foo 函数执行结束之后，返回的 getName 和 setName 方法都引用“clourse(foo)”对象，所以即使 foo 函数退出了，**“clourse(foo)”依然被其内部的 getName 和 setName 方法引用**。所以在下次调用bar.setName或者bar.getName时，创建的执行上下文中就包含了“clourse(foo)”。

![img](./images/f9dd29ff5371c247e10546393c904edb.png)

总的来说，产生闭包的核心有两步：**第一步是需要预扫描内部函数；第二步是把内部函数引用的外部变量保存到堆中**。



闭包是外部函数的变量集合，内部函数setname保留着对外部函数的变量引用，这个变量引用指向了堆内存中的closeure(foo)

## this 指针

JavaScirpt 的变量查找机制有两种，一个是面向函数作用域一个是面向对象机制：

- 作用域链
- this、原型链
  > this 是面向对象机制的 JavaScript 变量查找，即通过对象属性，面向对象还有一个继承机制，对应在 JavaScript 中也就是原型链查找机制 

> 本小节主要是针对 this，JavaScirpt 对象[查看](./JavaScript%20对象.md)。

- this 指向
  - 默认情况下普通函数执行上下文中的 this 是指向全局对象 window 的，但在严格模式下，this 值则是 undefined
  - 对象调用
  - call、bind、apply
  - 构造函数（this 指向新创建的对象）
  - 箭头函数（执行上下文没有 this，依靠作用域链继承外层作用域的 this）


```js
// 嵌套函数中的 this 不会从外层函数中继承
var myObj = {
  name : "极客时间", 
  showThis: function(){
    console.log(this) // myObj
    function bar(){console.log(this)} // window
    bar()
  }
}
myObj.showThis()

// 缓存 this
// 把 this 体系转换为了作用域的体系，通过作用域链去继承
var myObj = {
  name : "极客时间", 
  showThis: function(){
    console.log(this)
    var self = this
    function bar(){
      self.name = "极客邦"
    }
    bar()
  }
}
myObj.showThis()
console.log(myObj.name)
console.log(window.name)

// 箭头函数
// ES6 中的箭头函数其自身的执行上下文没有 this，所以箭头函数中的 this 取决于它的外部函数。
var myObj = {
  name : "极客时间", 
  showThis: function(){
    console.log(this)
    var bar = ()=>{
      this.name = "极客邦"
      console.log(this)
    }
    bar()
  }
}
myObj.showThis()
console.log(myObj.name)
console.log(window.name)
```

