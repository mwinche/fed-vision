const entry = require('./webpack-assets.json').main.js;

const static = require('./dist/server').default([ entry ]);

const main = ({ requestContext }, context, cb) => {
  console.log(requestContext);

  const body = static();
  const statusCode = 200;
  const headers = {
    'Content-Type': 'text/html'
  };

  context.succeed({ body, statusCode, headers });
};

module.exports = { main };
