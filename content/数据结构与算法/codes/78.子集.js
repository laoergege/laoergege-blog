/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  dfs(0, [], nums, result);
  return result;
};

var dfs = function (level, state, nums, result, selected = {}) {
  if (nums.length === level) return;

  result.push([...state]);
  const row = { ...selected };
  for (const [i, n] of Object.entries(nums)) {
    if (!selected[n] && !row[n]) {
      state.push(n);
      selected[n] = true;
      dfs(level + 1, state, nums, result, selected);
      state.pop();
      selected[n] = false;
    }
  }
};
// @lc code=end
