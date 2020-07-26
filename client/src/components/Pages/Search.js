import React, { useState } from 'react';
import Header from '../Header/Header';
import API from '../../utils/API';
import ResultsDiv from '../ResultsDiv/ResultsDiv';
import SearchBar from '../SearchBar/SearchBar';

function Search() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState({
    volumeInfo: {
      title: '',
      authors: [],
      imageLinks: {
        thumbnail: ''
      },
      previewLink: '',
      description: ''
    }
  });
  const [books, setBooks] = useState([]);

  function googleBooks(query) {
    API.getBooksGoogle(query)
      .then(res => {
        console.log(res.data.items);
        setResults(res.data.items);
        console.log(results);
        let data = res.data.items;
        data = data.map(book => {
          book = {
            key: book.id,
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            link: book.volumeInfo.infoLink
          };
          return book;
        });
        setBooks(data);
      })
      .catch(err => console.log(err));
  }

  function handleInputChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('form submit');
    googleBooks(search);
  }

  function handleSave(e) {
    e.preventDefault();
    console.log(results, 'this is results');
    let bookSave = books.filter(book => book.id === e.target.id);
    bookSave = bookSave[0];
    console.log(bookSave, 'this is bookSave');
    API.saveBook(bookSave)
      .then(console.log('Book added to Library'))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <SearchBar
          value={search}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
        <ResultsDiv data={results} handleSave={handleSave} />
      </div>
    </div>
  );
}

export default Search;
