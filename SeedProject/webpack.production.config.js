var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'source/index.js'),
        vendors: ['react']
    },
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "scripts/app.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, exclude: node_modules_dir, loaders: ["react-hot", "babel-loader"] },
            { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=styles/bootstrap/[name].[ext]' },
            { test: /\.(jpg|png|gif)$/, loader: 'file-loader?name=images/[name].[ext]' },
            { test: /\.css$/, loader: 'file-loader?name=styles/[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'scripts/vendors.js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: JSON.stringify(process.env.DEBUG)
        })
    ]
};
