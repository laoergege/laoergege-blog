/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    if (!root) {
        return []
    }

    const queue = [[root]]
    const result = []

    while (queue.length) {
        const nodes = queue.pop()

        result.push(nodes.map(node => node.val))

        const tmp = []
        nodes.forEach(node => {
            node.left && tmp.push(node.left)
            node.right && tmp.push(node.right)
        })
        tmp.length && queue.push(tmp)
    }

    return result
};
// @lc code=end

