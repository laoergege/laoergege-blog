const CopyPlugin = require('copy-webpack-plugin')

const IMG_URL = 'http://images.laoergege.cn/'

module.exports = function (config, isServer) {

    config.when(process.env.NODE_ENV === 'production',
        config => {
            config.module
                .rule('images')
                .use('url-loader')
                .tap(options => {
                    Object.assign(options, {
                        publicPath: IMG_URL,
                        name: '[contenthash].[ext]'
                    })

                    console.log(options)

                    return options
                })
        }
    )

    config.plugin('copy-cname')
        .use(CopyPlugin, [
            [
                { from: 'CNAME' }
            ]
        ])
}