var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var compiler = webpack(config);

var app = express();
app.use('/api', proxy(url.parse('http://localhost:51926/api/')));
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});