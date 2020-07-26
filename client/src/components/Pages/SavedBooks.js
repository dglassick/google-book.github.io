import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import SavedDiv from '../SavedDiv/SavedDiv';

class SavedBooks extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <SavedDiv />
      </Fragment>
    );
  }
}

export default SavedBooks;
