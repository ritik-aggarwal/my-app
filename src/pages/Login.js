import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <label><b>Username</b></label><br />
                        <input type="text" placeholder="Enter Username" name="uid"
                            required onChange={this.onFormChange} /><br />

                        <label><b>Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="password"
                            required onChange={this.onFormChange} /><br />

                        <button type="submit">Login</button>
                    </div>

                    <div className="container">
                        <a href=""><span className="psw">Forgot password?</span></a><br></br>
                        New User? <a href="">Create account.</a>
                    </div>

                </form>
            </div>
        );
    }
}