import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route, exact} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={BrowserRouter}>
    <Route component={App}>
      <exact component={App}/>
      <Route path="/login" component={App}/>
    </Route>
  </Router>,
  document.getElementById('root'));
  registerServiceWorker();
