const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge (common, {
    mode: "development",
    devtool: "none",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dev"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }) 
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
});