import React from 'react'
// import { Link } from "react-router-dom";
import background from "./tavernBackground.png"
import "./style.css"


const LandingPage = () => {
  return (
    <div  id = "bannerImg" style = {{
      backgroundImage:`url(${background})`, 
      height: '600px'
    }}>
    <div className = "container centered" id = "welcome" style = {{ width: "75vw"}}>
      <div className="jumbotron text-center" >
        <div className = "col-12" >
          <div className = "row-6"><h1 className="display-4 text-white">The Tavern</h1></div>
          <p className="lead text-white">Where adventurers begin their quests</p>
          <hr className="my-4"/>
            <p></p>
            <a className="btn btn-primary btn-lg " href="/Login" role="button">Get Started</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage
