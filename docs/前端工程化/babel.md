---
release: true
tags:
 - babel
desc: 记录下 babel 主要配置
---

# Babel

- @babel/preset-env：支持所有 es 标准的特性
  - target
    - @babel/compat-table：babel 会使用 brwoserslist 来把它们转成目标环境具体版本的数据
    - ` "presets": [["@babel/preset-env", { "targets": "defaults" }]]`
  - corejs：polyfill
    - polyfill 默认是全局引入的
  - useBuiltIns：使用 polyfill（corejs）的方式
    - entry：入口处全部引入
    - usage：还是每个文件引入用到的（usage）
    - false
- @babel/plugin-transform-runtime
  - 减少重复 helpers 代码
  - 防止 polyfill 污染全局
  - @babel/plugin-transform-runtime 优先级比 @babel/preset-env 高，意味着同时使用 corejs 会冲突，无法根据 target 动态引入 polyfill

项目配置

```js
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets":
                {
                    "chrome": "58"
                    // 按自己需要填写
                },
                "useBuiltIns": "entry",
                "corejs":
                {
                    "version": 3,
                    "proposals": true // @babel/preset-env 不会包含低于 Stage 3 的 JavaScript 语法建议
                }
            }
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": false // 防止与 @babel/preset-env 冲突
            }
        ]
    ]
}

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 入口文件代码
```

库配置

```js
{
    "presets": [
        [
            "@babel/preset-env",
        ]
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "version": 3,
                "proposals": true
            }
        ]
    ]
}
```
