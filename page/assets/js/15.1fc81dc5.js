(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{444:function(t,s,a){t.exports=a.p+"assets/img/download-manager.fa0142d4.png"},445:function(t,s,a){t.exports=a.p+"assets/img/dm-tips.77e9a389.png"},566:function(t,s,a){"use strict";a.r(s);var n=a(47),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-rxjs-设计实现一个下载中心功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-rxjs-设计实现一个下载中心功能"}},[t._v("#")]),t._v(" 使用 RxJS 设计实现一个下载中心功能")]),t._v(" "),n("p",[n("img",{attrs:{src:a(444),alt:""}})]),t._v(" "),n("p",[t._v("原先系统的数据导出功能方案是通过前端技术相关方案实现：使用 "),n("a",{attrs:{href:"https://github.com/SheetJS/sheetjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-xlsx"),n("OutboundLink")],1),t._v(" 生成 excel 文件；但遇到较多数据量及复杂提高时，容易造成页面卡死现象，主要原因是主线程阻塞，后续使用 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers",target:"_blank",rel:"noopener noreferrer"}},[t._v("web-workers"),n("OutboundLink")],1),t._v(" 方案，通过其他线程完成 excel 数据处理；但是遇到庞大数据量时，前端处理大量数据会消耗大量内存，更严重导致内存泄露，页面直接崩溃情况。")]),t._v(" "),n("p",[t._v("为了提高用户体验，现调整为：后端异步处理数据查询和表格生成，并上传至OSS，用户在统一“附件下载中心”进行下载")]),t._v(" "),n("p",[t._v("对于前端设计改造需求点：")]),t._v(" "),n("ol",[n("li",[t._v("附件中心记录用户的下载任务，便于重复下载")]),t._v(" "),n("li",[t._v("附件中心实时反馈附件状态（排队、生成、完成、失败）")])]),t._v(" "),n("h2",{attrs:{id:"实时查询-轮询、rxjs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实时查询-轮询、rxjs"}},[t._v("#")]),t._v(" 实时查询（轮询、rxjs）")]),t._v(" "),n("p",[t._v("为了降低系统实现复杂度，实时方案改为前端轮询请求")]),t._v(" "),n("p",[t._v("前端轮询时需要注意轮询请求几个点，避免造成性能浪费：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(445),alt:""}})]),t._v(" "),n("ol",[n("li",[t._v("何时轮询")]),t._v(" "),n("li",[t._v("轮询间隔")]),t._v(" "),n("li",[t._v("轮询结束")]),t._v(" "),n("li",[t._v("轮询重复")]),t._v(" "),n("li",[t._v("结果反馈")])]),t._v(" "),n("h3",{attrs:{id:"轮询时机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#轮询时机"}},[t._v("#")]),t._v(" 轮询时机")]),t._v(" "),n("p",[t._v("在用户系统使用中，产生轮询时机大概有以下三种情况：")]),t._v(" "),n("ul",[n("li",[t._v("刷新页面")]),t._v(" "),n("li",[t._v("excel导出")]),t._v(" "),n("li",[t._v("重试任务")])]),t._v(" "),n("p",[t._v("对于以上三种事件，前端需要响应处理。")]),t._v(" "),n("p",[t._v("其实像前端开发工作，大部分都是以事件驱动编程。我们往往需要面对响应不同事件处理，这些事件可能来自网络请求、用户交互反馈等，"),n("strong",[t._v("异步回调、分散的状态和副作用")]),t._v("会随着代码规模增加越难维护。")]),t._v(" "),n("h3",{attrs:{id:"轮询实现-rxjs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#轮询实现-rxjs"}},[t._v("#")]),t._v(" 轮询实现（rxjs）")]),t._v(" "),n("p",[t._v("轮询大概实现步骤：")]),t._v(" "),n("ol",[n("li",[t._v("当发生页面刷新、导出数据、重试任务时")]),t._v(" "),n("li",[t._v("发送一次列表求")]),t._v(" "),n("li",[t._v("判断返回结果列表中是否含有有排队中、生成中的任务")]),t._v(" "),n("li",[t._v("若有，则产生一个轮询任务，同一时间仅有一个轮询任务（防止重复轮询）")]),t._v(" "),n("li",[t._v("轮询任务会每隔一定时间再发送列表请求")]),t._v(" "),n("li",[t._v("直到列表状态全为已完成或者失败")])]),t._v(" "),n("p",[t._v("先把实现逻辑搬上，轮询实现接下来借助 "),n("a",{attrs:{href:"https://github.com/ReactiveX/rxjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("rxjs"),n("OutboundLink")],1),t._v(" 利器")]),t._v(" "),n("p",[t._v("在 rxjs 世界里，"),n("em",[t._v("everything is a stream")]),t._v("，任何事件都是流，什么是流？流就是现在、未来的事件集，事件具有过去、现在、未来特性吧，但我们更关注的是现在发生及未来事件的到来。")]),t._v(" "),n("p",[t._v("既然有了事件流的概念，那我们可以订阅观察这些事件流、也可以通过 pipe 把这些事件数据处理或者转换成其他事件流。事件流的 pipe 操作就类比数组过滤 "),n("code",[t._v("[1, 2, 3].filter(e => {...})")]),t._v(" 的 "),n("code",[t._v("filter")]),t._v("，数组也是数据集，只不过数组数据源上的数据操作都是同步的，不能处理异步数据，那么数据流是不是看起来就像 "),n("code",[t._v("[1,2,3,4...]")])]),t._v(" "),n("p",[t._v("我们把页面刷新(也就是重新开发)、导出下载数据、重试任务事件流分别用 "),n("code",[t._v("start$、download$、retry$")]),t._v(" （流的变量命名 "),n("code",[t._v("$")]),t._v(" 结尾 ）表示")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("start$:     --s--------------------------\x3e\ndownload$:  ----------d-------------d----\x3e\nretry$:     -----------------r-----------\x3e\nmerge$:     --m-------m------m------m----\x3e\n\nloop$:      --l->|----l->|---l->|---l----\x3e\n")])])]),n("p",[t._v("同一时间轴上，无论发生页面刷新、导出数据还是重试任务事件时，都会产生轮询事件流，使用 merge 合并三种事件流，再 map 成轮询事件流 loop$，同时也要注意当有新事件产生时，"),n("strong",[t._v("必须停止旧的轮询任务")]),t._v("（上面图示中 "),n("code",[t._v("|")]),t._v(" 表示完成停止）")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动轮询，并 pipe 防止生成重复 loop")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" download$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("retry$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 防止频繁事件")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounceTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束当前轮询，开始新的轮询")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchMap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" loop$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("有了 loop$，我们可以对他进行副作用操作请求列表数据，通过 "),n("code",[t._v("repeatWhen")]),t._v(" pipe 操作符启动轮询，"),n("code",[t._v("takeWhile")]),t._v(" 判断停止轮询")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 轮询事件流")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" loop$ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loop'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行副作用：请求数据")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTaskList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" start"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pendingCount "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重复查询")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeatWhen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res$")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" res$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOOP_DELAY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 延迟查询")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("takeWhile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pendingCount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 终止判断")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("总结：通过 rxjs 简洁得完成了轮询的功能实现，得益于 rxjs 高度抽象的概念和操作符，这也是 rxjs 学习成本较高的原因。不过 rxjs 不仅能够优雅得异步处理，而且还能作为状态管理，不愧是作为 2016 年新版本 Angluar 出来时就内定的利器之一")]),t._v(" "),n("h2",{attrs:{id:"抛物线交互体验"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抛物线交互体验"}},[t._v("#")]),t._v(" 抛物线交互体验")]),t._v(" "),n("p",[t._v("为了稍微增加点用户体验，在点击导出时，做个抛物线动画，把任务添加到下载中心，抛物线的实现参考 张鑫旭大神的 "),n("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2018/08/css-css3-%E6%8A%9B%E7%89%A9%E7%BA%BF%E5%8A%A8%E7%94%BB/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这回试试使用CSS实现抛物线运动效果"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("主要实现思路：抛物线运动分解就是垂直方向和水平方向的运动，只要实现父子元素往不同方向进行不同速率的运动。")]),t._v(" "),n("p",[t._v("以下代码中，wrapper 父元素进行水平移动，ball 子元素相对 wrapper 元素进行竖直方向移动，相对而言 ball 子元素也获取水平位移")]),t._v(" "),n("p",[t._v("另外前端实现元素动画优先 CSS 方案，毕竟现代浏览器会对 CSS 动画有优化")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抛物线动画")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parabola")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rect1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ball "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'absolute'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("borderRadius "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'50%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundColor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opacity "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transform .5s cubic-bezier(.2,1.01,.61,.93),opacity .5s linear'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" wrapper "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" initPos "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rect1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rect1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     y"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rect1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" initPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transition "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transform .5s linear'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动画结束 删除元素")]),t._v("\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ontransitionend")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n   document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rect2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   wrapper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("translateX(")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("rect2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rect2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" initPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("px)")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("translateY(")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("rect2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rect2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rect1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("px)")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   ball"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opacity "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("hr"),t._v(" "),n("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);s.default=p.exports}}]);