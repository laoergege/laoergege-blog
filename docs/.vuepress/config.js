const path = require("path")
const menu = require("./menu")
const markdown = require("./markdown")
const configWebpack = require('./webpack-chain')
const plugins = require('./plugins')

module.exports = {
  // 基本配置
  title: "",
  description: "Just For Fun",
  dest: path.resolve(__dirname, "../../dist"),
  extraWatchFiles: ["./menu.js"],

  // theme
  themeConfig: {
    logo: "/avatar.png",
    lastUpdated: "最新更新时间 ",
    smoothScroll: true,
    ...menu,
  },

  // markdown
  markdown,

  // plugins
  plugins,

  chainWebpack: configWebpack,
};