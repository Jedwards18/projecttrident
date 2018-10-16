import React from "react";
import "./Carousel.css";
import business from "../../images/business.png"
import wordcloud from "../../images/wordcloud.jpg"
import tridentlogo from "../../images/tridentlogo.png"

const Carousel = () => (
    <div className="ui grid">
        <div className="row">
            <div className="six wide column"></div>
            <div className="five wide column">
                <img src={tridentlogo}></img>
            </div>
        </div>
        <div className="row">
            <div className="two wide column"></div>
            <div className="three wide column">
                <div className="header">Welcome</div>
                <div className="description">
                    Welcome to Trident! Thank you for taking the time to visit our website. Thanks to modern technology, the world has never been more connected than it is right now. In an instant, anyone can share their thoughts, ideas and opinions with anyone on Earth. Though these advancements have been monumental in terms of standard of living in many countries, they have a new, major factors that every business must consider; their social media presence.
                </div>
                <br></br><br></br>
                <img src={business}></img>
            </div>
            <div className="six wide column">
                <img src={wordcloud}></img>
                <br></br><br></br>
                <div className="header">Imagine a Website</div>
                <div className="description">
                    Social media platforms like Twitter and Yelp allow users to share their opinions of companies, or the results of their interactions with companies. The power of these platforms cannot be overstated. There are currently 2.56 billion global mobile social media users, with 1 million new active mobile social users added every day. 95% of online adults aged 18-34 are most likely to follow a brand via social networking, and 71% of consumers who have had a good social media service experience with a brand are likely to recommend it to others.
                </div>
            </div>           
            <div className ="three wide column">
                <div className="header">What we do</div>
                <div className="description">
                    Trident allows a company to harness the power of its social media presence, and maximize its exposure and marketing potential. Reviews and mentions on social media platforms are run through a sentiment analysis API, and valuable data about a company's target audience and/or customers is provided. The user will be able to gain detailed insight into the personality traits of their company's audience and customers to aid in developing better, more specific marketing campaigns. Trident also provides data regarding whether a company's current social media presence is positive or negative, and affords the company to view mentions and reviews from various social media platforms in one convenient place. If your company is interested in utilizing social media to its advantage, please sign up below. 
                </div>
            </div>
        </div>
    </div>
);

export default Carousel;