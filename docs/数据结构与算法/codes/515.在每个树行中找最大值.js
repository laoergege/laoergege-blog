/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
    if (!root) {
        return []
    }

    const queue = [[root]]
    const result = []

    while (queue.length) {
        const nodes = queue.pop()

        result.push(
            nodes.map(node => node.val)
                .reduce((acc, node) => {
                    return acc >= node ? acc : node
                }, nodes[0].val)
        )

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

