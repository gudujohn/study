const path = require('path')
//const webpack = require('webpack')
//const htmlWebpackPlugin = require('html-webpack-plugin')  
module.exports={
    entry:{
        main:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname, '../dist'),
        filename:'index.js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader', 'css-loader', 'less-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer:{
        // 自动打开浏览器
        open:true,
        // 设置基本目录结构,用于找到程序打包地址
        contentBase:path.resolve(__dirname,'../src'),
        // 服务器的IP地址，可以使用IP也可以使用localhost
        host:'localhost',
        // 启动热更新
        hot:true,
        // 服务端压缩是否开启
        compress:true,
        // 配置服务端口号
        port:8080
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        // 内存中生成html页面插件
        // new htmlWebpackPlugin({
        //     template:path.join(__dirname, './src/index.html'),
        //     filename: 'index123.html'
        // })
    ]
}