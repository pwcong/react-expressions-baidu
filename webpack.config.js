var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'example', 'src', 'app.js'),
    output: {
        filename: 'bundle.js'
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['stage-0', 'es2015', 'react']
                }
                
            }


        ]

    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'example'),
        inline: true,
        port: 3000
    }
}