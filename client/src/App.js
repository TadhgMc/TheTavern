import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Parent from './components/Parent'


import Navbar from "./components/navbar/index";
import Login from "./components/login/index";
import SignUp from "./components/signup/index";
import Profile from "./components/profile/index";
import Homepage from "./components/homepage/index";



function App() {
  return (
    <Router>
      {/* <Nav /> */}
    <Parent />

      <Navbar />
      {/* <Login /> */}
      {/* <SignUp /> */}

      <Switch>
        <Route exact path="/" component= {Homepage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/signup" component = {SignUp}/>
        <Route exact path="/charactersheet" component="" />
        <Route exact path="/charactercreater1" component="" />
        <Route exact path="/charactercreater2" component="" />
      </Switch>
    </Router>
  );
}

export default App;
