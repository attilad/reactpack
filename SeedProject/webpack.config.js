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
    }
};
