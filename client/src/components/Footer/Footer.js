import React, { Component } from "react";
import "./Footer.css"

const Footer = () => (
<div className="ui grid">
    <div className="row">
        <div className="three wide column"></div>
        <div className="five wide column">
            <p id="footer">
            Built by <strong>Jacob Edwards, Phillip Nguyen</strong> and <strong>Jeff Anderson</strong>.;
            </p>
        </div>
    </div>
</div>
);

export default Footer;