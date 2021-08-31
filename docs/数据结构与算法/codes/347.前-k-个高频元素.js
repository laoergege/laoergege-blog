/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if(map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    }

    return Object.entries(map)
        .sort((a, b) => (b[1] - a[1]))
        .slice(0, k)
        .map(e => +e[0])
};

/**
 * 1. nlogn, hash 记录频率，排序次数大小
 * 2. nlogk, hash 记录频率, 容量为 K 的小根堆，每次 poll 出最小的数，那堆中保留的就是前 K 小啦
 * 
 * js map 用法不熟悉
 */
// @lc code=end

