module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: "rgui.min.js"
    },
    module: {
        loaders: [
            { test: /\.rgl$/, loader: 'rgl' },
            { test: /\.js$/, loader: 'babel'}
        ]
    }
}
