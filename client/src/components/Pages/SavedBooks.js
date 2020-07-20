import React, { Component } from 'react';
import Header from '../Header/Header';
import API from '../../utils/API';
import SaveCard from '../Card/SaveCard';

class SavedBooks extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => {
        console.log('route getting hit');
        this.setState({ results: res.data });
        console.log('results:', this.state.results);
      })
      .catch(err => {
        throw err;
      });
  }

  handleDeleteBook = event => {
    event.preventDefault();

    const bookID = event.target.getAttribute('data-id');

    const newState = { ...this.state };

    newState.results = this.state.results.filter(book => book._id !== bookID);
    // Filters out any books with the matching target id

    API.deleteBook(bookID)
      .then(response => {
        this.setState(newState);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <h3>Your Saved Books</h3>
          <div className='container-fluid' id='main-content'>
            {this.state.results.map(book => {
              return (
                <SaveCard
                  key={book._id}
                  title={book.title}
                  id={book._id}
                  link={book.link}
                  author={book.authors}
                  image={book.image}
                  description={book.description}
                  deleteBook={this.handleDeleteBook}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SavedBooks;
