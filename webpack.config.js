const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",

    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "asset/js/[name].js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "asset/css/[name].css",
        }),
        new CleanWebpackPlugin(),
    ],

    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            name: "vendor",
            filename: 'asset/js/vendor.js',
            chunks: "all",
        },
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset",
                generator: {
                    filename: "asset/img/[name][ext]?[hash]",
                },
            },
            {
                test: /\.json$/,
                type: "asset",
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/i,
                type: "asset",
                generator: {
                    filename: "asset/font/[name][ext]?[hash]",
                },
            },
        ],
    },
};
