## 内容列表

- <a href="#类型">类型</a>
- <a href="#原型和原型链">原型和原型链</a>
- <a href="#作用域">作用域</a>
- <a href="#变量提升">变量提升</a>
- <a href="#执行上下文">执行上下文</a>
- <a href="#闭包">闭包</a>
- <a href="#继承">继承</a>
- <a href="#this">this</a>
- <a href="#apply、call、bind">apply、call、bind</a>

## [类型](#类型)

### 类型转换 之 == && ===

一个广泛被接受的认知就是：==判断值是否相等，===同时判断值是否相等和类型是否相同。但是，这里有些误解。
实际上，==在验证相等性的时候，会对类型不同的值做一个类型转换。===对要判断的值不做类型转换。

```
2 == '2'            // True
2 === '2'           // False
undefined == null   // True
undefined === null  // False
```

如果你将一个布尔类型的和非布尔类型的判断，JavaScript会将布尔类型的转换为数字然后再比对。 执行过程如下：

```
'0' == false   (1)
'0' == 0       (2)
 0  == 0       (3)
```

一些比较容易掉坑的比较，我在这里列出来：

```
false == ""  // true
false == []  // true
false == {}  // false
"" == 0      // true
"" == []     // true
"" == {}     // false
0 == []      // true
0 == {}      // false
0 == null    // false
```

