/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
const res = []
var inorderTraversal = function(root, res = []) {
    if (root) {
        inorderTraversal(root.left, res) 
        res.push(root.val)
        inorderTraversal(root.right, res) 
    }

    return res
};
// @lc code=end

