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
  const result = [];
  dfs(0, [], nums, result);
  return result;
};

function dfs(idx, state, nums, result, selected = {}) {
  if (idx === nums.length) {
    result.push([...state]);
  }

  const repeat = {};
  for (const [i, n] of Object.entries(nums)) {
    if (!repeat[n] && !selected[i]) {
      state.push(n);
      repeat[n] = true;
      selected[i] = true;
      dfs(idx + 1, state, nums, result, selected);
      state.pop();
      selected[i] = false;
    }
  }
}
// @lc code=end
