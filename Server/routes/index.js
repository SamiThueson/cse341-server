var express = require('express');
var router = express.Router();
var myController = require('../controllers');

router.get('/', myController.myFunction);
router.get('/other', myController.otherFunction);

module.exports = router;