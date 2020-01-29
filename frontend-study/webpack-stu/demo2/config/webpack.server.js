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
            // 处理 CSS 文件的 loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 scss 文件的 loader
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // 处理 图片路径的 loader
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            // name指定图片输出名词，hash最长32位
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
            // 处理 字体文件的 loader
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            // 配置 Babel 来转换高级的ES语法
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    devServer:{
        // 自动打开浏览器
        //open:true,
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