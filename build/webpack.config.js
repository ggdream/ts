const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.ts",
    output: {
        filename: "build.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    devServer: {
        contentBase: "./dist",
        stats: "errors-only",
        compress: false,
        host: "127.0.0.1",
        port: 8888
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}