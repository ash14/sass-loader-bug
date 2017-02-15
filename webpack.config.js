const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.scss',
    output: {
        filename: 'output.css'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            
            // /*
            use: ExtractTextPlugin.extract({
                use: [
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true, outputStyle: 'compressed'}}
                ],
                fallback: 'style-loader'
            })
            // */

            /* this works though
            use: [
                {loader: 'css-loader', options: {sourceMap: true}},
                {loader: 'sass-loader', options: {outputStyle: 'compressed', sourceMap: true}
            }]
            */

        }]
    },
    plugins: [
        new ExtractTextPlugin('output-extracted.css')
    ],
    devtool: 'source-map'
};
