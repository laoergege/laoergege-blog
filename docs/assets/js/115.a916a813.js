(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{597:function(t,e,p){"use strict";p.r(e);var r=p(47),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,p=t._self._c||e;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("p",[t._v("内存空间分：")]),t._v(" "),p("ul",[p("li",[p("p",[t._v("内核空间（Kernal Space），这个空间只有内核程序可以访问；")])]),t._v(" "),p("li",[p("p",[t._v("用户空间（User Space），这部分内存专门给应用程序使用。")])])]),t._v(" "),p("p",[t._v("用户空间中的代码被限制了只能使用一个局部的内存空间，我们说这些程序在用户态（User Mode） 执行。")]),t._v(" "),p("p",[t._v("内核空间中的代码可以访问所有内存，我们称这些程序在内核态（Kernal Mode） 执行。")]),t._v(" "),p("p",[t._v("系统调用：用户态程序需要执行系统调用，就需要切换到内核态执行")]),t._v(" "),p("img",{staticStyle:{zoom:"50%"},attrs:{src:"${images}/CgqCHl-Sm3mAG_x-AAC5MxhOcCc621.png",alt:"Lark20201023-165439.png"}}),t._v(" "),p("p",[t._v("当发生系统调用时，用户态的程序发起系统调用。因为系统调用中牵扯特权指令，用户态程序权限不足，因此会中断执行，也就是 Trap（Trap 是一种中断）。")]),t._v(" "),p("p",[t._v("发生中断后，当前 CPU 执行的程序会中断，跳转到中断处理程序。内核程序开始执行，也就是开始处理系统调用。内核处理完成后，主动触发 Trap，这样会再次发生中断，切换回用户态工作。")]),t._v(" "),p("p",[t._v("https://www.zhihu.com/question/19732473")]),t._v(" "),p("hr"),t._v(" "),p("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);