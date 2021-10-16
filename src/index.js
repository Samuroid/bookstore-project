import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App, { Homepage, Bookstore } from './App';

ReactDOM.render(
  <Router>
     <Switch>
      <Route exact path="/" component={ Homepage }/>
      <Route exact path="/books" component={ Bookstore }/>
    </Switch>
  </Router>,
  document.getElementById('root')
);