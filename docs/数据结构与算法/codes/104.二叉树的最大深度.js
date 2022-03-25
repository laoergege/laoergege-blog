/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root, depth = 0) {
    // if (!root) {
    //     return depth
    // }

    // return Math.max(
    //     maxDepth(root.left, depth + 1),
    //     maxDepth(root.right, depth + 1),
    // )

    if (!root) {
        return depth
    }

    // let depth = 1
    let queue = [root]
    while (queue.length) {
        depth++
        queue = queue.reduce((q, node) => {
            node.left && q.push(node.left)
            node.right && q.push(node.right)
            return q
        }, [])
    }

    return depth
};
// @lc code=end

