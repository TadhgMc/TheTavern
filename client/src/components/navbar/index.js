import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href ="/">The Tavern</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href ="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href ="/characters">Characters</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href = "/profile">Profile</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
