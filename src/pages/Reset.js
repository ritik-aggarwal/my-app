import React from "react";
//import { Link } from 'react-router-dom';
import $ from 'jquery'

export default class Reset extends React.Component {

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
      {$("input").val("")};
      //form.reset();
      console.log(this.state);
      if( this.state.password !== this.state.confirmpassword ) return alert("Password Missmatch");
      this.setState({ uid: '', eid: '', password: '', confirmpassword: '' });
    }

    render() {
        return (
            <div>
                <h1>Reset Password</h1>
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text" placeholder="REGISTERED USERNAME" name="uid"
                            required onChange={this.onFormChange} /><br />

                        <input type="email" placeholder="REGISTERED EMAIL" name="eid"
                            required onChange={this.onFormChange} /><br/>

                        <input type="password" placeholder="NEW PASSWORD" name="password"
                            required onChange={this.onFormChange} /><br />

                        <input type="password" placeholder="CONFIRM PASSWORD" name="confirmpassword"
                            required onChange={this.onFormChange} /><br />

                        <button type="submit">SAVE</button>
                    </div>

                </form>
            </div>
        );
    }
}
