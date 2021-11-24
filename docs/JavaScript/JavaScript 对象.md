---
release: true
tags:
 - javascript
 - 对象
---

# JavaScript 对象

- JavaScript 对象
  - [面向对象概念](#什么是面向对象)
  - [对象模型设计](#javascript-对象模型)
    - 属性集合
    - [基于原型](基于原型的面向对象编程)
  - 完全运行时能力
  - [原型系统下的基于类编程范式支持](#es6-中的类-class)

## 什么是面向对象

什么是面向对象，回归纯粹的本质，Object（对象）是一切事物的总称，事物是能够看得出来到或者理解得到的东西。

对象的本质特征：
- 唯一
- 状态
- 行为

## JavaScript 对象模型

JavaScript 对象的设计要点：

1. 在 JavaScript 中，对象的状态和行为其实都被抽象为了**属性**
2. 属性分为数据属性和访问器属性（getter/setter）两类

   - 数据属性
     - value，就是属性的值
     - writable，可写
     - enumerable，可枚举
     - configurable，决定该属性能否被删除或者改变特征值
   - 访问器属性
     - getter，在取属性值时被调用
     - setter，在设置属性值时被调用
     - enumerable，可枚举
     - configurable，决定该属性能否被删除或者改变特征值

   如果一个描述符不具有 value、writable、get 和 set 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 value 或 writable 和 get 或 set 键，则会产生一个异常。

3. 对象是一个**属性集合**，是一个**属性的索引结构**
4. 运行时对象具有动态修改属性的能力

JavaScript 的对象系统设计跟目前主流如 Java 基于类的面向对象差异非常大：具有高度动态性的属性集合。JavaScript 提供了完全运行时能力，这使得它可以模仿具有多种编程范式支持：面向对象编程范式、函数式编程（JavaScript 中函数是一种特殊对象）

JavaScript 基于这样的动态对象模型设计自己的原型系统，以及你熟悉的函数、类等基础设施。

## 基于原型的面向对象编程

面向对象编程范式主要分两类：

- 基于类
  
  “基于类”的编程提倡使用一个关注分类和类之间关系开发模型。在这类语言中，**总是先有类，再从类去实例化一个对象**。类与类之间又可能会形成继承、组合等关系。类又往往与语言的类型系统整合，形成一定编译时的能力。

- 基于原型
  
  “基于原型”的编程看起来更为提倡程序员**先去关注一系列对象实例的行为**，而后才去关心如何将这些对象，**划分到最近的使用方式相似的原型对象，而不是将它们先分成类**。

总之**一个是先有类再有对象，一个是基于“最近对象（原型）”创建对象**，无论是基于原型还是基于类都能够满足基本的复用和抽象需求。

基于原型的面向对象系统通过“复制”的方式来创建新对象。原型系统的“复制操作”有两种实现思路：

- 一个是并不真的去复制一个原型对象，而是使得新对象持有一个原型的引用；
- 另一个是切实地复制对象，从此两个对象再无关联。

### JavaScript 的原型机制

- 所有对象都有私有属性 `[[prototype]]`，保持对原型的引用；
- 读一个属性，如果对象本身没有，则会继续访问对象的原型，直到原型为空或者找到为止（**原型链**）。
- 运行时原型可动态修改

基于原型范式的对象编程

```js
// 直接创建对象实例，运行时默认原型为 Object.prototype
var cat = {
    say(){
        console.log("meow~");
    },
    jump(){
        console.log("jump");
    }
}

// 关注对象行为，创建制定原型新对象
// 使用 ES6 提供的原型标准操作方法
// 非 ES 标准： var tiger = { say(){} }; tiger.__proto__ = cat 
var tiger = Object.create(cat,  {
    say:{
        writable:true,
        configurable:true,
        enumerable:true,
        value:function(){
            console.log("roar!");
        }
    }
})

var anotherCat = Object.create(cat);

anotherCat.say();

// 利用原型来实现抽象和复用
var anotherTiger = Object.create(tiger);

anotherTiger.say();
anotherTiger.jump();
```

JavaScript 对象的原型在运行时可动态修改，最直接暴力的方法通过 `Object.prototype.__proto__` 访问属性去访问的对象的内部 `[[Prototype]]`，但这个属性是非 web 标准，虽然被大多数厂商实现，建议使用 ES6 提供的标准：

- Object.create 创建一个对象，并将原型指针指向指定对象
- Object.getPrototypeOf 获得一个对象的原型；
- Object.setPrototypeOf 设置一个对象的原型。

### new + 构造器模拟“类”行为

早期 JavaScript 因为一些公司的政治原因，引入了 new、this 等语言特性，使之“看起来语法更像 Java”。

new + 构造器模拟“类”创建对象：

```js
function c1(){
    this.p1 = 1;
    this.p2 = function(){
        console.log(this.p1);
    }
} 
var o1 = new c1;
o1.p2();
```

但上面的一切还是基于运行时原型系统，new 的行为：

1. 以构造器函数的 prototype 属性值为原型创建新对象
2. 将 this 执行该对象
3. 执行构造函数
4. 若构造函数返回对象则直接返回，否则使用新创建的对象返回

new + this 的语法特性让函数变成混乱，而且它客观上提供了两种方式，一是在构造器中添加属性，二是在构造器的 prototype 属性上添加属性，导致创建行为不统一。

```js
function c1(){
    this.p1 = 1;
    this.p2 = function(){
        console.log(this.p1);
    }
} 
var o1 = new c1;
o1.p2();



function c2(){
}
c2.prototype.p1 = 1;
c2.prototype.p2 = function(){
    console.log(this.p1);
}

var o2 = new c2;
o2.p2();
```

ES6 中加入了新特性 class，new、this 跟 function 搭配的怪异行为终于可以不使用了，但是类的写法依旧是基于原型机制的语法糖，JavaScript 的原型体系同时作为一种编程范式和运行时机制存在。**推荐在任何场景，我都推荐使用 ES6 的语法来定义类，而令 function 回归原本的函数语义**。

## ES6 中的类 class

在任何场景，推荐使用 ES6 的语法来定义类，而令 function 回归原本的函数语义。

注意对象创建的行为：**类的数据属性写在对象上，而访问器属性和方法则写在原型对象之上的**。

```js
class N {
  name;
  age;

  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }

  get desp() {
    return `My name is ${this.name}`;
  }
}

class P extends N {
  constructor(...res) {
    super(...res);
  }
}

const n = new N("lys");
n.showName(); // lys
n.desp; // My name is lys

const p = new P("123");
p.showName();
p.desp;
```