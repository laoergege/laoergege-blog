/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const result = []
    dfs(root, targetSum, result)
    return result
};

function dfs(root, targetSum, result, paths = []) {
    if (!root) {
        return
    }

    paths = paths.concat(root.val)
    targetSum -= root.val

    if (targetSum === 0 && !root.left && !root.right) {
        result.push(paths)
    } else {
        root.left && dfs(root.left, targetSum, result, paths)
        root.right && dfs(root.right, targetSum, result, paths)
    }
}
// @lc code=end

