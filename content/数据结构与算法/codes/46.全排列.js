/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 * 
 * 回溯、分阶段重复操作
 * 状态复制转移
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = []
    dfs(0, [], nums, result)
    return result
};

function dfs(idx, state, nums, result) {
    if (!nums.length) {
        result.push(state)
        return
    }

    nums.forEach((el, i) => {
        const _nums = [...nums]
        _nums.splice(i, 1)
        dfs(idx + 1, state.concat(el), _nums, result)
    });
}
// @lc code=end

