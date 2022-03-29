/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    if (!root) {
        return 0
    }

    let _minDepth = 0
    let queue = [root]
    while (queue.length) {
        _minDepth++
        let _queue = []
        for (const node of queue) {
            if (!node.left && !node.right) {
                return _minDepth
            }

            node.left && _queue.push(node.left)
            node.right && _queue.push(node.right)
        }
        queue = _queue
    }

    return _minDepth
};
// @lc code=end

