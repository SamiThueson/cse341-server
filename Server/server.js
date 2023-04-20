var express = require('express');
var app = express();
var router = express.Router()
const port = 3000;

const route = router.get('/', function (req, res) {
    res.send('Haley Johnston');
});

app.use('/', route);

app.listen(port, function () {
    console.log(`Listening on ${port}`);
});