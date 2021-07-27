/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 空间 O(n), 时间 O(n)
    // 哈希表记录次数；
    // 遍历数组 nums 时候使用打擂台的方法，省去了最后对哈希映射的遍历。
    // const tmp = {}
    // let max
    // tmp[max] = 0
    // for (let index = 0; index < nums.length; index++) {
    //     const num = nums[index]
    //     tmp[num] = tmp[num] ? tmp[num] + 1 : 1
    //     if (tmp[num] >= tmp[max]) {
    //         max = num
    //     }
    // }
    // return max

    // 摩尔投票法
    // 空间 O(1), 时间 O(n)
    let count = 1
    let cander = nums[0]
    for (let index = 1; index < nums.length; index++) {
        const el = nums[index];
        if (cander !== el) {
            count -= 1
            if (count === 0) {
                cander = el
                count = 1
            }
        } else {
            count += 1
        }
    }
    return cander
};
// @lc code=end

