const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["transform-class-properties"]
                }
            }
        }]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        publicPath: "/dist/"
    }
};