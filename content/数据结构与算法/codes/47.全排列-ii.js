/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 * 
 * 回溯、状态复制
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = []
    dfs(0, [], nums, result)
    return result
};

function dfs(idx, state, nums, result) {
    if (!nums.length) {
        result.push(state)
        return;
    }
    const repeat = {}
    for (let index = 0; index < nums.length; index++) {
        const el = nums[index];

        if (repeat[el]) {
            continue;
        } else {
            repeat[el] = true
        }

        const _nums = [...nums];
        _nums.splice(index, 1)
        dfs(idx + 1, [...state, el], _nums, result)
    }
}
// @lc code=end

