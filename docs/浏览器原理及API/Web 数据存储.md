# Web 数据储存

- Cookie
  - 大小：不超过 4K,一个浏览器对于一个网站只能存不超过 20 个 Cookie，而浏览器一般只允许存放 300 个 Cookie
  - 时效
    - Expires 绝对过期时间
    - MaxAge 相对过期时间，单位是秒，浏览器用收到报文的时间点再加上 Max-Age，就可以得到失效的绝对时间；优先级比 Expires 高；MaxAge = 0 会话结束过期
  - 作用范围：决定哪些请求会自动带上该 Cookie
    - Domain
    - Path
  - 安全
    - HttpOnly，不允许 js 操作
    - Secure，只允许通过 HTTPS 安全协议通道发送给服务器
    - SameSite：可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）
      - Strict：将 cookie 限制在第一方上下文中被发送
      - Lax
      - None，必须在 Secure
- LocalStorage
- SessionStorage
- IndexDB


第三方的 Cookie

与当前网站的域名（即浏览器地址栏中显示的内容）相匹配的 cookie 被称为第一方 cookie。同样，来自当前网站以外域名的 cookie 被称为第三方 cookie。这不是一个绝对的标签，而是相对于用户上下文来决定的。

正是这种机制允许网站在被用于第三方上下文时能够保持状态。例如，如果您在网站上嵌入了一个 YouTube 视频，那么访问者将在播放器中看到"稍后观看"选项。如果您的访问者已经登录了 YouTube，那么该会话将通过第三方 cookie 在嵌入式播放器中提供，也就意味着"稍后观看"按钮只会一次性保存视频，而不是提示他们进行登录或必须引导他们离开您的页面并回到 YouTube。

CSRF

- cookie、session 的身份识别、会话机制
- 广告跟踪？


没有SameSite属性的 cookie 将被视为SameSite=Lax。
具有SameSite=None的 cookie 还必须指定Secure ，即这些 cookie 需要一个安全的上下文环境。