import React from 'react';

function DeleteButton(props) {
  console.log(props.id, 'this is book id');
  return (
    <button
      type='button'
      className='btn btn-outline-dark btn-lg btn-block'
      id={props.id}
      onClick={props.handleDelete}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
