import React from "react";
import "./Carousel.css";
import business from "../../images/business.png"
import wordcloud from "../../images/wordcloud.jpg"
import tridentlogo from "../../images/tridentlogo.png"
import aylienlogo from "../../images/aylienlogo.png"
import watsonlogo from "../../images/watsonlogo.png"
import socialplatform from "../../images/socialplatform.png"

//Welcome to Trident! Thank you for takturbdixing the time to visit our website. Thanks to modern technology, the world has never been more connected than it is right now. In an instant, anyone can share their thoughts, ideas and opinions with anyone on Earth. Though these advancements have been monumental in terms of standard of living in many countries, they have a new, major factors that every business must consider; their social media presence.
//Social media platforms like Twitter and Yelp allow users to share their opinions of companies, or the results of their interactions with companies. The power of these platforms cannot be overstated. There are currently 2.56 billion global mobile social media users, with 1 million new active mobile social users added every day. 95% of online adults aged 18-34 are most likely to follow a brand via social networking, and 71% of consumers who have had a good social media service experience with a brand are likely to recommend it to others.
//Trident allows a company to harness the power of its social media presence, and maximize its exposure and marketing potential. Reviews and mentions on social media platforms are run through a sentiment analysis API, and valuable data about a company's target audience and/or customers is provided. The user will be able to gain detailed insight into the personality traits of their company's audience and customers to aid in developing better, more specific marketing campaigns. Trident also provides data regarding whether a company's current social media presence is positive or negative, and affords the company to view mentions and reviews from various social media platforms in one convenient place. If your company is interested in utilizing social media to its advantage, please sign up below. 
//<img alt="business things" src={business}></img> <img alt="tridentlogo" src={tridentlogo}></img> <img alt ="a wordcloud" src={wordcloud}></img>

const Carousel = () => (
    <div className="ui grid">

        <div className="row">
            <div className="seven wide column"></div>
            <div className="three wide column">
                <h1>Trident</h1>
            </div>
        </div>

        <div className="row">
            <div className="three wide column"></div>
            <div className="six wide column">
                <div className="header">Harness Machine Learning for your Internet Presence.</div>
                <div className="description">
                    With the use of IBM Watson and Aylien Artificial Intelligence.
                </div>
                <img alt="Aylien" src={aylienlogo}></img>
            </div>
            <div className="one wide column"></div>
            <div className="four wide column right aligned">
                <img alt="IBM Watson" src={watsonlogo}></img>
                <div className="header">Integrated Social Media</div>
                <div className="description">
                    Connect your platforms to gain real-time Market Research.
                </div>
            </div>
        </div>

        <div className="row">
            <div className="five wide column"></div>
            <div className="seven wide column">
                <img alt="Social Platform" id="socialplatform" src={socialplatform}></img>
            </div>
        </div>

    </div>
);

export default Carousel;