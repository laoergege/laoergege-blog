/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * 1. 区间按开始进行排序（保证合并区间开始点为最小的那个）
 * 2. 判断是否重叠，否放入结果集
 * 3. 是，则合并
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let result = []
    let stack = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        let item = intervals[i]
        if (item[0] > stack[1]) {
            result.push(stack)
            stack = item

            continue
        } else {
            stack[1] = Math.max(item[1], stack[1])
        }
    }

    if (stack.length) {
        result.push(stack)
    }

    return result
};
// @lc code=end

