> 此笔记主要记录来源于 大漠 发于 gitchat 上的付费教程《Angular 初学者快速上手教程》

# Angular 核心概念
![](http://images.gitbook.cn/e0c611d0-acb3-11e7-9ec8-4915d3122415)
- Component（组件）是整个框架的核心，也是终极目标。“组件化”的意义有2个：第一是分治，因为有了组件之后，我们可以把各种逻辑封装在组件内部，避免混在一起；第二是复用，封装成组件之后不仅可以在项目内部复用，而且可以沉淀下来跨项目复用。
- NgModule（模块）是组织业务代码的利器，按照你自己的业务场景，把组件、服务、路由打包到模块里面，形成一个个的积木块，然后再用这些积木块来搭建出高楼大厦。
- Router（路由）的角色也非常重要，它有3个重要的作用：第一是封装浏览器的 History 操作；第二是负责异步模块的加载；第三是管理组件的生命周期。

# 组件：模板
Angular 模板主要知识点：

1. Mustache（八字胡）语法
2. 模板内的局部变量
3. 属性绑定、事件绑定、双向绑定
4. 在模板里面使用结构型指令 *ngIf、*ngFor、ngSwitch
5. 在模板里面使用属性型指令 NgClass、NgStyle、NgModel
6. 在模板里面使用管道格式化数据

## Mustache（八字胡）语法
关于 Mustache 语法，你需要掌握3点：

1. 它可以获取到组件里面定义的属性值。
2. 它可以自动计算简单的数学表达式，例如：加减乘除、取模。
3. 它可以获得方法的返回值。

## 模板内的局部变量
```
<input #heroInput>
<p>{{heroInput.value}}</p>
```
如果在模板里面定义的局部变量和组件内部的属性重名,Angular 会按照以下优先级来进行处理：
```
模板局部变量 > 指令中的同名变量 > 组件中的同名属性
```

## 属性绑定、事件绑定、双向绑定
### 属性绑定
属性绑定是用方括号来做的，写法：
```
<img [src]="imgSrc" />
```
```
public imgSrc:string="./assets/imgs/1.jpg";
```

### 事件绑定
事件绑定是用圆括号来做的，写法：
```
<button class="btn btn-success" (click)="btnClick($event)">测试事件</button>
```

### 双向绑定
双向绑定是通过方括号里面套一个圆括号来做的，模板写法：
```
<font-resizer [(size)]="fontSizePx"></font-resizer>
```

## 在模板里面使用结构型指令 *ngIf、*ngFor、ngSwitch
### ngIf
简单形式
```
<!--语法糖-->
<div *ngIf="condition">...</div>
```
else
```
<div *ngIf="condition; else elseBlock">...</div>
<ng-template #elseBlock>...</ng-template>
```
then、else(使用then会忽略 ngIf 指令宿主的内容)
```
<div *ngIf="condition; then thenBlock else elseBlock">this is ignored</div>
<ng-template #thenBlock>...</ng-template>
<ng-template #elseBlock>...</ng-template>
```
使用as语法
```
<div *ngIf="condition as value; else elseBlock">{{value}}</div>
<ng-template #elseBlock>...</ng-template>
```

### ngFor
```
<li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
   {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
</li>
```
#### Local Variables
NgForOf 提供了几个导出值，可以将其替换为局部变量：

- $implicit: T - 表示 ngForOf 绑定的可迭代对象中的每一个独立项。

- ngForOf: NgIterable<T> - 表示迭代表达式的值,如果表达式更复杂，那么在属性访问时很有用，例如使用异步管道时`(userStreams | async)`。

- index: number - 表示当前项的索引值。

- first: boolean - 若当前项是可迭代对象的第一项，则返回 true。

- last: boolean - 若当前项是可迭代对象的最后一项，则返回 true。

- even: boolean - 若当前项的索引值是偶数，则返回 true。

- odd: boolean - 若当前项的索引值是奇数，则返回 true。

#### Change Propagation
- 当可迭代对象的值改变时，NgForOf 对 DOM 会进行相应的更改：

- 当新增某一项，对应的模板实例将会被添加到 DOM

- 当移除某一项，对应的模板实例将会从 DOM 中移除

- 当对可迭代对象每一项进行重新排序，它们各自的模板将在 DOM 中重新排序

- 否则，页面中的 DOM 元素将保持不变。

Angular 使用对象标识来跟踪可迭代对象中，每一项的插入和删除，并在 DOM 中做出相应的变化。但使用对象标识有一个问题，假设我们通过服务端获取可迭代对象，当重新调用服务端接口获取新数据时，尽管服务端返回的数据没有变化，但它将产生一个新的对象。此时，Angular 将完全销毁可迭代对象相关的 DOM 元素，然后重新创建对应的 DOM 元素。这是一个很昂贵 (影响性能) 的操作，如果可能的话应该尽量避免。

因此，Angular 提供了 trackBy 选项，让我们能够自定义跟踪算法。 trackBy 选项需绑定到一个包含 index 和 item 两个参数的函数对象。若设定了 trackBy 选项，Angular 将基于函数的返回值来跟踪变化。

### ngSwitch
```
<div [ngSwitch]="mapStatus">
    <p *ngSwitchCase="0">下载中...</p>
    <p *ngSwitchCase="1">正在读取...</p>
    <p *ngSwitchDefault>系统繁忙...</p>
</div>
```
```
public mapStatus:number=1;
```

## 在模板里面使用属性型指令
使用频率比较高的3个内置指令是：NgClass、NgStyle、NgModel。

### ngClass
```
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">
```
根据 map 中的 value 是否为真，来决定该元素上是否出现与 name 对应的 CSS 类。右侧的表达式应该返回一个形如 {class-name: true/false} 的 map。
```
<div [class.extra-sparkle]="isDelightful">
```
根据isDelightful表达式的结果是否为真，决定CSS类extra-sparkle是否出现在当前元素上。

### ngStyle
```
<div [ngStyle]="currentStyles">
    用NgStyle批量修改内联样式！
</div>
<button class="btn btn-success" (click)="setCurrentStyles()">设置</button>
```
```
public currentStyles: {}
public canSave:boolean=false;
public isUnchanged:boolean=false;
public isSpecial:boolean=false;

setCurrentStyles() {
    this.currentStyles = {
        'font-style':  this.canSave      ? 'italic' : 'normal',
        'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
        'font-size':   this.isSpecial    ? '36px'   : '12px'
    };
}
```
把CSS样式属性width的px（像素）值绑定到表达式mySize的结果。单位是可选的
```
<div [style.width.px]="mySize">
```

### ngModel
**注意：ngModel 只用在表单元素**
```
<p class="text-danger">ngModel只能用在表单类的元素上面</p>
    <input [(ngModel)]="currentRace.name">
<p>{{currentRace.name}}</p>
```
```
public currentRace:any={name:"随机种族"};
```

## 管道
管道的一个典型作用是用来转化数据。来一个最简单的例子：
```
{{currentTime | date:'yyyy-MM-dd HH:mm:ss'}}
```
```
public currentTime: Date = new Date();
```
查看更多[内置管道](https://angular.io/api?type=pipe)。

# 组件：组件间通讯
## 组件关系
在树形结构里面，组件之间有几种典型的关系：父子关系、兄弟关系、没有直接关系
![](http://images.gitbook.cn/891636a0-af23-11e7-b111-4d6e630f480d)

### 父子关系
- 父组件借助模板变量直接访问子组件 public 属性
- 借助于 @Input 和 @Output 进行通讯

@Output 的本质是事件机制，我们可以利用它来监听子组件上派发的事件，子组件上这样写：
```
@Output()
public follow=new EventEmitter<string>();
```
触发 follow 事件的方式如下：
```
this.follow.emit("follow");
```
父组件上可以这样监听 follow 事件：
```
<child (follow)="doSomething()"></child>
```
### 兄弟关系
- 可借助父组件作为中间件进行通讯
### 没有直接关系
- 通过单例服务，利用 RxJS，在 Service 里面定义一个 public 型的 Subject（主题），然后让所有组件都来subscribe（订阅）这个主题，类似于一种“事件总线”的效果。

# 组件生命周期
**绿色标明的会在更新周期内不断调用，请不用在里面实现复杂的逻辑**

![](http://images.gitbook.cn/f3fc8050-af2d-11e7-bdfa-890a7a50d411)

 hook | 描述 
-----| ----- 
 ngOnChanges() | 当改变输入属性时响应。 该方法接受当前和上一属性值的SimpleChanges对象 
 ngOnInit() | 在输入属性设置完成之后响应，用于初始化指令/组件。只调用一次。 
 ngDoCheck() | 在每次变更检测周期都会被调用， 在 ngOnChanges()和ngOnInit()之后。
 ngAfterContentInit() | 当把内容投影进组件之后调用。第一次ngDoCheck()之后调用，只调用一次。
 ngAfterContentChecked() | 每次完成被投影组件内容的变更检测之后调用。
 ngAfterViewInit() | 初始化完组件视图及其子视图之后调用。
 ngAfterViewChecked() | 每次做完组件视图和子视图的变更检测之后调用。
 ngOnDestroy() | 当Angular每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。在Angular销毁指令/组件之前调用。

# ShaDowDom
参考 [Angular 2 ViewEncapsulation](https://segmentfault.com/a/1190000008677532)

# 内容投影
内容投影可以让组件标签内的内容投影到组件模板内 `ng-content` 预留的位置。

## 投影单块块内容

```html
// app 组件模板
<div class="panel panel-primary">
  <div class="panel-heading">
    <ng-content></ng-content>
  </div>
</div>
```
```html
// 外部使用
<app>
    <div class="panel-heading">标题</div>
</app>
```
最终渲染：
```html
<div class="panel panel-primary">
  <div class="panel-heading">
    <div class="panel-heading">标题</div>
  </div>
</div>
```
## 投影多块内容
当有插座，`ng-content` 可以使用 `select` 属性选择要投影的内容：

```html
// app 组件模板
<div class="panel panel-primary">
  <div class="panel-heading">
      <ng-content select="h3"></ng-content>
  </div>
  <div class="panel-body">
      <ng-content select=".my-class"></ng-content>
  </div>
  <div class="panel-footer">
      <ng-content select="p"></ng-content>
  </div>
</div>
```

```html
// 外部使用
<app>
    <h3>这是父层投影进来的内容</h3>
    <p class="my-class">利用CSS选择器</p>
    <p>这是底部内容</p>
</app>
```
`select` 选择器差不多跟 css 选择器类似。同样支持组件投影，`select` 属性值跟组件标签名一样。

# 指令
Angular 中指令分为三种：
![](http://images.gitbook.cn/613b6b00-b3a1-11e7-8a71-f7aeed571f0a)

- Component 是 Directive 的子接口，是一种特殊的指令，Component 可以带有 HTML 模板，Directive 不能有模板。
- 属性型指令：用来修改 DOM 元素的外观和行为，但是不会改变 DOM 结构，Angular 内置指令里面典型的属性型指令有 ngClass、ngStyle。如果你打算封装自己的组件库，属性型指令是必备的内容。
- 结构型指令：可以修改 DOM 结构，内置的常用结构型指令有 *ngFor、*ngIf 和 NgSwitch。由于结构型指令会修改 DOM 结构，所以同一个 HTML 标签上面不能同时使用多个结构型指令，否则大家都来改 DOM 结构，到底听谁的呢？如果要在同一个 HTML 元素上面使用多个结构性指令，可以考虑加一层空的元素来嵌套，比如在外面套一层空的 <ng-container></ng-container>，或者套一层空的 <div>。

# 依赖注入
关于依赖注入的介绍以及由来，可以看官网这篇[依赖注入](https://angular.cn/guide/dependency-injection-pattern)
总之，依赖注入（DI）是用来管理对象的创建以及它的依赖。

很多 Angular 的装饰器都支持带有 providers 属性的元数据。 最重要的两个例子是 @Component 和 @NgModule。

## NgModule 中注册服务

# NgModule
NgModules 用于配置注入器和编译器，并帮你把那些相关的东西组织在一起。

NgModule 是一个带有 @NgModule 装饰器的类。 @NgModule 的参数是一个元数据对象，用于描述如何编译组件的模板，以及如何在运行时创建注入器。 它会标出该模块自己的组件、指令和管道，通过 exports 属性公开其中的一部分，以便外部组件使用它们。 NgModule 还能把一些服务提供商添加到应用的依赖注入器中。

## API（部分）

NgModule.declarations：编译器配置，用于告诉编译器指令的选择器并通过选择器匹配的方式决定要把该指令应用到模板中的什么位置。它会使用如下规则来确定这组选择器：
- 列在 declarations 中的所有指令选择器。
- 从所导入的 NgModule 中导出的那些指令的选择器。

组件、指令和管道只能属于一个模块。 如果尝试把同一个类声明在多个模块中，编译器就会报告一个错误。
不要重复声明从其它模块中导入的类。

NgModule.providers：通过 providers 数组提供给注入器的配置。

NgModule.bootstrap：要自动启动的组件列表。通常，在这个列表中只有一个组件，也就是应用的根组件。Angular 也可以引导多个引导组件，它们每一个都在宿主页面中有自己的位置。

启动组件会自动添加到 entryComponents 中。

NgModule.entryComponents：那些可以动态加载进视图的组件列表。引导组件和路由组件都是入口组件。你不用自己把它们加到模块的 entryComponents 列表中，因为它们会被隐式添加进去。但如果你要用其它方式根据类型来命令式的引导或动态加载某个组件，你就必须把它们显式添加到 entryComponents 中了。

## 为什么 Angular 需要入口组件？
原因在于摇树优化。对于产品化应用，你会希望加载尽可能小而快的代码。 代码中应该仅仅包括那些实际用到的类。 它应该排除那些从未用过的组件，无论该组件是否被声明过。

事实上，大多数库中声明和导出的组件你都用不到。 如果你从未引用它们，那么摇树优化器就会从最终的代码包中把这些组件砍掉。

如果Angular 编译器为每个声明的组件都生成了代码，那么摇树优化器的作用就没有了。

所以，编译器转而采用一种递归策略，它只为你用到的那些组件生成代码。

编译器从入口组件开始工作，为它在入口组件的模板中找到的那些组件生成代码，然后又为在这些组件中的模板中发现的组件生成代码，以此类推。 当这个过程结束时，它就已经为每个入口组件以及从入口组件可以抵达的每个组件生成了代码。

如果该组件不是入口组件或者没有在任何模板中发现过，编译器就会忽略它。