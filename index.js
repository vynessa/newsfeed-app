const Server = require('./server.js'),
  port = (process.env.PORT || 8080),
  app = Server.app();

console.log(process.env.NODE_ENV);
let config;
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  config = require('./webpack.config.babel.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
