const basic = require('./basic')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const projectRoot = path.resolve(__dirname, '../')

function dev(basic){
    basic.mode = 'development'
    basic.output.filename = 'bundle.js'
    basic.module.rules.push({   
        test: /\.css$/, 
        use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
    })
    basic.plugins = [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${projectRoot}/index.html`,
            inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
    basic.devServer = {
        contentBase: './dist',
        inline: true,
        hot: true,
        host: "172.16.1.178",
        // proxy: {
        //     '/': {
        //         target: 'http://172.16.1.25/',
        //         changeOrigin: true
        //     }
        // }
    }
    return basic   
}

module.exports = dev(basic)
