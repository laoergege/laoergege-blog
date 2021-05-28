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
var levelOrder = function(root, res) {
    if(root) {
        if(root.children) {
            root.children.forEach(child => {
                preorder(child, res)
            });
        }
        res.push([root.val)
    }

    return res
};
// @lc code=end

