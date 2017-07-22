/**
 * Created by lucas lee on 2017/7/22.
 */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var Express = require('express')

var config = require('./webpack.config')

var app = new Express()
var compiler = webpack(config)
var port = 3000;

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