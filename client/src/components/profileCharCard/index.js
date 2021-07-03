import React from 'react'
import './style.css'

function ProfileCharCard(props) {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{props.charName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Level {props.level}</h6>
        <p className="card-text">{props.race} | {props.class} </p>
        <a id='view-character' href="#" className="card-link">View</a>
        <a id='edit-character' href="#" className="card-link">Edit</a>
        <a id='delete-character' href="#" className="card-link">Delete</a>
      </div>
    </div>
  )
}

export default ProfileCharCard
