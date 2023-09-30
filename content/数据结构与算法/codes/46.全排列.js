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
  const result = [];
  dfs(0, [], nums, result);
  return result;
};

function dfs(idx, state, nums, result, selected = {}) {
  if (idx === nums.length) {
    result.push([...state]);
    return;
  }

  for (const [i, n] of Object.entries(nums)) {
    if (!selected[n]) {
      state.push(n);
      selected[n] = true;
      dfs(idx + 1, state, nums, result, selected);
      state.pop();
      selected[n] = false;
    }
  }
}
// @lc code=end
