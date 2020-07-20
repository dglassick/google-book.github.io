import React from 'react';

function SearchBar(props) {
  return (
    <div className='text-center search-form'>
      <input
        type='text'
        className='form-control'
        name='title'
        placeholder='Search for a book...'
        onChange={props.handleInputChange}
      />
      <button
        className='btn btn-block btn-primary'
        onClick={props.handleFormSubmit}
        type='submit'
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
