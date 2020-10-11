const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, '..', 'app'),
    compress: true,
    port: 9000,
    open: 'Brave Browser',
  }
});
