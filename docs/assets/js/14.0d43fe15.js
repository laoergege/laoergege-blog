(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{414:function(t,e,r){"use strict";r.r(e);var a=r(35),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"变更检测"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#变更检测"}},[t._v("#")]),t._v(" 变更检测")]),t._v(" "),r("p",[t._v("Angular 中，数据是由顶部根节点流向最后的叶子节点，整个数据流是单向，构成一颗单向树。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://segmentfault.com/img/bVKTt7?w=1114&h=560",alt:""}})]),t._v(" "),r("p",[t._v("Angular 认为所有的异步操作都有可能会引起模型的变化，引起数据模型发生变化的事件源有：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Events：click, mouseover, keyup ...")])]),t._v(" "),r("li",[r("p",[t._v("Timers：setInterval、setTimeout")])]),t._v(" "),r("li",[r("p",[t._v("XHRs：Ajax(GET、POST ...)")])])]),t._v(" "),r("p",[t._v("Angular 封装 Zone来拦截跟踪异步，一旦发现异步行为，Angular 就会进行变更检测。")]),t._v(" "),r("p",[t._v("因为数据流是单向的，组件的数据来源只能由父组件进行传入，所以 Angular 会从上到下，广度遍历检测组件，只要父组件检测完毕就能继续检测子组件。而相比 angularjs，双向、混乱的数据流方向，会导致重复变更检测重复多次，直到数据稳定，可能会导致性能问题，或者出现数据和视图处于不一致的状态，即渲染过程完成后的视图不能反映数据的实际状态。")]),t._v(" "),r("h2",{attrs:{id:"渲染输出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#渲染输出"}},[t._v("#")]),t._v(" 渲染输出")]),t._v(" "),r("p",[t._v("当检测到数据模型变化时，组件需要重新渲染，Angular将运行它的 DOM 生成函数，该函数会生成一个新的 DOM数据结构，该结构对应于组件 View 的新版本。")]),t._v(" "),r("p",[t._v("Angular 在渲染过程中，评估模板表达式并在整个组件树中调用生命周期钩子。")]),t._v(" "),r("p",[r("strong",[t._v("注意：绿色标志会多次调用")]),t._v(" "),r("img",{attrs:{src:"http://images.gitbook.cn/f3fc8050-af2d-11e7-bdfa-890a7a50d411",alt:""}})]),t._v(" "),r("p",[t._v("从生命调用周期来看（绿色有向线），"),r("code",[t._v("ngAfterViewChecked")]),t._v(" 标示该组件及子组件视图输出完成。看以下一例子：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('import {Component, AfterViewChecked} from \'@angular/core\';\nimport {Course} from "./course";\n\n@Component({\n    selector: \'app-root\',\n    template: `\n    <div class="course">\n        <span class="description">{{course.description}}</span>\n    </div>\n`})\nexport class AppComponent implements AfterViewChecked {\n\n    course: Course = {\n        id: 1,\n        description: "Angular For Beginners"\n    };\n\n    ngAfterViewChecked() {\n        this.course.description += Math.random();\n    }\n\n}\n')])])]),r("p",[t._v("上述代码会在Angular变更检测周期发生错误。组件已经完成 DOM 数据结构输出，我们还在该组件 "),r("code",[t._v("ngAfterViewChecked()")]),t._v(" 方法中修改了数据状态。这样导致了视图渲染后，数据跟视图状态不一致。")]),t._v(" "),r("p",[t._v("数据从组件类流向表示它们的DOM数据结构，生成这些DOM数据结构的行为本身就不会导致数据的进一步修改。但我们在 "),r("code",[t._v("ngAfterView")]),t._v(" 生命周期发生修改数据行为，Angular 的“单向数据流”规则禁止在一个视图已经被组合好之后再更新视图。")]),t._v(" "),r("p",[t._v("这意味着数据模型到视图过程是单向，不可在视图后发生数据流发生改变。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://github.com/laoergege/laoergege-blog/blob/master/assets/a.PNG?raw=true",alt:"a"}})]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("从变更检测过程以及渲染输出过程中，可以总结出：")]),t._v(" "),r("p",[r("strong",[t._v("单向数据流指的是从组件树的顶部到底部渲染扫描过程中应用程序数据流转到由渲染过程生成的输出DOM数据结构的流程")]),t._v("。")]),t._v(" "),r("h4",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.angular-university.io/angular-2-what-is-unidirectional-data-flow-development-mode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular - What is Unidirectional Data Flow? Learn How the Angular Development Mode Works, why it's important to use it and how to Troubleshoot it"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"更多阅读"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多阅读"}},[t._v("#")]),t._v(" 更多阅读")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000008754052#articleHeader4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular 2 Change Detection - 2"),r("OutboundLink")],1),t._v(" 关于 Angular 变更检测以及优化方法。")])]),t._v(" "),r("hr"),t._v(" "),r("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);