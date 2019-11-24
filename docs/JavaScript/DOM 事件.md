### 阅读 [JS事件：捕获与冒泡、事件处理程序、事件对象、跨浏览器、事件委托](https://github.com/amandakelake/blog/issues/38)

DOM2级事件规定的事件流包括三个阶段:
- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

![](https://user-images.githubusercontent.com/25027560/38007715-4cc457d0-327d-11e8-9fb3-667fa75fc38c.png)


```javascript
var btn = document.getElementById('btn');
/*
* DOM0,对每个事件只支持一个事件处理程序
*/
btn.onClick = () => {
  console.log('我是DOM0级事件处理程序');
}
btn.onClick = null;

/*
* DOM2,添加多个事件处理程序，按照添加顺序执行
* 移除事件处理，addEventListener和removeEventListener的handler必须同名
*/
btn.addEventListener('click', () => {
  console.log('我是DOM2级事件处理程序');
}, false);
btn.removeEventListener('click', handler, false)
```

DOM0和DOM2的事件处理程序都会自动传入event对象，**this、currentTarget、target** 是 event对象的属性，target 指向目标元素，this、currentTarget 指向当前事件传播的元素。

- preventDefault 阻止默认行为
- stopPropagation 阻止事件传播
- stopImmediatePropagation 阻止同层事件处理器执行

#### 事件委托
事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发。这种技术的好处是：

- 内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
- 无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。