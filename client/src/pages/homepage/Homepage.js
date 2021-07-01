import React from 'react'
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">The Tavern</h1>
        <p className="lead">Where adventurers begin their quests</p>
        <hr className="my-4"/>
          <p></p>
          <a className="btn btn-primary btn-lg" href="/Login" role="button"><Link to='/login'>Get Started</Link></a>
      </div>
    </div>
  )
}

export default Homepage
