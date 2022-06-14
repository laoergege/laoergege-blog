# @laoergege/vuepress-plugin-vssue-next-compat

the compat version of vuepress-plugin-vssue for vuepress-next.

## why

[vssue](https://vssue.js.org/) is currently developed based on vue2, so it is not compatible with vuepress-next.

## Usage

Config your .npmrc

```
@laoergege:registry=https://npm.pkg.github.com
```

Install from the command line:

```
npm install @laoergege/vuepress-plugin-vssue-next-compat@1.0.0
```

.vuepress/config.js

```js
import { VssuePlugin } from "@laoergege/vuepress-plugin-vssue-next-compat";

// ...
plugins:[
    // [more options reference](https://vssue.js.org/options/)
    VssuePlugin({
      platform: "github",
      owner: "laoergege",
      repo: "laoergege-blog",
      clientId: "xxx",
      clientSecret: "xxx",
      labels: ["note"],
      prefix: [""],
    })
]
// ...
```

In your md file or vue file.

```md
<!-- README.md -->

# Vssue Demo

<Vssue :title="$title" />
```

[Vssue Component Props Reference](https://vssue.js.org/options/#vssue-options)

## Changelog

[CHANGELOG.md](./CHANGELOG.md)