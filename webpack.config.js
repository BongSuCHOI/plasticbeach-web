const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/js/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
    ],

    watch: true,

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset",
                generator: {
                    filename: "images/[name][ext]?[hash]",
                },
            },
            {
                test: /\.json$/,
                type: "asset",
                generator: {
                    filename: "json/[name][ext]?[hash]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset",
                generator: {
                    filename: "fonts/[name][ext]?[hash]",
                },
            },
            {
                test: /\.(mp4)$/,
                type: "asset",
                generator: {
                    filename: "video/[name][ext]?[hash]",
                },
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader",
                options: {
                    sources: {
                        list: [
                            {
                                tag: "source",
                                attribute: "src",
                                type: "src",
                            },
                        ],
                    },
                },
            },
        ],
    },
};
