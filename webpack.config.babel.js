import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: './src/js/components/Layout.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.min.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules|bower_components/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './public/css/main.css',
      allChunks: true
    })
  ]
};
