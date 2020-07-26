import React, { Fragment } from 'react';
import SearchCard from '../Card/SearchCard';

function ResultsDiv(props) {
  return (
    <div className='container-fluid' id='main-content'>
      {props.data.length ? (
        <Fragment>
          {props.data.map(book => (
            <SearchCard
              id={book.id}
              key={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors[0]}
              description={book.volumeInfo.description}
              href={book.volumeInfo.previewLink}
              handleSave={props.handleSave}
            />
          ))}
        </Fragment>
      ) : (
        <h3>Library Empty</h3>
      )}
      <SearchCard />
    </div>
  );
}

export default ResultsDiv;
