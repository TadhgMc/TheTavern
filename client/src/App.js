import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/index';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Homepage from './pages/homepage/Homepage';
import Abilities from './components/Abilities';
import SaveThrow from './components/SaveThrow';
import Skill from './components/Skill';
import CharInfo from './components/CharInfo';
import Personality from './components/Personality';
import Vitality from './components/Vitality';
import Equipment from './components/Equipment';
import Attacks from './components/Attacks';
import Language from './components/Language';
import Features from './components/Features';
import Spells from './components/Spells';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/charactersheet' component='' />
        <Route exact path='/charactercreater1' component='' />
        <Route exact path='/charactercreater2' component='' />
        <Route exact path='/charinfo' component={CharInfo} />
        <Route exact path='/abilities' component={Abilities} />
        <Route exact path='/skill' component={Skill} />
        <Route exact path='/saves' component={SaveThrow} />
        <Route exact path='/vitals' component={Vitality} />
        <Route exact path='/personality' component={Personality} />
        <Route exact path='/equipment' component={Equipment} />
        <Route exact path='/attacks' component={Attacks} />
        <Route exact path='/language' component={Language} />
        <Route exact path='/features' component={Features} />
        <Route exact path='/spells' component={Spells} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
