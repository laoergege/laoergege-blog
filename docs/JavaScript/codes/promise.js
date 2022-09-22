const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class Bromise {
    status = PENDING;
    result = null;
    reason = "";
    cbs = []

    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.result = value
            setTimeout(() => {
                for (const cb of this.cbs) {
                    this.handleCb(cb)
                }
            })
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
            setTimeout(() => {
                for (const cb of this.cbs) {
                    this.handleCb(cb)
                }
            })
        }
    }

    handleCb = (cb) => {
        const { onResolve, onReject, resolve, reject } = cb
        const handler = this.status === FULFILLED ? onResolve : onReject

        try {
            const value = handler(this.result)
            this.resolvePromise(value, resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    /**
     * 只实现标准情况，具体情况请参考
     * https://promisesaplus.com/#the-promise-resolution-procedure
     */
    resolvePromise = (value, resolve, reject) => {
        if (this === value) {
            reject(new TypeError('Chaining cycle detected for promise!'))
        } else if (value instanceof XPromise) {
            // 返回值穿透
            value.then(resolve, reject)

            // theable 对象
        } else if (value !== null && typeof value === 'object' || typeof value === 'function') {
            const then = value.then
            try {
                if (typeof then === 'function') {
                    new Promise(then.bind(value)).then(resolve, reject)
                }
            } catch (error) {
                reject(error)
            }
        } else {
            // 将 value 作为当前 promise 结果
            resolve(value)
        }
    }

    then = (onResolve, onReject) => {
        // 链式调用
        return new Promise((resolve, reject) => {
            const cb = {
                onResolve: typeof onResolve === 'function' ? onResolve : (value => value), // 值穿透
                onReject: typeof onReject === 'function' ? onReject : (reason => reason),
                resolve,
                reject
            }

            if (this.status === PENDING) {
                // 延迟绑定
                this.cbs.push(cb)
            } else {
                setTimeout(() => {
                    this.handleCb(cb)
                });
            }
        })
    }

    catch(onReject) {
        // 链式调用
        return this.then(null, onReject);
    }

    finally(cb) {
        // 链式调用
        return new Promise((resolve, reject) => {
            try {
                // 不接收任何参数，不应用其结果
                cb()
                // 值穿透
                this.then(resolve, reject)
            } catch (error) {
                reject(error)
            }
        })
    }

    static resolve(value) {
        if (value instanceof Bromise) return value;
        if ('then' in value) return
        return new Bromise((resolve) => resolve(value));
    }

    static reject(reason) {
        return new Bromise((resolve, reject) => reject(reason));
    }
}

class Bromise {











    static all(promises) {
        return new Bromise((resolve, reject) => {
            const result = [];
            const count = 0;
            promises.forEach((p, idx) => {
                p.then(
                    (value) => {
                        result[idx] = value;
                        if (++count === promises.length) {
                            resolve(result);
                        }
                    },
                    (err) => reject(err)
                );
            });
        });
    }

    allSettled(promises) {
        return new Bromise((resolve) => {
            const result = [];
            const count = 0;
            promises.forEach((p, idx) => {
                p.then(
                    (value) => {
                        result[idx] = {
                            statue: FULFILLED,
                            value,
                        };
                        if (++count === promises.length) {
                            resolve(result);
                        }
                    },
                    (err) => {
                        result[idx] = {
                            statue: REJECTED,
                            reason: err,
                        };
                        if (++count === promises.length) {
                            resolve(result);
                        }
                    }
                );
            });
        });
    }

    race(promises) {
        return new Bromise((resolve, reject) => {
            promises.forEach((p) => {
                p.then(
                    (val) => resolve(val),
                    (err) => reject(err)
                );
            });
        });
    }

    any(promises) {
        return new Bromise((resolve, reject) => {
            const count = 0;
            promises.forEach((p) => {
                p.then(
                    (val) => resolve(val),
                    () => {
                        if (++count === promises.length) {
                            reject("All promises were rejected");
                        }
                    }
                );
            });
        });
    }
}

Bromise.resolve()
    .then(() => {
        console.log(0);
        return Bromise.resolve(4);
    })
    .then((res) => {
        console.log(res);
    });

Bromise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(5);
    })
    .then(() => {
        console.log(6);
    });

