/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }
    let max = 0;
    dfs(root)

    return max

    function dfs(root) {
        if (!root) {
            return 0;
        }

        let left = dfs(root.left)
        let right = dfs(root.right)
        max = Math.max(max, left + right)

        return 1 + Math.max(left, right)
    }
};


// @lc code=end