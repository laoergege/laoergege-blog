const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = function (config, isServer) {

    config.plugin('copy-cname')
        .use(CopyPlugin, [
            [
                { from: 'CNAME' }
            ]
        ])
    
    // // 添加 vssue-loader
    // config.module
    //     .rule('markdown')
    //     .use('vssue-loader')
    //     .loader(path.resolve( __dirname, './vssue-loader'))
}