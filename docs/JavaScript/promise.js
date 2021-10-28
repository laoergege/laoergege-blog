// 参考 https://juejin.cn/post/6945319439772434469#heading-26

// 先定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Bromise {

    onResolvedCallbacks = []
    onRejectedCallbacks = []

    value = undefined
    status = PENDING // fulfilled、rejected
    reason = undefined

    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }

    resolve = (value) => {
        // 延迟绑定
        if (this.status === 'pending') {
            this.value = value
            this.status = FULFILLED
            for (let onResolve of this.onResolvedCallbacks) {
                onResolve(value)
            }
        }
    }

    reject = (error) => {
        if (this.status === 'pending') {
            this.status = REJECTED
            this.reason = error
            for (let onReject of this.onRejectedCallbacks) {
                onReject(error)
            }
        }
    }

    then = (onResolve, onReject) => {
        // 值穿透
        const _onResolve = typeof onResolve === 'function' ? onResolve : val => val
        const _onReject = typeof onReject === 'function' ? onReject : reason => { throw reason };

        // 链式调用
        return new Bromise((resolve, reject) => {
            const _onResolveTask = (val) => {
                setTimeout(() => {
                    try {
                        const value = _onResolve(val)

                        // 返回值穿透
                        value instanceof Bromise ? value.then(resolve, reject) : resolve(value)
                    } catch (error) {
                        // 错误冒泡
                        reject(error)
                    }
                });
            }

            const _onRejectTask = (val) => {
                setTimeout(() => {
                    try {
                        const value = _onReject(val)

                        // 返回值穿透
                        value instanceof Bromise ? value.then(resolve, reject) : resolve(value)
                    } catch (error) {
                        // 错误冒泡
                        reject(error)
                    }
                });
            }

            if (this.status === 'pending') {
                this.onResolvedCallbacks.push(_onResolveTask)
                this.onRejectedCallbacks.push(_onRejectTask)
            } else if (this.status === 'fulfilled') {
                _onResolveTask(this.value)
            } else {
                _onRejectTask(this.reason)
            }
        })
    }

    catch(onReject) {
        return this.then(null, onReject).finally((val) => Bromise.resolve(val))
    }

    finally(callback) {
        return this.then(
            callback,
            callback
        )
    }

    static resolve(val) {
        return new Bromise((resolve) => resolve(val))
    }

    static reject(val) {
        return new Bromise((resolve, reject) => reject(val))
    }

    static all(arr) {
        return new Bromise((resolve, reject) => {
            let p = Bromise.resolve([])

            for (let e of arr) {
                p = p.then((res) => {
                    return e.then((val) => {
                        res.push(val)
                        return res
                    }, reject)
                })
            }

            p.then((res) => {
                resolve(res)
            })
        })
    }

    static allSettled(arr) {
        let p = Bromise.resolve([])

        for (let e of arr) {
            p = p.finally((res) => {
                return e.finally((val) => {
                    res.push({ reason: val, status: e.status })
                    return res
                })
            })
        }

        return p
    }

    static race(arr) {
        return new Bromise((resolve, reject) => {
            for (const p of arr) {
                p.then(resolve, reject)
            }
        })
    }

    static any(arr) {
        return new Bromise((resolve, reject) => {
            for (const p of arr) {
                p.then(resolve, () => {
                    if (arr.every(p => p.status === 'rejected')) {
                        reject()
                    }
                })
            }
        })
    }
}

function executor(resolve, reject) {
    resolve(100)
}

let demo = new Bromise(executor)

function onResolve(value) {
    console.log(value)
    return value
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
            resolve()
        }, time)
    })
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