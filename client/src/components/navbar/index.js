import React, { useState } from 'react';

const Navbar = (req) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  /* if (req.session.loggedIn) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false)
  } */

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded p-3">
      <a className="navbar-brand" href="/">
        <span className="">The Tavern</span>
      </a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTavern" aria-controls="navbarTavern" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTavern">
        {
        isLoggedIn
        ?(<a className="nav-link text-dark" href="/login">Logout</a>
          )
        : 
          (<a className="nav-link text-dark" href="/login">Login</a>
          ) 
        }
        
        <a className="nav-link text-dark" href="/login">Logout</a>

        <a className="nav-link text-dark" href="/login">Login</a>
        <a className="nav-link text-dark" href="/characters">Characters</a>
        <a className="nav-link text-dark" href="/profile">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;