import React, { useState, useEffect } from 'react';
import API from '../../utils/api'

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  //runs function on page load to check if user is logged in
  useEffect(() => {
    API.checkIfLoggedIn()
    /* .then(res => console.log("res:", res.data)) */
    .then(res => setIsLoggedIn(res.data))
    .catch(err => console.log("error", err))
    console.log("refreshing page")
  }, [])


  //onclick function for destroying session
  const logout = () => {
    API.logout()
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded p-3" style = {{margin: "0vw 1vw 5vw 1vw"}}>
      <a className="navbar-brand" href="/">
        <span className="">The Tavern</span>
      </a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTavern" aria-controls="navbarTavern" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTavern">
        {
        isLoggedIn
        ?(<a className="nav-link text-dark" onClick={logout} href="/login">Logout</a>
          )
        : 
          (<a className="nav-link text-dark" href="/login">Login</a>
          ) 
        }
        <a className="nav-link text-dark" href="/characters">Characters</a>
        <a className="nav-link text-dark" href="/profile">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;