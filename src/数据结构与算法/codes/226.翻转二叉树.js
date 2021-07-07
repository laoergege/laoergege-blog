/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return null
    }

    reserve(root)

    invertTree(root.left)
    invertTree(root.right)

    return root
};

function reserve(node) {
    if (!node) {
        return null
    }

    let tmp = node.left
    node.left = node.right
    node.right = tmp
}
// @lc code=end

