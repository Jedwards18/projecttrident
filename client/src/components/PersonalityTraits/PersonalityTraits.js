import React from "react";

const PersonalityTraits = props => (
    <div className="personality-traits-results">
        {props.results.map(result => (
            <div className="ui list" key={result.id}>
                <div className="item"> {result.personality[name]}
                    <div className="item">{result.personality[children[name]]}</div>
                </div>
            </div>
        ))}
    </div>
);

export default PersonalityTraits;