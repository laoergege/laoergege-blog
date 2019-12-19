(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{236:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"http-web"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-web"}},[t._v("#")]),t._v(" http/web")]),t._v(" "),e("h3",{attrs:{id:"html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" HTML")]),t._v(" "),e("h4",{attrs:{id:"img的title和alt有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#img的title和alt有什么区别"}},[t._v("#")]),t._v(" img的title和alt有什么区别")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("title")]),t._v("通常当鼠标滑动到元素上的时候显示")]),t._v(" "),e("li",[e("code",[t._v("alt")]),t._v("是"),e("code",[t._v("<img>")]),t._v("的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提图片高可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析。")])]),t._v(" "),e("hr"),t._v(" "),e("h3",{attrs:{id:"css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" CSS")]),t._v(" "),e("h3",{attrs:{id:"javascript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),e("h4",{attrs:{id:"手写原生ajax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手写原生ajax"}},[t._v("#")]),t._v(" 手写原生Ajax")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function createXHR() {\n    if (window.XMLHttpRequest) {\n        return new XMLHttpRequest();\n    } else {\n        // 兼容IE5和IE6\n        return new ActiveXObject('Microsoft.XMLHttp');\n    }\n}\n\nvar xhr = createXHR();\nxhr.onReadyStateChange = function() {\n    if (xhr.readyState == 4) {\n    // 状态码为200至300之间或304都表示这一请求已经成功\n        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {\n            console.log(xhr.responseText)\n        } else {\n            ...\n        }\n    }\n}\n// GET\nxhr.open('GET', url);\nxhr.send();\n\n// POST\nxhr.open('POST', url);\nxhr.send(data);\n")])])]),e("h4",{attrs:{id:"在javascript中测试您的这些知识：以下代码的输出是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在javascript中测试您的这些知识：以下代码的输出是什么？"}},[t._v("#")]),t._v(" 在JavaScript中测试您的这些知识：以下代码的输出是什么？")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var length = 10;\nfunction fn() {\n    console.log(this.length);\n}\n\nvar obj = {\n  length: 5,\n  method: function(fn) {\n    fn();\n    arguments[0]();\n  }\n};\n\nobj.method(fn, 1); //10 2\n")])])]),e("h4",{attrs:{id:"如果数组列表太大，以下递归代码将导致堆栈溢出。你如何解决这个问题，仍然保留递归模式？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果数组列表太大，以下递归代码将导致堆栈溢出。你如何解决这个问题，仍然保留递归模式？"}},[t._v("#")]),t._v(" 如果数组列表太大，以下递归代码将导致堆栈溢出。你如何解决这个问题，仍然保留递归模式？")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var list = readHugeList();\n\nvar nextListItem = function() {\n    var item = list.pop();\n\n    if (item) {\n        // process the list item...\n        nextListItem();\n    }\n};\n")])])]),e("p",[t._v("通过修改nextListItem函数可以避免潜在的堆栈溢出，如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var list = readHugeList();\n\nvar nextListItem = function() {\n    var item = list.pop();\n\n    if (item) {\n        // process the list item...\n        setTimeout( nextListItem, 0);\n    }\n};\n")])])]),e("h3",{attrs:{id:"浏览器相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器相关"}},[t._v("#")]),t._v(" 浏览器相关")]),t._v(" "),e("h4",{attrs:{id:"浏览器从加载到渲染的过程，比如输入一个网址到显示页面的过程。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器从加载到渲染的过程，比如输入一个网址到显示页面的过程。"}},[t._v("#")]),t._v(" 浏览器从加载到渲染的过程，比如输入一个网址到显示页面的过程。")]),t._v(" "),e("p",[t._v("加载过程：")]),t._v(" "),e("ol",[e("li",[t._v("查找缓存")]),t._v(" "),e("li",[t._v("发送HTTP请求")]),t._v(" "),e("li",[t._v("浏览器根据 DNS 服务器解析得到域名的 IP 地址\n向这个 IP 的机器发送 HTTP 请求\n服务器收到、处理并返回 HTTP 请求\n浏览器得到返回内容")])]),t._v(" "),e("p",[t._v("渲染过程：")]),t._v(" "),e("p",[t._v("根据 HTML 结构生成 DOM 树\n根据 CSS 生成 CSSOM\n将 DOM 和 CSSOM 整合形成 RenderTree\n根据 RenderTree 开始渲染和展示\n遇到"),e("code",[t._v("<script>")]),t._v("时，会执行并阻塞渲染")])])}),[],!1,null,null,null);a.default=s.exports}}]);