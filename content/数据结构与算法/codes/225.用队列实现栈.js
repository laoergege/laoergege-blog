/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
    this.queue = []
    this.helper = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    while (this.queue.length > 1) {
        this.helper.push(this.queue.shift())
    }
    let top = this.queue.shift()
    this.queue = this.helper
    this.helper = []
    return top
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    while (this.queue.length > 1) {
        this.helper.push(this.queue.shift())
    }
    let top = this.queue.shift()
    this.helper.push(top)
    this.queue = this.helper
    this.helper = []
    return top
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

