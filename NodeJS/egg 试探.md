## 整体认识

- 基础
    - koa
- 基础功能
    - 目录结构
    - 视图层
        - 客户端渲染
        - 服务端只渲染首页
        - 服务端渲染
    - 路由层
    - 控制层
    - 服务层
    - 数据层
    - 中间件/插件
    - <a href="#error">错误监控</a>
    - 测试
    - 身份验证
    - <a href="#static">静态资源</a> 
- 其他
    - restful api
    - typescript

## 基础
### [Egg.js 是什么](https://eggjs.org/zh-cn/intro/index.html)
### koa
- koa 使用 async 异步方案
- Koa Middleware 选择了洋葱圈模型
    - ![](https://camo.githubusercontent.com/d80cf3b511ef4898bcde9a464de491fa15a50d06/68747470733a2f2f7261772e6769746875622e636f6d2f66656e676d6b322f6b6f612d67756964652f6d61737465722f6f6e696f6e2e706e67)
- [API](http://koajs.com) application --> context --> request --> response
- context 和 Express 只有 Request 和 Response 两个对象不同，Koa 增加了一个 Context 的对象，作为这次请求的上下文对象（在 Koa 1 中为中间件的 this，在 Koa 2 中作为中间件的第一个参数传入）。我们可以将一次请求相关的上下文都挂载到这个对象上。

Egg 选择了 Koa 作为其基础框架，在它的模型基础上，进一步对它进行了一些增强。
- [扩展](https://eggjs.org/zh-cn/intro/egg-and-koa.html#%E6%89%A9%E5%B1%95) 自定义增强 application,context,request,response api的功能
- 插件

### 基础功能

#### [异常监控](#error)

##### 异常处理

通过同步方式编写异步代码带来的另外一个非常大的好处就是异常处理非常自然，使用 try catch 就可以将按照规范编写的代码中的所有错误都捕获到。这样我们可以很便捷的编写一个自定义的错误处理中间件。

```
async function onerror(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err);
    ctx.body = 'server error';
    ctx.status = err.status || 500;
  }
}
```

只需要将这个中间件放在其他中间件之前，就可以捕获它们所有的同步或者异步代码中抛出的异常了。

#### [静态资源](#static)
Egg 内置了 static 插件，线上环境建议部署到 CDN，无需该插件。

static 插件默认映射 /public/* -> app/public/* 目录

此处，我们把静态资源都放到 app/public 目录即可：

```
app/public
├── css
│   └── news.css
└── js
    ├── lib.js
    └── news.js
```

## 其他

### typescript

直接官方提供的 ts 模板，`egg-init myproject --type ts` 。