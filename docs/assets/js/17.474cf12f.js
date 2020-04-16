(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{254:function(a,t,s){"use strict";s.r(t);var e=s(28),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-正则表达式"}},[a._v("#")]),a._v(" JavaScript 正则表达式")]),a._v(" "),s("p",[a._v("正则表达式是搜索和替换字符串的一种强大方式。")]),a._v(" "),s("p",[a._v("正则表达式（可叫作“regexp”或者“reg”）包含"),s("strong",[a._v("模式")]),a._v("和可选的"),s("strong",[a._v("修饰符")]),a._v("。")]),a._v(" "),s("p",[a._v("创建 JavaScript 正则表达式的方式有：")]),a._v(" "),s("ul",[s("li",[a._v("RegExp 实例 "),s("code",[a._v('regexp = new RegExp("pattern", "flags");')])]),a._v(" "),s("li",[a._v("字面量 "),s("code",[a._v("regexp = /pattern/flag;")])])]),a._v(" "),s("blockquote",[s("p",[a._v("相比正则字面量的方式 "),s("code",[a._v("new RegExp")]),a._v(" 允许从字符串中"),s("strong",[a._v("动态地构造模式")])])]),a._v(" "),s("h2",{attrs:{id:"修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[a._v("#")]),a._v(" 修饰符")]),a._v(" "),s("ul",[s("li",[a._v("i 不区分大小写")]),a._v(" "),s("li",[a._v("g 全局搜索所有匹配项")]),a._v(" "),s("li",[a._v("m 多行模式")]),a._v(" "),s("li",[a._v("u 开启完整的 unicode 支持")]),a._v(" "),s("li",[a._v("s . 符号表示任意字符")]),a._v(" "),s("li",[a._v("y 粘滞模式")])]),a._v(" "),s("h2",{attrs:{id:"字符类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符类"}},[a._v("#")]),a._v(" 字符类")]),a._v(" "),s("ul",[s("li",[a._v("\\d 数字0到9")]),a._v(" "),s("li",[a._v("\\D 非 \\d")]),a._v(" "),s("li",[a._v("\\s 空格、水平制表符\\t、垂直制表符\\v、换行符\\n、换页页符\\f、回车符\\r")]),a._v(" "),s("li",[a._v("\\S 非 \\s")]),a._v(" "),s("li",[a._v("\\w 拉丁字母、数字、下划线")]),a._v(" "),s("li",[a._v("\\W 非 \\w")]),a._v(" "),s("li",[a._v(".  任意字符，除 \\n")])]),a._v(" "),s("h3",{attrs:{id:"修饰符-s-与字符类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰符-s-与字符类"}},[a._v("#")]),a._v(" 修饰符 s 与字符类 .")]),a._v(" "),s("p",[a._v("默认情况下字符类 "),s("code",[a._v(".")]),a._v(" 不匹配换行符"),s("code",[a._v("\\n")]),a._v("，但修饰符 "),s("strong",[a._v("s")]),a._v(" 下的模式的字符类 "),s("code",[a._v(".")]),a._v(" 能够匹配换行符"),s("code",[a._v("\\n")]),a._v("，但是修饰符 s 在兼容性不是特别高，详见 "),s("a",{attrs:{href:"https://caniuse.com/#search=dotall",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://caniuse.com/#search=dotall"),s("OutboundLink")],1),a._v("，我们可以通过 "),s("code",[a._v("[\\s\\S]")]),a._v(" 模式表示任意字符，"),s("code",[a._v("\\s")]),a._v(" 和 "),s("code",[a._v("\\S")]),a._v(" 相冲，两者用集合的方式结合起来，就表示全部，类似的还有 "),s("code",[a._v("[\\d\\D]")]),a._v("、"),s("code",[a._v("[^]")]),a._v(" 等")]),a._v(" "),s("h2",{attrs:{id:"锚符-、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锚符-、"}},[a._v("#")]),a._v(" 锚符 ^、$")]),a._v(" "),s("p",[a._v("符号 "),s("code",[a._v("^")]),a._v(" 匹配文本开头，而美元符号 "),s("code",[a._v("$")]),a._v(" 则匹配文本末尾")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" str1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"it\'s fleece was white as snow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/snow$/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("str1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])])]),s("h3",{attrs:{id:"多行模式-m-与-、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多行模式-m-与-、"}},[a._v("#")]),a._v(" 多行模式 m 与 ^、$")]),a._v(" "),s("p",[a._v("修饰符 m 开启的多行模式下，^、$ 不仅仅匹配文本的开始与结束，还"),s("strong",[a._v("匹配每一行的开始与结束")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("'aaaab\\nccccc'.match(/b$/) // null\n'aaaab\\nccccc'.match(/b$/mg) // ['b']\n")])])]),s("h3",{attrs:{id:"锚符-对比-n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锚符-对比-n"}},[a._v("#")]),a._v(" 锚符 ^$ 对比 \\n")]),a._v(" "),s("p",[a._v("上述列子中如果要进行每一行匹配的话，我们还也可以使用换行符 "),s("code",[a._v("\\n")]),a._v("。\n"),s("code",[a._v("\\n")]),a._v(" 和锚符 "),s("code",[a._v("$")]),a._v(" 的第一个不同点是它不像锚符那样，它会消费 "),s("code",[a._v("\\n")]),a._v(" 即将 "),s("code",[a._v("\\n")]),a._v(" 加入到匹配结果中")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'aaaab\\nccccc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/b\\n/mg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// ["b\\n"]')]),a._v("\n")])])]),s("h2",{attrs:{id:"集合和范围"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集合和范围"}},[a._v("#")]),a._v(" 集合和范围 [...]")]),a._v(" "),s("h2",{attrs:{id:"量词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量词"}},[a._v("#")]),a._v(" 量词")]),a._v(" "),s("h3",{attrs:{id:"unicode：修饰符-u-和-class-p"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicode：修饰符-u-和-class-p"}},[a._v("#")]),a._v(" Unicode：修饰符 “u” 和 class \\p{...}")])])}),[],!1,null,null,null);t.default=v.exports}}]);