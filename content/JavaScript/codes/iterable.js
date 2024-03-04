let arrobj = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};

arrobj[Symbol.iterator] = function () {
  let i = 0;
  let s = Object.keys(this).length;
  // 关注点分离，迭代器对象和与其进行迭代的对象分开
  return {
    next: () => {
      i++;
      return {
        value: this[i],
        done: i > s,
      };
    },
  };
};

for (const i of arrobj) {
  console.log(i);
}

//  Array.from 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组

// `Array.from(obj[, mapFn, thisArg])`;

let m = new Map();
m.set(1, 1);
m.set(2, 2);
m.set(3, 3);

for (const i of m) {
  console.log(i);
}

let a = {
  data: [
    { value: 1, done: false },
    { value: 2, done: false },
    { value: 3, done: true },
  ],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        return Promise.resolve(this.data[i++]);
      },
    };
  },
};

Promise.all(a).then((res) => console.log("异步迭代", res));
