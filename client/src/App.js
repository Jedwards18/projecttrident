import React, { Component } from 'react';
import NewAccount from "./components/NewAccount";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import OutputContainer from "./components/OutputContainer";
import WordCloud from "./components/WordCloud";
// import { BrowserRouter as router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <NewAccount />
        <OutputContainer />
        <WordCloud />
      </div>
    );
  }
}

export default App;
