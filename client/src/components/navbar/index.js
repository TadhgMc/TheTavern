import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/api'

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  //runs function on page load to check if user is logged in
  useEffect(() => {
    API.checkIfLoggedIn()
    .then(res => setIsLoggedIn(res.data))
    .catch(err => console.log("error", err))
    console.log("refreshing page")
  }, [])

  //onclick function for destroying session
  const logout = () => {
    API.logout()
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded p-3">
      <Link className="navbar-brand" to="/">
        <span className="">The Tavern</span>
      </Link>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTavern" aria-controls="navbarTavern" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTavern">
        {
        isLoggedIn
        ?(<Link className="nav-link text-dark" onClick={logout} to="/login">Logout</Link>
          )
        : 
          (<Link className="nav-link text-dark" to="/login">Login</Link>
          ) 
        }
        <Link className="nav-link text-dark" to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;