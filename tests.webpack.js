require('core-js/es5');

const context = require.context('./tests', true, /.tests\.jsx?$/);
context.keys().forEach(context);
