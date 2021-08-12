// const webpack = require('webpack')
// const rootPath = path.resolve(__dirname)
const path = require('path')

const config = {
    mode: 'production',
    entry: path.resolve(__dirname,'src', 'index.js'),
    output: {
        filename: 'nutils.min.js',
        path: path.resolve(__dirname, "libs"),
        library: 'nutils',
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    }
}

module.exports = config