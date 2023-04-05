1. vuepress 是如何支持 ts 文件配置

```ts
import { transformTsFileToCodeSync } from './esbuildUtils'

/**
 * Globally allow ts files to be loaded via `require()`
 */
export const allowTs = (): void => {
  // eslint-disable-next-line node/no-deprecated-api
  require.extensions['.ts'] = (m: any, filename) => {
    m._compile(transformTsFileToCodeSync(filename), filename)
  }
}
```