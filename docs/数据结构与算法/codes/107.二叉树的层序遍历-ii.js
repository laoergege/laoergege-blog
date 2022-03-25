/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) {
        return []
    }

    let queue = [root]
    const result = []
    while (queue.length) {
        result.push(queue.map(node => node.val))
        queue = queue.flatMap(node => [node.left, node.right]).filter(node => node)
    }

    result.reverse()

    return result
};
// @lc code=end

