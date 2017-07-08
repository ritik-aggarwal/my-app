import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}