let path = require("path");
let common = require("./webpack.common");
let merge = require("webpack-merge");
let {CleanWebpackPlugin} = require("clean-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
let TerserPlugin = require("terser-webpack-plugin");
let HTMLWebpackPlugin = require('html-webpack-plugin');
let CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
      filename: "[name].[contentHash].bundle.js",
      path: path.resolve(__dirname, "build")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HTMLWebpackPlugin({
                template: "./src/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    removeComments: true,
                    collapseWhitespace: true,
                }
            }) 
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                './src/sp-config.json',
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
                ],
            },
        ]
    }

  });