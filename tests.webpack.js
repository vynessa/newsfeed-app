const context = require.context('./tests', true, /.tests\.jsx?$/);
context.keys().forEach(context);
