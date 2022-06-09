function Scheduler(list, concurrency) {
    return new Promise((resolve, reject) => {
        let index = 0
        const result = []

        const worker = async () => {
            try {
                if (index < list.length) {
                    const task = list[index++]
                    result.push(await task())
                    worker()
                } else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }

        for (let i = 0; i < concurrency; i++) {
            worker()
        }
    })
}

function createTask() {
    let num = Math.random()
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num)
            resolve(num)
        }, num * 5000)
    })
}

Scheduler([
    createTask, createTask, createTask, createTask, createTask
], 2)