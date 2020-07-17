const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then(books => res.json(books))
      .catch(err => res.status(400).json(err));
  },
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(400).json(err));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then(book => res.json(book))
      .catch(err => res.status(400).json(err));
  },
  update: function (req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(book => res.json(book))
      .catch(err => res.status(400).json(err));
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(book => book.remove())
      .then(books => res.json(books))
      .catch(err => res.status(400).json(err));
  }
};
