import { resolve } from "./utils/path";

export default [
  [
    resolve('./plugins/watcher.ts'),
    {
      paths: [
        resolve('plugins.ts'),
        resolve('menu.ts'),
        resolve('plugins/*')
      ]
    }
  ],
]