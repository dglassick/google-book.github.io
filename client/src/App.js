import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Pages/Search';
import './App.css';
import SavedBooks from './components/Pages/SavedBooks';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/saved' component={SavedBooks} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
