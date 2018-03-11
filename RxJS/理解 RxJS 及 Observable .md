

> 本文是一篇学习笔记 ，参考学习来源：
[30天精通RXJS](https://github.com/ShaofeiZi/30-days-proficient-in-rxjs)、
[RxJS 官方文档](http://reactivex.io/rxjs/manual/overview.html)


## Functional Reactive Programming
Functional Reactive Programming 是一种编程范式(programming paradigm)，白话就是一种写程式的方法论！举个例子，像 OOP 就是一种编程范式，OOP 告诉我们要使用对象的方式来思考问题，以及撰写程式。而 Functional Reactive Programming 其实涵盖了 Reactive Programming 及 Functional Programming 两种编程思想。

**Functional Programming**

Functional Programming 如果要用一句话来总结 Functional Programming，那就是 用 function 来思考我们的问题，以及撰写程式。还有 Pure function 特性：不管外部环境如何，只要参数相同，函数执行的返回结果必定相同。这种不依赖任何外部状态，只依赖于传入的参数的特性；制作运算，并且没有任何显著的副作用(Side Effect)，例如：
- 发送 http request
- 在画面印出值或是 log
- 获得使用者 input
- Query DOM 事件

**Reactive Programming**

Reactive Programming 简单来说就是 当数据源发生改变时，由数据源自动告诉我发生变动了

这句话看似简单，其实背后隐含两件事

- 当发生变动 => 非同步：不知道什么时候会发生变动，反正变动时要跟我说
- 由变数自动告知我 => 我不用写通知我的每一步代码

Rx 基本上就是上述的两个观念的结合。

## RxJS
官方介绍
```
RxJS is a library for composing asynchronous and event-based programs by using observable sequences. 

RxJS 是一个库，它通过使用 observable 序列来编写异步和基于事件的程序。
```
RxJS 是用于基于事件的程序（例如，web客户端应用程序），使用 observable 序列来编写处理异步事件（相对目前处理异步事件的手段：基于回调 和 Promise 等）。

那么 observable 是什么？

## observable
要理解 Observable 之前，我们必须先谈谈两个设计模式(Design Pattern)， Iterator Pattern 跟 Observer Pattern。

### Observer Pattern(观察者模式)
> 附上 观察者模式 的 ES6写法
```
function Producer() {

	// 这个 if 只是避免使用者不小心把 Producer 当作函数来调用
	if(!(this instanceof Producer)) {
	  throw new Error('请用 new Producer()!');
	  // 仿 ES6 行为可用： throw new Error('Class constructor Producer cannot be invoked without 'new'')
	}

	this.listeners = [];
}

// 加入监听的方法
Producer.prototype.addListener = function(listener) {
	if(typeof listener === 'function') {
		this.listeners.push(listener)
	} else {
		throw new Error('listener 必须是 function')
	}
}

// 移除监听的方法
Producer.prototype.removeListener = function(listener) {
	this.listeners.splice(this.listeners.indexOf(listener), 1)
}

// 发送通知的方法
Producer.prototype.notify = function(message) {
	this.listeners.forEach(listener => {
		listener(message);
	})
}
```
```
var egghead = new Producer(); 
// new 出一个 Producer 实例叫 egghead

function listener1(message) {
	console.log(message + 'from listener1');
}

function listener2(message) {
	console.log(message + 'from listener2');
}

egghead.addListener(listener1); // 注册监听
egghead.addListener(listener2);

egghead.notify('A new course!!') // 当某件事情发生时，会主动推送消息到观察者
```

**在观察者模式，消息是由生产者(Producer)推送(push)到消费者**。

### Iterator（迭代器） Pattern

迭代器模式demo
```
function IteratorFromArray(arr) {
	if(!(this instanceof IteratorFromArray)) {
		throw new Error('请用 new IteratorFromArray()!');
	}
	this._array = arr;
	this._cursor = 0;	
}

IteratorFromArray.prototype.next = function() {
	return this._cursor < this._array.length ?
		{ value: this._array[this._cursor++], done: false } :
		{ done: true };
}
```
next 方法只会回传这两种结果：

1. 在最后一个元素前： { done: false, value: elem }
2. 在最后一个元素之后： { done: true, value: undefined }

Iterator Pattern 相比于 Observer Pattern，消息是由消费者拉取的。

![](https://camo.githubusercontent.com/750fb3da5e691b7d63a0028591ed137cb4133f05/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646f68746b796938342f696d6167652f75706c6f61642f76313438323234303739382f707573685f70756c6c2e706e67)

但他有一个**延迟运算**的特性：简单来说我们延迟一个表达式的运算时机直到真正需要它的值在做运算。例如当我们声明函数时并不会马上执行函数，待到我们调用函数才执行运行。另一个就是**渐进式取值**，每次调用迭代器 `next()` 时，仅对迭代的序列的元素进行一次取值，相对 `array.map()` 一次性运算所有元素进行运算，这样尤其是在处理大量数据的时候会非常明显！

## 总结
Observable 其实就是这两个 Pattern（模式） 思想的结合，所以具备以下特性：
- 生产者推送资料的特性

    消息由数据源推送到消费者，这真是响应式编程的特征

- 延迟运算

    所有 Observable 一定会等到订阅后才开始对元素做运算，如果没有订阅就不会有运算的行为

- 渐进式取值

RxJS 主要用来处理基于异步事件的程序，**用一个 Observable 来代表一个序列异步事件，里面的元素会随着时间推送**, 并提供了一系列类数组的 opreate 来操作组合异步行为。
> 可以把 RxJS 想成处理 非同步行为 的 Lodash。


