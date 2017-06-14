import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
  devtool: 'eval-source-map',
  entry: './src/js/client.jsx',
  output: {
    // path: 'dist',
    path: path.join(__dirname, 'dist'),
    filename: 'app.min.js'
  },
  devServer: {
    publicPath: '/',
    contentBase: './src',
    compress: true,
    port: 8080
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: './dist'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'News Feed App',
      hash: true,
      template: './src/index.html',
    }),

    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    })
  ]
};

export default config;
