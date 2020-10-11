const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, '..', 'app/index.tsx'),
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s?)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json',],
    modules: [path.join(__dirname, '..', 'app'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '..', "app/index.html")
    })
  ],
  output: {
    path: path.join(__dirname, '..', 'app'),
    filename: '[name].js'
  },
}
