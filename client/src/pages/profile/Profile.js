import React from 'react'
import { useEffect, useState } from 'react';
import ProfileCharCard from '../../components/profileCharCard/index'
import API from '../../utils/api';

function Profile() {
  let [userId, setUserId] = useState('');
  let [userCharacters, setUserCharacters] = useState([]);

  //get current userID
  const findUserID = () => {
    API.getUserId()
    .then((res) => {setUserId(res.data._id.toString())});
    findUserCharacters(userId);
  }

  //populate users characters
  const findUserCharacters = (id) => {
    console.log("finding characters")
    API.populateCharacters(id)
  }

  //find character id for newly created character
  const findCurrentChar = () => {
    API.populateCharacters(userId)
    .then((res) => {
      setUserCharacters(res.data.Character)
      let characterToUpdate = userCharacters[userCharacters.length -1];
      console.log('character to be updated', characterToUpdate)
      document.location.replace('/charactercreation/' + characterToUpdate._id.toString())
    })
  }

  //finds logged in user and populates characters for that user on page load
  useEffect(() => {
    findUserID();
  }, []);

  //creates new character and finds id of new character
  const createAndUpdateNewChar = () => {
    API.createCharacter(userId)
    findCurrentChar(userId)
    console.log('creating new character')
  }

  return (
    <div className="container-fluid row">
      <div className="vw-25 text-center" style = {{margin: "2vw 0vw 5vw 0vw"}}>
        <h1>Profile</h1>
      </div>
      <div className="col text-center">

        <button className="btn btn-primary btn-lg" onClick={createAndUpdateNewChar} href="/charactercreation" >Add Character</button>
      </div>

      <hr className="my-4"/>

      {/* grid container */}
      <div className="col-12 text-center">
      <h2>Characters:</h2>

        {/* single row of 4 character cards */}
        <div class = "row">

        {userCharacters.map(character => {
              return (
                <div className="col my-2">
                  <ProfileCharCard charId={character._id.toString()} key={character._id.toString()} charName={character.name} level={character.level} race={character.race} class={character.class} />
                </div>
              )
            })}

        </div>

        {/*  */}

        <div class = "row">       
        </div> 
      </div>
    </div>
  )
}

export default Profile
