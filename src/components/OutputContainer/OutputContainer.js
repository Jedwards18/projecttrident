import React from "react";
import "./OutputContainer.css";

const OutputContainer = () => (

    <div className="ui two column grid" id="output-container">
        <div id="output-container-header">Your results have been populated using the most recent data. <br></br>Go forth and maximize your company's potential!</div>
        <div className="row">
            <div className="column">
                <div id="personality-traits-results-grid">
                    <div id="personality-traits-results-header">Personality Traits (ADD MORE INFO BUTTON)</div>
                    <div id="personality-traits-results">
                        <p>DISPLAY RESULTS HERE</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div id="positivity-analysis-results-grid">
                    <div id="positivity-analysis-results-header">Positivity Analysis</div>
                    <div className="ui two column divided grid">
                        <div className="row">
                            <div className="column">
                                <div id="positivity-result-grid">
                                    <div id="positivity-result-header">Positive Presence</div>
                                    <div id="positivity-result">
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div id="negativity-result-grid">
                                    <div id="negativity-result-header">Negative Presence</div>
                                    <div id="negativity-result">
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
);

export default OutputContainer;