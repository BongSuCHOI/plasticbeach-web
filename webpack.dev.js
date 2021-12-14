const { merge } = require("webpack-merge");
const config = require("./webpack.config.js");

module.exports = merge(config, {
    mode: "development",
    devtool: 'eval-cheap-source-map',
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        hot: true,
    }
});
