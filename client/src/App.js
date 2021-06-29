import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import Parent from './components/Parent'
=======
import Navbar from "./components/navbar/index";
>>>>>>> b3fdf179a14920ea056064dbd04b0f8daea10bc6


function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Parent/>
=======
      <Navbar />
>>>>>>> b3fdf179a14920ea056064dbd04b0f8daea10bc6
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
