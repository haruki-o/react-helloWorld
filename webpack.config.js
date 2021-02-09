const path = require('path');
const HtmlWebpakPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    contentBase: path.resolve(__dirname, 'dist/index.html'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpakPlugin({
      template: path.resolve(__dirname, 'html/index.html'),
      filename: 'index.html'
    }),
  ]
}