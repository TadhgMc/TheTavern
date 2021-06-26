import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component="" />
        <Route exact path="/profile" component="" />
        <Route exact path="/charactersheet" component="" />
        <Route exact path="/charactercreater1" component="" />
        <Route exact path="/charactercreater2" component="" />
      </Switch>
    </Router>
  );
}

export default App;
