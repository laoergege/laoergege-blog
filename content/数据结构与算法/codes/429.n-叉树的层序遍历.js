/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    let queue = [root]
    let result = []
    while (queue.length) {
        result.push(
            queue.map(e => e.val)
        )

        queue = queue.map(e => e.children).flat()
    }

    return result
};
/**
 * 队列实现 广度优先遍历
 */

// @lc code=end

