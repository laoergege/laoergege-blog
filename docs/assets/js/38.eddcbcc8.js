(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{282:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"配置设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置设置"}},[t._v("#")]),t._v(" 配置设置")]),t._v(" "),s("p",[t._v("git 使用前必须设置 git 用户信息（邮箱、用户名）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git config --list\n\ngit config --local user.username "xxx"\ngit config --local user.email "xxx"\n')])])]),s("p",[t._v("配置信息有三种不同级别，优先级分别是:"),s("br"),t._v("\nlocal > global > system")]),t._v(" "),s("h3",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('// 初始化\ngit init\n\n// 暂存文件\ngit add . // 暂存所有文件\ngit add <file> // 仅暂存对应文件\n\n// 提交版本\ngit commit -m "xxx"\n')])])]),s("h3",{attrs:{id:"进阶使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶使用"}},[t._v("#")]),t._v(" 进阶使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 面向工作区 \ngit add -u // 只暂存已跟踪文件，避免把工作区没准备好的新文件直接加到暂存区了。\ngit rm <file> // 删除文件\ngit mv <source> <destination>\n\n// 面向暂存区\ngit rm --cached <file> // 取消文件暂存\ngit reset --hard <commit> // 重置工作区和暂存区\n\n// 面向储存版本\n")])])]),s("blockquote",[s("p",[t._v("多用 "),s("code",[t._v("git status")]),t._v(" 查看文件状态，git 会有接下相关操作提示。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);