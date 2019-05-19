## akryum:vue-component
使用 [akryum:vue-component](https://github.com/meteor-vue/vue-meteor/tree/master/packages/vue-component) 包帮助 meteor 识别编译 vue 文件。
```
meteor add akryum:vue-component
```

## vue-meteor-tracker
使用 [vue-meteor-tracker](https://github.com/meteor-vue/vue-meteor-tracker) 包，在 Vue 组件中集合 Meteor 响应数据。
### Installation
```
meteor npm install --save vue-meteor-tracker
```
### Install the plugin into Vue
```
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);
```
### Use

在你的 vue 组件中添加 meteor 对象属性 :
```
new Vue({
  meteor: {
    // Meteor specific options
  }
});
```
### Subscriptions

在 $subscribe object 定义订阅者，key 为发布者名称，value 为数组参数，在订阅的时候传递给发布者。
> 当组件销毁时订阅将停止
```
meteor: {
  //在 $subscribe object 定义订阅者
  $subscribe: {
    // 不带参数订阅 'threads' 发布者 
    'threads': [],
    // 带参数订阅 'threads' 发布者 
    'threads': ['new', 10], // The 10 newest threads
    // 带动态参数订阅 'threads' 发布者 
    // 当 vue 响应属性改变时，重新订阅
    'posts': function() {
      // Here you can use Vue reactive properties
      return [this.selectedThreadId] // Subscription params
    }
  }
}
```
你能够 $subscribe(name, ...params) 方法在你的组件代码中:
```
ready () {
  // Subscribes to the 'threads' publication with two parameters
  this.$subscribe('thread', 'new', 10);
}
```
 在你的组件中，$subReady 对象属性包含订阅者订阅状态 ，为了获知订阅者是否已订阅，你可以这样做：
```
console.log(this.$subReady.thread);
```
或者在你的模板中：
```
<div v-if="!$subReady.thread">Loading...</div>
```

### Reactive data

在 meteor 对象里的属性（不在 *$subscribe* 中）会被转化为 vue 的响应属性（附加到 vue 的 data 属性中） ，你可以在模板中像标准 vue data 属性一样使用，或者在计算属性中。
```
...
data() {
      return {
        // 初始化 todos 也不用
        todos: [],
        newTodo: ''
      }
  },
  meteor: {
    $subscribe: {
      ['todos']: []
    },
    // todos 属性会响应更新 meteor 的响应数据源（就像 collections 或者 session ）
    // 当 Todos 集合发生变化时，todos将发生改变
    todos() {
        return Todos.find({}, {sort: {date: -1}});
    }
  },
...
```
通过上面做法，仅仅让 vue data 响应更新于 meteor 响应数据源，当 Todos 发生改变，vue 的 todos 数据属性才能获取更新，如下图所示

![image.png](https://api.laoergege.cn//images/ZgLGP1uR4fP4n3NP5SCJ6O0b.PNG)

通过把 meteor 对象属性的值定义为一个对象，我们可以让vue data 不仅响应更新于 meteor 响应数据源，还依赖其他参数（该参数可以为 vue 的响应属性），该对象有以下来个参数：
- params() (可选), 返回对象的函数, 该对象属性值可以为 vue data 的响应属性
- update([params]), 但依赖参数发生改变回调的函数。

```
...
meteor: {
    // 无参订阅 todos 
    $subscribe: {
      ["todos"]: []
    },
    todos: {
      // 声明定义一个依赖 vue 响应属性的参数
      params() {
        // Here you can use Vue reactive properties
        // Don't use Meteor reactive sources!
        return {
          type: this.type
        };
      },
      // 可选项，深度观察嵌套对象属性值，
      // 此处 type 为普通类型，故 false
      deep: false,
      //// Meteor Reactivity
      // param 参数响应 vue 更新时，将刷新 todos 属性值
      // Then it calls Tracker.autorun() to refresh the result
      // each time a Meteor reactive source changes
      update({ type }) {
        //   Here you can use Meteor reactive sources
        //  like cursors or reactive vars
        //  Don't use Vue reactive properties!
        if (type) {
          return Todos.find({checked: true},{sort: {date: -1}});
        } else {
          return Todos.find({checked: false},{sort: {date: -1}});
        }
      }
    }
  },
...
```

![image.png](https://api.laoergege.cn//images/YuPCU1j9e8Up-UmjC-bT0map.PNG)

### 开启或禁用 meteor data
```
export default {
  meteor: {
    // ...
  },

  methods: {
    activate () {
      this.$startMeteor()
    },

    deactivate () {
      this.$stopMeteor()
    },
  },
}
```
#### 你能够使用来防止 meteor data 自启动
```
export default {
  meteor: {
    $lazy: true,
    // ...
  },
}
```
### Freezing data
此选项将对 Meteor 数据使用 Object.freeze，以防止 Vue 响应。 这样可以在渲染大型集合列表时提高 Vue 的性能。 默认情况下，此选项已关闭。
```
// Disable Vue reactivity on Meteor data
Vue.config.meteor.freeze = true;
```

## vue-supply
### Installation
```
npm install --save vue-supply
```

### Use
```
import Vue from 'vue'
import VueSupply from 'vue-supply'

Vue.use(VueSupply)
```

当应用变得越来越庞大时，我们需要在每个组件重复定义 meteor 属性，并且我们可能定义同样的值，管理这些响应性数据源就会变得越来越困难。
使用 [vue-supply](https://github.com/Akryum/vue-supply)，您可以轻松地使用数据并自动激活或停用订阅。

![image.png](https://api.laoergege.cn//images/OZI3m0wNELitR70-1cTCKj85.PNG)

vue-supply 为我们的应用添加了一层 supply，帮助我们管理订阅 meteor 数据，避免在组件重复订阅 meteor 数据。
使用 vue-supply，您可以创建扩展Supply定义的 Vue 实例。定义两个方法: activate 和 deactivate。当在组件或 Vue store 首次消费该 **supply** 时，它会自动激活（使用 *grasp* 方法）；当没有组件使用它时，它会自动关闭（使用 *release* 方法）。当激活或关闭时，**supply** 会回调 activate 和 deactivate 方法。
```
// base.js
export default {
  extends: Supply,

  methods: {
    activate () {
      // 当激活时，开启 meteor ，订阅发布者
      this.$startMeteor()
    },

    deactivate () {
      // 关闭 meteor ，取消订阅
      this.$stopMeteor();
    },
  },

  meteor: {
     // 关闭 vue-meteor-tracker自启动订阅 meteor data
     // 让 supply 监听组件，管理订阅
    $lazy: true,
  },
}
```

当激活或关闭时，**supply** 会发射 consumers 和 active 事件，你可以使用 watch 其属性和 $on 监听其 'is-active' 和 'is-not-active' 事件。
```
// xxx.supply.js
import base from "./base";

export default {
    extends: base,

    data() {
        return {
           ...
        }
    },

    meteor: {
        ...
    },

    watch: {
        // 监听 supply 是否激活
        active(val){
            console.log(val);
        },

        // 监听 组件消费者个数
        consumers(val){
            console.log(val);
        }
    }
}
```
你也可以使用 *supply.ensureActive()*，返回一个 Promise（that resolves as soon as the supply is activated ）
```
TestResource.ensureActive().then(() => {
  // The supply is active
})
```

### Registration
建议注册 **supply 定义**，以便注入到组件和 vuex stroe 中。
```
import { register } from 'vue-supply'
import TestResourceDef from 'supply/test-resource'
register('TestResource', TestResourceDef)
```

### Usage in components
在组件内部，use（name，manageKeepAlive = true）添加一个mixin，使用注册中使用的名称（如上所述），创建和销毁组件时自动消费或释放 supply：
```
// todo-list.component.js
import { use } from "vue-supply";

export default {
  name: "app",
  components: {
    "todo-list": TodoList
  },
  mixins: [use("TodoSupply")],
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    todos() {
      return this.$supply.TodoSupply.todos;
    },
    ready() {
      return this.$supply.TodoSupply.active;
    },
    type() {
      return this.$supply.TodoSupply.type;
    }
  },
....
```
通过计算 `this.$supply.TestResource.[someData]` 该响应属性获取数据。

### Usage in Vuex store
see [Usage in Vuex store](https://github.com/Akryum/vue-supply#usage-in-vuex-store)

### 加载系统
每个 **supply** 都有一个 loading 状态，它有两个值状态：
- `0` 意味着该 **supply** 已经 ready，可以消费了。该值为默认值。
- `1 以上` 意味着加载状态。

你应该改变 loading 属性值在 activate and deactive 方法内，因为一般我们在该方法中发起订阅或取消订阅: 
```
import { Supply } from 'vue-supply'

export default new Vue({
  extends: Supply,
  methods: {
    activate () {
      console.log('subscribing...')
      // Use the integer `loading` property
      // 0 mean ready
      this.loading ++
      // Faking a server request here :p
      setTimeout(() => {
        console.log('data is loaded')
        this.loading --
      }, 1000)
    },
  },
})
```
**supply**有 ready 属性(with a boolean argument), 和 is-ready 、is-not-ready 事件.，你可以去计算 ready 属性或监听事件 。

更多详情参考官方 [vue-supply](https://github.com/Akryum/vue-supply#usage-in-vuex-store) 。

## Collections
### aldeed:simple-schema （设计数据模式）
Mongo 数据虽然是无模式，但这不意味着我们就不可以用模式去设计规范验证我们的数据。使用 [aldeed:simple-schema](https://atmospherejs.com/aldeed/simple-schema) ，设计验证我们数据。

#### Installation
```
$ meteor add aldeed:simple-schema
```
### Use
#### 定义 Schema
```
// todos.collection.js
export const TodoSchema = new SimpleSchema({
    title: {
        type: String,   
        max: 200,
        min: 1,
        // 自定验证器
        custom: function () {
            if(this.value.trim().length == 0){
                return '不能为空'
            }
        }
    },

    checked: {
        type: Boolean
    },

    date: {
        type: Date
    }
})

todos.schmea = TodoSchema;
```
#### 验证
```
// App.vue
data() {
    return {
      newTodo: "",
      // 定义验证空间，针对不同区域验证
      context: Todos.schmea.namedContext("myContext") 
    };
  },
  computed: {
    todos() {
      return this.$supply.TodoSupply.todos;
    },
    ready() {
      return this.$supply.TodoSupply.ready;
    },
    type() {
      return this.$supply.TodoSupply.type;
    }
  },
  methods: {
    submit() {
      let newtodo = {
        title: this.newTodo,
        date: new Date(),
        checked: false
      };
      // 验证
      if (this.context.validate(newtodo)) {
        Todos.insert(newtodo);
      }

       this.newTodo = "";
    },
```
#### 错误信息提示
```
<span v-show="context.keyIsInvalid('title')" class="has-text-danger">不能为空</span>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-medium" :class="{'is-danger': context.keyIsInvalid('title')}" type="text" placeholder="write it..." v-model="newTodo" @keyup.enter="submit">
        <span class="icon is-small is-left">
          <i class="fa fa-file-o"></i>
        </span>
      </div>
```
这里不多述 **SimpleSchema** 的用法，请自行查看 [api](https://atmospherejs.com/aldeed/simple-schema) 。

### Publications and Data Loading（发布订阅）
为了提高数据安全性，我们不应该直接在客户端使用 Collections ，不应该直接调用 collection.insert() 等方法对数据库进行写入。我们应该服务端发布可访问的共有数据，定义数据写入接口：
- Meteor.pulish() 定义数据发布接口
- Meteor.methods() 定义数据操作接口

> publisher 在没有想要返回数据情况下要返回this.ready()

**服务端发布**
```
// todos.collection.js
if (Meteor.isServer) {
    // 定义数据发布接口
    Meteor.publish('todos', function tasksPublication() {
        return todos.find({});
    });
    // 定义数据操作接口
    Meteor.methods({
        ['todos.insert'](val) {
            todos.insert(val);
        },

        ['todo.update.checked']({_id: _id, checked: _checked}) {
            Todos.update(
                { _id: _id },
                { $set: { checked: _checked } },
                { multi: true }
            );
        }
    })
}
```

**客户端订阅**  
```
const handle = Meteor.subscribe（'lists.public'）;
/**
handle：
{
.ready()：boolean（true：当this.ready()明确调用，或者返回的游标的初始内容将被发送）
.stop()：停止订阅，清除缓存
}
*/
```


你能够自定义错误信息发送到客户端：
```
// on the server, pick a code unique to this error
// the reason field should be a useful debug message
throw new Meteor.Error("logged-out",
  "The user must be logged in to post a comment.");

// on the client
Meteor.call("methodName", function (error) {
  // identify the error
  if (error && error.error === "logged-out") {
    // show a nice error message
    Session.set("errorMessage", "Please log in to post a comment.");
  }
});
```

### aldeed:collection2（自动验证数据）
扩展 Mongo.Collection，提供对 Collection 指定 Schmea，在进行插入和更新数据时自动验证数据模式。
```
// todos.collection.js
if (Meteor.isServer) {
    // 定义数据发布接口
    Meteor.publish('todos', function tasksPublication() {
        return todos.find({});
    });
    // 定义数据操作接口
    Meteor.methods({
        ['todos.insert'](val) {
            try {
                todos.insert(val);
            } catch (error) {

                if (error.sanitizedError.error == 400) {
                     // 由于验证只在服务端，所以必须把验证错误信息反馈给前台  
                    // 发送 验证错误消息
                    error.sanitizedError.error = 'ValidationErrors';
                    throw error.sanitizedError;
                }
            }
        },

        ...
    })
}
...

todos.schema = TodoSchema;

// 指定附加 Schema
todos.attachSchema(TodoSchema);
```
```
// app.vue
submit() {
      let newtodo = {
        title: this.newTodo,
        date: new Date(),
        checked: false
      };
      // 重置验证器
      this.context.resetValidation() 

      // 调用远程服务
      Meteor.call("todos.insert", newtodo,  (error) => {
        // 动态添加错误验证消息
        if(error && error.error == 'ValidationErrors')
          this.context.addInvalidKeys(JSON.parse(error.details))
      });

      this.newTodo = "";
    },
```
```
// 响应反馈错误消息
 <span v-show="context.keyIsInvalid('title')" class="has-text-danger">{{context.keyErrorMessage('title')}}</span>
```

### 分页
分页是一种非常常见的数据访问模式。通常有两种分页样式，即“逐页”样式，您只能在一段时间只显示一页结果，从某些偏移开始（用户可以控制），以及“无限滚动“样式。
在逐页技术中，如果我们要达到以下效果：

![image.png](https://api.laoergege.cn//images/dJEIssZEspCZRa8IB4dveJn1.PNG)

我至少要关注三个参数：
- skip，跳过第几页
- limit，每页显示数据数量
- pages，总页数

通过在 $subscribe 子属性值中返回 vue响应属性数组（订阅参数），我们可以响应式向服务端发布者获取不同页码数据。
```
//todos.supply.js
...
data() {
        return {
            // 初始化属性值
            todos: [],
            type: false, // type 用来标志 todos 列表显示完成或未完成
            skip: 0,    // 跳过页数
            limit: 5,   // 显示数据数量
            pages: 0 // 页数
        }
    },

    meteor: {
        // 无参订阅 todos 
        $subscribe: {
            ["todos"]: function () {
                // 响应式订阅
                return [this.type, this.limit, this.skip] //查询 是否已标记， 数据量， 跳跃点
            }
        },
        todos() {
            this.pages = Math.ceil(Counts.get('todosCounts')/this.limit) || 1; // 计算页数
            return Todos.find({}, {sort: { date: -1 }});
        }
    },
...
```
```
// todos.collection.js
 Meteor.publish('todos', function tasksPublication(checked, limit, skip) {
        // 实时订阅 todos 总数
        Counts.publish(this, 'todosCounts', todos.find({ checked: checked }));
        return todos.find({ checked: checked }, { limit: limit, skip: skip * limit, sort: { date: -1 } });
    });
```
#### tmeasday:publish-counts（实时获取 Collection Count）
在上面代码中，使用 [tmeasday:publish-counts](https://atmospherejs.com/tmeasday/publish-counts) 包，来实时获取 todos 总数量，再计算出总页数。publish-counts 有以下主要方法：
- Counts.publish [server] ，服务端代码中订阅集合
- Counts.get [client]  
一旦你在服务端调用 Counts.publish , 你就可以在客户端调用 Counts.get('name-of-counter') 去响应获取计数器.
该方法会返回一个整数, 返回 0 意味着你还没发布或订阅不成功。 
- Counts.has [client]，判断是否有指定计数器。

### 集合关联
非关系型数据库 MongoDB 推荐我们更多的是文档嵌套，把多个文档嵌套成一个文档。但有时在文档的设计规范上，我们需要将数据分成两个或以上的集合储存。

### 用户系统
meteor 基于 accounts-base 内置有一套用户系统，该用户集合基于标准的模式，大概字段如下：
```
{
  _id: 'QwkSmTCZiw5KDx3L6',  // Meteor.userId()
  username: 'cool_kid_13', // Unique name
  emails: [
    // Each email address can only belong to one user.
    { address: 'cool@example.com', verified: true },
    { address: 'another@different.com', verified: false }
  ],
  createdAt: new Date('Wed Aug 21 2013 15:16:52 GMT-0700 (PDT)'),
  profile: {
    // The profile is writable by the user by default.
    name: 'Joe Schmoe'
  },
  //请注意，当用户注册不同的登录服务时，services 模式是不同的。
  services: {
    facebook: {
      id: '709050', // Facebook ID
      accessToken: 'AAACCgdX7G2...AbV9AZDZD'
    },
    resume: {
      loginTokens: [
        { token: '97e8c205-c7e4-47c9-9bea-8e2ccc0694cd',
          when: 1349761684048 }
      ]
    }
  }
}
```
- 通过 `Meteor.users` 访问用户集合
- 客户端访问 `Meteor.userId()` 并且 `Meteor.user()`，其获取用户登录状态及信息。
- 服务端在 publish 和 method 方法里，通过 `this.userId()` 和 `this.user()` 访问当前用户。

meteor 支持多种第三方登录验证：
```
# pick one or more of the below
meteor add accounts-facebook
meteor add accounts-google
meteor add accounts-github
meteor add accounts-twitter
meteor add accounts-meetup
meteor add accounts-meteor-developer
```
你可以到 [atmospherejs](https://atmospherejs.com/useraccounts/core?q=)，搜索你想要的包及用法，目前很多第三方都支持 OAth，如果上述提供的第三方不满足，你可查看 [官方 OAuth 指南](https://guide.meteor.com/accounts.html#oauth)。

#### accounts-password
对于大多数，我们还是以密码登录自己服务器验证方式。
```
meteor add accounts-password
```

- `Accounts.createUser` 创建用户
- `Meteor.logout([callback])` 注销
- `Meteor.loginWithPassword(user, password, [callback])` 密码登录
- `Accounts.findUserByUsername` 和 `Accounts.findUserByEmail` 方法查找用户

更多 api [查看](http://docs.meteor.com/api/passwords.html)。

accounts-password 还提供一个有趣的 [电子邮箱工作流](https://guide.meteor.com/accounts.html#email-flows)：
1. 重设密码。当用户点击他们的电子邮件中的链接时，他们被带到一个他们可以为他们的帐户输入新密码的页面。
2. 用户注册。新用户由管理员创建，但没有设置密码。当用户点击他们的电子邮件中的链接时，他们将被转到一个页面，他们可以为他们的帐户设置一个新的密码。非常类似于密码重置。
3. 电子邮件验证。当用户单击其电子邮件中的链接时，应用程序会记录此电子邮件确实属于正确的用户。

#### Meteor user 集合自定义数据
随着您的应用程序变得更加复杂，您将始终需要存储有关个人用户的一些数据，而将这些数据放置在上述 Meteor.users 其他字段中。在更规范情况下，将 Meteor 的用户数据和您的数据保存在两个独立的表中是一个好主意，但由于MongoDB不能很好地处理数据关联，所以只需使用一个集合即可。

##### 将顶级字段添加到用户文档中
```
// Using address schema from schema.org
// https://schema.org/PostalAddress
const newMailingAddress = {
  addressCountry: 'US',
  addressLocality: 'Seattle',
  addressRegion: 'WA',
  postalCode: '98052',
  streetAddress: "20341 Whitworth Institute 405 N. Whitworth"
};
Meteor.users.update(userId, {
  $set: {
    mailingAddress: newMailingAddress
  }
```

#### 用户权限
官方文档 [查看](https://guide.meteor.com/accounts.html#roles-and-permissions)
