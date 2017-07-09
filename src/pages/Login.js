import React from "react";
import { Link,
  //BrowserRouter as Router,
} from 'react-router-dom';
import axios from 'axios'
import $ from 'jquery'
import '../App.css';

export default class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { uid: '', password: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  onFormChange(e) {
     this.setState({
       [e.target.name]: e.target.value,
     });
 }

  onFormSubmit(e) {
      e.preventDefault();
      {$("input").val("") };
    //console.log(this.state);

      axios({
      url: this.props.action,
        method: 'post',
        headers: {
          'Accept':'application/json'
        },
        data: {
          uid: this.state.uid,
          password: this.state.password
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    // .then(response => {
    //   // Successful login, redirect to /upload
    //   Router.push('/signin');
    //
    // })

      this.setState({ uid: '', password: '' });
    }

    render() {
        return (
            <div>
              <p id="login_heading">BRIME</p>
              <p id="login_content">NOTE TAKING MADE EASY</p>
              <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onFormSubmit}>
                    <div className="container">

                        <input type="text" placeholder="USERNAME" name="uid"
                            required onChange={this.onFormChange} /><br />

                        <input type="password" placeholder="PASSWORD" name="password"
                            required onChange={this.onFormChange} /><br />

                        <button type="submit">Login</button>
                    </div>

                    <div className="container">
                        <a href=""><span className="forget_pass"><Link to="/reset">Forget Password?</Link></span></a><br></br>
                        New User? <a href=""><Link to="/signup">Create account</Link></a>.
                    </div>

                </form>
            </div>
        );
    }
}

Login.defaultProps = {
      action: 'http://brime.ml/user/login',
     };
