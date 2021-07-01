import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Parent from './components/Parent'
import Navbar from "./components/navbar/index";
import SignUp from "./components/signup/index";
import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Homepage";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/charactersheet" component="" />
        <Route exact path="/charactercreater1" component="" />
        <Route exact path="/charactercreater2" component="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
