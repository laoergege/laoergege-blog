(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{437:function(t,a,s){"use strict";s.r(a);var e=s(35),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("阅读 "),s("a",{attrs:{href:"http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端高清、多屏适配方案"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"http://coderlt.coding.me/2016/03/08/retina-screen-adapter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端高清屏适配方案"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"设备独立像素-px"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设备独立像素-px"}},[t._v("#")]),t._v(" 设备独立像素(px)")]),t._v(" "),s("p",[t._v("设备独立像素，也就是无任何设备无关、逻辑上的像素，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，然后由相关系统转换为物理像素。")]),t._v(" "),s("p",[s("strong",[t._v("在不同的屏幕上(普通屏幕 vs retina屏幕)，css像素所呈现的大小(物理尺寸)是一致的，不同的是1个css像素所对应的物理像素个数是不一致的")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tps/TB1uWfJIpXXXXaoXXXXXXXXXXXX.gif",alt:""}})]),t._v(" "),s("p",[t._v("所以说，"),s("em",[t._v("物理像素")]),t._v("和"),s("em",[t._v("设备独立像素")]),t._v("之间存在着一定的对应关系，也就是"),s("em",[t._v("设备像素比（dpr）")]),t._v("。在 javascript 中，可以通过 window.devicePixelRatio 获取到当前设备的 dpr 。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("设备像素比 = 物理像素 / 设备独立像素 // 在某一方向上，x方向或者y方向\n")])])]),s("p",[t._v("例如通过得知设备像素比，比如为 devicePixelRatio = 2，我们可以知道该设备 1px == 4 个物理像素点。")]),t._v(" "),s("p",[t._v("那为什么在拿到视觉稿，对于retina屏幕(如: dpr=2)，为了达到高清效果，视觉稿的画布大小会是基准的2倍，也就是说像素点个数是原来的4倍（对iphone6而言：原先的375×667，就会变成750×1334），"),s("strong",[t._v("也就是以 1px == 1 个物理像素为基准开发")]),t._v(" 呢？。")]),t._v(" "),s("h3",{attrs:{id:"位图像素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位图像素"}},[t._v("#")]),t._v(" 位图像素")]),t._v(" "),s("p",[t._v("一个位图像素是栅格图像(如：png, jpg, gif等)最小的数据单元。每一个位图像素都包含着一些自身的显示信息(如：显示位置，颜色值，透明度等)。")]),t._v(" "),s("p",[t._v("谈到这里，就得说一下，retina下图片的展示情况？")]),t._v(" "),s("p",[t._v("理论上，"),s("strong",[t._v("1个位图像素对应于1个物理像素，图片才能得到完美清晰的展示")]),t._v("。")]),t._v(" "),s("p",[t._v("在普通屏幕下是没有问题的，但是在retina屏幕下就会出现位图像素点不够，从而导致图片模糊的情况。")]),t._v(" "),s("p",[t._v("用一张图来表示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tps/TB12ALnIpXXXXb1XVXXXXXXXXXX.jpg",alt:""}})]),t._v(" "),s("p",[t._v("如上图：对于dpr=2的retina屏幕而言，1个位图像素对应于4个物理像素，由于单个位图像素不可以再进一步分割，所以只能就近取色，从而导致图片模糊(注意上述的几个颜色值)。")]),t._v(" "),s("p",[t._v("所以，对于图片高清问题，比较好的方案就是两倍图片(@2x)。")]),t._v(" "),s("p",[t._v("如：200×300(css pixel)img标签，就需要提供400×600的图片。")]),t._v(" "),s("p",[t._v("如此一来，位图像素点个数就是原来的4倍，在retina屏幕下，位图像素点个数就可以跟物理像素点个数形成 1 : 1的比例，图片自然就清晰了(这也解释了之前留下的一个问题，为啥视觉稿的画布大小要×2？)。")]),t._v(" "),s("h3",{attrs:{id:"如何使-1px-1pt？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使-1px-1pt？"}},[t._v("#")]),t._v(" 如何使 1px == 1pt？")]),t._v(" "),s("ul",[s("li",[t._v("视觉视口，也就是手机屏幕可看到的大小范围。document.documentElement.clientWidth/Height返回布局视口的尺寸")]),t._v(" "),s("li",[t._v("布局视口，也就是网页页面展示的大小范围。window.innerWidth/Height返回视觉视口的尺寸")])]),t._v(" "),s("p",[t._v("在设计开发上，对iphone6而言，视觉视口大小为 375×667 px，dpr 为 2，为了达到高清效果（1px == 1pt），我们会以 750x1334 px为基准。这样效果即是：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2018/05/31/5b0fa77dbcaae.png",alt:"微信截图_20180531154147"}})]),t._v(" "),s("p",[t._v("就像下面这样的感受：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://segmentfault.com/img/bVsmnf",alt:""}})]),t._v(" "),s("p",[t._v("我们通过 meta 标签的 viwport 属性来控制缩放布局视图大小来达到 750x1334 px 的页面容进 750x1334 pt 的屏幕，这样 1px == 1pt。")]),t._v(" "),s("p",[t._v("如何做到对不同尺寸移动设备做到动态缩放设置？")]),t._v(" "),s("ul",[s("li",[t._v("媒体查询（需要对不同设备做媒体查询，无法做到精准设置）")]),t._v(" "),s("li",[t._v("javascript")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 控制 viewport 属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dpr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" meta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta[name=viewport]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmeta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial-scale='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dpr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("', maximum-scale='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dpr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("', minimum-scale='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dpr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("', user-scalable=no'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta[name=viewport]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'head'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("到目前为止，以上方案可以解决：")]),t._v(" "),s("ul",[s("li",[t._v("高清适配问题")]),t._v(" "),s("li",[t._v("retina下，border: 1px问题")])]),t._v(" "),s("p",[t._v("但视图的缩放并不会影响到里面的布局，我们说过 px 是设备独立像素，在任意设备中 1px 大小是一样的，只是对应换算的物理像素不一样。如果以 px 作为布局单位，在屏幕尺寸较低的设备中，可能出现在错乱、变形。在已针对移动端做好布局情况下，我们只要能够根据不同屏幕尺寸做到布局缩放就行。")]),t._v(" "),s("h3",{attrs:{id:"屏幕布局适配-flex-rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕布局适配-flex-rem"}},[t._v("#")]),t._v(" 屏幕布局适配 flex + rem")]),t._v(" "),s("p",[t._v("rem 原理这里就不多描述。使用 flex + rem 可以达到很好的移动端屏幕布局适配效果。")]),t._v(" "),s("ul",[s("li",[t._v("flex 弹性布局，能够实现各种布局效果")]),t._v(" "),s("li",[t._v("rem 布局单位，根据屏幕的分辨率动态设置html的文字大小，达到等比缩放的功能。")])]),t._v(" "),s("p",[t._v("如果仅做布局适配 flex + rem 就足够了。在拿到设计稿宽度为750")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("结合上述所有方案，flex + rem + dpr 可以适配大多数移动端问题 (布局 > 字体大小 > 1px边框 > 高清图)")]),t._v(" "),s("hr"),t._v(" "),s("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);