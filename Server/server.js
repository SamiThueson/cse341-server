var express = require('express');
var app = express();

app.use('/', require('./routes'));

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

app.listen(port, function () {
  console.log(`Listening on ${host}:${port}`);
});