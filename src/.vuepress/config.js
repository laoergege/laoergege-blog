const path = require("path")

module.exports = {
    title: 'laoergege blog',
    description: 'Just For Fun',
    dest: path.resolve(__dirname, '../../docs'),

    // theme
    themeConfig: {
      sidebarDepth: 2,
      displayAllHeaders: true,
      sidebar: [
        '/工具使用篇/Git/Git 使用'
      ]
    }
  }