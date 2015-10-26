var webpack = require('webpack');

module.exports = {
    entry: "./source/index.js",
    output: {
        path: __dirname,
        filename: "scripts/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: JSON.stringify(process.env.DEBUG)
})
    ]
};
