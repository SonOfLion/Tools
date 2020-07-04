module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /.s?css$/,
            use: ['babel-loader']
        }, ],
    }
};