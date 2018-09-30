import React from "react";
import "./Login.css";

const Login = (props) => (
    <div className="login-form">
        <div className="login-form-header">Login</div>
        <form className="ui form">
            <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username"></input>
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="password" placeholder="Password"></input>
            </div>
            <button 
                className="ui button" 
                type="submit"
                onClick={props.handleFormSubmit}
                >
                Submit
            </button>
        </form>
    </div>
);

export default Login