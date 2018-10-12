import React, { Component }from "react";
import "./OutputContainer.css";
import "../PersonalityTraits/";

class OutputContainer extends Component {
    state = {

    };

    render() {
        return (
            <div className="ui two column grid" id="output-container">
            <div id="output-container-header">Your results have been populated using the most recent data. <br></br>Go forth and maximize your company's potential!</div>
            <div className="row">
                <div className="column">
                    <div id="personality-traits-results-grid">
                        <div id="personality-traits-results-header">
                        Personality Traits
                        {/* <div className="mini ui icon button" data-tooltip="Big Five personality characteristics represent the most widely used model for generally describing how a person engages with the world.
                            The model includes five primary dimensions: Agreeableness, Conscientiousness, Extraversion, Emotional range and Openness. Each of these top-lebel dimensions has six facets
                            that further characterize an individual according to the dimension. These are divided into needs and values. To learn more, visit https://console.bluemix.net/docs/services/personality-insights/models.html#models" data-position="top center" data-variation="wide">
                            <i className="info icon link"></i>
                        </div> */}
                        </div>
                        <div id="personality-traits-results">
                            <p>DISPLAY RESULTS HERE</p>
                        </div>
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
                                            <p>Positive or Negative</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div id="polarity-confidence-result-grid">
                                        <div id="polarity-confidence-result-header">Polarity Confidence</div>
                                        <div id="polarity-confidence-result">
                                            <p>%</p>
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
                            <p>DISPLAY DATA HERE</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div id="data-table-grid">
                        <div id="data-table-header">Mentions and Reviews</div>
                        <div id="data-table">
                            <p>DISPLAY DATA TABLE HERE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default OutputContainer;