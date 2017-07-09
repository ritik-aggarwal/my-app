import React from "react";
import $ from 'jquery'

export default class Signup extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { uid: '', eid: '', password: '', confirmpassword: '' };
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
      console.log(this.state);
      if( this.state.password !== this.state.confirmpassword ) return alert("Password Missmatch");
      this.setState({ uid: '', eid: '', password: '', confirmpassword: '' });
    }


    render() {
      return (
        <div className="App">
          <form
            id="main-login"
             action={this.props.action}
             method={this.props.method}
             onSubmit={this.onFormSubmit}
            >
            <h2>Signup Page</h2>
            <div className="container">
              <input type="text" placeholder="USERNAME" name="uid"
                required onChange={this.onFormChange}/><br/>

                <input type="email" placeholder="EMAIL" name="eid"
                  required onChange={this.onFormChange}/><br/>

                <input type="password" placeholder="PASSWORD" name="password"
                  required onChange={this.onFormChange}/><br/>

                  <input type="password" placeholder="CONFIRM PASSWORD" name="confirmpassword"
                    required onChange={this.onFormChange}/><br/>

                  <button type="submit">CREATE ACCOUNT</button>
                </div>

              </form>
            </div>
      );
    }
}

Signup.defaultProps = {
      action: '',
      method: 'post',
     };
