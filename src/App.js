import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = { description: '' };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    fetch(this.props.formAction, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: this.state.description})
    });

    this.setState({description: ''});
  }

  render() {
    return (
      <div className="App">
        <form
          id="main-login"
          action={this.props.action}
          method={this.props.method}
          onSubmit={this.onSubmit}>
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

        </form>
      </div>
    );
  }
}

App.defaultProps = {
  action: 'http://api.brime.ml/user/login',
  method: 'post'
};

//module.exports = App;
