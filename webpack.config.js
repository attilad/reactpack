var webpack = require('webpack');

var jsDir = 'scripts/';
var cssDir = 'styles/';
var imgDir = 'images/';
var fontsDir = 'styles/bootstrap/';

module.exports = {
    entry: ["./source/index.js", "webpack-hot-middleware/client"],
    output: {
        path: __dirname,
        publicPath: "/",
        filename: jsDir + "bundle.js",
        apiUrl: 'http://localhost:51926/api/'
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },
            { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=' + fontsDir + '[name].[ext]' },
            { test: /\.(jpg|png|gif)$/, loader: 'file-loader?name=' + imgDir + '[name].[ext]' },
            { test: /\.css$/, loader: 'file-loader?name=' + imgDir + '[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: JSON.stringify(process.env.DEBUG)
          }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
         })
    ]
};
