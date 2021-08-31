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
    if(!root) return root

    let queue = [root]
    const res = []
    while (queue.length) {
        let tmp = []
        res.push(
            queue.map(e => {
                if(e && e.children) {
                    tmp.push(...e.children)
                }
                return e && e.val
            })
        )
        queue = tmp
    }

    return res
};
/**
 * 队列实现 广度优先遍历
 */

// @lc code=end

