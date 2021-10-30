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

    let queue = [root]
    const result = []
    while (queue.length) {
        result.push(queue.map(node => node.val))

        queue = queue.flatMap(node => {
            const tmp = []
            node.left && tmp.push(node.left)
            node.right && tmp.push(node.right)

            return tmp
        })
    }

    return result
};
// @lc code=end

