(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{437:function(e,a,n){"use strict";n.r(a);var t=n(35),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("参考"),n("a",{attrs:{href:"https://www.villainhr.com/page/2016/05/11/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAmongoose#Model",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入浅出mongoose"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"连接mongoose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连接mongoose"}},[e._v("#")]),e._v(" 连接mongoose")]),e._v(" "),n("p",[e._v("mongoose连接数据库有两种方式\n第一种：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("'use strict';\n\nconst mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost:27017/test');\nconst con = mongoose.connection;\ncon.on('error', console.error.bind(console, '连接数据库失败'));\ncon.once('open',()=>{\n    //成功连接\n})\n")])])]),n("p",[e._v("第二种：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var mongoose = require('mongoose');\n\ndb = mongoose.createConnection('localhost', 'test');\nvar schema = new mongoose.Schema({ name: String });\nvar collectionName = 'kittens';\nvar M = db.model('Kitten', schema, collectionName);\nvar silence = new M({ name: \"Silence\"});\nsilence.save(function(err){\n \n});\n")])])]),n("h3",{attrs:{id:"mongoose-createconnection-和mongoose-connect-区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongoose-createconnection-和mongoose-connect-区别"}},[e._v("#")]),e._v(" mongoose.createConnection()和mongoose.connect()区别")]),e._v(" "),n("p",[e._v("首先，我们需要定义一个连接，如果你的app只用到一个数据库，你应该使用 mongoose.connect。如果你还需要连接其他数据库，使用mongoose.createConnection。\n所有的 connect and createConnection 使用 mongodb:// URI, or the parameters host, database, port, options.等参数")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost/my_database');\n")])])]),n("p",[e._v("一旦连接，Connection对象会触发open事件，如果你使用 mongoose.connect, Connection对象就是默认的 mongoose.connection，而使用 mongoose.createConnection 返回值就是 Connection.")]),e._v(" "),n("blockquote",[n("p",[e._v("Mongoose会缓存所有命令直到连接上数据库，这意味着你不必等待它连接MongoDB再定义 models，执行 queries 等。")])]),e._v(" "),n("h2",{attrs:{id:"mongoose基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongoose基本概念"}},[e._v("#")]),e._v(" Mongoose基本概念")]),e._v(" "),n("ul",[n("li",[e._v("Schema: 表定义模板")]),e._v(" "),n("li",[e._v("Model: 类似关系数据库表，封装成具有一些集合操作的对象")]),e._v(" "),n("li",[e._v("instance: 类似记录，由Model创建的实体，也具有影响数据库的操作")])]),e._v(" "),n("h2",{attrs:{id:"基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[e._v("#")]),e._v(" 基本用法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//定义一个schema\n    let Schema = mongoose.Schema({\n        category:String,\n        name:String\n    });\n    Schema.methods.eat = function(){\n        console.log(\"I've eatten one \"+this.name);\n    }\n    //继承一个schema\n    let Model = mongoose.model(\"fruit\",Schema);\n    //生成一个document\n    let apple = new Model({\n        category:'apple',\n        name:'apple'\n    });\n    //存放数据\n    apple.save((err,apple)=>{\n        if(err) return console.log(err);\n        apple.eat();\n        //查找数据\n        Model.find({name:'apple'},(err,data)=>{\n            console.log(data);\n        })\n    });\n")])])]),n("h2",{attrs:{id:"schema"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[e._v("#")]),e._v(" Schema")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// from mongoose author\nvar mongoose = require('mongoose');\nvar Schema = mongoose.Schema;//引用出来，不需要每次调用 mongoose.Schema()这个丑陋的API.\n\nvar blogSchema = new Schema({\n  title:  String,\n  author: String,\n  //直接写法，会被转化成相应的SchemaType \n  body:   String,  \n  comments: [{ body: String, date: Date }],\n  //定义SchemaType写法\n  date: { type: Date, default: Date.now },\n  hidden: Boolean,\n  meta: {\n    votes: Number,\n    favs:  Number\n  }\n});\n")])])]),n("p",[e._v("Schema 之所以能够定义documents, 是因为他可以限制你输入的字段及其类型. mongoose支持的基本类型有:")]),e._v(" "),n("ul",[n("li",[e._v("String")]),e._v(" "),n("li",[e._v("Number")]),e._v(" "),n("li",[e._v("Date")]),e._v(" "),n("li",[e._v("Buffer")]),e._v(" "),n("li",[e._v("Boolean")]),e._v(" "),n("li",[e._v("Mixed")]),e._v(" "),n("li",[e._v("ObjectId")]),e._v(" "),n("li",[e._v("Array")])]),e._v(" "),n("h3",{attrs:{id:"schematype"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#schematype"}},[e._v("#")]),e._v(" SchemaType")]),e._v(" "),n("p",[e._v("type属性指定SchemaType类型，不同的SchemaType类型还有其他不同的属性配置")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var schema2 = new Schema({\n  test: {\n    type: String,\n    lowercase: true // Always convert `test` to lowercase\n  }\n});\n")])])]),n("p",[e._v("这是所有类型公有的：")]),e._v(" "),n("ul",[n("li",[e._v("required: 必选验证器。")]),e._v(" "),n("li",[e._v("default: 默认值。Any或function，如果该值是一个函数，则该函数的返回值将用作默认值。")]),e._v(" "),n("li",[e._v("select: boolean值, 指定是否被投影")]),e._v(" "),n("li",[e._v("`validate: 验证器")]),e._v(" "),n("li",[e._v("get: get方法，using Object.defineProperty().")]),e._v(" "),n("li",[e._v("set: set方法 using Object.defineProperty().")]),e._v(" "),n("li",[e._v("alias: 别名。")])]),e._v(" "),n("p",[n("a",{attrs:{href:"http://mongoosejs.com/docs/schematypes.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("其他类型特有属性官方API查找。"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"设置索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置索引"}},[e._v("#")]),e._v(" 设置索引")]),e._v(" "),n("p",[e._v("这里设置索引分两种,一种设在Schema filed, 另外一种设在 Schema.index 里.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//在field 设置\nvar animalSchema = new Schema({\n  name: String,\n  type: String,\n  tags: { type: [String], index: true } \n});\n")])])]),n("p",[e._v("//在Schema.index中设置.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("animalSchema.index({ name: 1, type: -1 });\n\n\n\n//1 表示正序, -1 表示逆序\n")])])]),n("p",[e._v("实际上,两者效果是一样的. 看每个人的喜好了. 不过推荐直接在Schema level中设置, 这样分开能够增加可读性. 不过,\n可以说，当应用启动的时候, ，Mongoose会自动为Schema中每个定义了索引的调用ensureIndex，确保生成索引.\n并在所有的secureIndex调用成功或出现错误时，在 Model 上发出一个'index'事件。 开发环境用这个很好, 但是建议在生产环境不要使用这个.使用下面的方法禁用ensureIndex。\n通过将 Schema 的autoIndex选项设置为false或通过将选项config.autoIndex设置为false将连接全局设置为禁用此行为 有可能严重拖慢查询或者创建速度,所以一般而言,我们需要将该option 关闭.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mongoose.connect('mongodb://user:pass@localhost:port/database', { config: { autoIndex: false } });  //真心推荐\n// or  \nmongoose.createConnection('mongodb://user:pass@localhost:port/database', { config: { autoIndex: false } });  //不推荐\n// or\nanimalSchema.set('autoIndex', false);  //推荐\n// or\nnew Schema({..}, { autoIndex: false }); //懒癌不推荐\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Will cause an error because mongodb has an _id index by default that\n// is not sparse\nanimalSchema.index({ _id: 1 }, { sparse: true });\nvar Animal = mongoose.model('Animal', animalSchema);\n\nAnimal.on('index', function(error) {\n  // \"_id index cannot be sparse\"\n  console.log(error.message);\n});\n")])])]),n("h3",{attrs:{id:"定义schema-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义schema-methods"}},[e._v("#")]),e._v(" 定义Schema.methods")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 定义一个schema\nvar freshSchema = new Schema({ name: String, type: String });\n\n// 添加一个fn. \nanimalSchema.methods.findSimilarTypes = function (cb) {\n  //这里的this指的是具体document上的this\n  //this.model 返回Model对象\n  return this.model ('Animal').find({ type: this.type }, cb);\n}\n// 实际上,我们可以通过schema绑定上,数据库操作的所有方法.\n// 该method实际上是绑定在 实例的 doc上的\n\n")])])]),n("p",[e._v("实例Model")]),e._v(" "),n("p",[e._v("这里同样很简单,只需要 mongoose.model() 即可.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//生成,model 类. 实际上就相当于我们的一个collection\nvar Animal = mongoose.model('Animal', animalSchema);\nvar dog = new Animal({ type: 'dog' });\n")])])]),n("p",[e._v("但是, 这里有个问题. 我们在Schema.methods.fn 上定义的方法,只能在 new Model() 得到的实例中才能访问. 那如果我们想,直接在Model上调用 相关的查询或者删除呢？")]),e._v(" "),n("p",[e._v("绑定Model方法")]),e._v(" "),n("p",[e._v("同样很简单,使用 Statics 即可.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 给model添加一个findByName方法\nanimalSchema.statics.findByName = function (name, cb) {\n  //这里的this 指的就是Model\n  return this.find({ name: new RegExp(name, 'i') }, cb);\n}\n\nvar Animal = mongoose.model('Animal', animalSchema);\nAnimal.findByName('fido', function (err, animals) {\n  console.log(animals);\n});\n")])])]),n("h3",{attrs:{id:"虚拟属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟属性"}},[e._v("#")]),e._v(" 虚拟属性")]),e._v(" "),n("p",[e._v("Mongoose 还有一个super featrue-- virtual property 该属性是直接设置在Schema上的. 但是,需要注意的是,VR 并不会真正的存放在db中. 他只是一个提取数据的方法.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//schema基本内容\nvar personSchema = new Schema({\n  name: {\n    first: String,\n    last: String\n  }\n});\n\n// 生成Model\nvar Person = mongoose.model('Person', personSchema);\n\n//现在我们有个需求,即,需要将first和last结合输出.\n//一种方法是,使用methods来实现\n//schema 添加方法\npersonSchema.methods.getName = function(){\n    return this.first+\" \"+this.last;\n}\n\n// 生成一个doc\nvar bad = new Person({\n    name: { first: 'jimmy', last: 'Gay' }\n});\n\n//调用\nbad.getName();\n")])])]),n("p",[e._v("但是,像这样,仅仅这是为了获取一个属性, 实际上完全可以使用虚拟属性来实现.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//schema 添加虚拟属性\npersonSchema.virtual('fullName').get(function(){\n    return this.first+\" \"+this.last;\n})\n//调用\nbad.fullName;  //和上面的方法的结果是完全一致的\n")])])]),n("p",[e._v("而且,经过测试, 使用fn实现的返回,比VR 要慢几十倍. 一下是测试结果:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("console.time(1);\n    bad.getName();\n    console.timeEnd(1);\n    console.time(2);\n    bad.fullName;\n    console.timeEnd(2);\n    \n    //结果为:\n    1: 4.323ms;  //method\n    2: 0.253ms  // VR\n")])])]),n("p",[e._v("最后再补充一下,Schema中初始化的相关参数.\nSchema参数 在 new Schema([options]) 中,我们需要设置一些相关的参数.")]),e._v(" "),n("ul",[n("li",[e._v("safe: 用来设置安全模式. 实际上,就是定义入库时数据的写入限制. 比如写入时限等.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('//使用安全模式. 表示在写入操作时,如果发生错误,也需要返回信息.\n var safe = true;\nnew Schema({ .. }, { safe: safe });\n\n// 自定义安全模式. w为写入的大小范围. wtimeout设置写入时限. 如果超出10s则返回error\nvar safe = { w: "majority", wtimeout: 10000 };\nnew Schema({ .. }, { safe: safe });\n')])])]),n("ul",[n("li",[e._v("toObject: 用来表示在提取数据的时候, 把documents 内容转化为Object内容输出. 一般而言只需要设置getters为true即可.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var schema = new Schema({ name: String });\nschema.path('name').get(function (v) {\n  return v + ' is my name';\n});\nschema.set('toObject', { getters: true });\nvar M = mongoose.model('Person', schema);\nvar m = new M({ name: 'Max Headroom' });\nconsole.log(m); // { _id: 504e0cd7dd992d9be2f20b6f, name: 'Max Headroom is my name' }\n")])])]),n("ul",[n("li",[e._v("toJSON： 该是和toObject一样的使用. 通常用来把 documents 转化为Object. 但是, 需要显示使用toJSON()方法,")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var schema = new Schema({ name: String });\nschema.path('name').get(function (v) {\n  return v + ' is my name';\n});\nschema.set('toJSON', { getters: true, virtuals: false });\nvar M = mongoose.model('Person', schema);\nvar m = new M({ name: 'Max Headroom' });\nconsole.log(m.toObject()); // { _id: 504e0cd7dd992d9be2f20b6f, name: 'Max Headroom' }\nconsole.log(m.toJSON()); // { _id: 504e0cd7dd992d9be2f20b6f, name: 'Max Headroom is my name' }\n// since we know toJSON is called whenever a js object is stringified:\nconsole.log(JSON.stringify(m)); // { \"_id\": \"504e0cd7dd992d9be2f20b6f\", \"name\": \"Max Headroom is my name\" }\n")])])]),n("h2",{attrs:{id:"model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[e._v("#")]),e._v(" Model")]),e._v(" "),n("h3",{attrs:{id:"model的创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model的创建"}},[e._v("#")]),e._v(" model的创建")]),e._v(" "),n("p",[e._v("model的创建实际上就是方法的copy. 将schema上的方法,copy到model上. 只是copy的位置不一样, 一部分在prototype上, 一部分在constructor中.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//from mongoosejs\nvar schema = new mongoose.Schema({ name: 'string', size: 'string' });\nvar Tank = mongoose.model('Tank', schema);\n")])])]),n("p",[e._v("这里,我们一定要搞清楚一个东西. 实际上, mongoose.model里面定义的第一个参数,比如’Tank’, 并不是数据库中的, collection. 他只是collection的单数形式, 实际上在db中的collection是’Tanks’.")]),e._v(" "),n("blockquote",[n("p",[e._v("想两边名称保持一致，可参考http://aiilive.blog.51cto.com/1925756/1405203")])]),e._v(" "),n("h3",{attrs:{id:"model-的子文档操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#model-的子文档操作"}},[e._v("#")]),e._v(" model 的子文档操作")]),e._v(" "),n("p",[e._v("本来mongodb是没有关系的. 但是, mongoose提供了children字段. 让我们能够轻松的在表间建立关系. 现在,我们来创建一个子域:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var childSchema = new Schema({ name: 'string' });\n\nvar parentSchema = new Schema({\n  children: [childSchema]   //指明sub-doc的schema\n});\n//在创建中指明doc\nvar Parent = mongoose.model('Parent', parentSchema);\nvar parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] })\nparent.children[0].name = 'Matthew';\nparent.save(callback);\n")])])]),n("p",[e._v("现在, 我们就已经创建了3个table. 一个parent 包含了 两个child 另外,如果我们想要查询指定的doc。 则可以使用 id()方法.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var doc = parent.children.id(id);\n")])])]),n("p",[e._v("子文档的CRUD, 实际上就是数组的操作, 比如push,unshift,remove,pop,shift等")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("parent.children.push({ name: 'Liesl' });\n")])])]),n("p",[e._v("mongoose还给移除提供了另外一个方法–remove:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var doc = parent.children.id(id).remove();\n")])])]),n("p",[e._v("如果你忘记添加子文档的话，可以在外围添加, 但是字段必须在Schema中指定")]),e._v(" "),n("p",[e._v("var newdoc = parent.children.create({ name: 'Aaron' });")]),e._v(" "),n("h3",{attrs:{id:"document的crud操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document的crud操作"}},[e._v("#")]),e._v(" document的CRUD操作")]),e._v(" "),n("p",[e._v("document 的创建 关于document的创建,有两种方法, 一种是使用document实例创建,另外一种是使用Model类创建.")]),e._v(" "),n("h4",{attrs:{id:"document的创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document的创建"}},[e._v("#")]),e._v(" document的创建")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var Tank = mongoose.model('Tank', yourSchema);\n\nvar small = new Tank({ size: 'small' });\n//使用实例创建\nsmall.save(function (err) {\n  if (err) return handleError(err);\n  // saved!\n})\n\n//使用Model类创建\nTank.create({ size: 'small' }, function (err, small) {\n  if (err) return handleError(err);\n  // saved!\n})\n")])])]),n("h3",{attrs:{id:"document的查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document的查询"}},[e._v("#")]),e._v(" document的查询")]),e._v(" "),n("p",[e._v("Mongoose查找文档很容易，它支持MongoDB的丰富的查询语法。 可以使用每个models "),n("strong",[e._v("find")]),e._v("，"),n("strong",[e._v("findById")]),e._v("，"),n("strong",[e._v("findOne")]),e._v("或"),n("strong",[e._v("where")]),e._v(" 等静态方法进行查找文档。\n事实上,在mongoose中,query数据 提供了两种方式.")]),e._v(" "),n("ul",[n("li",[e._v("callback: 使用回调函数, 即, query会立即执行,然后返回到回调函数中.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {\n  if (err) return handleError(err);\n // get data\n})\n")])])]),n("ul",[n("li",[e._v("query: 使用查询方法,返回的是一个Query对象. 该对象是一个Promise, 所以可以使用 chain 进行调用.最后必须使用exec(cb)传入回调进行处理. cb 是一个套路, 第一个参数永远是err. 第二个就是返回的数据。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);\n")])])]),n("p",[e._v("以下两种等价写法：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// With a JSON doc\nPerson.\n  find({\n    occupation: /host/,\n    'name.last': 'Ghost',\n    age: { $gt: 17, $lt: 66 },\n    likes: { $in: ['vaporizing', 'talking'] }\n  }).\n  limit(10).\n  sort({ occupation: -1 }).\n  select({ name: 1, occupation: 1 }).\n  exec(callback);\n  \n// Using query builder\nPerson.\n  find({ occupation: /host/ }).\n  where('name.last').equals('Ghost').\n  where('age').gt(17).lt(66).\n  where('likes').in(['vaporizing', 'talking']).\n  limit(10).\n  sort('-occupation').\n  select('name occupation').\n  exec(callback);\n")])])]),n("h4",{attrs:{id:"query-helpers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query-helpers"}},[e._v("#")]),e._v(" Query Helpers")]),e._v(" "),n("p",[e._v("你能够添加 query helper functions,跟定义在Schema实例方法一样，但是返回query对象作为mongoose queries使用（说句白了就是封装mongoose查询方法）. Query helper methods 使你能够扩展mongoose's chainable query builder API.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("animalSchema.query.byName = function(name) {\n  return this.find({ name: new RegExp(name, 'i') });\n};\n\nvar Animal = mongoose.model('Animal', animalSchema);\nAnimal.find().byName('fido').exec(function(err, animals) {\n  console.log(animals);\n});\n")])])]),n("p",[e._v("上面4个API, 3个使用方式都是一样的, 另外一个不同的是where. 他一样是用来进行query. 只是,写法和find系列略有不同.")]),e._v(" "),n("p",[n("strong",[e._v("where简介")]),e._v(" where的API为: Model.where(path, [val]) path实际上就是字段, 第二个参数.val表示可以用来指定,path = val的数据内容, 你也可以不写, 交给后面进行筛选. 看一下对比demo吧:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("User.find({age: {$gte: 21, $lte: 65}}, callback);\n//等价于:\nUser.where('age').gte(21).lte(65).exec(callback);\n")])])]),n("p",[e._v("从上面的query中,我们可以看到有许多fn, 比如gte,lte,$gte,$lte. 这些是db提供给我们用来查询的快捷函数. 我们可以参考, mongoose给的参考: "),n("a",{attrs:{href:"http://mongoosejs.com/docs/api.html#query-js",target:"_blank",rel:"noopener noreferrer"}},[e._v("query Helper fn"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("另外还有一些游标集合的处理方法: 常用的就3个, limit,skip,sort.")]),e._v(" "),n("p",[e._v("**limit:**用来获取限定长度的内容.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("query.limit(20); //只返回前20个内容\n")])])]),n("p",[e._v("skip: 返回，跳过指定doc后的值.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("query.skip(2);\n")])])]),n("p",[e._v("sort: 用来设置根据指定字段排序. 可以设置为1:升序, -1:降序.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("query.sort({name:1,age:-1});\n")])])]),n("p",[e._v("实际上, 关于query,我们需要了解的也就差不多了.")]),e._v(" "),n("h3",{attrs:{id:"document删除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document删除"}},[e._v("#")]),e._v(" document删除")]),e._v(" "),n("p",[e._v("reomve操作仅在通过回调时执行。 要强制执行没有回调，您必须先调用remove（），然后使用exec（）方法执行它。\n我们可以在document上执行remove方法也可以在Model上。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Model.find().remove({ name: 'Anne Murray' }, callback)\nModel.remove({ name: 'Anne Murray' }, callback)\n//没有添加回调情况\nModel.find().remove({ name: 'Anne Murray' }).remove(callback)\nModel.remove({ name: 'Anne Murray' }).exce(callback)\n")])])]),n("h3",{attrs:{id:"document更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document更新"}},[e._v("#")]),e._v(" document更新")]),e._v(" "),n("p",[e._v("使用Model.update([(conditions, doc, [options], [callback])]\n不返回更新对象到应用程序。如果要更新数据库中的单个文档并将其返回到应用程序，请改用findOneAndUpdate。")]),e._v(" "),n("p",[e._v("参数说明：")]),e._v(" "),n("ul",[n("li",[e._v("conditions: 就是query. 通过query获取到指定doc")]),e._v(" "),n("li",[e._v("doc: 就是用来替换doc内容的值.")]),e._v(" "),n("li",[e._v("options: 这块需要说一些下.\nsafe (boolean) 是否开启安全模式 (default for true)\n"),n("strong",[e._v("upsert")]),e._v(" (boolean) 如果没有匹配到内容,是否自动创建 ( default for false)\n"),n("strong",[e._v("multi")]),e._v(" (boolean) 如果有多个doc,匹配到,是否一起更改 ( default for false)\nstrict (boolean) 使用严格模式(default for false)\noverwrite (boolean) 匹配到指定doc,是否覆盖 (default for false)\nrunValidators (boolean): 表示是否用来启用验证. 实际上,你首先需要写一个验证. 关于如果书写,验证大家可以参考下文, validate篇(default for false)")])]),e._v(" "),n("p",[n("strong",[e._v("new")]),e._v("（使用findOneAndUpdate时才有参数）：bool - 如果为true，则返回修改后的文档而不是原始文件。 默认为false。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Model.update({age:18}, { $set: { name: 'jason borne' }}, {multi:true}, function (err, raw) {\n  if (err) return handleError(err);\n  console.log('raw 就是mongodb返回的更改状态的falg ', raw);\n  //比如: { ok: 1, nModified: 2, n: 2 }\n});\n")])])]),n("p",[e._v("其中的$set是,用来指明更新的字段。")]),e._v(" "),n("h2",{attrs:{id:"validation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[e._v("#")]),e._v(" Validation")]),e._v(" "),n("p",[e._v("验证器在SchemaType中定义。\nValidation 是一种中间件，Mongoose 触发 validation 同 a pre('save')钩子一样 。\n你能够手动触发 validation 通过doc.validate(callback) or doc.validateSync()。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cat.save(function(error) {\n//自动执行,validation\n});\n\n//手动触发 validatio\n//上面已经设置好user的字段内容.\n  user.validate(function(error) {\n    //error 就是验证不通过返回的错误信息\n     assert.equal(error.errors['phone'].message,\n        '555.0123 is not a valid phone number!');\n    });\n});\n")])])]),n("h3",{attrs:{id:"内置验证器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内置验证器"}},[e._v("#")]),e._v(" 内置验证器")]),e._v(" "),n("p",[e._v("Mongoose 有一些列内置验证器.")]),e._v(" "),n("ul",[n("li",[e._v("所有的SchemaTypes都有required验证器")]),e._v(" "),n("li",[e._v("min,max: 用来给Number类型的数据设置限制.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" var breakfastSchema = new Schema({\n      eggs: {\n        type: Number,\n        min: [6, 'Too few eggs'],\n        max: 12\n      }\n});\n")])])]),n("ul",[n("li",[e._v("enum,match,maxlength,minlength: 这些验证是给string类型的. enum 就是枚举,表示该属性值,只能出席那那些. match是用来匹配正则表达式的. maxlength&minlength 显示字符串的长度.")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("new Schema({\n    drink: {\n        type: String,\n        enum: ['Coffee', 'Tea']\n      },\n     food:{\n        type: String,\n        match:/^a/,\n        maxlength:12,\n        minlength:6\n    }\n})\n")])])]),n("h3",{attrs:{id:"自定义验证器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义验证器"}},[e._v("#")]),e._v(" 自定义验证器")]),e._v(" "),n("p",[e._v("如果内置验证器不够，您可以定义自定义验证器以满足您的需要。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 创建验证器\nfunction validator (val) {\n  return val == 'something';\n}\nnew Schema({ name: { type: String, validate: validator }});\n\n// 附带自定义错误信息\n\nvar custom = [validator, 'Uh oh, {PATH} does not equal \"something\".']\nnew Schema({ name: { type: String, validate: custom }});\n\n//添加多验证器\n\nvar many = [\n    { validator: validator, msg: 'uh oh' }\n  , { validator: anotherValidator, msg: 'failed' }\n]\nnew Schema({ name: { type: String, validate: many }});\n\n// 直接通过SchemaType.validate方法定义验证器:\n\nvar schema = new Schema({ name: 'string' });\nschema.path('name').validate(validator, 'validation of `{PATH}` failed with value `{VALUE}`');\n")])])]),n("h3",{attrs:{id:"验证错误对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证错误对象"}},[e._v("#")]),e._v(" 验证错误对象")]),e._v(" "),n("p",[e._v("验证失败后返回的错误包含一个包含实际ValidatorError对象的错误对象。 每个ValidatorError都有kind，path，value和message属性。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  var toySchema = new Schema({\n      color: String,\n      name: String\n    });\n\n    var Toy = db.model('Toy', toySchema);\n\n    var validator = function (value) {\n      return /blue|green|white|red|orange|periwinkle/i.test(value);\n    };\n    Toy.schema.path('color').validate(validator,\n      'Color `{VALUE}` not valid', 'Invalid color');\n\n    var toy = new Toy({ color: 'grease'});\n\n    toy.save(function (err) {\n      // err is our ValidationError object\n      // err.errors.color is a ValidatorError object\n      assert.equal(err.errors.color.message, 'Color `grease` not valid');\n      assert.equal(err.errors.color.kind, 'Invalid color');\n      assert.equal(err.errors.color.path, 'color');\n      assert.equal(err.errors.color.value, 'grease');\n      assert.equal(err.name, 'ValidationError');\n    });\n")])])]),n("h3",{attrs:{id:"更新验证器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新验证器"}},[e._v("#")]),e._v(" 更新验证器")]),e._v(" "),n("p",[e._v("在Model.update那一节有个参数–runValidators. 还没有详细说. 这里, 展开一下. 实际上, validate一般只会应用在save上, 如果你想在update使用的话, 需要额外的trick，而runValidators就是这个trick.\nMongoose还支持update（）和findOneAndUpdate（）操作的验证。 在Mongoose 4.x中，更新验证器默认关闭 - 您需要指定runValidators选项。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var opts = { runValidators: true };\n    Test.update({}, update, opts, function(error) {  //额外开启runValidators的验证\n      // There will never be a validation error here\n    });\n")])])]),n("p",[e._v("更多验证器用法请参考"),n("a",{attrs:{href:"http://mongoosejs.com/docs/validation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"population"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#population"}},[e._v("#")]),e._v(" population")]),e._v(" "),n("p",[e._v("ongodb 本来就是一门非关系型数据库。 但有时候,我们又需要联合其他的table进行数据查找。 mongoose提供的 population. 用来连接多表数据查询. 一般而言, 我们只要提供某一个collection的_id , 就可以实现完美的联合查询. population 用到的关键字是: ref 用来指明外联的数据库的名字. 一般,我们需要在schema中就定义好.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var mongoose = require('mongoose')\n  , Schema = mongoose.Schema\n  \nvar personSchema = Schema({\n  _id     : Number,\n  name    : String,\n  age     : Number,\n  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]\n});\n\nvar storySchema = Schema({\n  _creator : { type: Number, ref: 'Person' },\n  title    : String,\n  fans     : [{ type: Number, ref: 'Person' }]\n});\n\nvar Story  = mongoose.model('Story', storySchema);\nvar Person = mongoose.model('Person', personSchema);\n\n")])])]),n("blockquote",[n("p",[e._v("Note: ObjectId, Number, String, and Buffer are valid for use as refs.")])]),e._v(" "),n("p",[e._v("使用populate query方法进行关联")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Story\n.findOne({ title: 'Once upon a timex.' })\n.populate('_creator')\n.exec(function (err, story) {\n  if (err) return handleError(err);\n  console.log('The creator is %s', story._creator.name);\n  // prints \"The creator is Aaron\"\n});\n")])])]),n("h2",{attrs:{id:"中间件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[e._v("#")]),e._v(" 中间件")]),e._v(" "),n("p",[e._v("mongoose里的中间件,有两个, 一个是pre, 一个是post.")]),e._v(" "),n("ul",[n("li",[e._v("pre: 在指定方法执行之前绑定。 中间件的状态分为 parallel和series.")]),e._v(" "),n("li",[e._v("post: 相当于事件监听的绑定")])]),e._v(" "),n("p",[e._v("这里需要说明一下, 中间件一般仅仅只能限于在几个方法中使用. (但感觉就已经是全部了)")]),e._v(" "),n("ul",[n("li",[e._v("doc 方法上: init,validate,save,remove;")]),e._v(" "),n("li",[e._v("model方法上: count,find,findOne,findOneAndRemove,findOneAndUpdate,update")])]),e._v(" "),n("h3",{attrs:{id:"pre"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre"}},[e._v("#")]),e._v(" pre")]),e._v(" "),n("p",[e._v("我们来看一下,pre中间件是如何绑定的.")]),e._v(" "),n("h4",{attrs:{id:"串行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#串行"}},[e._v("#")]),e._v(" 串行")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var schema = new Schema(..);\nschema.pre('save', function(next) {\n  // do stuff\n  next(); //执行完毕，执行下一中间件\n});\n")])])]),n("h4",{attrs:{id:"并行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并行"}},[e._v("#")]),e._v(" 并行")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var schema = new Schema(..);\n\n// 设置第二参数为true，意味这是一个并行中间件\n// as the second parameter if you want to use parallel middleware.\nschema.pre('save', true, function(next, done) {\n  // calling next kicks off the next middleware in parallel\n  next();\n  setTimeout(done, 100);\n});\n")])])]),n("h3",{attrs:{id:"post"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[e._v("#")]),e._v(" post")]),e._v(" "),n("p",[e._v("post会在指定事件后触发,就像事件监听器一样，post钩子没什么控制流程，即它是异步的。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("schema.post('save', function(doc) {\n //在save完成后 触发.\n  console.log('%s has been saved', doc._id);\n});\n")])])]),n("p",[e._v("当save方法调用时, 便会触发post绑定的save事件.\n假如你绑定了多个post。 也可以需要指定一下中间件顺序.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Takes 2 parameters: this is an asynchronous post hook\nschema.post('save', function(doc, next) {\n  setTimeout(function() {\n    console.log('post1');\n    // Kick off the second post hook\n    next();\n  }, 10);\n});\n\n// Will not execute until the first middleware calls `next()`\nschema.post('save', function(doc, next) {\n  console.log('post2');\n  next();\n})\n")])])]),n("hr"),e._v(" "),n("Vssue",{attrs:{title:e.$title}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);