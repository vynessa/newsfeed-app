const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'eval-source-map',
  entry: './src/js/client.jsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.min.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'News Feed App',
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      beautify: false,
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_KEY': JSON.stringify(process.env.API_KEY)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss']
  },
};

module.exports = config;
