var webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + '/src/index.js',
        vendors: [
            'jquery',
            'lodash',
            'angular',
            'angular-resource',
            'ui-router',
            'bootstrap'
        ]
    },

    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};