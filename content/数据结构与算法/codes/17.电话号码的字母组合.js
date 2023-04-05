/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

const table = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
}

function dfs(nums, idx, result, str) {
    if (idx >= nums.length) {
        result.push(str)
        return
    }

    const num = nums[idx]
    const list = table[num]
    for (let index = 0; index < list.length; index++) {
        dfs(nums, idx + 1, result, str + list[index])
    }
}

var letterCombinations = function (digits) {
    const nums = digits.split('')

    if (!nums.length) {
        return []
    }

    const result = []
    dfs(nums, 0, result, '')
    return result
};
// @lc code=end

