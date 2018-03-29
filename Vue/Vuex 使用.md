父子组件可以通过 props属性 和 事件发射 来进行交互。少量组件间的简单通信可以 创建一个 Vue 实例中间站。但当设计多组件多数据状态交互时，我们通过官方插件 Vuex 创建一个全局状态机，各个组件可以通过它来获取全局状态并响应。

![vuex.png](http://upload-images.jianshu.io/upload_images/3368741-b7df5bce3cf5e1d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
通过这张图大概感受下 vuex 各个核心概念吧。

## 基本使用
一个计数器 basic demo

store.js
```
import Vue from 'vue'
import Vuex from 'vuex'

// 0.导入并使用 Vuex 插件
Vue.use(Vuex);

// 1.创建 state 对象
const state = {
    count: 0
}

// 2.创建 mutations 变化操作
const mutations = {
    add(state) {
        state.count++;
    },
    reduce(state) {
        state.count--
    }
}

// 3.创建 store 对象并导出
export default new Vuex.Store({
    state,
    mutations
})

```
Counter.vue
```
  <template>
  <div>
      <h2>{{count}}</h2>
      <div>
          <button @click="add"> + </button>
          <button @click="reduce"> - </button>          
      </div>
  </div>
</template>

<script>
import store from '@/store/store'

export default {
  computed: {
      count() {
          return this.$store.state.count
      }
  },
  // 4. 注入 store
  store,
  methods: {
      add() {
          this.$store.commit('add');
      },
      reduce() {
          this.$store.commit('reduce');
      }
  }
}
</script>

```
## 获取 Vuex 状态
### computed properties
由于 Vuex 的状态存储是响应式的，每当 store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。
```
 computed: {
      count() {
          return this.$store.state.count
      }
  },
```

###  mapState 简化操作
像第一种写法，写多了代码会很繁琐。我们使用 mapState 辅助函数帮助我们生成计算属性。

官方 demo
```
export default {
  // ...
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。

修改 basic demo
```
 //   computed: {
    //       count() {
    //           return this.$store.state.count
    //       }
    //   },
    // 使用 mapState 来简化获取 state 操作
    computed: mapState(['count']),
    ....
```

## mutations 修改状态
### $store.commit() 提交变化
创建 mutation-types 规范变化常量
```
// count
export const ADD = 'add';
export const REDUCE = 'reduce';
```
修改 store.js
```
const mutations = {
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [ADD](state) {
        state.count++;
    },
    [REDUCE](state) {
        state.count--
    }
}
```
修改 Counter.js
```
<script>
import store from '@/store/store';
import { mapState } from 'vuex';
// 导入 count 的变化操作
import { ADD, REDUCE } from '@/store/mutation-types';

export default {
   ...
    methods: {
        add() {
            this.$store.commit(ADD);
        },
        reduce() {
            this.$store.commit(REDUCE);
        }
    }
}
</script>
```


### 传值（变化）
变化操作方法
```
mutation(state, change){
  state + change // = new state
}
```
添加一个增加 100 的按钮 demo
修改 store.js
```
const mutations = {
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    // 第二参数为 change value
    [ADD](state, n) {
        state.count+= n;
    },
    [REDUCE](state, n) {
        state.count-= n;
    }
}
```
Counter.vue
```
<template>
    <div>
        <h2>{{count}}</h2>
        <div>
            <button @click="add(1)"> + </button>
            <button @click="reduce(1)"> - </button>
        </div>
        <div>
            <button @click="add(100)"> +100 </button>
            <button @click="reduce(100)"> -100 </button>
        </div>
    </div>
</template>
```  
```
<script>
import store from '@/store/store';
import { mapState } from 'vuex';
import { ADD, REDUCE } from '@/store/mutation-types';

export default {
    ...
    methods: {
        add(n = 1) {
            // 传递参数
            this.$store.commit(ADD, n);
        },
        reduce(n = 1) {
            this.$store.commit(REDUCE, n);
        }
    }
}
</script>
```

### mapMutations 组件提交 mutations
官方 demo
```
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
    })
  }
}
```

## getters
getters 就相当于 store 的计算属性，相对于 state 输出前做些 过滤操作。
Getters 接受 state 作为其第一个参数，也可以接受其他 getters 作为第二个参数。

对输出 count 添加些文本 demo
store.js
```
// getters
const getters = {
    count(state) {
        return 'click ' + state.count + ' times';
    }
}
```
Counter.vue
```
<script>
import store from '@/store/store';
import { mapState, mapMutations, mapGetters } from 'vuex';
import { ADD, REDUCE } from '@/store/mutation-types';

export default {
    ...
    // 使用 mapGetters 来简化获取 state 操作
    computed: mapGetters(['count']),
    ...
}
</script>
```

## action 异步修改状态
action 层是用来提交 mutation
mutation 层只能是同步操作，而 action 层可以包含异步操作。
官方 demo
```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```
- Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
- 使用 {commit} 解构 context对象， 直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。

### 分发 Action
官方 demo
```
// 分发 Action
store.dispatch('increment')

// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```
### mapActions 在组件简化分发 Action
官方 demo
```
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    ...mapActions({
      add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
    })
  }
}
```

### 组合 Actions


## Moudles
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

## 其他
### 对象展开运算符