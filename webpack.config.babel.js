import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
  devtool: 'eval-source-map',
  entry: './src/js/client.js',
  output: {
    path: __dirname,
    // path: path.join(__dirname, 'dist'),
    filename: 'dist/client.min.js',
    publicPath: 'dist'

  },
  // devServer: {
  //   contentBase: '/src',
  //   compress: true,
  //   port: 9000
  // },
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

export default config;
