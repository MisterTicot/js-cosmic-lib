const webpack = require('webpack')

const config = {
  devtool: 'source-map',
  module: {
    rules: [
     {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'postcss-loader']
     }
    ]
  }
}

const library = Object.assign({}, config, {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'cosmic-lib.js',
    library: 'cosmicLib',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: { 'stellar-sdk': 'stellar-sdk' }
})

const debug = Object.assign({}, config, {
  entry: './src/extra/debug.js',
  output: {
    path: __dirname,
    filename: 'debug.js',
    library: 'debug',
    libraryTarget: 'var'
  },
})

module.exports = [ debug, library ]
