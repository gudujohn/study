const path = require('path')
module.exports={
    mode:'development',
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
    }
}