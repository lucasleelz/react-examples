/**
 *  entry: 入口文件，
 *  path: 输出路径，
 *  filename: 输出文件名，
 *  module loaders: 正则表达式，除了node_modules符合正则的都要使用babel-loader编译。
 */
module.exports = {
    entry: './src/client',
    output: {
        path: `${__dirname}/static/dist`,
        filename: 'main.js'
    },
    module: {
        loaders: [{test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}]
    }
}