const effectStack = [] // 副作用栈，解决嵌套副作用场景
let activeEffect = null // 记录副作用栈栈顶，以便依赖跟踪

// 代理缓存结构
// proxyMap => depsMap => deps
// deps = new Set()
const depsMap = new Map()
const targetMap = new WeakMap()

// 副作用
function effect(fn) {
    const _effect = (...args) => {
        activeEffect = _effect

        /**
         * 每次副作用重新运行都要清除之前的依赖，重新收集
         * 防止某个场景下，某个依赖已经不是当前副作用的依赖，该依赖发生变化会导致该副作用重新执行，故需要清除无效依赖
         */
        cleanup(activeEffect)

        effectStack.push(fn)
        fn(...args)
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
    }

    _effect.deps = []

    return _effect()
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

    // 数据代理、操作劫持
    return new Proxy(target, {
        get(target, property) {
            // 依赖跟踪、收集
            track(target, property)
            return Reflect.get(...arguments)
        },
        set(target, property) {
            const result = Reflect.set(...arguments)
            // 变更通知
            trigger(target, property)
            return result
        }
    })
}

function track(target, key) {
    let depsMap = targetMap.get(target);

    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }

    let deps = depsMap.get(key);

    if (!deps) {
        depsMap.set(key, (deps = new Set()));
    }

    if (!deps.has(activeEffect)) {
        // 收集当前激活的 effect 作为依赖
        deps.add(activeEffect)
        // 当前激活的 effect 收集 deps 集合作为依赖
        activeEffect.deps.push(deps)
    }
}

function trigger(target, key) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    let deps = depsMap.get(key);

    if (deps) {
        for (const effect of [...deps]) {
            effect()
        }
    }
}


