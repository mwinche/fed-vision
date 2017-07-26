const express = require('express');

const entry = require('./webpack-assets.json').main.js;

const static = require('./dist/server').default([ entry ]);

const app = express();

app.get('/', (req, res) => {
  res.send(static());
});

app.use(express.static('./dist/client'));

app.listen(8000, () => {
  console.log('Service started on port 8000');
});
