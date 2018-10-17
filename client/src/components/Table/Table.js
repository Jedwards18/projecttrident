import React from "react";


export const Table = ({ children }) => {
    return (
        <table className="ui very basic collapsing celled table">
            <tbody>
                {children}
            </tbody>
        </table>
    );
  };



