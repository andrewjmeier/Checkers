module.exports = {
    entry: "./src/checkers.js",
    output: {
        path: __dirname,
        filename: "checkers.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
