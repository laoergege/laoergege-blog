/*
 * @Author: your name
 * @Date: 2021-05-26 22:08:16
 * @LastEditTime: 2021-05-26 22:09:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /laoergege-blog/src/数据结构与算法/codes/589.n-叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root, res = []) {
    if(root) {
        res.push(root.val)
        if(root.children) {
            root.children.forEach(child => {
                preorder(child, res)
            });
        }
    }

    return res
};
// @lc code=end

