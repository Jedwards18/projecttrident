import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default App;
