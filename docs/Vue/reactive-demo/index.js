let A = 1
let B = 2
let C = A + B // 3

// change A
A = 2

console.log(C) // 3

const effectStack = [] // 副作用栈，解决嵌套副作用场景
let activeEffect = null // 记录当前执行的副作用，以便依赖跟踪

function createEffect(fn) {
    const effect = (...args) => {
        activeEffect = fn
        effectStack(fn)
        fn(...args)
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
    }

    return effect
}

// 清除依赖
function cleanup(effect) {
    const { deps } = effect
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect)
        }
        deps.length = 0
    }
}

function track(params) {
    activeEffect.deps.push(dep)
}

function trigger(params) {
    /**
     * 每次副作用重新运行都要清除之前的依赖，重新收集
     * 防止某个场景下，某个依赖已经不是当前副作用的依赖，该依赖发生变化会导致该副作用重新执行，故需要清除无效依赖
     */
    cleanup(effect)
}

function reactive(target) {
    // case...

    return new Proxy(target, {
        get(target, property, receiver) {
            // 依赖跟踪
            // proxy 的 get 处理函数中 track 函数记录了该 target property 和当前副作用
            track(target, property)
            return Reflect.get(...arguments)
        },
        set(target, property, receiver) {
            trigger(target, property)
            return Reflect.set(...arguments)
        }
    })
}