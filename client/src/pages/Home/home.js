import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import {Input, FormBtn} from "../../components/NewAccount";
// import TweetSentiment from "../../utils/tweetsentiment";
// import YelpReviews from "../../utils/yelpreviews";
import "../../components/NewAccount/NewAccount.css"
const AYLIENTextAPI = require('aylien_textapi');
const Twitter = require('twitter');
const yelp = require('yelp-fusion');
require('dotenv').config()

const twitterClient = new Twitter({
    consumer_key: "mdQqcA4Wxr299VsGc9sxOjdfw",
    consumer_secret: "Cv3Npb3D4SJfyHkUwSYuPaC248o4PcRCAoYTiP1fvHfxNO0NQ5",
    access_token_key: "758504662022488064-vE7aMU0Zx6S9h52jwjsMOyzKQDMnZH9",
    access_token_secret: "HRo1s3VLeODyYinWfAPlfDFfR9EtSITO3DrwHXBELPbgG"
  });
  
const yelpKey ="_KhbuC8HXqKq-g3iKKJ0ZCKYk20JwBCiSSuA-D3ZdpUMOSrGRI--gylsgBjAt5_dD5VE6tNZyUQj1OfFVvFGdJIQrTUuN8IOHkCFNoSglaX5lYI7EnqG1mTMIivW3Yx" 
const yelpClient = yelp.client(yelpKey);

const textapi = new AYLIENTextAPI({
  application_id: "297378ca",
  application_key: "541a5c8142013a14cc4dca1084b86c28"
});

var PersonalityInsightsV2 = requir('watson-developer-cloud/personality-insights/v2');
require('dotenv').config()

var personalityInsights = new PersonalityInsightsV2({
  username: "132449e4-afac-4400-aba4-a3007ae50147",
  password: "LGMuoNluKVxT",
  url: 'https://gateway.watsonplatform.net/personality-insights/api/'
});
//################################################################################
class Home extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        twitterHandle: "",
        businessName: "",
        city: "",
        st: "",
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

        if (!this.state.username || !this.state.password || !this.state.email || !this.state.twitterHandle || !this.state.businessName || !this.state.city || !this.state.st) {
            alert("Please complete the form in its entirety")
        } else if (this.state.password.length < 6) {
            alert("Please choose a more secure password")
        }
        else {
            alert("New account registered. Welcome!")
        }
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.email);
        console.log(this.state.twitterHandle);
        console.log(this.state.businessName);
        console.log(this.state.city);
        console.log(this.state.st);

        this.setState({
            username: "",
            password: "",
            email: "",
            twitterHandle: "",
            businessName: "",
            city: "",
            st: "",
        });
    };

    getTweets = async (query) => {

        let tweets = await twitterClient.get('search/tweets', {q: query, count: 10});
        let tweetText = tweets.statuses.map(tweet => tweet.text)
        return tweetText;
      };
      
      
    searchBiz = async (term, location) => {
      
        let client = await yelpClient.search({ term: term, location: location })
          console.log(`${client.jsonBody.businesses[0].name}: ${client.jsonBody.businesses[0].id}`);
          return client.jsonBody.businesses[0].id;
        }
      
      
    getBizReviews = async (id) => {
      
        let reviews = await yelpClient.reviews(id)
        reviews = reviews.jsonBody.reviews.map(review => review.text)
        return reviews;
      }
      
      
    getYelps = async (term, location) => {
      
        let id = await searchBiz(term, location);
        let yelpReviews = await getBizReviews(id);
        return yelpReviews;
      };
      
      
    analyzeReviews = async (term, location, query) => {
        
        try {
          let tweetYelp = await Promise.all([getTweets(query), getYelps(term, location)]);
          tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
          let analysis = await textapi.sentiment({text: tweetYelp, mode: 'document'}, (err, res) => {console.log(res)});
          return analysis;
        } catch (err) {
          console.log(err);
        }
      }  
      
      // analyzeReviews("taco bell", "richmond, va", "taco bell");
      
      
    analyzeYelp = async (term, location) => {
      
        try {
          let yelpHelp = await getYelps(term, location);
          yelpHelp = yelpHelp.toString();
          let analysis = await textapi.sentiment({text: yelpHelp, mode: 'document'}, (err, res) => {console.log(res)});
        }
        catch (err){
          console.log(err);
        }
      }
      
      // analyzeYelp("taco bell", "richmond, va");
      
      // getYelps("firestone", "midlothian, va");
      
      
    testWatson = async (term, location, query) => {
      
        try {
          let tweetYelp = await Promise.all([getTweets(query), getYelps(term, location)]);
          tweetYelp = tweetYelp[0].concat(tweetYelp[1]).toString();
          let analysis = await personalityInsights.profile(
            { text: tweetYelp},
            function(err, res) {
              if (err) {
                console.log('error:', err);
              } else {
                console.log(JSON.stringify(res, null, 2));
              }
            }
          )
        } catch (err) {
          console.log(err);
        }
      };
      
    // testWatson("taco bell", "richmond, va", "taco bell");
      

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
                                <Input value={this.state.twitterHandle} onChange={this.handleInputChange} type="text" name="twitterHandle" placeholder="Twitter Handle"></Input>
                            </div>
                            <div className="eight wide field">
                                <label>Business Name</label>
                                <Input value={this.state.businessName} onChange={this.handleInputChange} type="text" name="businessName" placeholder="Business Name"></Input>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="fields">
                            <div className="eight wide field">
                                <label>City</label>
                                <Input value={this.state.city} onChange={this.handleInputChange} type="text" name="city" placeholder="City"></Input>
                            </div>
                            <div className="eight wide field">
                                <label>State</label>
                                <Input value={this.state.st} onChange={this.handleInputChange} type="text" name="st" placeholder="State"></Input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FormBtn className="ui button" onClick={this.handleFormSubmit}>
                            Submit
                        </FormBtn>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;