const path = require("path")

// gitee 
const GITEE_RWA_URL = 'https://gitee.com/laoergege/images/raw/master'

const mode = process.env.NODE_ENV

module.exports = {
  title: 'Laoergege Blog',
  description: 'Just For Fun',
  dest: path.resolve(__dirname, '../../docs'),

  // theme
  themeConfig: {
    nav: [
      {
        text: 'Web前端',
        items: [
          {
            text: '框架篇',
            items: [
              { text: 'Vue', link: '/vue/' }
            ]
          },
        ]
      },
      {
        text: '工具使用',
        items: [
          { text: 'Git', link: '/git/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Git',   // 必要的
        path: '/git/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/git/GithubAction Sheet',
          '/git/使用 github 搭建个人博客',
          '/git/Github Action 开发之 gitee 图床'
        ]
      }
    ]
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            outputPath: 'images',
            publicPath: mode === 'production' ? GITEE_RWA_URL : ''
          },
        }
      ]
    }
  }
}