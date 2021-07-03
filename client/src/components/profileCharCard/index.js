import React from 'react'
import './style.css'

function ProfileCharCard(props) {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">Character Name</h5>
        <h6 className="card-subtitle mb-2 text-muted">Level 7</h6>
        <p className="card-text">Tiefling | Rogue </p>
        <a id='view-character' href="#" className="card-link">View</a>
        <a id='edit-character' href="#" className="card-link">Edit</a>
        <a id='delete-character' href="#" className="card-link">Delete</a>
      </div>
    </div>
  )
}

export default ProfileCharCard
