# Vue 组件生命周期

Vue.js 3.x 

针对 Vue.js 2.x 的生命周期钩子函数做了全面替换，映射关系如下：

```js
beforeCreate -> setup

created -> setup

beforeMount -> onBeforeMount 

mounted -> onMounted 

beforeUpdate -> onBeforeUpdate 

updated -> onUpdated 

beforeDestroy-> onBeforeUnmount 

destroyed -> onUnmounted 

activated -> onActivated 

deactivated -> onDeactivated 

errorCaptured -> onErrorCaptured

```

Vue.js 3.x