const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: [
    {
      type: String,
      required: true
    }
  ],
  description: {
    type: String
  },
  cover: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  },
  pub_date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
