import React from "react";
import "./NewAccount.css";

const NewAccount = (props) => (
    <div className="new-account-form">
        <div className="new-account-form-header">Set Up New Account</div>
        <form className="ui form">
            <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username"></input>
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="password" placeholder="Password"></input>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email"></input>
            </div>
            <div className="field">
                <label>Twitter Handle</label>
                <input type="text" name="twitter-handle" placeholder="Twitter Handle"></input>
            </div>
            <div className="field">
                <label>Business Name</label>
                <input type="text" name="business-name" placeholder="Business Name"></input>
            </div>
            <div className="field">
                <label>City</label>
                <input type="text" name="city" placeholder="City"></input>
            </div>
            <div className="field">
                <label>State</label>
                <select className="ui fluid dropdown">
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

            <button 
                className="ui button" 
                type="submit"
                onClick="handleFormSubmit"
                >
                Submit
            </button>
        </form>
    </div>
);

export default NewAccount; 