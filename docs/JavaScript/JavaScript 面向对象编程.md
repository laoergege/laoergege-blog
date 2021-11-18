# JavaScript 对象

## 什么是面向对象

## JavaScript 对象模型

## 继承机制：基于原型

面向对象继承机制：

- 基于类
  > “基于类”的编程提倡使用一个关注分类和类之间关系开发模型。在这类语言中，总是先有类，再从类去实例化一个对象。类与类之间又可能会形成继承、组合等关系。类又往往与语言的类型系统整合，形成一定编译时的能力。
- 基于原型
  > “基于原型”的编程看起来更为提倡程序员去关注一系列对象实例的行为，而后才去关心如何将这些对象，划分到最近的使用方式相似的原型对象，而不是将它们分成类。

基于原型的面向对象系统通过“复制”的方式来创建新对象。原型系统的“复制操作”有两种实现思路：
- 一个是并不真的去复制一个原型对象，而是使得新对象持有一个原型的引用；
- 另一个是切实地复制对象，从此两个对象再无关联。

而 JavaScript 正是将一个对象作为另一个新对象的原型引用（第一种方式）。

JavaScript 的原型机制：
- 如果所有对象都有私有字段[[prototype]]，就是对象的原型；
- 读一个属性，如果对象本身没有，则会继续访问对象的原型，直到原型为空或者找到为止（**原型链**）。

## ES6 中的类 class

在任何场景，推荐使用 ES6 的语法来定义类，而令 function 回归原本的函数语义。



数据属性写在对象上，而访问器属性和方法才是写在原型对象之上的

```js
class N {
   name;
   age;

   constructor(name) {
       this.name = name
   }

   showName() {
       console.log(this.name)
   }

   get desp() {
      return `My name is ${this.name}`
   }
}

class P extends N {
    constructor(...res) {
        super(...res)
    }
}

const n = new N('lys')
n.showName() // lys
n.desp // My name is lys

const p = new P('123')
p.showName()
p.desp
```








> 要想理解 JavaScript 对象，必须清空我们脑子里“基于类的面向对象”相关的知识，回到人类对对象的朴素认知和面向对象的语言无关基础理论，我们就能够理解 JavaScript 面向对象设计的思路。

Object（对象）在英文中，是一切事物的总称。



对象的本质特征
- 唯一
- 状态
- 行为

JavaScript 对象模型：

```js
    var o1 = { a: 1 };
    var o2 = { a: 1 };
    console.log(o1 == o2); // false

    var o = { 
        d: 1,
        f() {
            console.log(this.d);
        }    
    };
```

1. 在 JavaScript 中，将状态和行为统一抽象为“属性”

2. 在实现了对象基本特征的基础上, 我认为，JavaScript 中对象独有的特色是：对象具有高度的动态性，这是因为 JavaScript 赋予了使用者在运行时为对象添改状态和行为的能力。

动态对象模型

3. 属性分类
JavaScript 对象属性
- 数据属性
  - value
  - writable
  - enumerable，决定 for in 能否枚举该属性
  - configurable，决定该属性能否被删除或者改变特征值
- 访问器属性
  - getter
  - setter
  - enumerable
  - configurable

4. 实际上 JavaScript 对象的运行时是一个“属性的集合”，属性以字符串或者 Symbol 为 key，以数据属性特征值或者访问器属性特征值为 value。

在创建对象时，也可以使用 get 和 set 关键字来创建访问器属性，代码如下所示：

```js
    var o = { get a() { return 1 } };

    console.log(o.a); // 1
```

对象是一个属性的索引结构


Object.defineProperty
Object.getOwnPropertyDescriptor

- 对象
  - 动态对象原型设计
  - 原型继承


- Object.create()

- Object.prototype
- isPrototypeOf
- hasOwnProperty
- valueOf
- toString
- toLocaleString