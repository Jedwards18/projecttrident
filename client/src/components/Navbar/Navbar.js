import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {
    state = {
        username: "",
        password: "",
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.username || !this.state.password) {
            alert("Please enter a username and password");
        } else {
            alert("Welcome!")
        }

        this.setState({
            username: "",
            password: "",
        })
    };

    render() {
        return (
            <div className="header" id="navbar">
            <div className="ui grid">
                <div className="ui left aligned three wide column" id="logo">
                    <img id="logo-image" src="https://cdn2.vectorstock.com/i/1000x1000/45/56/trident-logo-template-vector-17464556.jpg"></img>
                </div>
                <div className="six wide column"></div>
                <div className="ui right floated two wide column" id="username">
                    <div className="ui right aligned input" id="username-input">
                        <input value={this.state.username} onChange={this.handleInputChange} type="text" name="username" placeholder="Username"></input>
                    </div>
                </div>
                <div className="ui right floated two wide column" id="password">
                    <div className="ui input" id="password-input">
                        <input value={this.state.password} onChange={this.handleInputChange} type="text" name="password" placeholder="Password"></input>
                    </div>
                </div>
                <div className="ui right floated two wide column" id="submit-button">
                    <button 
                    className="ui button" 
                    type="submit"
                    onClick={this.handleFormSubmit}
                    >
                    Submit
                    </button>
                </div>
            </div>
        </div>
        )
    }
};

export default Navbar;