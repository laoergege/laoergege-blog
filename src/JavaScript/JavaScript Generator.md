```javascript
function *test() {
  yield 'A';
  yield 'B';
  yield 'C';
}
```

generator 函数与普通函数区别：能够暂停执行，多次返回值

遇到 yield 表达式，就暂停执行后面的操作，并将紧跟在 yield 后面的那个表达式的值，作为返回的对象的value属性值



![picture 1](images/3e95f6e1731b9694eb9f0fb9ccd9119e0c782cd1278183af2d2317d064dff7e7.png)  

