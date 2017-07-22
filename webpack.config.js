/**
 *  entry: 入口文件，
 *  path: 输出路径，
 *  filename: 输出文件名，
 *  module loaders: 正则表达式，除了node_modules符合正则的都要使用babel-loader编译。
 */

var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "/static/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{test: /\.js$/, exclude: /node_modules/, include: __dirname, loaders: ['babel-loader']}]
    }
}