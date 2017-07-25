const static = require('./dist/server').default(['./static/app.js']);

const main = (event, context, cb) => {
  context.succeed(static());
};

module.exports = {
  main
};
