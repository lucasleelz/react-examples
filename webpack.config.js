/**
 *  devtool: 开发工具，生成源代码映射，方便调试
 *  module loaders: 正则表达式，除了node_modules符合正则的都要使用babel-loader编译。
 *  entry：入口文件
 *      程序的入口文件index.js
 *      用于热替换的功能
 *          原理：先连接上服务器，等着接受需要重新编译代码的通知，一旦代码变动，就会受到通知进而更新客户端代码
 *  output：输出配置
 *      path：输出的硬盘路径，这次编译后的代码在内存中，因此这个值无意义。
 *      filename：输出的文件名
 *      publicPath：公共路径，所有资源的URL前缀。是虚拟路径，硬盘上没有。
 *  plugins：
 *      OccurrenceOrderPlugin：
 *          给经常使用的模块分配最小长度的ID。
 *      HotModuleReplacementPlugin：
 *          用于热替换。
 */

var path = require('path')
var webpack = require('webpack')

/**
 *
 * @type {{devtool: string, entry: [*], output: {path: (*), filename: string, publicPath: string}, plugins: [*], module: {loaders: [*]}}}
 */
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