const path = require("path");
const commonConfig = require("./webpack.common.config")
const {merge} = require("webpack-merge");

module.exports = merge(commonConfig, {
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "bundle.js", // assetModuleFilename: "abc.png"
        clean: true
    },
    mode: "production",

})
