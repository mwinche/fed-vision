const express = require('express');

const static = require('./dist/server').default(['./app.js']);

const app = express();

app.get('/', (req, res) => {
  res.send(static());
});

app.use(express.static('./dist/client'));

app.listen(8000, () => {
  console.log('Service started on port 8000');
});
