/*
 * @Author: your name
 * @Date: 2021-05-26 21:41:09
 * @LastEditTime: 2021-05-26 21:43:58
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /laoergege-blog/src/数据结构与算法/codes/590.n-叉树的后序遍历.js
 */
/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root, res = []) {
    if(root) {
        if(root.children) {
            root.children.forEach(child => {
                postorder(child, res)
            });
        }

        res.push(root.val)
    }

    return res
};
// @lc code=end

