/**
 * 1. sort
 * 2. 缓存结果，减少循环查找
 */
/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let mapper = {}
    for (let index = 0; index < strs.length; index++) {
        const str = strs[index];
        const sorted = str.split('').sort().join('')
        if(mapper[sorted]) {
            mapper[sorted].push(str)
        } else {
            mapper[sorted] = [ str ]
        }
    }

    return Object.keys(mapper).map(key => mapper[key])
};
// @lc code=end

