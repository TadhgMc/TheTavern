import React from 'react'
import './style.css'

function ProfileCharCard(props) {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{props.charName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Level {props.level}</h6>
        <p className="card-text">{props.race} | {props.class} </p>
        <div className='btn-container'>
          <button type="button" id='view-character' className="btn btn-primary btn-sm">View</button>
          <button type="button" id='edit-character' className="btn btn-primary btn-sm">Edit</button>
          <button type="button" id='delete-character' className="btn btn-secondary btn-sm">Delete</button>
        </div>

      </div>
    </div>
  )
}

export default ProfileCharCard
