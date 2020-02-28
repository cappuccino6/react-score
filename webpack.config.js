'use strict'

const path = require('path')

module.exports = {

  mode: 'development',

  devtool: 'inline-source-map',

  entry: {
    main: './example/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.join(__dirname, './example/dist')
  },

  optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
    minimize: true,
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}