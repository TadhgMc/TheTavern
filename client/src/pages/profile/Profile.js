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
    <div className="container row">
      <div className="vw-25 text-center">
        <h1>Profile</h1>
      </div>
      <div className="col text-center">
        <button type="button" className="btn btn-primary btn-lg">Add Character</button>

      </div>

      <div className="col text-center">
        <h2>Characters:</h2>
        <ProfileCharCard charName={"Jim"} level={69} race={'Tiefling'} class={'Rogue'} />
        <ProfileCharCard charName={"Charles"} level={420} race={'Halfling'} class={'Bard'} />
      </div>
    </div>
  )
}

export default Profile
