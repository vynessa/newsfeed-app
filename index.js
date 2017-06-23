const Server = require('./server.js'),
  webpack = require('webpack'),
  port = (process.env.PORT || 8000),
  app = Server.app();

let config;
if (process.env.NODE_ENV === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  config = require('./webpack.config.babel.js');

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPathdist
  }));
} else {
  config = require('./webpack.deployment.config.js');
}

const compiler = webpack(config);


app.listen(port);
console.log(`Listening at http://localhost:${port}`);
