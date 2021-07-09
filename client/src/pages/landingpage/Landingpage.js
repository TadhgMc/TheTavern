import React from 'react'
import { Link } from "react-router-dom";
import background from "./tavernBackground.png"
// import "./homestyle.css"
// import "../profile/style.css"


const LandingPage = () => {
  return (
    <div className = "container-fluid row">
    <div  id = "bannerImg" style = {{
      backgroundImage:`url(${background})`, 
      height: '600px'
    }}>
    <div className = "container-fluid" id = "welcome" style = {{margin: "20vw 0vw 0vw 0vw"}}>
      <div className="jumbotron text-center" >
        <div className = "col-12" >
          <div className = "row-6"><h1 className="display-4 text-white">The Tavern</h1></div>
          <p className="lead text-white">Where adventurers begin their quests</p>
          <hr className="my-4"/>
            <p></p>
            <Link className="btn btn-primary btn-lg " to="/login" role="button">Get Started</Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default LandingPage
