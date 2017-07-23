/**
 * webpack-dev-middleware：将webpack与express结合使用。通过该中间件打包后把资源读取到内存中。
 *  还可以监控代码变动，一旦代码变动，就停止旧代码的资源服务，等到编译完成后继续提供新的资源服务。
 * webpack-hot-middleware：实现热替换。
 *
 * Created by lucas lee on 2017/7/22.
 */
/* eslint-disable */

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var Express = require('express')

var config = require('./webpack.config')

var app = new Express()
var compiler = webpack(config)
var port = 3000

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')
})

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
