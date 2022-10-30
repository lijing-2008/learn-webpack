const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {DefinePlugin} = require("webpack")
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js", // assetModuleFilename: "abc.png"
        clean: true
    },
    mode: "development",
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            util: path.resolve(__dirname, "./src/utils")
        },
        extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts", ".vue"],
    },
    module: {
        // 用来配置loader
        rules: [{
            //  告诉webpack匹配什么文件
            test: /\.css$/, // use中的多个loader的使用顺序是从右到左
            // use: [
            //     {loader: "style-loader"},
            //     {loader: "css-loader"}
            // ]
            use: ["style-loader", "css-loader", "postcss-loader"]
        }, {
            test: /\.less$/, use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
        }, {
            test: /\.(png|jpe?g|svg|gif)$/, // 使用内置模块
            // 1.打包两张图片，并且这两个图片有自己的地址，设置到img/src中和background-image的url中
            // type: "asset/resource"
            // 2.将图片进行了base64编码,编码后的源码直接放到了打包后的bundle.js中
            // type: "asset/inline"
            // 3.合理的规范：对于小一点的图片可以进行base64编码，对于大一点的图片单独图片打包形成url图片
            type: "asset", parser: {
                dataUrlCondition: {
                    maxSize: 80 * 1024
                }
            }, generator: {
                // 占位符
                // name:指向原来的图片名称
                // ext:扩展名(带.)
                // hash:webpack生成的hash值
                filename: "img/[name]_[hash:8][ext]"
            }
        }, {
            test: /\.js$/, use: [{
                loader: "babel-loader",
                // options: {
                //     plugins: ["@babel/plugin-transform-arrow-functions", "@babel/plugin-transform-block-scoping"]
                // }
            }]
        }

        ]
    },
    plugins: [
        // 清理bundle内容,现在可以直接在output中设置
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "hello world"
        }),
        new DefinePlugin({
            "BASE_URL": "'./'",
            coderli: "'lj'"
        })
    ],
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

}
