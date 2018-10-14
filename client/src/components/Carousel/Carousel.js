import React from "react";
import "./Carousel.css";

const Carousel = () => (

    <div className="ui three cards">
        <div className="card">
            <div className="image">
                <img src="data:image/jpeg;base64,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"></img>
            </div>
            <div className="content">
                <div className="header">Welcome</div>
                <div className="description">
                    Welcome to Trident! Thank you for taking the time to visit our website. Thanks to modern technology, the world has never been more connected than it is right now. In an instant, anyone can share their thoughts, ideas and opinions with anyone on Earth. Though these advancements have been monumental in terms of standard of living in many countries, they have a new, major factors that every business must consider; their social media presence.
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                <img src="data:image/png;base64,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"></img>
            </div>
            <div className="content">
                <div className="header">To</div>
                <div className="description">
                    Social media platforms like Twitter and Yelp allow users to share their opinions of companies, or the results of their interactions with companies. The power of these platforms cannot be overstated. There are currently 2.56 billion global mobile social media users, with 1 million new active mobile social users added every day. 95% of online adults aged 18-34 are most likely to follow a brand via social networking, and 71% of consumers who have had a good social media service experience with a brand are likely to recommend it to others.
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqpGTxiPLrodE6muiJDq77wlHSrVu5DyNFJrl8L90DH7WLd8z"></img>
            </div>
            <div className="content">
                <div className="header">Trident</div>
                <div className="description">
                    Trident allows a company to harness the power of its social media presence, and maximize its exposure and marketing potential. Reviews and mentions on social media platforms are run through a sentiment analysis API, and valuable data about a company's target audience and/or customers is provided. The user will be able to gain detailed insight into the personality traits of their company's audience and customers to aid in developing better, more specific marketing campaigns. Trident also provides data regarding whether a company's current social media presence is positive or negative, and affords the company to view mentions and reviews from various social media platforms in one convenient place. If your company is interested in utilizing social media to its advantage, please sign up below. 
                </div>
            </div>
        </div>
    </div>
);

export default Carousel;