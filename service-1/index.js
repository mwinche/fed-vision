const entry = require('./webpack-assets.json').main.js;

const static = require('./dist/server').default([ entry ]);

const ENDING_SLASH = /\/$/;

const redirect = (Location) => ({
  body: '',
  statusCode: 301,
  headers: { Location }
});

const main = ({ requestContext }, context, cb) => {
  const { path } = requestContext;
  
  if(path.match(ENDING_SLASH) === null){
    context.succeed(redirect(`${path}/`));

    return;
  }

  const body = static();
  const statusCode = 200;
  const headers = {
    'Content-Type': 'text/html'
  };

  context.succeed({ body, statusCode, headers });
};

module.exports = { main };
