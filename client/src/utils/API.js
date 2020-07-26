import axios from 'axios';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const KEY = '&key=AIzaSyAkpfxqPqYYw5HpZ4Q-T8z_O5FTLx1es-w';

export default {
  // get books from google api
  getBooksGoogle: function (query) {
    return axios.get(URL + query + KEY);
  },
  // gets all stored books
  getBooks: function () {
    console.log('route getting hit');
    return axios.get('/api/books');
  },
  // get single book based on id
  getBook: function (id) {
    return axios.get('/api/books/' + id);
  },
  // saves book to datbase
  saveBook: function (savedBook) {
    return axios.post('/api/books', savedBook);
  },
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id);
  }
};
