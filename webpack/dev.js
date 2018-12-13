const basic = require('./basic')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectRoot = path.resolve(__dirname, '../')
function dev(basic) {
    basic.mode = 'development'
    basic.output.filename = 'bundle.js'
    basic.module.rules.push({
        test:/\.css$/,
        exclude: /src/,
        use:[
          { loader: "style-loader",},
          {
              loader: "css-loader",
          }
        ]
    })
    basic.module.rules.push({
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: { modules: true }
            },
            'postcss-loader'
        ]
    })
    basic.plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${projectRoot}/index.html`,
            inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
    basic.devServer = {
        disableHostCheck: true,
        contentBase: './dist', 
        inline: true,
        hot: true,
        host: "0.0.0.0",
        port:'8088'
    }
    // basic.devServer.proxy = {
    //     '/': {
    //         target: 'http://xxx.xxx.xxx:8000/',
    //         changeOrigin: true
    //     }
    // }
    return basic
}

module.exports = dev(basic)
