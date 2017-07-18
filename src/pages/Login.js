import React, {PropTypes} from "react";
import { Link,
	BrowserRouter as Router,
	Redirect,
} from 'react-router-dom';
import axios from 'axios'
import $ from 'jquery'
import '../App.css';
import Dash from "./Dash";
import Auth from "./Auth";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';


export default class Login extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = { credentials: {uid: '', password: '' }, session: !!sessionStorage.jwt};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onFormChange = this.onFormChange.bind(this);
	}

	onFormChange(e) {
		// this.setState({
		// 	[e.target.name]: e.target.value,
		// });
		const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
	}

	onFormSubmit(e) {

		e.preventDefault();
		{$("input").val("") };
		//console.log(this.state);
		this.props.actions.logInUser(this.state.credentials);
		// axios({
		// 	url: this.props.action,
		// 	method: 'post',
		// 	headers: {
		// 		'Accept':'application/json'
		// 	},
		// 	data: {
		// 		uid: this.state.credentials.uid,
		// 		password: this.state.credentials.password
		// 	}
		// })
		// .then(function (response) {
		// 	console.log(response);
		// })
		//
		// .catch(function (error) {
		// 	if (error.response) {
		// 		console.log(error.response.data);
		// 		console.log(error.response.status);
		// 		console.log(error.response.headers);
		// 	}
		// });
		//
		// this.setState({ uid: '', password: '' });
	}


	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } }
    //const { redirectToReferrer } = this.state

    if (this.props.redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
		else return (

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
							required onChange={this.onFormChange} value={this.state.credentials.uid}/><br />

							<input type="password" placeholder="PASSWORD" name="password"
								required onChange={this.onFormChange} value={this.state.credentials.password}/><br />

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

		function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Login);
