(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{208:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function foo() {\n    console.log(a);\n    a = 1;\n}\n\nfoo(); // ???\n\nfunction bar() {\n    a = 1;\n    console.log(a);\n}\nbar(); // ???\n")])])]),s("p",[t._v("第一段会报错：Uncaught ReferenceError: a is not defined。")]),t._v(" "),s("p",[t._v("第二段会打印：1。")]),t._v(" "),s("p",[t._v('这是因为函数中的 "a" 并没有通过 var 关键字声明，所有不会被存放在 AO 中。')]),t._v(" "),s("p",[t._v("第一段执行 console 的时候， AO 的值是：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("AO = {\n    arguments: {\n        length: 0\n    }\n}\n")])])]),s("p",[t._v("没有 a 的值，然后就会到全局去找，全局也没有，所以会报错。")]),t._v(" "),s("p",[t._v("当第二段执行 console 的时候，全局对象已经被赋予了 a 属性，这时候就可以从全局找到 a 的值，所以会打印 1。")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('console.log(foo);\n\nfunction foo(){\n    console.log("foo");\n}\n\nvar foo = 1;\n')])])]),s("p",[t._v("会打印函数，而不是 undefined 。")]),t._v(" "),s("p",[t._v("这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("下面的代码将输出什么到控制台，为什么？")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("(function(){\n\n  var a = b = 3;\n\n})();\n\n \n\nconsole.log(\"a defined? \" + (typeof a !== 'undefined'));\n\nconsole.log(\"b defined? \" + (typeof b !== 'undefined'));\n")])])]),s("p",[t._v("由于 a 和 b 都定义在函数的封闭范围内，并且都始于 var关键字，大多数JavaScript开发人员期望 typeof a 和 typeof b 在上面的例子中都是undefined。")]),t._v(" "),s("p",[t._v("然而，事实并非如此。这里的问题是，大多数开发人员将语句 var a = b = 3; 错误地理解为是以下声明的简写：")]),t._v(" "),s("p",[t._v("var b = 3;")]),t._v(" "),s("p",[t._v("var a = b;")]),t._v(" "),s("p",[t._v("但事实上，var a = b = 3; 实际是以下声明的简写：")]),t._v(" "),s("p",[t._v("b = 3;")]),t._v(" "),s("p",[t._v("var a = b;")]),t._v(" "),s("p",[t._v("因此（如果你不使用严格模式的话），该代码段的输出是：")]),t._v(" "),s("p",[t._v("a defined? false")]),t._v(" "),s("p",[t._v("b defined? true")]),t._v(" "),s("p",[t._v("但是， b 如何才能被定义在封闭函数的范围之外呢？是的，既然语句 var a = b = 3; 是语句 b = 3; 和 var a = b;的简写， b 最终成为了一个全局变量（因为它没有前缀 var 关键字），因此仍然在范围内甚至封闭函数之外。")]),t._v(" "),s("p",[t._v("需要注意的是，在严格模式下（即使用 use strict），语句var a = b = 3; 将生成ReferenceError: b is not defined的运行时错误，从而避免任何否则可能会导致的headfakes /bug。 （还是你为什么应该理所当然地在代码中使用 use strict 的最好例子！）")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("NaN 是什么？它的类型是什么？你如何可靠地测试一个值是否等于 NaN ？")]),t._v(" "),s("p",[t._v('NaN 属性代表一个“不是数字”的值。这个特殊的值是因为运算不能执行而导致的，不能执行的原因要么是因为其中的运算对象之一非数字（例如， "abc" / 4），要么是因为运算的结果非数字（例如，除数为零）。')]),t._v(" "),s("p",[t._v("虽然这看上去很简单，但 NaN 有一些令人惊讶的特点，如果你不知道它们的话，可能会导致令人头痛的bug。")]),t._v(" "),s("p",[t._v("首先，虽然 NaN 意味着“不是数字”，但是它的类型，不管你信不信，是 Number：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('console.log(typeof NaN === "number");  // logs "true"\n')])])]),s("p",[t._v("此外， NaN 和任何东西比较——甚至是它自己本身！——结果是false：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('console.log(NaN === NaN);  // logs "false"\n')])])]),s("p",[t._v("一种半可靠的方法来测试一个数字是否等于 NaN，是使用内置函数 isNaN()，但即使使用 isNaN() 依然并非是一个完美的解决方案。")]),t._v(" "),s("p",[t._v("一个更好的解决办法是使用 value !== value，如果值等于NaN，只会产生true。另外，ES6提供了一个新的 Number.isNaN() 函数，这是一个不同的函数，并且比老的全局 isNaN() 函数更可靠。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("写一个简单的函数（少于80个字符），要求返回一个布尔值指明字符串是否为回文结构。")]),t._v(" "),s("p",[t._v("下面这个函数在 str 是回文结构的时候返回true，否则，返回false。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("function isPalindrome(str) {\n\n    str = str.replace(/W/g, '').toLowerCase();\n\n    return (str == str.split('').reverse().join(''));\n\n}\n")])])]),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("console.log(isPalindrome(\"level\"));                   // logs 'true'\n\nconsole.log(isPalindrome(\"levels\"));                  // logs 'false'\n\nconsole.log(isPalindrome(\"A car, a man, a maraca\"));  // logs 'true'\n")])])]),s("hr"),t._v(" "),s("p",[t._v("获取数组中的最大值和最小值")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("var numbers = [5, 458 , 120 , -215 ];\n\nvar maxInNumbers = Math.max.apply(Math, numbers), //458\n\nmaxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458\n\n")])])]),s("p",[t._v("number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("doctype是什么\n告诉浏览器当前HTMl版本的指令,决定使用兼容模式还是标准模式对文档进行渲染")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("ES5的继承和ES6的继承有什么区别？\nES5的继承时通过prototype或构造函数机制来实现。ES5的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）。\nES6的继承机制完全不同，实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("数组去重：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("newA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历newA是否存在key，如果存在key会大于0就跳过push的那一步")]),t._v("\n            newA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" newA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unique")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//["1", "2", "3", 1, NaN, NaN, undefined, null, "a", "b"]')]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let unique= [...new Set(array)];\n//es6 Set数据结构类似于数组，成员值是唯一的，有重复的值会自动去重。\n//Set内部使用===来判断是否相等，类似'1'和1会两个都保存，NaN和NaN只会保存一个\n")])])]),s("hr"),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('翻转一个字符串\nlet a="hello word";\nlet b=[...str].reverse().join("");//drow olleh\n')])])]),s("hr"),t._v(" "),s("p",[t._v("四种定位的区别")]),t._v(" "),s("p",[t._v("static 是默认值\nrelative 相对定位 相对于自身原有位置进行偏移，仍处于标准文档流中\nabsolute 绝对定位 相对于最近的已定位的祖先元素, 有已定位(指position不是static的元素)祖先元素, 以最近的祖先元素为参考标准。如果无已定位祖先元素, 以body元素为偏移参照基准, 完全脱离了标准文档流。\nfixed 固定定位的元素会相对于视窗来定位,这意味着即便页面滚动，它还是会停留在相同的位置。一个固定定位元素不会保留它原本在页面应有的空隙。\nsticky: position:relative 和 position:fixed")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("怎么判断两个对象相等？\nJSON.stringify(obj)==JSON.stringify(obj2);//true\nJSON.stringify(obj)==JSON.stringify(obj3);//false")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("性能优化？")]),t._v(" "),s("ul",[s("li",[t._v("代码打包以及分割")]),t._v(" "),s("li",[t._v("减少DOM操作")]),t._v(" "),s("li",[t._v("减少 http 请求， 多用缓存")]),t._v(" "),s("li",[t._v("图片懒加载")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("数组中最大差值")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let arr = [23, 4, 5, 2, 4, 5, 6, 6, 71, -3];\nconst difference = arr => {\n    let max = Math.max(...arr),\n        min = Math.min(...arr);\n    return max - min ;\n}\nconsole.log(difference(arr)) // 74\n\n")])])]),s("hr"),t._v(" "),s("p",[t._v("输入a = 2,b = 3,输出 a = 3,b = 2")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let a = 2,\n    b = 3;\nconst swop = (a, b) => {\n    b = b - a;\n    a = a + b;\n    b = a - b;\n    return [a,b];\n}\nconsole.log(swop(2,3)) // [3,2]\n")])])]),s("hr"),t._v(" "),s("p",[t._v("冒泡排序算法就是依次跟其他元素比较大小，小的的大的进行位置上的交换。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bubbleSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("p",[t._v("跨域")]),t._v(" "),s("p",[t._v("JSONP\n不支持post请求，因为script只支持get请求\n原理：利用"),s("script")])])}),[],!1,null,null,null);a.default=e.exports}}]);