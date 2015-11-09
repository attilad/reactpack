﻿var webpack = require('webpack');

module.exports = {
    entry: ["./source/index.js", "webpack-hot-middleware/client"],
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "scripts/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },
            { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=styles/bootstrap/[name].[ext]' },
            { test: /\.(jpg|png|gif)$/, loader: 'file-loader?name=images/[name].[ext]' },
            { test: /\.css$/, loader: 'file-loader?name=styles/[name].[ext]' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: JSON.stringify(process.env.DEBUG)
})
    ]
};
