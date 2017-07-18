import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
//import {requireAuth} from "./pages/Login";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import Dash from "./pages/Dash";
import Footer from "./components/Footer";
import PrivateRoute from "./pages/Auth";
var requireAuth = require("./pages/Login")

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/reset" component={Reset} />
            <Route path="/dash" component={Dash} onEnter={requireAuth}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }


  function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
