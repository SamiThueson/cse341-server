var express = require('express');
var router = express.Router();
var myController = require('../controllers/contacts');

router.get('/', myController.allContacts);
router.get('/:id', myController.oneContact);
router.post('/', myController.createContact);
router.put('/:id', myController.updateContact);
router.delete('/:id', myController.deleteContact);

module.exports = router;