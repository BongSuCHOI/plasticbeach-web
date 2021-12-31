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
        filename: "asset/js/[contenthash].js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "asset/css/[contenthash].css",
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
            filename: 'asset/js/[contenthash].js',
            chunks: "all",
        },
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: true,
                },
            },
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
                test: /\.(s[ac]ss|css)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset",
                generator: {
                    filename: "asset/img/[contenthash].[ext]",
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
                    filename: "asset/font/[contenthash].[ext]",
                },
            },
        ],
    },
};
