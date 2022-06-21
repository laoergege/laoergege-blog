# @laoergege/vuepress-plugin-vssue-next-compat

The compat version of vuepress-plugin-vssue for vuepress-next.

## Why

[Vssue](https://vssue.js.org/) is currently developed based on vue2, so it is not compatible with vuepress-next.

## Usage

Config your .npmrc

```
@laoergege:registry=https://npm.pkg.github.com
```

Install from the command line:

```
npm install @laoergege/vuepress-plugin-vssue-next-compat@1.0.0
```

Import vssue css:

In Browser

```html
<head>
  <!-- style sheet of Vssue -->
  <link rel="stylesheet" href="https://unpkg.com/vssue/dist/vssue.min.css">
</head>
```

or in APP

```shell
npm install vssue
```

```js
// .vuepress/clinet.js
import 'vssue/dist/vssue.css'
```

With this way, you can build your theme. [see more](https://vssue.js.org/guide/styles.html#use-source-code-of-vssue-styles)

config plugin:

```js
// .vuepress/config.js
import { VssuePlugin } from "@laoergege/vuepress-plugin-vssue-next-compat";

// ...
plugins:[
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

[more vssue options reference](https://vssue.js.org/options/)

In your md file or vue file.

```md
<!-- README.md -->

# Vssue Demo

<Vssue :title="$title" />
```

[Vssue Component Props Reference](https://vssue.js.org/options/#vssue-options)

### onBeforeOauth

A hook which you can modify the oauth url is runing before vssue redirect to the oauth url.

> I found that the redirect url （the oauth callback url） is cannot contain chinese path ! So I add a new api which you can modify the redirect_uri query param.

```html
<template>
  <vssue :title="title"  :onBeforeOauth="onBeforeOauth"/>
</template>

<script>
import { usePageData } from "@vuepress/client"
import { toRefs } from "vue";
export default {
    setup() {
        const { title } = toRefs(usePageData().value)

        return {
          title,
          onBeforeOauth(url) {
           sessionStorage.setItem('redirect_uri', location.pathname)
           // remove the Chinese path
           // change the redirect_uri query            
           return url.replace(/redirect_uri=([^&]*)/, `redirect_uri=${location.origin}`)
          }
        }
    }
}
</script>
```

## Changelog

[CHANGELOG.md](./CHANGELOG.md)