[JS的隐式转换 从 [] ==false 说起](https://www.cnblogs.com/nanchen/p/7905528.html)

### 类型判断

#### typeof
我们都知道，在 ES6 前，JavaScript 共六种数据类型，分别是：
```
Undefined、Null、Boolean、Number、String、Object
```
然而当我们使用 typeof 对这些数据类型的值进行操作的时候，返回的结果却不是一一对应，分别是：
```
undefined、object、boolean、number、string、object
```
typeof 也能检测出函数类型：
```
function a() {}

console.log(typeof a); // function
```
typeof 虽然能检测出六种类型的值，但是无法区分是 null 还是 object，除此之外 Object 下还有很多细分的类型呐，如 Array、Function、Date、RegExp、Error 等，却不能区别去来。

### Object.prototype.toString
调用 Object.prototype.toString 会返回一个由 "[object " 和 class 和 "]" 组成的字符串，而 class 是要判断的对象的内部属性。
```javascript
var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = {a: 1}         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a(){}; // [object Function]

function checkType() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(Object.prototype.toString.call(arguments[i]))
    }
}

checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)

console.log(Object.prototype.toString.call(Math)); // [object Math]
console.log(Object.prototype.toString.call(JSON)); // [object JSON]
console.log(Object.prototype.toString.call(arguments)); // [object Arguments]
```
我们可以识别至少 14 种类型。

基本类型可以用 `typeof` 来判断，具体引用类型用`Object.prototype.toString.call`。

## [原型和原型链](#原型和原型链)

构造函数、实例原型、和实例之间的关系:
![](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype3.png)

实例与原型:
当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。这样查找的构成的有向路径就是原型链。

原型的原型：
![](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype5.png)

真的是继承么？
继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

## [作用域](#作用域)
作用域就是变量和函数的可被访问范围，在JavaScript中变量的作用域有全局作用域和局部作用域：

- **全局作用域**是最外层的作用域，在函数外面定义的变量属于全局作用域，可以被任何其他子作用域访问。在浏览器中，window对象就是全局作用域。

- **局部作用域**是在函数内部的作用域。在局部作用域定义的变量只能在该作用域以及其子作用域被访问。

因为 JavaScript 采用的是词法作用域（静态作用域），从变量、函数声明定义的位置就确定他们的作用域范围。

![](https://upload-images.jianshu.io/upload_images/2847460-0cfb5c1666729ed4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/520)

例如：该图中，2作用域中变量b就可以被3作用域访问

## [变量提升](#变量提升)

```javascript
function foo() {

    console.log('foo1');

}

foo();  // foo2

function foo() {

    console.log('foo2');

}

foo(); // foo2
```

不同与其他语言， JavaScript 引擎并非一行一行地分析和顺序执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”（变量提升、函数提升）。

**只有变量、函数的声明会被提升，赋值行为不会被动**。

## [执行上下文](#执行上下文)
当 JavaScript 代码执行一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。

对于每个执行上下文，都有三个重要属性：

- 变量对象(Variable object，VO)
- 作用域链(Scope chain)
- this

#### 变量对象
当 JavaScript 引擎进入执行函数时，就会创建函数执行上下文，这时变量对象会被激活，成为激活对象，其实两者是同一个东西。

变量对象会包括以下来进行初始化：

1. 函数的所有形参 (如果是函数上下文)

    - 由名称和对应值组成的一个变量对象的属性被创建
    - 没有实参，属性值设为 undefined

2. 函数声明

    - 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
    - 如果变量对象已经存在相同名称的属性，则完全替换这个属性

3. 变量声明

    - 由名称和对应值（undefined）组成一个变量对象的属性被创建；
    - 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

举个例子：
```
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);
```

在进入执行上下文后，这时候的 AO 是：

```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```
在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：
```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c(){},
    d: reference to FunctionExpression "d"
}
```

### 作用域链
例子：

```
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```

两段代码都会打印：local scope。

当函数创建时，函数有一个内部属性 [[scope]]，表示就是该函数可访问的作用域链，[[scope]] 就是所有父变量对象的层级链，举个例子：

```
function foo() {
    function bar() {
        ...
    }
}
```

函数创建时，各自的[[scope]]为：

```
foo.[[scope]] = [
  globalContext.VO
];

bar.[[scope]] = [
    fooContext.AO,
    globalContext.VO
];
```

当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。

这时候执行上下文的作用域链，我们命名为 Scope：
```
Scope = [AO].concat([[Scope]]);
```
至此，作用域链创建完毕。

当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

## [闭包](#闭包)

```
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
foo(); //local scope
```

闭包就是能够读取其他函数内部变量的函数。

**优点**：
- 一个是前面提到的可以读取函数内部的变量
- 另一个就是让这些变量的值始终保持在内存中

**缺点**：
由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题

### 原理
每次定义一个函数，都会产生一个作用域链（scope chain），将上层上下文的数据保存起来了，即使当前函数A运行结束，只要外部保持着当前函数A内部函数B的引用，依然可以访问到 A函数内部的变量（当JavaScript寻找变量varible时（这个过程称为变量解析），总会优先在当前作用域链的第一个对象中查找属性varible ，如果找到，则直接使用这个属性；否则，继续查找下一个对象的是否存在这个属性；这个过程会持续直至找到这个属性或者最终未找到引发错误为止）。

## [继承](#继承)

### 原型链继承

```javascript
function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin
```
缺点：
1. 原型的所有属性被所有实例共享
2. 不能传参

### 借用构造函数继承

```javascript
function Parent () {
    this.names = ['kevin', 'daisy'];
}

function Child () {
    Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]
```

在子类中执行父类的构造函数，通过这种调用，把父类构造函数的this指向为子类实例化对象引用，从而导致父类执行的时候父类里面的属性都会被挂载到子类的实例上去。

相比原型链继承，其优点如下： 优点：

1. 避免私有属性被共享
2. 可以向父类传参

但是通过这种方式，父类原型上的东西是没法继承的，并没有真正的实现继承（部分继承）：

```javascript
function Parent (name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child (name) {
    Parent.call(this, name);
}

var child1 = new Child('kevin');

console.log(child1.getName()); // TypeError: child1.getName is not a function

var child2 = new Child('daisy');

console.log(child2.getName()); // TypeError: child2.getName is not a function
```

### 组合式继承
所谓的组合是指组合借用构造函数和原型链继承两种方式。

```javascript
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);

    this.age = age;

}

Child.prototype = new Parent();

var child1 = new Child('kevin', '18');

child1.colors.push('black');

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy', '20');

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```

优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

缺点：组合继承最大的缺点是会调用两次父构造函数。在这个例子中，如果我们打印 child1 对象，我们会发现 Child.prototype 和 child1 都有一个属性为colors，属性值为['red', 'blue', 'green']。

![0ZXr7680RnBnmUy5pZeT90ME](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/assets/0ZXr7680RnBnmUy5pZeT90ME.PNG)

这样会造成内存浪费。

未了避免这一次重复调用呢？

如果我们不使用 Child.prototype = new Parent() ，而是间接的让 Child.prototype 访问到 Parent.prototype 呢？

```javascript
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);

    this.age = age;

}

Child.prototype = Parent.prototype;

let child1 = new Child('lys');

console.log(child1)
```

![t-XY5-xAUgAmN3h8xxcobYbo](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/assets/t-XY5-xAUgAmN3h8xxcobYbo.PNG)

之前问题解决了，不过我们发现 child1 的 constructor 是 Parent。
```javascript
console.log(child1.constructor.name); // Parent
```
这显然不是我们想要的。

### 优化后的组合式继承
1. Object.create是一种创建对象的方式，它会创建一个中间对象。
2. 把 Child.prototype 指向到 中间对象。
3. Child.prototype.construtor = Child;

```javascript
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {

    Parent.call(this, name);

    this.age = age;

}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.construtor = Child;

let child1 = new Child('lys');

console.log(child1)
```

![9Tholoujav_RtA3FOpTBuLBA](https://raw.githubusercontent.com/laoergege/laoergege-blog/master/assets/9Tholoujav_RtA3FOpTBuLBA.PNG)

这种方式解决了上面的所有问题，是继承的最完美实现方式。

### ES6 继承
Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

```javascript
class Parent {
}
class Child1 extends Parent {
    constructor(x, y, colors) {
         super(x, y); // 调用父类的constructor(x, y)
         this.colors = colors;
    }
    toString() {
         return this.colors + ' ' + super.toString(); // 调用父类的toString()
    }
}
```

关于 ES6 class中代码的 ES5 中的真正样子，可查看这篇[文章](https://segmentfault.com/a/1190000008732290)

## this
函数有以下几种情况，不同情况 this 指向不同：

- 在全局环境或是普通函数中直接调用
- 作为对象的方法
- 使用call、apply、bind
- 作为构造函数
- 箭头函数

### 直接调用
当函数独立调用的时候，在严格模式下它的this指向undefined，在非严格模式下，当this指向undefined的时候，自动指向全局对象(浏览器中就是window)。

### 作为对象方法
this指向调用它的对象。

### 使用call、apply

### 作为构造函数
如果函数作为构造函数用，那么其中的this就代表它即将new出来的对象。

new做了下面这些事:
- 创建一个临时对象
- this 指向该对象
- 给临时对象绑定原型
- 执行构造函数
- 将临时对象return

### 箭头函数
箭头函数在创建的时候就已经绑定 this 指针，其值为创建时上下文的this值。

## apply、call、bind
[深入浅出妙用 Javascript 中 apply、call、bind](https://mp.weixin.qq.com/s/BYbCgTMt7nvChPddWor0Tw)
