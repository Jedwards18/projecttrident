import React, { Component } from "react";
import "./NewAccount.css";

const NewAccount = props => (

    // state = {
    //     username: "",
    //     password: "",
    //     email: "",
    //     twitterHandle: "",
    //     businessName: "",
    //     city: "",
    //     st: "",
    // };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();

    //     if (!this.state.username || !this.state.password || !this.state.email || !this.state.twitterHandle || !this.state.businessName || !this.state.city || !this.state.st) {
    //         alert ("Please complete the form in its entirety")
    //     } else if (this.state.password.length < 6) {
    //         alert ("Please choose a more secure password")
    //     }
    //     else {
    //         alert("New account registered. Welcome!")
    //     }
    //     console.log(this.state.username);
    //     console.log(this.state.password);
    //     console.log(this.state.email);
    //     console.log(this.state.twitterHandle);
    //     console.log(this.state.businessName);
    //     console.log(this.state.city);
    //     console.log(this.state.st);

    //     this.setState({
    //         username: "",
    //         password: "",
    //         email: "",
    //         twitterHandle: "",
    //         businessName: "",
    //         city: "",
    //         st: "",
    //     });
    // };
    <div className="ui form" id="new-account-form">
    <h4 className="ui dividing header" id="new-account-form-header">New Account Setup</h4>
    <div className="field">
        <div className="fields">
            <div className="five wide field">
                <label>Username</label>
                {/* <input value={this.state.username} onChange={this.handleInputChange} type="text" name="username" placeholder="Username"></input> */}
                <input {...props} />
            </div>
            <div className="six wide field">
                <label>Email</label>
                {/* <input value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="Email"></input> */}
                <input {...props} />
            </div>
            <div className="five wide field">
                <label>Password</label>
                {/* <input value={this.state.password} onChange={this.handleInputChange} type="text" name="password" placeholder="Password"></input> */}
                <input {...props} />
            </div>
        </div>
    <div className="field">
        <div className="fields">
            <div className="eight wide field">
                <label>Twitter Handle</label>
                {/* <input value={this.state.twitterHandle} onChange={this.handleInputChange} type="text" name="twitterHandle" placeholder="Twitter Handle"></input> */}
                <input {...props} />
            </div>
            <div className="eight wide field">
                <label>Business Name</label>
                {/* <input value={this.state.businessName} onChange={this.handleInputChange} type="text" name="businessName" placeholder="Business Name"></input> */}
                <input {...props} />
            </div>
        </div>
    </div>
    <div className="field">
        <div className="fields">
            <div className="eight wide field">
                <label>Location</label>
                {/* <input value={this.state.city} onChange={this.handleInputChange} type="text" name="city" placeholder="City"></input> */}
                <input {...props} />
            </div>
        </div>
    </div>
    <div>
        <button {...props} className="ui button">
            {props.children}
        </button>
        </div>
    </div>
</div>
);

export default NewAccount; 