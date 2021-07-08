import React from 'react'
import './style.css'
import API from '../../utils/api';

const deleteChar = (id) => {
  API.removeCharacter(id)
}

const viewChar = (id) => {
  document.location.replace('/charactersheet/' + id);
}

const editChar = (id) => {
  document.location.replace('/charactercreation/' + id);
}




function ProfileCharCard(props) {
  return (
    <div className="card" key={props.key}>
      <div className="card-body">
        <h5 className="card-title">{props.charName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Level {props.level}</h6>
        <p className="card-text">{props.race} | {props.class} </p>
        <div className='btn-container'>
          <button type="button" onClick={viewChar(props.charId)} id='view-character' className="btn btn-primary btn-sm">View</button>
          <button type="button" onClick={editChar(props.charId)} id='edit-character' className="btn btn-primary btn-sm">Edit</button>
          <button type="button" onClick={deleteChar(props.charId)} id='delete-character' className="btn btn-secondary btn-sm">Delete</button>
        </div>

      </div>
    </div>
  )
}

export default ProfileCharCard
