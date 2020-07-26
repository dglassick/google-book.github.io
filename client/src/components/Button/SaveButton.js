import React from 'react';

function SaveBtn(props) {
  return (
    <button
      type='button'
      className='btn btn-outline-dark btn-lg btn-block'
      id={props.id}
      onClick={props.handleSave}
    >
      Save
    </button>
  );
}

export default SaveBtn;