function executor(resolve, reject) {
    resolve(100);
}

let demo = new Bromise(executor);

function onResolve(value) {
    console.log(value);
    return value;
}

// 链式调用
// demo.then(onResolve)
//     .then((value) => {
//         console.log(value * 2)
//     })

// 延迟绑定
// demo.then(onResolve)
// demo.then((value) => {
//     console.log(value * 2)
// })

// const deom1 = demo.then(onResolve)
//     .then((val) => {
//         return Bromise.reject(val)
//     })
//     .then(
//         (value) => {
//             console.log(value * 2)
//         },
//         (value) => {
//             console.log(value * 3)
//             return value
//         }
//     )
//     .then((val) => {
//         return Bromise.reject(val)
//     })
//     .then((value) => {
//         console.log(value * 4)
//     })
//     .catch((e) => {
//         console.log(e * 5)
//     })
//     .catch((e) => {
//         console.log(e * 6)
//     })

// all
function sleep(time) {
    return new Bromise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}
// Bromise.all([
//     sleep(500).then(e => { console.log(500); return 500 }),
//     // sleep(200).then(e => { console.log(200); return Bromise.reject(200) }),
//     sleep(200).then(e => { console.log(200); return 200 }),
//     sleep(1000).then(e => { console.log(1000); return 1000 }),
// ]).then((res) => {
//     console.log(res)
// })

// allSettled
// Bromise.allSettled([
//     sleep(500),
//     sleep(200),
//     Bromise.reject(2),
//     sleep(1000),
// ]).then((res) => {
//     console.log(res)
// })

// race
// Bromise.race([
//     sleep(500).then(e => 500),
//     sleep(200).then(e => 200),
//     Bromise.reject(2),
//     sleep(1000).then(e => 1000),
// ]).finally((res) => {
//     console.log(res)
// })

// any
// Bromise.any([
//     sleep(500).then(e => 500),
//     sleep(200).then(e => 200),
//     Bromise.reject(2),
//     sleep(1000).then(e => 1000),
// ]).finally((res) => {
//     console.log(res)
// })

// 使用Promise实现每隔1秒输出1,2,3
// let arr = [1, 2, 3]
// arr.reduce((p, i) => {
//     return sleep(1000).then(e => console.log(i))
// }, Promise.resolve())

// 使用Promise实现红绿灯交替重复亮
// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
// function red() {
//     console.log('red');
// }
// function green() {
//     console.log('green');
// }
// function yellow() {
//     console.log('yellow');
// }
// function sleep(time) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, time)
//     })
// }
// const run = async () => {
//     await sleep(3000)
//     red()
//     await sleep(2000)
//     yellow()
//     await sleep(1000)
//     green()
//     run()
// }
// run()

// 实现mergePromise函数
// 实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
// let time = sleep;
// const ajax1 = () => time(2000).then(() => {
//     console.log(1);
//     return 1
// })
// const ajax2 = () => time(1000).then(() => {
//     console.log(2);
//     return 2
// })
// const ajax3 = () => time(1000).then(() => {
//     console.log(3);
//     return 3
// })
// function mergePromise(promises) {
//     let p = Promise.resolve([])
//     for (const promise of promises) {
//         const _promise = promise()
//         p = p.then((res) => _promise.then((e) => { res.push(e); return res }))
//     }
//     return p
// }
// mergePromise([
//     ajax1,
//     ajax2,
//     ajax3
// ]).then((res) => {
//     console.log(res)
// })

// 限制异步操作的并发个数并尽可能快的完成全部
// 递归 + 计数
// let urls = [
//     1000,
//     6000,
//     3000,
//     5000,
//     4000,
//     8800,
//     9000,
// ];
// function fetch(url) {
//     return sleep(url).then(e => console.log(url))
// }
// function sendReqs(urls, max) {
//     const Max = max
//     let i = 0

//     function send() {
//         if (i < Max && urls.length) {
//             return fetch(urls.shift()).then(e => send())
//         }
//     }

//     for (let index = 0; index < Max; index++) {
//         send()
//     }
// }
// sendReqs(urls, 3)
