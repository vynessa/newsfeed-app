const context = require.context('./__tests__', true, /.tests\.jsx?$/);
context.keys().forEach(context);
