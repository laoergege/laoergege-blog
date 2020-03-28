(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{257:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("此笔记主要记录来源于 大漠 发于 gitchat 上的付费教程《Angular 初学者快速上手教程》")])]),t._v(" "),s("h1",{attrs:{id:"angular-核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#angular-核心概念"}},[t._v("#")]),t._v(" Angular 核心概念")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://images.gitbook.cn/e0c611d0-acb3-11e7-9ec8-4915d3122415",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("Component（组件）是整个框架的核心，也是终极目标。“组件化”的意义有2个：第一是分治，因为有了组件之后，我们可以把各种逻辑封装在组件内部，避免混在一起；第二是复用，封装成组件之后不仅可以在项目内部复用，而且可以沉淀下来跨项目复用。")]),t._v(" "),s("li",[t._v("NgModule（模块）是组织业务代码的利器，按照你自己的业务场景，把组件、服务、路由打包到模块里面，形成一个个的积木块，然后再用这些积木块来搭建出高楼大厦。")]),t._v(" "),s("li",[t._v("Router（路由）的角色也非常重要，它有3个重要的作用：第一是封装浏览器的 History 操作；第二是负责异步模块的加载；第三是管理组件的生命周期。")])]),t._v(" "),s("h1",{attrs:{id:"组件：模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件：模板"}},[t._v("#")]),t._v(" 组件：模板")]),t._v(" "),s("p",[t._v("Angular 模板主要知识点：")]),t._v(" "),s("ol",[s("li",[t._v("Mustache（八字胡）语法")]),t._v(" "),s("li",[t._v("模板内的局部变量")]),t._v(" "),s("li",[t._v("属性绑定、事件绑定、双向绑定")]),t._v(" "),s("li",[t._v("在模板里面使用结构型指令 *ngIf、*ngFor、ngSwitch")]),t._v(" "),s("li",[t._v("在模板里面使用属性型指令 NgClass、NgStyle、NgModel")]),t._v(" "),s("li",[t._v("在模板里面使用管道格式化数据")])]),t._v(" "),s("h2",{attrs:{id:"mustache（八字胡）语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mustache（八字胡）语法"}},[t._v("#")]),t._v(" Mustache（八字胡）语法")]),t._v(" "),s("p",[t._v("关于 Mustache 语法，你需要掌握3点：")]),t._v(" "),s("ol",[s("li",[t._v("它可以获取到组件里面定义的属性值。")]),t._v(" "),s("li",[t._v("它可以自动计算简单的数学表达式，例如：加减乘除、取模。")]),t._v(" "),s("li",[t._v("它可以获得方法的返回值。")])]),t._v(" "),s("h2",{attrs:{id:"模板内的局部变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板内的局部变量"}},[t._v("#")]),t._v(" 模板内的局部变量")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<input #heroInput>\n<p>{{heroInput.value}}</p>\n")])])]),s("p",[t._v("如果在模板里面定义的局部变量和组件内部的属性重名,Angular 会按照以下优先级来进行处理：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("模板局部变量 > 指令中的同名变量 > 组件中的同名属性\n")])])]),s("h2",{attrs:{id:"属性绑定、事件绑定、双向绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性绑定、事件绑定、双向绑定"}},[t._v("#")]),t._v(" 属性绑定、事件绑定、双向绑定")]),t._v(" "),s("h3",{attrs:{id:"属性绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性绑定"}},[t._v("#")]),t._v(" 属性绑定")]),t._v(" "),s("p",[t._v("属性绑定是用方括号来做的，写法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<img [src]="imgSrc" />\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public imgSrc:string="./assets/imgs/1.jpg";\n')])])]),s("h3",{attrs:{id:"事件绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定"}},[t._v("#")]),t._v(" 事件绑定")]),t._v(" "),s("p",[t._v("事件绑定是用圆括号来做的，写法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<button class="btn btn-success" (click)="btnClick($event)">测试事件</button>\n')])])]),s("h3",{attrs:{id:"双向绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双向绑定"}},[t._v("#")]),t._v(" 双向绑定")]),t._v(" "),s("p",[t._v("双向绑定是通过方括号里面套一个圆括号来做的，模板写法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<font-resizer [(size)]="fontSizePx"></font-resizer>\n')])])]),s("h2",{attrs:{id:"在模板里面使用结构型指令-ngif、-ngfor、ngswitch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在模板里面使用结构型指令-ngif、-ngfor、ngswitch"}},[t._v("#")]),t._v(" 在模板里面使用结构型指令 *ngIf、*ngFor、ngSwitch")]),t._v(" "),s("h3",{attrs:{id:"ngif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngif"}},[t._v("#")]),t._v(" ngIf")]),t._v(" "),s("p",[t._v("简单形式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\x3c!--语法糖--\x3e\n<div *ngIf="condition">...</div>\n')])])]),s("p",[t._v("else")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div *ngIf="condition; else elseBlock">...</div>\n<ng-template #elseBlock>...</ng-template>\n')])])]),s("p",[t._v("then、else(使用then会忽略 ngIf 指令宿主的内容)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div *ngIf="condition; then thenBlock else elseBlock">this is ignored</div>\n<ng-template #thenBlock>...</ng-template>\n<ng-template #elseBlock>...</ng-template>\n')])])]),s("p",[t._v("使用as语法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div *ngIf="condition as value; else elseBlock">{{value}}</div>\n<ng-template #elseBlock>...</ng-template>\n')])])]),s("h3",{attrs:{id:"ngfor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngfor"}},[t._v("#")]),t._v(" ngFor")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">\n   {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>\n</li>\n')])])]),s("h4",{attrs:{id:"local-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-variables"}},[t._v("#")]),t._v(" Local Variables")]),t._v(" "),s("p",[t._v("NgForOf 提供了几个导出值，可以将其替换为局部变量：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("$implicit: T - 表示 ngForOf 绑定的可迭代对象中的每一个独立项。")])]),t._v(" "),s("li",[s("p",[t._v("ngForOf: NgIterable"),s("T",[t._v(" - 表示迭代表达式的值,如果表达式更复杂，那么在属性访问时很有用，例如使用异步管道时"),s("code",[t._v("(userStreams | async)")]),t._v("。")])],1)]),t._v(" "),s("li",[s("p",[t._v("index: number - 表示当前项的索引值。")])]),t._v(" "),s("li",[s("p",[t._v("first: boolean - 若当前项是可迭代对象的第一项，则返回 true。")])]),t._v(" "),s("li",[s("p",[t._v("last: boolean - 若当前项是可迭代对象的最后一项，则返回 true。")])]),t._v(" "),s("li",[s("p",[t._v("even: boolean - 若当前项的索引值是偶数，则返回 true。")])]),t._v(" "),s("li",[s("p",[t._v("odd: boolean - 若当前项的索引值是奇数，则返回 true。")])])]),t._v(" "),s("h4",{attrs:{id:"change-propagation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-propagation"}},[t._v("#")]),t._v(" Change Propagation")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当可迭代对象的值改变时，NgForOf 对 DOM 会进行相应的更改：")])]),t._v(" "),s("li",[s("p",[t._v("当新增某一项，对应的模板实例将会被添加到 DOM")])]),t._v(" "),s("li",[s("p",[t._v("当移除某一项，对应的模板实例将会从 DOM 中移除")])]),t._v(" "),s("li",[s("p",[t._v("当对可迭代对象每一项进行重新排序，它们各自的模板将在 DOM 中重新排序")])]),t._v(" "),s("li",[s("p",[t._v("否则，页面中的 DOM 元素将保持不变。")])])]),t._v(" "),s("p",[t._v("Angular 使用对象标识来跟踪可迭代对象中，每一项的插入和删除，并在 DOM 中做出相应的变化。但使用对象标识有一个问题，假设我们通过服务端获取可迭代对象，当重新调用服务端接口获取新数据时，尽管服务端返回的数据没有变化，但它将产生一个新的对象。此时，Angular 将完全销毁可迭代对象相关的 DOM 元素，然后重新创建对应的 DOM 元素。这是一个很昂贵 (影响性能) 的操作，如果可能的话应该尽量避免。")]),t._v(" "),s("p",[t._v("因此，Angular 提供了 trackBy 选项，让我们能够自定义跟踪算法。 trackBy 选项需绑定到一个包含 index 和 item 两个参数的函数对象。若设定了 trackBy 选项，Angular 将基于函数的返回值来跟踪变化。")]),t._v(" "),s("h3",{attrs:{id:"ngswitch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngswitch"}},[t._v("#")]),t._v(" ngSwitch")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div [ngSwitch]="mapStatus">\n    <p *ngSwitchCase="0">下载中...</p>\n    <p *ngSwitchCase="1">正在读取...</p>\n    <p *ngSwitchDefault>系统繁忙...</p>\n</div>\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public mapStatus:number=1;\n")])])]),s("h2",{attrs:{id:"在模板里面使用属性型指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在模板里面使用属性型指令"}},[t._v("#")]),t._v(" 在模板里面使用属性型指令")]),t._v(" "),s("p",[t._v("使用频率比较高的3个内置指令是：NgClass、NgStyle、NgModel。")]),t._v(" "),s("h3",{attrs:{id:"ngclass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngclass"}},[t._v("#")]),t._v(" ngClass")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<div [ngClass]=\"{'active': isActive, 'disabled': isDisabled}\">\n")])])]),s("p",[t._v("根据 map 中的 value 是否为真，来决定该元素上是否出现与 name 对应的 CSS 类。右侧的表达式应该返回一个形如 {class-name: true/false} 的 map。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div [class.extra-sparkle]="isDelightful">\n')])])]),s("p",[t._v("根据isDelightful表达式的结果是否为真，决定CSS类extra-sparkle是否出现在当前元素上。")]),t._v(" "),s("h3",{attrs:{id:"ngstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngstyle"}},[t._v("#")]),t._v(" ngStyle")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div [ngStyle]="currentStyles">\n    用NgStyle批量修改内联样式！\n</div>\n<button class="btn btn-success" (click)="setCurrentStyles()">设置</button>\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public currentStyles: {}\npublic canSave:boolean=false;\npublic isUnchanged:boolean=false;\npublic isSpecial:boolean=false;\n\nsetCurrentStyles() {\n    this.currentStyles = {\n        'font-style':  this.canSave      ? 'italic' : 'normal',\n        'font-weight': !this.isUnchanged ? 'bold'   : 'normal',\n        'font-size':   this.isSpecial    ? '36px'   : '12px'\n    };\n}\n")])])]),s("p",[t._v("把CSS样式属性width的px（像素）值绑定到表达式mySize的结果。单位是可选的")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div [style.width.px]="mySize">\n')])])]),s("h3",{attrs:{id:"ngmodel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngmodel"}},[t._v("#")]),t._v(" ngModel")]),t._v(" "),s("p",[s("strong",[t._v("注意：ngModel 只用在表单元素")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<p class="text-danger">ngModel只能用在表单类的元素上面</p>\n    <input [(ngModel)]="currentRace.name">\n<p>{{currentRace.name}}</p>\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public currentRace:any={name:"随机种族"};\n')])])]),s("h2",{attrs:{id:"管道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管道"}},[t._v("#")]),t._v(" 管道")]),t._v(" "),s("p",[t._v("管道的一个典型作用是用来转化数据。来一个最简单的例子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("{{currentTime | date:'yyyy-MM-dd HH:mm:ss'}}\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("public currentTime: Date = new Date();\n")])])]),s("p",[t._v("查看更多"),s("a",{attrs:{href:"https://angular.io/api?type=pipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("内置管道"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h1",{attrs:{id:"组件：组件间通讯"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件：组件间通讯"}},[t._v("#")]),t._v(" 组件：组件间通讯")]),t._v(" "),s("h2",{attrs:{id:"组件关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件关系"}},[t._v("#")]),t._v(" 组件关系")]),t._v(" "),s("p",[t._v("在树形结构里面，组件之间有几种典型的关系：父子关系、兄弟关系、没有直接关系\n"),s("img",{attrs:{src:"http://images.gitbook.cn/891636a0-af23-11e7-b111-4d6e630f480d",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"父子关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父子关系"}},[t._v("#")]),t._v(" 父子关系")]),t._v(" "),s("ul",[s("li",[t._v("父组件借助模板变量直接访问子组件 public 属性")]),t._v(" "),s("li",[t._v("借助于 @Input 和 @Output 进行通讯")])]),t._v(" "),s("p",[t._v("@Output 的本质是事件机制，我们可以利用它来监听子组件上派发的事件，子组件上这样写：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Output()\npublic follow=new EventEmitter<string>();\n")])])]),s("p",[t._v("触发 follow 事件的方式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('this.follow.emit("follow");\n')])])]),s("p",[t._v("父组件上可以这样监听 follow 事件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<child (follow)="doSomething()"></child>\n')])])]),s("h3",{attrs:{id:"兄弟关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兄弟关系"}},[t._v("#")]),t._v(" 兄弟关系")]),t._v(" "),s("ul",[s("li",[t._v("可借助父组件作为中间件进行通讯")])]),t._v(" "),s("h3",{attrs:{id:"没有直接关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有直接关系"}},[t._v("#")]),t._v(" 没有直接关系")]),t._v(" "),s("ul",[s("li",[t._v("通过单例服务，利用 RxJS，在 Service 里面定义一个 public 型的 Subject（主题），然后让所有组件都来subscribe（订阅）这个主题，类似于一种“事件总线”的效果。")])]),t._v(" "),s("h1",{attrs:{id:"组件生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期"}},[t._v("#")]),t._v(" 组件生命周期")]),t._v(" "),s("p",[s("strong",[t._v("绿色标明的会在更新周期内不断调用，请不用在里面实现复杂的逻辑")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://images.gitbook.cn/f3fc8050-af2d-11e7-bdfa-890a7a50d411",alt:""}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("hook")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ngOnChanges()")]),t._v(" "),s("td",[t._v("当改变输入属性时响应。 该方法接受当前和上一属性值的SimpleChanges对象")])]),t._v(" "),s("tr",[s("td",[t._v("ngOnInit()")]),t._v(" "),s("td",[t._v("在输入属性设置完成之后响应，用于初始化指令/组件。只调用一次。")])]),t._v(" "),s("tr",[s("td",[t._v("ngDoCheck()")]),t._v(" "),s("td",[t._v("在每次变更检测周期都会被调用， 在 ngOnChanges()和ngOnInit()之后。")])]),t._v(" "),s("tr",[s("td",[t._v("ngAfterContentInit()")]),t._v(" "),s("td",[t._v("当把内容投影进组件之后调用。第一次ngDoCheck()之后调用，只调用一次。")])]),t._v(" "),s("tr",[s("td",[t._v("ngAfterContentChecked()")]),t._v(" "),s("td",[t._v("每次完成被投影组件内容的变更检测之后调用。")])]),t._v(" "),s("tr",[s("td",[t._v("ngAfterViewInit()")]),t._v(" "),s("td",[t._v("初始化完组件视图及其子视图之后调用。")])]),t._v(" "),s("tr",[s("td",[t._v("ngAfterViewChecked()")]),t._v(" "),s("td",[t._v("每次做完组件视图和子视图的变更检测之后调用。")])]),t._v(" "),s("tr",[s("td",[t._v("ngOnDestroy()")]),t._v(" "),s("td",[t._v("当Angular每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。在Angular销毁指令/组件之前调用。")])])])]),t._v(" "),s("h1",{attrs:{id:"shadowdom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shadowdom"}},[t._v("#")]),t._v(" ShaDowDom")]),t._v(" "),s("p",[t._v("参考 "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000008677532",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular 2 ViewEncapsulation"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"内容投影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容投影"}},[t._v("#")]),t._v(" 内容投影")]),t._v(" "),s("p",[t._v("内容投影可以让组件标签内的内容投影到组件模板内 "),s("code",[t._v("ng-content")]),t._v(" 预留的位置。")]),t._v(" "),s("h2",{attrs:{id:"投影单块块内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#投影单块块内容"}},[t._v("#")]),t._v(" 投影单块块内容")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// app 组件模板\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel panel-primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-heading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ng-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ng-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// 外部使用\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-heading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("最终渲染：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel panel-primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-heading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-heading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("标题"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"投影多块内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#投影多块内容"}},[t._v("#")]),t._v(" 投影多块内容")]),t._v(" "),s("p",[t._v("当有插座，"),s("code",[t._v("ng-content")]),t._v(" 可以使用 "),s("code",[t._v("select")]),t._v(" 属性选择要投影的内容：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// app 组件模板\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel panel-primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-heading"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ng-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("select")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("h3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ng-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ng-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("select")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(".my-class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ng-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("panel-footer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ng-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("select")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ng-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// 外部使用\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是父层投影进来的内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("利用CSS选择器"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是底部内容"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("select")]),t._v(" 选择器差不多跟 css 选择器类似。同样支持组件投影，"),s("code",[t._v("select")]),t._v(" 属性值跟组件标签名一样。")]),t._v(" "),s("h1",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),s("p",[t._v("Angular 中指令分为三种：\n"),s("img",{attrs:{src:"http://images.gitbook.cn/613b6b00-b3a1-11e7-8a71-f7aeed571f0a",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("Component 是 Directive 的子接口，是一种特殊的指令，Component 可以带有 HTML 模板，Directive 不能有模板。")]),t._v(" "),s("li",[t._v("属性型指令：用来修改 DOM 元素的外观和行为，但是不会改变 DOM 结构，Angular 内置指令里面典型的属性型指令有 ngClass、ngStyle。如果你打算封装自己的组件库，属性型指令是必备的内容。")]),t._v(" "),s("li",[t._v("结构型指令：可以修改 DOM 结构，内置的常用结构型指令有 *ngFor、*ngIf 和 NgSwitch。由于结构型指令会修改 DOM 结构，所以同一个 HTML 标签上面不能同时使用多个结构型指令，否则大家都来改 DOM 结构，到底听谁的呢？如果要在同一个 HTML 元素上面使用多个结构性指令，可以考虑加一层空的元素来嵌套，比如在外面套一层空的 "),s("ng-container"),t._v("，或者套一层空的 "),s("div",[t._v("。")])],1)]),t._v(" "),s("h1",{attrs:{id:"依赖注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[t._v("#")]),t._v(" 依赖注入")]),t._v(" "),s("p",[t._v("关于依赖注入的介绍以及由来，可以看官网这篇"),s("a",{attrs:{href:"https://angular.cn/guide/dependency-injection-pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("依赖注入"),s("OutboundLink")],1),t._v("\n总之，依赖注入（DI）是用来管理对象的创建以及它的依赖。")]),t._v(" "),s("p",[t._v("很多 Angular 的装饰器都支持带有 providers 属性的元数据。 最重要的两个例子是 @Component 和 @NgModule。")]),t._v(" "),s("h2",{attrs:{id:"ngmodule-中注册服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngmodule-中注册服务"}},[t._v("#")]),t._v(" NgModule 中注册服务")]),t._v(" "),s("h1",{attrs:{id:"ngmodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ngmodule"}},[t._v("#")]),t._v(" NgModule")]),t._v(" "),s("p",[t._v("NgModules 用于配置注入器和编译器，并帮你把那些相关的东西组织在一起。")]),t._v(" "),s("p",[t._v("NgModule 是一个带有 @NgModule 装饰器的类。 @NgModule 的参数是一个元数据对象，用于描述如何编译组件的模板，以及如何在运行时创建注入器。 它会标出该模块自己的组件、指令和管道，通过 exports 属性公开其中的一部分，以便外部组件使用它们。 NgModule 还能把一些服务提供商添加到应用的依赖注入器中。")]),t._v(" "),s("h2",{attrs:{id:"api（部分）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api（部分）"}},[t._v("#")]),t._v(" API（部分）")]),t._v(" "),s("p",[t._v("NgModule.declarations：编译器配置，用于告诉编译器指令的选择器并通过选择器匹配的方式决定要把该指令应用到模板中的什么位置。它会使用如下规则来确定这组选择器：")]),t._v(" "),s("ul",[s("li",[t._v("列在 declarations 中的所有指令选择器。")]),t._v(" "),s("li",[t._v("从所导入的 NgModule 中导出的那些指令的选择器。")])]),t._v(" "),s("p",[t._v("组件、指令和管道只能属于一个模块。 如果尝试把同一个类声明在多个模块中，编译器就会报告一个错误。\n不要重复声明从其它模块中导入的类。")]),t._v(" "),s("p",[t._v("NgModule.providers：通过 providers 数组提供给注入器的配置。")]),t._v(" "),s("p",[t._v("NgModule.bootstrap：要自动启动的组件列表。通常，在这个列表中只有一个组件，也就是应用的根组件。Angular 也可以引导多个引导组件，它们每一个都在宿主页面中有自己的位置。")]),t._v(" "),s("p",[t._v("启动组件会自动添加到 entryComponents 中。")]),t._v(" "),s("p",[t._v("NgModule.entryComponents：那些可以动态加载进视图的组件列表。引导组件和路由组件都是入口组件。你不用自己把它们加到模块的 entryComponents 列表中，因为它们会被隐式添加进去。但如果你要用其它方式根据类型来命令式的引导或动态加载某个组件，你就必须把它们显式添加到 entryComponents 中了。")]),t._v(" "),s("h2",{attrs:{id:"为什么-angular-需要入口组件？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-angular-需要入口组件？"}},[t._v("#")]),t._v(" 为什么 Angular 需要入口组件？")]),t._v(" "),s("p",[t._v("原因在于摇树优化。对于产品化应用，你会希望加载尽可能小而快的代码。 代码中应该仅仅包括那些实际用到的类。 它应该排除那些从未用过的组件，无论该组件是否被声明过。")]),t._v(" "),s("p",[t._v("事实上，大多数库中声明和导出的组件你都用不到。 如果你从未引用它们，那么摇树优化器就会从最终的代码包中把这些组件砍掉。")]),t._v(" "),s("p",[t._v("如果Angular 编译器为每个声明的组件都生成了代码，那么摇树优化器的作用就没有了。")]),t._v(" "),s("p",[t._v("所以，编译器转而采用一种递归策略，它只为你用到的那些组件生成代码。")]),t._v(" "),s("p",[t._v("编译器从入口组件开始工作，为它在入口组件的模板中找到的那些组件生成代码，然后又为在这些组件中的模板中发现的组件生成代码，以此类推。 当这个过程结束时，它就已经为每个入口组件以及从入口组件可以抵达的每个组件生成了代码。")]),t._v(" "),s("p",[t._v("如果该组件不是入口组件或者没有在任何模板中发现过，编译器就会忽略它。")])])}),[],!1,null,null,null);a.default=e.exports}}]);