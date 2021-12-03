const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/js/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "fonts/[name][ext]",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
    ],

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
            // { mp4 추가해야함
            //     test: /\.mp4$/,
            //     use: {
            //         loader: "url-loader",
            //         options: {
            //             name: "video/[name][ext]?[hash]",
            //             limit: 10000,
            //         },
            //     },
            // },
            // {
            //     test: /\.html$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: "html-loader",
            //             options: {
            //                 sources: {
            //                     list: [
            //                         {
            //                             tag: "source",
            //                             attribute: "src",
            //                             type: "src",
            //                         },
            //                     ],
            //                 },
            //             },
            //         },
            //     ],
            // },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset",
                generator: {
                    filename: "images/[name][ext]?[hash]",
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
        ],
    },
};
