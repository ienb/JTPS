const path = require('path')
const { merge } = require('webpack-merge')
// const CleanWebpack = require('clean-webpack-plugin')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  mode:'development',
  devServer: {
    port: 9000,
    hot: true,
    open: false,
    historyApiFallback: true,
    compress: true,
  }
})
