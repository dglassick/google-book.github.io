import React from 'react';
import Button from '../Button/Button';

function SearchCard({ title, link, id, author, image, description, saveBook }) {
  return (
    <div className='result-card'>
      <div className='row text-center result-header'>
        <div className='col-3'>
          <h4>{title}</h4>
          <p className='lead'>
            Written by: <br /> {author}
          </p>
        </div>
        <span className='col-3 offset-6'>
          <Button href={link}>View</Button>
          <Button id={id} onClick={event => saveBook(event)}>
            Save
          </Button>
        </span>
      </div>
      <div className='row'>
        <hr />
      </div>
      <div className='row'>
        <div className='col-3 text-center'>
          <img src={image} alt={title} />
        </div>
        <div className='col-9'>
          <p className='lead'>Description: {description}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
