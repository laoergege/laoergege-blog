class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 监听事件 
    on(event, handler) {
        let deps = this.events[event] ??= []
        deps.push(handler)
    }
    // 触发事件
    emit(type, ...args) {
        const deps = this.events[type] ??= []
        for (let handler of deps) {
            handler(...args)
            if (handler.once) {
                this.off(type, handler)
            }
        }
    }
    // 只监听一次，下次emit不会触发
    once(type, handler) {
        handler.once = true
        this.on(type, handler)
    }
    // 移除事件
    off(event, handler) {
        this.events[event] ??= []
        this.events[event] = this.events[event].filter(e => e !== handler)
    }
}
const events = new EventEmitter();
events.on('hobby', (...argu) => {
    console.log('打游戏', ...argu);
})
let eat = () => {
    console.log('吃');
}
events.once('hobby', eat);
events.on('hobby', (...argu) => {
    console.log('逛街', ...argu);
})

events.off('hobby', eat);
events.emit('hobby', 1, 2, 3);
events.emit('hello', 'susan')
  //打游戏 1 2 3
  // 逛街 1 2 3

