import React from 'react'
// import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className = "container" style = {{ width: "50vw"}}>
      <div className="jumbotron text-center" style = {{margin: "15vw 0vw 15vw 0vw"}}>
        <h1 className="display-4">The Tavern</h1>
        <p className="lead">Where adventurers begin their quests</p>
        <hr className="my-4"/>
          <p></p>
          <a className="btn btn-primary btn-lg " href="/Login" role="button">Get Started</a>
      </div>
    </div>
  )
}

export default LandingPage
