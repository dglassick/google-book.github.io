import axios from 'axios';

export default {
  // get books from google api
  getBooksGoogle: function (query) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
  },
  // gets all stored books
  getBooks: function () {
    console.log('route getting hit');
    return axios.get('/api/books');
  },
  // get single book based on id
  getBook: function (id) {
    return axios.get('/api/books' + id);
  },
  // saves book to datbase
  saveBook: function (savedBook) {
    return axios.post('/api/books/', savedBook);
  },
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id);
  }
};
