import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="form">
        <form action="">
          <div className="App">
            <h2>Login Page</h2>


            <div className="container">
              <label><b>Username</b></label><br></br>
              <input type="text" placeholder="Enter Username" required></input><br></br>

              <label><b>Password</b></label><br></br>
              <input type="password" placeholder="Enter Password" required></input><br></br>

              <button type="submit">Login</button>
            </div>

            <div className="container" style={{backgroundColor:"#f1f1f1"}}>
              <a href=""><span className="psw">Forgot password?</span></a><br></br>
              New User? <a href="">Create account.</a>
            </div>

          </div>
        </form>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
