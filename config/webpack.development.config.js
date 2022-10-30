const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common.config")
module.exports = merge(commonConfig, {
    mode: "development",
    devServer: {
        //默认即为true
        hot: true,
        //默认为8080
        port: 8888,
        //host默认为localhost
        // host: "0.0.0.0",
        open: true,
        //压缩
        compress: true

    }

})
