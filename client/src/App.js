import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/index";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import LandingPage from "./pages/landingpage/Landingpage";
import Profile from "./pages/profile/Profile"
import CharacterSheet from './pages/CharSheet';
import CharacterCreation from './pages/CharacterCreation'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/charactersheet" component={CharacterSheet} />
        <Route exact path="/charactercreater2" component="" />
        <Route exact path="/charactercreation" component={CharacterCreation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
