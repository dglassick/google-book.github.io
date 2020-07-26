import React from 'react';
import ViewButton from '../Button/ViewButton';
import DeleteButton from '../Button/DeleteButton';

function SaveCard(props) {
  return (
    <div className='result-card'>
      <div className='row text-center result-header'>
        <div className='col-3'>
          <h4>{props.title}</h4>
          <p className='lead'>
            Written by: <br /> {props.author}
          </p>
        </div>
        <span className='col-3 offset-6'>
          <ViewButton href={props.link}>View</ViewButton>
          <DeleteButton id={props.id} handleDelete={props.handleDelete}>
            Delete
          </DeleteButton>
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

export default SaveCard;
