/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
    this.equeue = []
    this.oqueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.equeue.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.oqueue.length === 0) {
        this.oqueue = this.equeue.reverse()
        this.equeue = []
    }

    return this.oqueue.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.oqueue.length === 0) {
        this.oqueue = this.equeue.reverse()
        this.equeue = []
    }

    return this.oqueue[this.oqueue.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !(this.equeue.length || this.oqueue.length)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

