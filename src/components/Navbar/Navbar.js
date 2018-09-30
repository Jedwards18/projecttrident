import React from "react";
import "./Navbar.css"

const Navbar = (props) => (
    <div className="header" id="navbar">
        <div className="ui grid">
            <div className="ui left aligned three wide column" id="logo">
                <img id="logo-image" src="https://cdn2.vectorstock.com/i/1000x1000/45/56/trident-logo-template-vector-17464556.jpg"></img>
            </div>
            <div className="three wide column"></div>
            <div className="ui right aligned three wide column" id="username">
                <div className="ui right aligned input" id="username-input">
                    <input type="text" name="username" placeholder="Username"></input>
                </div>
            </div>
            <div className="ui right aligned three wide column" id="password">
                <div className="ui right aligned input" id="password-input">
                        <input type="text" name="password" placeholder="Password"></input>
                </div>
            </div>
            <div className="ui right aligned two wide column" id="submit-button">
                <button 
                className="ui right aligned button" 
                type="submit"
                onClick={props.handleFormSubmit}
                >
                Submit
                </button>
            </div>
        </div>
    </div>
);

export default Navbar;