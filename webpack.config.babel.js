import path from 'path';
import webpack from 'webpack';

// const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname,
    filename: 'js/bundle.js'
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
      }
    ]
  }
};
