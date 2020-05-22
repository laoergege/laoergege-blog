const path = require("path")
const menu = require("./menu")
const markdown = require("./markdown")
const configWebpack = require('./webpack-chain')

module.exports = {
  // 基本配置
  title: 'Laoergege Blog',
  description: 'Just For Fun',
  dest: path.resolve(__dirname, '../../docs'),
  extraWatchFiles: [
    './menu.js'
  ],

  // theme
  themeConfig: {
    ...menu
  },

  // markdown
  markdown,

  chainWebpack: configWebpack
}