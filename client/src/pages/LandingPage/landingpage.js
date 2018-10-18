import React, { Component } from 'react';
import "./landingpage.css";
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
// const background = "https://c.pxhere.com/photos/96/02/black_white_blackandwhite_bw_blanc_noir_blancetnoir_bn-388432.jpg!d"

// const sectionStyle = {
//     width: "100%",
//     height: "100%",
//     backgroundImage: "url(" + background + ")",
// }

class LandingPage extends Component {
    
    render() {
        return (
            <div className="landing-page">
                <Navbar />
            {/* <Navbar /> */}
                {/* <section style={ sectionStyle }>
                </section> */}
                <div className="ui grid">
                    <div className="16 wide column">
                        <div className="landing-page-container">
                            <div className="landing-page-title">
                                Trident
                            </div>
                            <div className="landing-page-text">
                                Welcome to Trident! It's time to maximize your company's marketing potential by taking full advantage of its social media presence. Click Enter to begin.
                            </div>
                            <button className="ui massive inverted basic button" id="enter-button">
                                <Link to="/home">
                                    Enter
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default LandingPage;