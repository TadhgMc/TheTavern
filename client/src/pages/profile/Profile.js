import React from 'react'
import { useEffect } from 'react';
import ProfileCharCard from '../../components/profileCharCard/index'
import API from '../../utils/api';

function Profile() {
  //get current userID
  const userID = () => {
    API.getUserId()
    .then(res => {res = API.populateCharacters(res.data._id.toString())})
    /* .then(res => API.populateCharacters(res.data)) */
  }

  useEffect(() => {
    userID();
  }, []);

  return (
    <div className="container-fluid row">
      <div className="vw-25 text-center" style = {{margin: "2vw 0vw 5vw 0vw"}}>
        <h1>Profile</h1>
      </div>
      <div className="col text-center">

        <a className="btn btn-primary btn-lg " href="/charactercreation" role="button">Add Character</a>

      </div>

      <hr className="my-4"/>

      {/* grid container */}
      <div className="col-12 text-center">
      <h2>Characters:</h2>

        {/* single row of 4 character cards */}
        <div class = "row">

          <div className="col my-2">
            <ProfileCharCard charName={"Jim"} level={69} race={'Tiefling'} class={'Rogue'} />
          </div>

          <div className="col my-2">
            <ProfileCharCard charName={"Charles"} level={420} race={'Halfling'} class={'Bard'} />
          </div>

          <div className="col my-2">
            <ProfileCharCard charName={"Petris Elmdew"} level={69} race={'Tiefling'} class={'Rogue'} />
          </div>

          <div className="col my-2">
            <ProfileCharCard charName={"Ganeburk"} level={69} race={'Tiefling'} class={'Rogue'} />
          </div>

        </div>

        {/*  */}

        <div class = "row">

          <div className="col my-2">
            <ProfileCharCard charName={"Agaz"} level={69} race={'Tiefling'} class={'Rogue'} />
          </div>

          <div className="col my-2">
            <ProfileCharCard charName={"Carza Lukkobor"} level={420} race={'Halfling'} class={'Bard'} />
          </div>

          <div className="col my-2">
            <ProfileCharCard charName={"Olgo"} level={69} race={'Tiefling'} class={'Rogue'} />
          </div>

          <div className="col my-2">
            <ProfileCharCard charName={"Carza Lukkobor"} level={420} race={'Halfling'} class={'Bard'} />
          </div>
        
        </div> 
      </div>
    </div>
  )
}

export default Profile
