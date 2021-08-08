/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let result = 0

    for (let row = 0; row < grid.length; row++) {
        const arr = grid[row];

        for (let col = 0; col < arr.length; col++) {
            if (arr[col] === '1') {
                result += 1;
                s(col, row, grid)
            }
        }
    }

    return result
};

function s(col, row, grid) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
        return
    }

    if (grid[row][col] == '1') {
        grid[row][col] = '0';

        s(col - 1, row, grid)
        s(col, row - 1, grid)
        s(col + 1, row, grid)
        s(col, row + 1, grid)
    }
}
// @lc code=end

