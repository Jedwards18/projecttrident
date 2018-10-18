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
import  Chart  from "../../components/Chart";
import {Table, TableItem } from "../../components/Table";

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
                <div id="output-container-header">Results <br></br>Go forth and maximize your company's potential!</div>
                <div className="row">
                    <div className="column">
                        <div id="personality-traits-results-grid">
                            <div className="ui grid">
                                <div className="eight wide column right aligned">
                                    <div id="polarity-analysis-results-header">Personality Traits</div>
                                </div>
                                <div className="eight wide column">
                                    <div className="ui mini button" data-tooltip="These results represent the primary personality traits of those who have used your service/product" position="top left">
                                        More Info
                                </div>
                                </div>
                            </div>
                        <Chart personality={this.props.personality}></Chart>
                            {/* {this.props.personality.length ? (
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
                            )} */}
                        </div>
                    </div>
                    <div className="column">
                        <div id="polarity-analysis-results-grid">
                            <div className="ui grid">
                                <div className="eight wide column right aligned">
                                    <div id="polarity-analysis-results-header">Polarity Analysis</div>
                                </div>
                                <div className="eight wide column">
                                    <div className="ui mini button" data-tooltip="These results represent the polarity, and confidence, of your company based off the social media activity of your company" position="top left">
                                        More Info
                                    </div>
                                </div>
                            </div>
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
                            <div id="word-cloud-header">Yelps</div>
                            <div id="word-cloud-data">
                            {this.props.yelps.length ? (
                              <Table>
                                {this.props.yelps.map((yelp, i) => (
                                  <TableItem key={i}>
                                        <td>{yelp}</td>
                                  </TableItem>
                                ))}
                              </Table>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div id="data-table-grid">
                            <div id="data-table-header">Tweets</div>
                            <div id="data-table">
                            {this.props.tweets.length ? (
                              <Table>
                                {this.props.tweets.map((tweet, i) => (
                                  <TableItem key={i}>
                                        <td>{tweet}</td>
                                  </TableItem>
                                ))}
                              </Table>
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