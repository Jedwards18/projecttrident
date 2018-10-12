import React from "react";

export const FormBtn = props => (
    <button {...props} className="ui button">
        {props.children}
    </button>
);