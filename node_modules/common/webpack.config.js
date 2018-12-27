const {resolve} = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'index.js'),
    output: {
        path: resolve(__dirname, 'votinh1234'),
        filename: 'test1.js',
        library: 'scrollSpy'
    },
    plugins: [
        new UglifyJsPlugin({
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        })
    ]
}
