## Route 
### render methods
Route 组件有三个渲染组件的属性：
- `<Route component>`  
- `<Route render>`  
- `<Route children>`


#### `<Route component>`  
当路径匹配上时，Router 会使用 `React.createElement ` 去创建组件，该组件会在每次渲染周期时重启创建，这意味着将不断重新渲染 
- `<Route render>` 
```
<Route path="/user/:username" component={User}/>

const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}
```

#### `<Route render>`  
与 `component` 相反，使用 `<Route render>` 并提供一个 render 函数，使我们能够包装自定义组件，创建一个不需要每次都重新渲染的组件
```
// convenient inline rendering
<Route path="/home" render={() => <div>Home</div>}/>

// wrapping/composing
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props}/>
    </FadeIn>
  )}/>
)

<FadingRoute path="/cool" component={Something}/>
```

#### `<Route children>`  
`<Route children>` 的行为跟 `<Route render>` 是一样的，唯一不同的是  `<Route children>` 无论是否有匹配上都会渲染。
```
<ul>
  <ListItemLink to="/somewhere"/>
  <ListItemLink to="/somewhere-else"/>
</ul>

const ListItemLink = ({ to, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest}/>
    </li>
  )}/>
)
This could also be useful for animations:<Route children={({ match, ...rest }) => (
  {/* Animate will always render, so you can use lifecycles
      to animate its child in and out */}
  <Animate>
    {match && <Something {...rest}/>}
  </Animate>
)}/>
```

> 当匹配到同一路径时，三者优先级： `<Route component>` > `<Route render>` > `<Route children>` 

## `<Switch>`
渲染第一个匹配到的 Route 

## 代码拆分
