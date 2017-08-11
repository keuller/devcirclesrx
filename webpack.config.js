let path = require('path')
let webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')

let extractCSS = new ExtractTextPlugin("css/app.css")
  , extractSCSS = new ExtractTextPlugin("css/build.css")

let rxjs = [
  'rxjs/Subject', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/observable/fromPromise',
  'rxjs/add/operator/mergeMap', 'rxjs/add/operator/map', 'rxjs/add/operator/startWith', 
  'rxjs/add/operator/scan', 'rxjs/add/operator/catch', 'rxjs/add/operator/debounce'
]

let config = {
    entry:{
        bundle: path.join(__dirname, 'src/index.js'),
        runtime: ['preact', 'preact-router', 'uuid'],
        vendor: rxjs
    },

    output: {
        path: path.join(__dirname, 'dist'),
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
        }
        ]
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.jsx']
    },

    devServer: {
        historyApiFallback: true,
        port: '8000',
        noInfo: true
    },

    devtool: '#eval-source-map',

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        extractSCSS,
        extractCSS,
        new webpack.optimize.CommonsChunkPlugin({
            name: ['runtime', 'vendor'],
            warnings: false
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.devtool = '#source-map'
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}

module.exports = config
