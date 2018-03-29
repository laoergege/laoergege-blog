> 参照翻译 [Understanding Vue.js Lifecycle Hooks](https://alligator.io/vuejs/component-lifecycle/)

理解组件的生命周期，有利于我们了接到 vue 在创建组件的过程。以及使用生命周期钩子赋予我们更多的能力。
![lifecycle.png](http://upload-images.jianshu.io/upload_images/3368741-4fec9fa35ec2934c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 创建（初始化阶段）
创建钩子是在您的组件中运行的第一个钩子。 它们允许您在组件甚至在添加到DOM之前执行操作。 与任何其他钩子不同，创建钩子也在服务器端渲染期间运行。

如果您需要在客户端呈现和服务器渲染期间在组件中设置东西，请使用创建挂钩。同样在创建钩子忠 您将无法访问模板。

### beforeCreated
beforeCreate 钩子在组件的初始化前运行。 data 还没被附加上 reactvie 特型，events 也还没建立好。
```
<script>
export default {
  beforeCreate() {
    console.log('Nothing gets called before me!')
  }
}
</script>
```

### created
在 created 钩子中，你能够访问 reactive data 和 events。但是模板和虚拟DOM无法访问
```
export default {
    data: () => ({
        property: 'lys'
    }),

    computed: {
        propertyComputed() {
            console.log('I change when this.property changes.');
            return this.property;
        }
    },

    created() {
        this.property = 'laoergege';
        console.log(`propertyComputed is ${this.propertyComputed}`)
    }
}
```

![result.png](http://upload-images.jianshu.io/upload_images/3368741-a75ae921dfc2e6d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 挂载（插入到DOM阶段）
Mounting hook 允许我们在组件渲染前后访问组件。当然他们不会再服务端渲染被调用。如果您需要在初始化时为组件提取一些数据。 为此而使用created (or created + activated for keep-alive components)，特别是如果在服务器端呈现期间需要该数据。

### beforeMount
beforeMount钩子在初始渲染发生之前和模板或渲染函数被编译之后运行。
```
 beforeMount() {
        console.log(`this.$el doesn't exist yet, but it will soon!`);
        console.log(`this.$el is ${this.$el}`);
    }
```

![image.png](http://upload-images.jianshu.io/upload_images/3368741-807c511db00163ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### mounted
使用 mounted 钩子，你将拥有访问组件模板能力。mounted 钩子是经常使用的生命周期钩子。我使用最多的方式是在 created 里获取组件需要的数据或者在 mounted 中修改 DOM。

```
<template>
  <p>I'm text inside the component.</p>
</template>

<script>
export default {
  mounted() {
    console.log(this.$el.textContent) // I'm text inside the component.
  }
}
</script>
```

## 更新（数据监测并更新渲染）
###
每当您的组件使用的响应属性更改或其他原因导致重新呈现时，将调用更新的钩子。 它们允许您钩入组件的watch-compute-render循环。
使用情况：如果您需要知道您的组件什么时候重新渲染，或许用于调试或分析。
避免情况：如果您需要知道组件上的 reactive 属性何时更改。 为此而使用computed 属性 或 watcher。

### beforeUpdate
beforeUpdate 钩子在您的组件的数据更改之后运行，更新周期开始，就在DOM修改和重新渲染之前。 它允许您在实际渲染之前获取组件上任何反应数据的新状态。

```
<script>
export default {
  data: () => ({
    counter: 0
  }),

  beforeUpdate() {
    console.log(this.counter) // Logs the counter value every second, before the DOM updates.
  },

  created() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
</script>
```

### updated
更新的钩子在您的组件和DOM重新呈现数据更改后运行。 如果您需要在属性更改后访问DOM，这可能是最安全的做法。
```
<template>
  <p ref="dom-element">{{counter}}</p>
</template>
<script>
export default {
  data: () => ({
    counter: 0
  }),

  updated() {
    // Fired every second, should always be true
    console.log(+this.$refs['dom-element'].textContent === this.counter)
  },

  created() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
</script>
```

## 销毁
销毁挂钩允许您在组件销毁时执行操作，例如清理或分析发送。 当您的组件被拆除并从DOM中删除时，它们将触发。

### beforeDestory
beforeDestroy 在拆卸组件之前被回掉。 您的组件仍将完全存在。 如果您需要清理事件或取消订阅，则可能是DDestroy可能要执行此操作。
```
<script>
export default {
  data: () => ({
    someLeakyProperty: 'I leak memory if not cleaned up!'
  }),

  beforeDestroy() {
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    this.someLeakyProperty = null
    delete this.someLeakyProperty
  }
}
</script><script>
export default {
  data: () => ({
    someLeakyProperty: 'I leak memory if not cleaned up!'
  }),

  beforeDestroy() {
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    this.someLeakyProperty = null
    delete this.someLeakyProperty
  }
}
</script>
```

### destory
当 destory 钩子被调用时，意味你的组件完全被销毁。你可以利用最后这钩子做些最后清理或者通知服务器该组件被销毁了。

```
<script>
import MyCreepyAnalyticsService from './somewhere-bad'

export default {
  destroyed() {
    console.log(this) // There's practically nothing here!
    MyCreepyAnalyticsService.informService('Component destroyed. All assets move in on target on my mark.')
  }
}
</script>
```

## 其他钩子（activated and deactivated）
还有另外两个挂钩，activated and deactivated。 这些是用于保持活动的组件，这个主题不在本文的范围之内。 只要它们允许您检测何时打开或关闭包含在<keep-alive> </ keep-alive>标签中的组件。 您可以使用它们来获取组件的数据或处理状态更改，相当于 created 和 beforeDestroy，而无需执行完整的组件重建。

## 总结
Vue 组件的生命周期分为四个阶段，每个阶段有两个生命钩子，注意前后钩子。
- 创建阶段：主要用于组件创建时，获取数据设置组件。
1. beforeCreate 
2. created（能够访问创建成功的组件实例，但不能访问 模板，el 或 DOM）
- 挂载阶段：主要用于访问组件 DOM。
3. beforeMount
4. mounted（能够访问组件模板）
- 更新阶段：数据变化，组件重新渲染。
5. beforeUpdate（能够访问组件更新后的数据，但无法访问 DOM）
6. updated（能够访问 DOM）
- 销毁阶段：（用于销毁组件，做清理工作）
7. beforeDestory（销毁前还能访问组件实例）
8. destory