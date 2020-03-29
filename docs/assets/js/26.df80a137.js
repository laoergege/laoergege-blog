(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{273:function(e,t,r){"use strict";r.r(t);var o=r(28),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"optimistic-ui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optimistic-ui"}},[e._v("#")]),e._v(" Optimistic UI")]),e._v(" "),r("p",[e._v('"Optimistic UI" 译为 "乐观的UI"，笔者感觉不好，还是原意吧，或许本人能力有限。就说说本人理解吧，与用户最常接触的就是界面，良好的用户交互体验不仅在于界面美观炫酷动画，更重要的是能够快速渲染，响应用户输入，即能够让用户马上所见所得才是重要的，Optimistic UI 正是 meteor 对如何构建快速的用户响应界面的探索。')]),e._v(" "),r("p",[r("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3368741-a8f6979f072e9a9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"0-tktJEL9mC8_RRKQh-.png"}})]),e._v(" "),r("p",[e._v("对于构建快速 App，能够快速响应用户输入，Meteor 提供解决方案如下几点：")]),e._v(" "),r("ul",[r("li",[e._v("客户端渲染"),r("br"),e._v("\n由客户端进行渲染，能够快速展示用户所见，不必等到服务端渲染返回，服务端与客户端只是进行数据交互。")]),e._v(" "),r("li",[e._v("全局数据中心"),r("br"),e._v("\n访问本地数据永远比访问服务端数据库要快。像 Angular 和 React 组件化开发，可以由组件保存组件状态。但当应用庞大复杂时，为了 UI 组件数据显示一致，我们需要有一个全局 store，像 redux 一样的解决方案。在 Meteor 技术栈中，"),r("strong",[e._v("MiniMongo")]),e._v(" 是客户端全局唯一缓存数据的数据源解决方案。")]),e._v(" "),r("li",[e._v("数据订阅"),r("br"),e._v("\n通过注册一个订阅请求数据，这是一个请求服务器发送一些数据（服务端数据映射的一个子集），并把它缓存到客户端上的Minimongo。然后从 Minimongo 获取呈现到您的UI组件。")]),e._v(" "),r("li",[e._v("数据同步"),r("br"),e._v("\n仅仅访问本地数据库是没什么意义的。Meteor的一个核心部分就是 DDP数据订阅，Meteor的数据同步协议，无需你自己去跟踪（像 ajax 访问数据库获取数据）维护数据同步。"),r("strong",[e._v("Method Call")]),e._v(" 是客户端修改数据源数据的唯一途径，当调用 method 对数据发起修改的时候，首先在客户机上运行 Minimongo，进行仿真操作，以便快速渲染响应客户；然后在服务器上，在真正的 MongoDB 上运行的函数。当服务器上的数据库更新完毕，meteor 会同步到客户端 MiniMongo 上，这时客户端上 Minimongo 会撤销之前的仿真操作并回滚到之前，然后再同步数据，这时客户端上的数据与服务器的最终一致性。")])]),e._v(" "),r("h5",{attrs:{id:"也许会有疑问：为什么数据同步时，为什么客户端上要回滚？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#也许会有疑问：为什么数据同步时，为什么客户端上要回滚？"}},[e._v("#")]),e._v(" 也许会有疑问：为什么数据同步时，为什么客户端上要回滚？")]),e._v(" "),r("p",[e._v("客户端上只是仿真操作，但有时客户端只是没有足够的信息来做出准确的预测。也许它缺少一些权限数据，也许它不知道一些不同的客户做了一些修改，等等。另外，正如任何有经验的开发人员会知道，你永远不能相信客户端代码做正确的事情，因为用户可以修改在他们的浏览器中运行的代码。")]),e._v(" "),r("h5",{attrs:{id:"避免闪烁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#避免闪烁"}},[e._v("#")]),e._v(" 避免闪烁")]),e._v(" "),r("p",[e._v("一致的ID生成器：\n当您从 Method 的客户端模拟中将文档插入到 Minimongo 中时生成的 _id 和服务端真实写入数据库产生的 _id，是由同一个随机生成器生成的。这样保证了当服务端的数据回写到客户端时，避免发生界面闪烁。")]),e._v(" "),r("h5",{attrs:{id:"方法重试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法重试"}},[e._v("#")]),e._v(" 方法重试")]),e._v(" "),r("p",[e._v("如果从客户端调用方法，并且在收到结果之前用户的 Internet 连接断开连接，则 Meteor 会假定该方法没有实际运行。当连接重新建立时，方法调用将被再次发送。这意味着，在某些情况下，方法可能被发送多次。在这种情况下，方法重复调用可能有负面影响的情况下，我们应该确保方法是幂等的 - 即多次调用不会导致额外的更改数据库。")]),e._v(" "),r("p",[e._v("许多方法操作默认是幂等的：")]),e._v(" "),r("ul",[r("li",[e._v("插入会发生错误，如果他们发生两次，因为生成的ID将冲突。")]),e._v(" "),r("li",[e._v("移除集合将不会再次执行任何操作。")]),e._v(" "),r("li",[e._v("更新操作符$set将会在重新运行后得到相同的结果")])]),e._v(" "),r("blockquote",[r("p",[e._v("你需要担心的代码运行两次的唯一地方是 MongoDB 的更新操作符叠加，像 $inc 和 $push，和调用外部的API。")])]),e._v(" "),r("h5",{attrs:{id:"方法里调用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法里调用方法"}},[e._v("#")]),e._v(" 方法里调用方法")]),e._v(" "),r("p",[e._v("有时，你会想从另一个方法调用一个方法。也许你已经实现了一些功能，你想添加一个自动填充一些参数的包装器。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("在客户端的方法模拟中，调用另一个方法不会引发对服务器的额外请求。但是，它将运行仿真所调用的方法，使客户端上的仿真紧密匹配将在服务器上发生了什么。")])]),e._v(" "),r("li",[r("p",[e._v("在服务器上的一个 Method 执行中，调用另一个 Method 运行该 Method 就好像它是由同一个客户端调用的一样。这意味着该方法将照常运行，并在上下文(userId，connection等），就像原方法调用一样。")])])]),e._v(" "),r("h5",{attrs:{id:"按顺序返回"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#按顺序返回"}},[e._v("#")]),e._v(" 按顺序返回")]),e._v(" "),r("blockquote",[r("p",[e._v("所有的 Method 调用和结果都将保证按照它们发送的顺序到达")])]),e._v(" "),r("p",[e._v("当你有一个运行时间较长的方法，则可以使用"),r("code",[e._v("this.unblock()")]),e._v("在当前方法仍在进行的同时运行下一个方法。您也可以通过 "),r("code",[e._v("Meteor.apply")]),e._v(" 一个特殊的选项 "),r("code",[e._v("wait: true")]),e._v(" 等待所有其方法已经返回再返回。")]),e._v(" "),r("p",[e._v("你可以参考 "),r("a",{attrs:{href:"https://themeteorchef.com/tutorials/using-unblock-and-defer-in-methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("在方法中使用 "),r("code",[e._v("this.unblock")]),e._v(" 和 "),r("code",[e._v("Meteor.defer")]),r("OutboundLink")],1),e._v(" 教程。")]),e._v(" "),r("h3",{attrs:{id:"method-生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#method-生命周期"}},[e._v("#")]),e._v(" Method 生命周期")]),e._v(" "),r("ol",[r("li",[e._v("在客户端上运行方法，进行仿真模拟"),r("br"),e._v("\n这时客户端进入一个特殊的模式，跟踪客户端集合的所有更改，以便稍后服务端返回真实数据时进行回滚，此时服务器还没有收到任何数据。\n如果 Method 仿真时抛出异常，那么默认情况下，Meteor 忽略它并继续步骤（2）。除非通过 Meteor.apply 设置 throwStubExceptions选项，那么从模拟中抛出的异常将会停止服务器端方法的运行。或者你也可以使用第三方 ValidatedMethod包，使用教程可查看\n"),r("a",{attrs:{href:"https://themeteorchef.com/tutorials/using-validated-methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Validated Methods"),r("OutboundLink")],1),e._v("。方法模拟的返回值会被丢弃，除非在调用 Method 时传递选项 returnStubValue，在这种情况下返回给方法调用者。ValidatedMethod默认通过这个选项。")]),e._v(" "),r("li",[e._v("method DDP消息被发送到服务器"),r("br"),e._v("\n包括方法名称，参数以及表示这个特定方法调用的自动生成的方法ID。")]),e._v(" "),r("li",[e._v("在服务器上运行方法"),r("br"),e._v("\n当服务器收到消息时，它会再次在服务器上执行方法代码。客户端版本是一个将在稍后回滚的模拟，但这次是写入实际数据库的真实版本。在服务器上运行实际的方法逻辑是至关重要的，因为服务器是一个值得信赖的环境，我们知道安全关键的代码将以我们所期望的方式运行。")]),e._v(" "),r("li",[e._v("返回值发送给客户端"),r("br"),e._v("\n一旦方法在服务器上完成运行，它将向客户端发送一条消息，其中包含步骤2中生成的方法ID以及返回值本身。客户端存储这个供以后使用，但不调用回调方法。如果您通过 Meteor.apply 设置 onResultReceived选项，该回调被激发，可以获取返回值。")]),e._v(" "),r("li",[e._v("任何受该方法影响的集合，Meteor 将触发相关订阅更新数据")]),e._v(" "),r("li",[e._v("updated 消息发送到客户端，数据替换为服务器结果，回调方法触发"),r("br"),e._v("\n相关数据更新发送到正确的客户端后，服务器将发回方法生命周期中的最后一条消息 - updated带有相关方法ID 的DDP 消息。客户端回滚步骤1中 Method 模拟中所做客户端数据的任何更改，并将其替换为从服务器发送的实际更改。最后，传递给回调 Meteor.call 实际上是从步骤4返回的值。")])]),e._v(" "),r("blockquote",[r("p",[e._v("本节参考 "),r("a",{attrs:{href:"https://blog.meteor.com/optimistic-ui-with-meteor-67b5a78c3fcf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Optimistic UI with Meteor"),r("OutboundLink")],1)])]),e._v(" "),r("blockquote",[r("p",[e._v("更多详细内容 "),r("a",{attrs:{href:"https://guide.meteor.com/methods.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Meteor 官方指导"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"动态加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态加载"}},[e._v("#")]),e._v(" 动态加载")]),e._v(" "),r("p",[e._v("对于代码拆分，动态加载的好处主要是\n"),r("strong",[e._v("减小代码打包体积，让程序在运行时按需加载模块，提高应用初始化速度。")])]),e._v(" "),r("h3",{attrs:{id:"meteor-s-dynamic-imports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meteor-s-dynamic-imports"}},[e._v("#")]),e._v(" Meteor’s dynamic imports")]),e._v(" "),r("p",[e._v("相比 Webpack，System.js 和 Next.js 几个代码分割和动态导入的实现，这些模块打包商都会有一些折衷，以下是 Meteor 采取的方法的好处：")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3368741-8c7f0a6cc0cc051d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"1-KEGlqwYbNcgmJKmsLAT32w.png"}})]),e._v(" "),r("p",[e._v("像 webpack 这类打包工具需要指定入口文件，有时候这些 bundle 会有重要的重叠部分，这意味着在正常的应用程序操作中，您必须多次加载相同的页面，组件或库。 这些系统提出的一个建议是将通用依赖关系放入到公共模块中。 相比较下，在 Meteor 的系统中，不需要定义的入口文件，每个模块都是入口点，服务器完全给客户端提供了它所需要的包的集合。 我们称之为“精确的代码分割”，这意味着你只需要加载一次就可以了。")]),e._v(" "),r("p",[r("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3368741-0e1eb0d4b255cd40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"1-AfkZEIS8g4oIH13WazGfVQ.png"}})]),e._v(" "),r("ol",[r("li",[e._v("meteor 会分析整个模块树，区分需要异步加载模块的部分，打包成应用初始化模块和其他异步模块。")]),e._v(" "),r("li",[e._v("客户端会知道的整个模块树图，这些模块的名字，和他们的内容的哈希值在整个应用程序的时间。这就意味着当一个动态导入时，客户端应用程序可以确定哪些模块和信息丢失，而且只请求一次服务器那些模块。")]),e._v(" "),r("li",[e._v("模块会被分别缓存在客户机上，以便下次可以从持久存储中加载它们，不会出现重复加载。即使你推了一个全新版本的应用程序，如果使用的是与以前相同的库版本，它仍然会从本地存储中加载。")])]),e._v(" "),r("h4",{attrs:{id:"use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" Use")]),e._v(" "),r("p",[e._v("Don't need any configuration, a dynamic import is an import statement that returns a promise instead of synchronously returning the module:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// Static import\nimport MyComponent from './component';\nrender(MyComponent);\n// Dynamic import\nimport('./component').then((MyComponent) => {\n  render(MyComponent);\n});\n// async/await\nconst React = await import('react');\n")])])]),r("blockquote",[r("p",[e._v("参考 "),r("a",{attrs:{href:"https://blog.meteor.com/dynamic-imports-in-meteor-1-5-c6130419c3cd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dynamic imports in Meteor 1.5"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"meteor-文件目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#meteor-文件目录结构"}},[e._v("#")]),e._v(" meteor 文件目录结构")]),e._v(" "),r("h3",{attrs:{id:"特殊目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特殊目录"}},[e._v("#")]),e._v(" 特殊目录")]),e._v(" "),r("p",[e._v("默认情况下，Meteor 应用程序文件夹中的任何 JavaScript 文件都被捆绑并加载到客户端和服务器上。但是，项目中文件和目录的名称可能会影响其加载顺序，加载位置以及其他一些特征。以下是 Meteor 特殊处理的目录名称列表：")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Directory")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("code",[e._v("/imports")])]),e._v(" "),r("td",[e._v("为了充分利用模块化系统，让代码只被加载在需要的时候，建议把你的代码放在该文件夹内，这个目录中的代码不会被自动加载到客户端或服务端，在这个目录下所有文件必须显式使用 es2015 / 6 import 语句导入文件内容。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("/node_modules")])]),e._v(" "),r("td",[e._v("任何储存在 node_modules/ 下的文件都不会被加载，用于存放 npm 包")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("/client")])]),e._v(" "),r("td",[e._v("该目录下的所有文件只能被客户端加载并且只能运行在客户端")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("/server")])]),e._v(" "),r("td",[e._v("该目录下的所有文件只能被服务端加载并且只能运行在服务端")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("/public")])]),e._v(" "),r("td",[e._v("用于存储所有要公开服务的文件。图像，图形和其他静态资产可以存放在这里。注：可直接访问：http://localhost:3000/file.jpg.。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("/private")])]),e._v(" "),r("td",[e._v("用于存储私有文件，只能被服务端访问。此目录中的文件可以使用 "),r("code",[e._v("Assets API.")]),e._v(" 访问。例如，电子邮件模板或种子数据之类的数据可以存储在这里。")])]),e._v(" "),r("tr",[r("td",[r("code",[e._v("/tests")])]),e._v(" "),r("td",[e._v("任何储存在 /tests 下的文件都不会被加载，除 Meteor 的内置测试工具之外，使用这个测试代码来运行测试代码。")])])])]),e._v(" "),r("p",[e._v("从技术上讲，除了上述列举的文件夹名称外，只要存储在项目根目录中的名称不是这个表中的名称，其代码客户端和服务器上都可访问。例如，"),r("code",[e._v("/lib")]),e._v(" 或 "),r("code",[e._v("/both")]),e._v(" 在根目录中。")]),e._v(" "),r("h3",{attrs:{id:"默认文件加载顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#默认文件加载顺序"}},[e._v("#")]),e._v(" 默认文件加载顺序")]),e._v(" "),r("p",[e._v("特殊目录之外的所有 JavaScript 文件都加载在客户端和服务器上。Meteor 提供这些变量"),r("code",[e._v("Meteor.isClient")]),e._v("，"),r("code",[e._v("Meteor.isServer")]),e._v(" 以便您的代码可以根据它在客户端还是服务器上运行来改变其行为。")]),e._v(" "),r("p",[e._v("特殊目录之外的 CSS 和 HTML 文件仅在客户端上加载，不能从服务器代码中使用。所有 HTML 文件："),r("code",[e._v("<head>，<body>，<template>")]),e._v("。头部和身体部分分别连接成单个头部和身体，在初始页面加载时传输给客户端。")]),e._v(" "),r("p",[e._v("尽管建议您编写应用程序以使用 ES2015模块 和 imports/目录，但Meteor 1.3仍然支持使用这些默认的加载顺序规则预先加载文件，以便为为Meteor 1.2及更早版本编写的应用程序提供向后兼容性。")]),e._v(" "),r("p",[e._v("默认文件记载顺序：")]),e._v(" "),r("ol",[r("li",[e._v("HTML 文件总是优先加载")]),e._v(" "),r("li",[e._v("文件以 "),r("code",[e._v("main.")]),e._v(" 结尾的最后加载。")]),e._v(" "),r("li",[e._v("接下来加载任何目录下的文件")]),e._v(" "),r("li",[e._v("越深路径的文件越先加载")]),e._v(" "),r("li",[e._v("文件按照字母顺序加载")])]),e._v(" "),r("p",[e._v("列子：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("nav.html\nmain.html\nclient/lib/methods.js\nclient/lib/styles.js\nlib/feature/styles.js\nlib/collections.js\nclient/feature-y.js\nfeature-x.js\nclient/main.js\n")])])]),r("p",[e._v("上面例子， "),r("code",[e._v("main.html")]),e._v(" 以 "),r("code",[e._v("main.")]),e._v(" 结尾，但因为是 HTML文件 ，所以优先加载（第1规则）且次于 "),r("code",[e._v("nav.html")]),e._v(" （第2规则优于第5规则）；"),r("br"),e._v(" "),r("code",[e._v("client/lib/styles.js")]),e._v(" 和 "),r("code",[e._v("lib/feature/styles.js")]),e._v(" 因为比 "),r("code",[e._v("client/feature-y.js")]),e._v(" 路径较深所以优先.")]),e._v(" "),r("h3",{attrs:{id:"文件结构组织（推荐）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件结构组织（推荐）"}},[e._v("#")]),e._v(" 文件结构组织（推荐）")]),e._v(" "),r("p",[e._v("Meteor 会使用默认的文件加载顺序规则加载应用程序中除了指定特殊目录外的任何目录的所有文件。除了创建 "),r("code",[e._v("client/main.js")]),e._v(" 和 "),r("code",[e._v("server/main.js")]),e._v("为客户端和服务器定义明确的入口点，为了充分利用模块系统，并确保我们的代码只在我们要求的时候运行，建议您将所有的应用程序代码放在 "),r("code",[e._v("imports/")]),e._v(" 目录中。这意味着 Meteor 构建系统只会捆绑你所导入的文件。")]),e._v(" "),r("p",[e._v("使用 "),r("code",[e._v("meteor create appName --full")]),e._v(" 创建 meteor推荐目录文件结构：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("imports/\n  startup/\n    client/\n      index.js                 # import client startup through a single index entry point\n      routes.js                # set up all routes in the app\n      useraccounts-configuration.js # configure login templates\n    server/\n      fixtures.js              # fill the DB with example data on startup\n      index.js                 # import server startup through a single index entry point\n  api/\n    lists/                     # a unit of domain logic\n      server/\n        publications.js        # all list-related publications\n        publications.tests.js  # tests for the list publications\n      lists.js                 # definition of the Lists collection\n      lists.tests.js           # tests for the behavior of that collection\n      methods.js               # methods related to lists\n      methods.tests.js         # tests for those methods\n  ui/\n    components/                # all reusable components in the application\n                               # can be split by domain if there are many\n    layouts/                   # wrapper components for behaviour and visuals\n    pages/                     # entry points for rendering used by the router\nclient/\n  main.js                      # client entry point, imports all client code\nserver/\n  main.js                      # server entry point, imports all server code\n")])])]),r("p",[e._v("更多详细内容可以参考")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/Meteor/!https://guide.meteor.com/structure.html"}},[e._v("Application Structure")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://themeteorchef.com/tutorials/organizing-your-meteor-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("Organizing Your Meteor Project"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"订阅者的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#订阅者的生命周期"}},[e._v("#")]),e._v(" 订阅者的生命周期")]),e._v(" "),r("p",[e._v("如下面代码:\n带限制的PUBLICATION")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" Meteor.publish('latest-measurements', function(limit) {\n      if(!this.userId){\n        return this.ready();\n      }\n      return Measurements.find({userId: this.userId},\n        {sort:{MDate:-1},limit:limit});\n});\n")])])]),r("p",[e._v("对应的SUBSCRIBE")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Meteor.subscribe('latest-measurements',2)\n")])])]),r("p",[e._v("按照我理解，大意翻译官方文档 "),r("a",{attrs:{href:"https://guide.meteor.com/data-loading.html#lifecycle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Subscription lifecycle"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("对应DDP信息:\n"),r("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3368741-858e52b1c460d0db.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"2016-03-07 00-12-54.jpg"}})]),e._v(" "),r("p",[e._v("由此可见 SUBSCRIPTION 生命周期:")]),e._v(" "),r("ol",[r("li",[e._v("client 通过 DDP 发送 sub 消息到 server，包含 pub 的名字及参数")]),e._v(" "),r("li",[e._v("服务端通过运行 publication handler function 来启动订阅")]),e._v(" "),r("li",[e._v("publication handler 识别返回值为 cursor 时，为其设置观察者，除非服务器上已经存在这样一个观察者（对于任何用户），在这种情况下观察者被重新使用,没有就重新建立。")]),e._v(" "),r("li",[e._v("observer 获取命中 cursor 的 documents 通过 "),r("code",[e._v("this.added()")]),e._v(" 传递给 subscription（每执行一次 publication，就会产生一个 subscription，代表客户端 ）")]),e._v(" "),r("li",[e._v("subscription 将 the added documents 传递给 "),r("strong",[e._v("mergebox")]),e._v("， "),r("strong",[e._v("mergebox")]),e._v(" 是用来缓存对应客户端的 documents，通过合并新旧版本文档对比差异，发送 added 或 changed DDP message 到客户端")])]),e._v(" "),r("blockquote",[r("p",[e._v("注意："),r("strong",[e._v("mergebox")]),e._v(" 只会对比操作文档最顶层的域")])]),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("pub 的 function 发送 ready DDP message 到 client，客户端 subscription 进入 ready 状态")]),e._v(" "),r("li",[e._v("observer 持续跟踪 cursor 的结果集，如果有一个相关联的改变，例如添加了一个新的文旦或者某个命中到的文档的某个域值发生改变，它将把这些改变（"),r("code",[e._v(".added(), .changed() or .removed()")]),e._v("）传递给 "),r("strong",[e._v("mergebox")]),e._v("，再通过 DDP 发送客户端")]),e._v(" "),r("li",[e._v("client 向 server 发送 unsub DDP message")]),e._v(" "),r("li",[e._v("server 将停止内部的 subscription object，并触发下列效果：")]),e._v(" "),r("li",[e._v("回调 "),r("code",[e._v("this.onStop()")]),e._v(" 去停止查询观察者，并在清理它。")]),e._v(" "),r("li",[e._v("此 subscription 跟踪的所有文档都将从 "),r("strong",[e._v("mergebox")]),e._v(" 中删除，这可能并不意味着它们也会从客户端中删除。")]),e._v(" "),r("li",[e._v("发送 nosub 消息到客户端以指示该 subscription 已经停止。")])]),e._v(" "),r("h3",{attrs:{id:"observer-如何知道客户端有什么-document"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#observer-如何知道客户端有什么-document"}},[e._v("#")]),e._v(" observer 如何知道客户端有什么 document")]),e._v(" "),r("ul",[r("li",[e._v("server为每一个client建立一个mergebox")]),e._v(" "),r("li",[e._v("mergebox用于记录已经发往该client的所有document")]),e._v(" "),r("li",[e._v("added, changed, removed message是document在mergebox中进行比较后发给client")]),e._v(" "),r("li",[e._v("mergebox的比较只比较第一级field，也即两个不同的sub过滤了同一个field的不同子field，后sub的子field无法传给client")]),e._v(" "),r("li",[e._v("使用有嵌套的document时注意此问题")])]),e._v(" "),r("h3",{attrs:{id:"observer-如何复用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#observer-如何复用"}},[e._v("#")]),e._v(" observer 如何复用")]),e._v(" "),r("ul",[r("li",[e._v("cursor的selector, filter完全一致则被认定复用")]),e._v(" "),r("li",[e._v("不同client sub到的observer也可以相互复用")])]),e._v(" "),r("h3",{attrs:{id:"observer-如何持续跟踪结果集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#observer-如何持续跟踪结果集"}},[e._v("#")]),e._v(" observer 如何持续跟踪结果集")]),e._v(" "),r("ul",[r("li",[e._v("如果mongo使用了oplog，优先使用此操作日志进行跟踪")]),e._v(" "),r("li",[e._v("否则使用轮询")])]),e._v(" "),r("p",[e._v("详细参考")]),e._v(" "),r("ul",[r("li",[e._v("官方 "),r("a",{attrs:{href:"https://guide.meteor.com/data-loading.html#lifecycle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Subscription lifecycle"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://x3fwy.farbox.com/post/meteor-2016ji-zhu-feng-hui-fa-pei-shu-ju#toc_0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Meteor 2016技术峰会——发配数据"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[e._v("#")]),e._v(" Error")]),e._v(" "),r("p",[e._v("Meteor 中错误有三种类型：")]),e._v(" "),r("ul",[r("li",[e._v("JavaScript Error")]),e._v(" "),r("li",[e._v("Meteor.Error"),r("br"),e._v("\nMeteor 运行时错误")]),e._v(" "),r("li",[e._v("ValidationError")])])])}),[],!1,null,null,null);t.default=s.exports}}]);