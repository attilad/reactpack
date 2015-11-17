var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var projectDir = 'SampleProject/';

var imagesDir = 'images/';
var stylesDir = 'styles/';
var scriptsDir = 'scripts/';
var fontsDir = 'styles/bootstrap/';

var imagesPath = path.join(projectDir, imagesDir);
var stylesPath = path.join(projectDir, stylesDir);
var scriptsPath = path.join(projectDir, scriptsDir);
var fontsPath = path.join(projectDir, fontsDir);

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'source/index.js'),
        vendors: ['react']
    },
    output: {
        path: __dirname,
        publicPath: "/",
        filename: scriptsPath + "app.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
            { test: /\.js$/, exclude: node_modules_dir, loaders: ["react-hot", "babel-loader"] },
            { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=' + fontsPath + '/[name].[ext]' },
            { test: /\.(jpg|png|gif)$/, loader: 'file-loader?name=' + imagesPath + '/[name].[ext]' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', scriptsPath + 'vendors.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: JSON.stringify(process.env.DEBUG)
        }),
        new ExtractTextPlugin(stylesPath + "[name].css"),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
         })
    ]
};
