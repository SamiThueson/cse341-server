var express = require('express');
var router = express.Router();
var myController = require('../controllers/contacts');

router.get('/', myController.allContacts);
router.get('/:id', myController.oneContact);

module.exports = router;