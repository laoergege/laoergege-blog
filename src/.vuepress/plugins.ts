import path from "path";
console.log(__dirname)

export default [
  [
    path.resolve(__dirname, './plugins/watcher.ts'),
    {
      paths: []
    }
  ],
]