相反，设置 window.location = "#foo"; 仅仅会在锚的值不是#foo情况下创建一条新的历史记录。

pushState() 不会造成 hashchange (en-US) 事件调用, 即使新的URL和之前的URL只是锚的数据不同。


hash(核心hashchange):
手动改变url(hashchange->render)
router-link跳转,push跳转(hashchange->render)
浏览器前进后退(hashchange->render)
初始化render
所有跳转都是hashchange->render


history(核心pushstate,popstate):
手动改变url(触发重定向->初始化render)
router-link跳转,push跳转(pushstate更改url,添加历史记录,调用render)
浏览器前进后退(popstate->render)
初始化render


- history 接口
- 路径
  - history：URL path
  - hash：URL hash
- 路由跳转
- 变化通知
- 路径匹配
- 组件渲染