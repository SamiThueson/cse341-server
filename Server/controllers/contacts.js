const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

exports.allContacts =  async (req, res, next) => {
  const result = await mongodb.getDB().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

exports.oneContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDB()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

exports.createContact = async (req, res, next) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDB()
    .db()
    .collection('contacts')
    .insertOne(newContact);
  if (result) {
    return res.status(201).json(result);
  } else {
    return res.status(500).json(result.error);
  }
};

exports.updateContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDB()
    .db()
    .collection('contacts')
    .replaceOne({_id: userId}, contact);
  if (result) {
    return res.status(204).send();
  } else {
    return res.status(500).json(result.error);
  }
};

exports.deleteContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDB()
    .db()
    .collection('contacts')
    .deleteOne({ _id: userId });
  if (result) {
    return res.status(200).send();
  } else {
    return res.status(500).json(result.error);
  }
};