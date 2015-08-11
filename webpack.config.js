var webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + '/src/index.js',
        vendors: [
            'jquery',
            'lodash',
            'angular',
            'angular-resource',
            'bootstrap',
            'angular-ui-router'
        ]
    },

    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /.html$/, loader: 'raw'}
        ]

    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery'
        }),

        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};