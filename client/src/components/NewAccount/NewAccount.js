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
                <label>City</label>
                {/* <input value={this.state.city} onChange={this.handleInputChange} type="text" name="city" placeholder="City"></input> */}
                <input {...props} />
            </div>
            <div className="eight wide field">
                <label>State</label>
                {/* <select value={this.state.st} onChange={this.handleInputChange} name="st" className="ui fluid dropdown"> */}
                <select {...props}>
                    <option value="">State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
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