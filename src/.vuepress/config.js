const path = require("path")
const menu = require("./menu")
const markdown = require("./markdown")
const CopyPlugin = require('copy-webpack-plugin');

// gitee 
const IMG_URL = 'http://images.laoergege.cn/'

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

  chainWebpack: (config, isServer) => {

    config.module
      .rule('images')
      .clear()

    config.module
      .rule('svg')
      .clear()

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10 * 1024, // 10KB
        name: process.env.NODE_ENV === 'production' ? 'images/[name].[ext]' : `assets/img/[name].[ext]`,
        publicPath: process.env.NODE_ENV === 'production' ? IMG_URL : '/'
      })

    config.module
      .rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: process.env.NODE_ENV === 'production' ? 'images/[name].[ext]' : `assets/img/[name].[ext]`,
        publicPath: process.env.NODE_ENV === 'production' ? IMG_URL : '/'
      })

    config.plugin('copy-cname')
      .use(CopyPlugin, [
        [
          { from: 'CNAME' }
        ]
      ])
  }
}