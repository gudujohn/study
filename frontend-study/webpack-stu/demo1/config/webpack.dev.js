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
    }
}