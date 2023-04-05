/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }

  let queue = [root]
  let result = []
  let i = 0
  while (queue.length) {
    let _queue = []
    let _result = []
    let op = i % 2 === 0 ? 'push' : 'unshift'
    for (const node of queue) {
      let { val, left, right } = node

      _result[op](val)

      if (left) {
        _queue.push(left)
      }

      if (right) {
        _queue.push(right)
      }
    }

    i += 1;
    result.push(_result)
    queue = _queue
  }

  return result;
};
// @lc code=end

