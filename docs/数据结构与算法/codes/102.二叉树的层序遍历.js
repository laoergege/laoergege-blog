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
        return [];
    }

    let queue = [root]
    const result = []
    while (queue.length) {
        let _result = []
        let _queue = []
        for (const node of queue) {
            const { val, left, right } = node
            _result.push(val)

            if (left) {
                _queue.push(left)
            }

            if (right) {
                _queue.push(right)
            }
        }

        queue = _queue
        result.push(_result)
    }

    return result;
};
// @lc code=end
