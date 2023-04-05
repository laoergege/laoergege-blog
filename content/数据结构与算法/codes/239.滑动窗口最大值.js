/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return nums

    // const queue = []
    // const res = []
    // for (const [idx, n] of nums.entries()) {
    //     if (queue.length === k) {
    //         queue.shift()
    //     }
    //     let i = 0
    //     while (i < queue.length) {
    //         if (n > queue[i]) {
    //             queue[i] = n
    //         }
    //         i++
    //     }
    //     queue.push(n)

    //     if (k - 1 <= idx) {
    //         res.push(queue[0])
    //     }
    // }
    // return res

    let max = -Infinity
    let i = -1


};
// @lc code=end

