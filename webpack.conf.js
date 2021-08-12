const webpack = require('webpack')
const path = require('path')

const rootPath = path.resolve(__dirname, 'src')

const config = {
    mode: 'production',
    entry: path.resolve(rootPath, '../', 'index.js'),
    output: {
        filename: 'nutils.min.js',
        path: path.resolve(rootPath, 'min'),
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