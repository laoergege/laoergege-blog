## 安装使用
```
npm install eslint --save-dev
```

```
npx eslint --init
```

```
eslint yourfile.js
```

## 规则配置
1. Configuration Comments - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。
2. Configuration Files - 使用 JavaScript、JSON 或者 YAML 文件为整个目录（处理你的主目录）和它的子目录指定配置信息。可以配置一个独立的 .eslintrc.* 文件，或者直接在 package.json 文件里的 eslintConfig 字段指定配置，ESLint 会查找和自动读取它们，再者，你可以在命令行运行时指定一个任意的配置文件。

.eslintrc.* 文件配置选项 
```javascript
{   
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    // 更多环境变量 http://eslint.cn/docs/user-guide/configuring#specifying-environments
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    // 脚本在执行期间访问的额外的全局变量。
    // xx : "onlyread" | true | false
    //      只读 | 可重写 | 不可重写
    // 注意：要启用no-global-assign规则来禁止对只读的全局变量进行修改。
    // 更多参考 http://eslint.cn/docs/user-guide/configuring#specifying-globals
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // 制定解析器
    "parser": "babel-eslint",
    // 指定解析器选项
    // 更多配置 http://eslint.cn/docs/user-guide/configuring#specifying-parser-options
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "vue"
    ],
    // 启用的规则及其各自的错误级别。
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
```

JS 注释写法
```
env
/* eslint-env node, mocha */

global
/* global var1, var2 */
/* global var1:false, var2:false */
```