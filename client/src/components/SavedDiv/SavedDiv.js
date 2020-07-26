import React, { useState, useEffect } from 'react';
import SaveCard from '../Card/SaveCard';
import API from '../../utils/API';

function SavedDiv() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then(res => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  function handleDelete(e) {
    e.preventDefault();
    console.log(books, 'this is delete books');
    let savedBook = books.filter(book => book._id === e.target.id);
    savedBook = savedBook[0]._id;
    API.deleteBook(savedBook)
      .then(window.location.reload(false))
      .catch(err => console.log(err));
  }

  return (
    <div className='container'>
      <h3>Your Saved Books</h3>
      <div className='container-fluid' id='main-content'>
        {books.map(book => {
          return (
            <SaveCard
              key={book._id}
              title={book.title}
              id={book._id}
              link={book.link}
              author={book.authors}
              image={book.image}
              description={book.description}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SavedDiv;
