var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require('./db/connect');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDB((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${host}:${port}`);
  }
});