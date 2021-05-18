https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined

任何类型都会继承 `null`和`undefined`

strictNullChecks 开启严格的控制检验，在代码中可以使用*缩小*来检查空值

```typescript
function doSomething(x: string | undefined) {
  if (x === undefined) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```



