module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'rgui.min.js',
        library: 'R',
        libraryTarget: 'umd'
    },
    externals: {
        'regularjs': {
            root: "Regular",
            amd: "Regular",
            commonjs: "regularjs",
            commonjs2: "regularjs"
        }
    },
    module: {
        loaders: [
            { test: /\.rgl$/, loader: 'rgl' },
            { test: /\.js$/, exclude: /node_modules\/(?!rgui-)/,  loader: 'babel' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'export-wildcard' }
        ]
    }
}
