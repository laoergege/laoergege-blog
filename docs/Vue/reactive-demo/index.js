const effectStack = [] // 副作用栈，解决嵌套副作用场景
let activeEffect = null // 记录当前执行的副作用，以便依赖跟踪

const depsMap = new Map()
const reactiveMap = new WeakMap()

function createEffect(fn) {
    const effect = (...args) => {
        activeEffect = effect
        effectStack.push(fn)
        fn(...args)
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
    }

    effect.deps = []

    return effect()
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

function reactive(target) {
    // case...

    return new Proxy(target, {
        get(target, property, receiver) {
            track(target, property)
            return Reflect.get(...arguments)
        },
        set(target, property, receiver) {
            trigger(target, property)
            return Reflect.set(...arguments)
        }
    })
}

// 依赖跟踪
function track(target, key) {
    let depsMap = reactiveMap.get(target);

    if (!depsMap) {
        reactiveMap.set(target, (depsMap = new Map()))
    }

    let deps = depsMap.get(key);

    if (!deps) {
        depsMap.set(key, (deps = new Set()));
    }

    /**
     * 每次副作用重新运行都要清除之前的依赖，重新收集
     * 防止某个场景下，某个依赖已经不是当前副作用的依赖，该依赖发生变化会导致该副作用重新执行，故需要清除无效依赖
     */
    cleanup(activeEffect)

    deps.add(activeEffect)
    activeEffect.deps.push(deps)
}

function trigger(target, key) {
    const depsMap = reactiveMap.get(target);
    if (!depsMap) return;
    let deps = depsMap.get(key);

    if (deps) {
        for (const effect of [...deps]) {
            effect()
        }
    }
}


let product = reactive({ price: 10, quantity: 2 });
let total = 0
createEffect(() => {
    total = product.price * product.quantity

    createEffect(() => {
        console.log(total, product.quantity)
    })
})

product.price = 100

product.quantity = 8


