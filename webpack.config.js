module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel' },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
