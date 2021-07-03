import React from 'react'
import ProfileCharCard from '../../components/profileCharCard/index'

function Profile() {
  return (
    <div className="container row">
      <div className="vw-25 text-center">
        <h1>Profile</h1>
      </div>
      <div className="col text-center">
        <button type="button" class="btn btn-primary btn-lg">Add Character</button>

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
