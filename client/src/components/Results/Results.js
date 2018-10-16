import React, { Component } from 'react';
// import OutputContainer from "../../components/OutputContainer";
import { PolarityConfidence } from "../../components/PolarityConfidence";
import { TabExampleBasic } from "../../components/TabExampleBasic";
import { PersonalityTraits } from "../../components/PersonalityTraits";
import { PolarityAnalysis } from "../../components/PolarityAnalysis";
import WordCloud from "../../components/WordCloud";
import  "../../components/OutputContainer/OutputContainer.css";
// import { PopupExampleBasic } from "../../components/NewAccount/";
import { ModalModalExample } from "../../components/OutputContainer";
import { List, ListItem } from "../../components/TwitterMentions";
// import {List, ListItem } from "../../components/YelpReviews";

class Results extends Component {
    constructor(props) {
        super(props);
    };
   
    componentDidMount() {
        this.handleClick();
    }

    handleClick() {
        
    }

    

    render() {
        return (
            <div>
                <div className="ui two column grid" id="output-container">
                <div id="output-container-header">Your results have been populated using the most recent data. <br></br>Go forth and maximize your company's potential!</div>
                <div className="row">
                    <div className="column">
                        <div id="personality-traits-results-grid">
                            {this.props.personality.length ? (
                                <List>
                                Personality Traits 
                                {this.props.personality.map((trait, i) => (
                                    <ListItem key={i}>
                                    <em>{trait.trait}</em>
                                    <ul>
                                        <li>{trait.percentage}</li>
                                    </ul>
                                    </ListItem>
                                ))}
                            </List>
                            ) : (
                                <h3>No Results to Display</h3>
                            )}
                        </div>
                    </div>
                    <div className="column">
                        <div id="polarity-analysis-results-grid">
                            <div id="polarity-analysis-results-header">Polarity Analysis</div>
                            <div className="ui two column divided grid">
                                <div className="row">
                                    <div className="column">
                                        <div id="polarity-result-grid">
                                            <div id="polarity-result-header">Polarity</div>
                                            <div id="polarity-result">
                                                {this.props.sentiment.polarity}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div id="polarity-confidence-result-grid">
                                            <div id="polarity-confidence-result-header">Polarity Confidence</div>
                                            <div id="polarity-confidence-result">
                                                {this.props.sentiment.confidence}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div id="word-cloud-grid">
                            <div id="word-cloud-header">Word Cloud</div>
                            <div id="word-cloud-data">
                            {this.props.yelps.length ? (
                              <List>
                                {this.props.yelps.map((yelp, i) => (
                                  <ListItem key={i}>
                                      <ul>
                                        <li>{yelp}</li>
                                      </ul>
                                  </ListItem>
                                ))}
                              </List>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div id="data-table-grid">
                            <div id="data-table-header">Mentions and Reviews</div>
                            <div id="data-table">
                            {this.props.tweets.length ? (
                              <List>
                                {this.props.tweets.map((tweet, i) => (
                                  <ListItem key={i}>
                                      <ul>
                                        <li>{tweet}</li>
                                      </ul>
                                  </ListItem>
                                ))}
                              </List>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                             
                                    
                                                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default Results;