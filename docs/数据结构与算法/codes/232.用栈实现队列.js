/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
    this.queue = []
    this.tempQueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.tempQueue = this.queue.reverse()
    this.queue = this.
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {

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

