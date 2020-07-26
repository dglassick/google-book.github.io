import React from 'react';
import SaveButton from '../Button/SaveButton';
import ViewButton from '../Button/ViewButton';

function SearchCard(props) {
  console.log(props, 'this is props');
  return (
    <div className='result-card'>
      <div className='row text-center result-header'>
        <div className='col-3'>
          <h4>{props.title}</h4>
          <p className='lead'>
            Written by: <br /> {props.authors}
          </p>
        </div>
        <span className='col-3 offset-6'>
          <ViewButton
            href={props.link}
            rel='noopener noreferrer'
            target='_blank'
          >
            View
          </ViewButton>
          <SaveButton id={props.id} handleSave={props.handleSave} />
        </span>
      </div>
      <div className='row'>
        <hr />
      </div>
      <div className='row'>
        <div className='col-3 text-center'>
          <img src={props.image} alt={props.title} />
        </div>
        <div className='col-9'>
          <p className='lead'>Description: {props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
