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
var isValidBST = function (root, min, max) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};
// @lc code=end

