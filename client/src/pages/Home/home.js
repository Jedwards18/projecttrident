import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import {Input, FormBtn} from "../../components/NewAccount";
import API from "../../utils/API";
import "../../components/NewAccount/NewAccount.css";    

//################################################################################
class Home extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        query: "",
        businessName: "",
        location: "",
    };

    onLoad() {
        API.getTweets("taco bell");
    }
    


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.username || !this.state.password || !this.state.email || !this.state.location) {
            alert("Please complete the form in its entirety")
        } else if (this.state.password.length < 6) {
            alert("Please choose a more secure password")
        }
        else {
            alert("New account registered. Welcome!")
            API.saveCompany ({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                twitter: this.state.query,
                yelp: this.state.businessName + '' + this.state.location,
            })
        };

        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.email);
        console.log(this.state.query);
        console.log(this.state.businessName);
        console.log(this.state.location)

        const getTweets = async () => {
            let tweets = await API.getTweets(this.state.query);
            tweets = tweets.data;
            this.setState({tweets});
            console.log(this.state.tweets);
        };   
        getTweets()

        const getYelps = async () => {
            let yelps = await API.getYelps(this.state.businessName, this.state.location);
            yelps = yelps.data;
            this.setState({yelps});
            console.log(this.state.yelps);
        };
        getYelps()
        
        const getSentiment = async () => {
            let sentiment = await API.getSentiment(this.state.query, this.state.businessName, this.state.location);
            sentiment = {"polarity": sentiment.data.polarity, "confidence": sentiment.data.polarity_confidence};
            this.setState({sentiment});
            console.log(this.state.sentiment);
        };
        getSentiment()

        const getPersonality = async () => {
            let personality = await API.getPersonality(this.state.query, this.state.businessName, this.state.location)
            personality = personality.data
            this.setState({personality});
            console.log(this.state.personality);
        };
        getPersonality()

        this.setState({
            username: "",
            password: "",
            email: "",
            query: "",
            businessName: "",
            location: "",
        });
    };
      
    render() {
        return (
            <div>
                <Carousel />
                <div className="ui form" id="new-account-form">
                    <h4 className="ui dividing header" id="new-account-form-header">New Account Setup</h4>
                    <div className="field">
                        <div className="fields">
                            <div className="five wide field">
                                <label>Username</label>
                                <Input value={this.state.username} onChange={this.handleInputChange} type="text" name="username" placeholder="Username"></Input>
                            </div>
                            <div className="six wide field">
                                <label>Email</label>
                                <Input value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="Email"></Input>
                            </div>
                            <div className="five wide field">
                                <label>Password</label>
                                <Input value={this.state.password} onChange={this.handleInputChange} type="text" name="password" placeholder="Password"></Input>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="fields">
                            <div className="eight wide field">
                                <label>Twitter Handle</label>
                                <Input value={this.state.query} onChange={this.handleInputChange} type="text" name="query" placeholder="Twitter Handle"></Input>
                            </div>
                            <div className="eight wide field">
                                <label>Business Name</label>
                                <Input value={this.state.businessName} onChange={this.handleInputChange} type="text" name="businessName" placeholder="Business Name"></Input>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="fields">
                            <div className="four wide field"></div>
                            <div className="eight wide field">
                                <label>Location (City and State)</label>
                                <Input value={this.state.location} onChange={this.handleInputChange} type="text" name="location" placeholder="City and State"></Input>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="fields">
                            <div className="fifteen wide field"></div>
                            <FormBtn className="ui button" onClick={this.handleFormSubmit}>
                                Submit
                            </FormBtn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;