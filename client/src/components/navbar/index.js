import React, { useState } from 'react';

const Navbar = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a className="navbar-brand" href="/">
        <span className="">The Tavern</span>
      </a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTavern" aria-controls="navbarTavern" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTavern">
        <a className="nav-link" href="/login">Login</a>
        <a className="nav-link" href="/characters">Characters</a>
        <a className="nav-link" href="/profile">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;