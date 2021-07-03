import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Parent from './components/Parent'
import Navbar from "./components/navbar/index";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landingpage/Landingpage";
import Profile from "./pages/profile/Profile"



function App() {
  return (
    <BrowserRouter>
      <Parent />
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/charactercreater1" component="" />
        <Route exact path="/charactercreater2" component="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
