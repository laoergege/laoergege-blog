> 本文学习记录于[《30天精通RXJS》](https://github.com/ShaofeiZi/30-days-proficient-in-rxjs)

## 前言

订阅一个 observable 就像调用一次 function，而每次运行 function 都有各自的独立运行空间，故多次订阅一个 observable，就会得到相同结果副本。

```
var source = Rx.Observable.interval(1000).take(3);

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

source.subscribe(observerA);
source.subscribe(observerB);

// "A next: 0"
// "B next: 0"
// "A next: 1"
// "B next: 1"
// "A next: 2"
// "A complete!"
// "B next: 2"
// "B complete!"
```

即使延迟 observerB 延迟订阅，结果还是一样：

```
var source = Rx.Observable.interval(1000).take(3);

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

source.subscribe(observerA);
setTimeout(() => {
    source.subscribe(observerB);
}, 1000);

// "A next: 0"
// "A next: 1"
// "B next: 0"
// "A next: 2"
// "A complete!"
// "B next: 1"
// "B next: 2"
// "B complete!"
```

看到 “observable” 字面，可能总会让人不免以为这个就是观察者模式，可 observable 并没有像真正意义上的可观察者一样，内部保留观察者的一份清单。**每次订阅 observable 都是分开独立运行的，observable 的行为更像 function**。

## 共享 observable 结果
我们通过一个中间人来订阅 Observable，再把结果由中间人给转播给其他人

```
var source = Rx.Observable.interval(1000).take(3);

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

//中间人
var subject = {
    //保留观察者清单
    observers: [],
    addObserver: function(observer) {
        this.observers.push(observer)
    },
    next: function(value) {
        //发送消息给观察者
        this.observers.forEach(o => o.next(value))    
    },
    error: function(error){
        this.observers.forEach(o => o.error(error))
    },
    complete: function() {
        this.observers.forEach(o => o.complete())
    }
}
//添加观察者
subject.addObserver(observerA)

//中间人订阅 Observable
source.subscribe(subject);

setTimeout(() => {
    subject.addObserver(observerB);
}, 1000);

// "A next: 0"
// "A next: 1"
// "B next: 1"
// "A next: 2"
// "B next: 2"
// "A complete!"
// "B complete!"
```

让我们把 subject 的 addObserver 改名成 subscribe 如下

```
var subject = {
    observers: [],
    subscribe: function(observer) {
        this.observers.push(observer)
    },
    next: function(value) {
        this.observers.forEach(o => o.next(value))    
    },
    error: function(error){
        this.observers.forEach(o => o.error(error))
    },
    complete: function() {
        this.observers.forEach(o => o.complete())
    }
}
```

```
//添加观察者
subject.subscribe(observerA)
```

这样看起来，我们实现的 Subject 但运行方式跟 RxJS 的 Subject 实例是几乎一样的，我们把前面的代码改成 RxJS 提供的 Subject 试试

```
var source = Rx.Observable.interval(1000).take(3);

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

var subject = new Rx.Subject()

subject.subscribe(observerA)

source.subscribe(subject);

setTimeout(() => {
    subject.subscribe(observerB);
}, 1000);

// "A next: 0"
// "A next: 1"
// "B next: 1"
// "A next: 2"
// "B next: 2"
// "A complete!"
// "B complete!"
```
我们实现的 subject 跟 RxJS 中的 Subject 是非常类似的，大家可以看源码：

```
/**
 * @class Subject<T>
 */
export declare class Subject<T> extends Observable<T> implements ISubscription {
    observers: Observer<T>[];
    closed: boolean;
    isStopped: boolean;
    hasError: boolean;
    thrownError: any;
    constructor();
    static create: Function;
    lift<R>(operator: Operator<T, R>): Observable<R>;
    next(value?: T): void;
    error(err: any): void;
    complete(): void;
    unsubscribe(): void;
    protected _trySubscribe(subscriber: Subscriber<T>): TeardownLogic;
    protected _subscribe(subscriber: Subscriber<T>): Subscription;
    asObservable(): Observable<T>;
}
```

## 什么是 Subject？
从上述实例中，我们能够得出：
#### Subject 同时是 Observable 又是 Observer
Subject 实现 RxJS 中的 Observer 的 next、complete、error 操作，又继承了 Observable，能够使用各种 Observable 的 Operate。
#### Subject 就是 Observer Pattern 的实例
Subject 会对内部的 observers 清单进行组播(multicast)

## BehaviorSubject, ReplaySubject, AsyncSubject
这三类是 Subject 的另外三种变形。

### BehaviorSubject
Subject 只有事件的时候才会发送观察者，不能够保持最新的状态并且发送给新订阅，对比下面两则列子：
```
var subject = new Rx.Subject();

var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);

subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"

setTimeout(() => {
    subject.subscribe(observerB); // 3 秒后才订阅，observerB 不会收到任何值。
},3000)
```

```
var subject = new Rx.BehaviorSubject(0); // 0 为起始值
var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);
// "A next: 0"
subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"

setTimeout(() => {
    subject.subscribe(observerB); 
    // "B next: 3"
},3000)
```

### ReplaySubject
相比 BehaviorSubject，ReplaySubject 能够重播我们指定的最近几个状态值

```
var subject = new Rx.ReplaySubject(2); // 重复发送最后 2 个元素
var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);
subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"

setTimeout(() => {
    subject.subscribe(observerB);
    // "B next: 2"
    // "B next: 3"
},3000)
```

可能会有人以为 ReplaySubject(1) 是不是就等同于 BehaviorSubject，其实是不一样的，BehaviorSubject 在建立时就会有起始值，比如 BehaviorSubject(0) 起始值就是 0，BehaviorSubject 是代表着状态而 ReplaySubject 只是事件的重放而已。

### AsyncSubject

```
var subject = new Rx.AsyncSubject();
var observerA = {
    next: value => console.log('A next: ' + value),
    error: error => console.log('A error: ' + error),
    complete: () => console.log('A complete!')
}

var observerB = {
    next: value => console.log('B next: ' + value),
    error: error => console.log('B error: ' + error),
    complete: () => console.log('B complete!')
}

subject.subscribe(observerA);
subject.next(1);
subject.next(2);
subject.next(3);
subject.complete();
// "A next: 3"
// "A complete!"

setTimeout(() => {
    subject.subscribe(observerB);
    // "B next: 3"
    // "B complete!"
},3000)
```

从上面的代码可以看出来，AsyncSubject 会在 subject 结束后才送出最后一个值，其实这个行为跟 Promise 很像，都是等到事情结束后送出一个值，但实务上我们非常非常少用到 AsyncSubject，绝大部分的时候都是使用 BehaviorSubject 跟 ReplaySubject 或 Subject。

## 何时使用 Subject
Observable 平时开发满足我们需求了，当我们一个 observable 的操作过程中会发生了 side-effect， 而我们不希望这个 side-effect 因为多个 subscribe 而被触发多次，希望能够共享该 side-effect 的结果，例如下面这段例子：

```javascript
var result = Rx.Observable.interval(1000).take(6)
             .map(x => Math.random()); // side-effect，平常有可能是呼叫 API 或其他 side effect

var subA = result.subscribe(x => console.log('A: ' + x));
var subB = result.subscribe(x => console.log('B: ' + x));
```

这段代码 A 跟 B 印出来的乱数就不一样，代表 random(side-effect) 被执行了两次，这种情况就一定会用到 subject(或其相关的 operators)

```javascript
var result = Rx.Observable.interval(1000).take(6)
             .map(x => Math.random()) // side-effect
             .multicast(new Rx.Subject())
             .refCount();

var subA = result.subscribe(x => console.log('A: ' + x));
var subB = result.subscribe(x => console.log('B: ' + x));
```

改成这样后我们就可以让 side-effect 不会因为订阅数而多执行，这种情状就是一定要用 subject 的。
