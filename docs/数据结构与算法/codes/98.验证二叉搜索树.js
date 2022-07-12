/*
 * @lc app=leetcode.cn id=98 lang=javascript
 * 
 * [98] 验证二叉搜索树
 * 
 * 左子树的最大值即为最小值
 * 右子树的最小值即为最大值
 * 左子树和右子树同也为二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root, max = Infinity, min = -Infinity) {
    // 中序遍历
    // const arr = dfs(root, [])
    // let quick = 1
    // let slow = 0
    // while (quick < arr.length) {
    //     if (arr[quick++] <= arr[slow++]) {
    //         return false
    //     }
    // }

    // return true

    // 递归
    if (!root) return true

    return (root.val < max && root.val > min) &&
        isValidBST(root.left, root.val, min) &&
        isValidBST(root.right, max, root.val)
};
// function dfs(root, res) {
//     if (root) {
//         dfs(root.left, res)
//         res.push(root.val)
//         dfs(root.right, res)
//     }

//     return res
// }
// @lc code=end

