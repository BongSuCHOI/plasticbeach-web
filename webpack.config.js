const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/js/index.js",

    output: {
        path: path.resolve(__dirname, "docs"),
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
                        plugins: ["@babel/plugin-transform-runtime"]
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
        ],
    },
};
