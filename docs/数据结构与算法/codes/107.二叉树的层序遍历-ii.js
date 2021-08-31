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

    result.reverse()

    return result
};
// @lc code=end

