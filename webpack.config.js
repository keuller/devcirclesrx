let path = require('path')
let webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let extractCSS = new ExtractTextPlugin("css/app.css")
  , extractSCSS = new ExtractTextPlugin("css/build.css")

let config = {
    mode: process.env.NODE_ENV,

    entry: {
        bundle: path.join(__dirname, 'src/index.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: extractCSS.extract([ 'css-loader' ])
        }, {
            test: /\.sass$/,
            use: extractSCSS.extract([ 'css-loader', 'sass-loader' ])
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx']
    },

    devServer: {
        hot: true,
        historyApiFallback: true,
        port: '8000',
        host: 'localhost'
    },

    devtool: '#eval-source-map',

    optimization: {
        nodeEnv: process.env.NODE_ENV || 'development',
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'async',
            minChunks: 1,
            automaticNameDelimiter: '-',
            automaticNameMaxLength: 30,
            cacheGroups: {
                runtime: {
                    filename: 'runtime.js',
                    test: /[\\/]node_modules[\\/](history|preact|preact-router)[\\/]/,
                    chunks: 'initial'
                },
                vendor: {
                    filename: 'vendor.js',
                    test: /[\\/]node_modules[\\/](rxjs|uuid)[\\/]/,
                    chunks: 'all'
                }
            }
        }
    },

    plugins: [
        extractSCSS,
        extractCSS
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.optimization.minimizer = [
        new UglifyJsPlugin({
            sourceMap: true,
            parallel: true,
            uglifyOptions: {
                compress: true,
                ecma: 6,
                mangle: true
            }
        })
    ]
}

module.exports = config
