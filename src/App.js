import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { uname: '', pswd: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  onFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //console.log("Value: " + e.target.value);
  }

  onFormSubmit(e) {
    e.preventDefault();

  //   fetch(this.props.formAction, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({uname: this.state.uname, pswd: this.state.pswd})
  //   });
  //
  //   this.setState({uname: '', pswd: ''});
   }

  render() {
    return (
      <div className="App">
        <form
          id="main-login"
          action={this.props.action}
          method={this.props.method}
          onSubmit={this.onFormSubmit}>
            <h2>Login Page</h2>
            <div className="container">
              <label><b>Username</b></label><br/>
              <input type="text" placeholder="Enter Username" name="uname"
              onChange={this.onFormChange}/><br/>

              <label><b>Password</b></label><br/>
              <input type="password" placeholder="Enter Password" name="pswd"
               onChange={this.onFormChange}/><br/>

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
