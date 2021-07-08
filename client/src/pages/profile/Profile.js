import React from 'react'
import { useEffect, useState } from 'react';
import ProfileCharCard from '../../components/profileCharCard/index'
import API from '../../utils/api';
import background from "./profileBanner.png"
// import "./style.css"

const charModel = {
  charInfo: {
    charName: "",
    playerName: "",
    sex: '',
    race: '',
    charClass: '',
    level: '',
    background: {
              PersonalityTraits: " ",
              Ideals: "",
              Bonds: "",
              Flaws: ""
    },
    alignment: ""
  },
  vitals:{
    ac: 15,
    hp: {
      currentHP: 0,
      hitDie: {
        total: 0,
        die: ""
      }
    },
    init: 0,
    speed: 0,
    profBonus: 0
  },
  abilities: {
    strength: 12,
    dexterity: 12,
    constitution: 12,
    intelligence: 12,
    wisdom: 12,
    charisma: 12
  },
  equipment: {
    armor: "",
    weapon: "",
    sheild: "",
    backpack: []
  },
  saveThrows: {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  },
  skills:{
    acrobatics: 2,
    animalhandling: 1,
    arcana: 1,
    athletics: 1,
    deception: 1,
    history: 2,
    insight: 3,
    intimidation: 4,
    investigation: 3,
    medicine: 2,
    nature: 2,
    perception: 2,
    performance: 2,
    persuasion: 2,
    religion: 2,
    sleightofhand: 2,
    stealth: 2,
    survival: 2
  },
  proficiencies: [],
  languages: [],
  features: [],
  spells: [],
  notes: []
}


function Profile() {
  let [userId, setUserId] = useState('');
  let [userCharacters, setUserCharacters] = useState([]);
  let characters;

  //get current userID
  const findUserID = () => {
    API.getUserId()
    .then((res) => {
      setUserId(res.data._id.toString())
      findUserCharacters(res.data._id.toString())
    });
  }

  //populate users characters
  const findUserCharacters = (id) => {
    console.log("finding characters")
    API.populateCharacters(id)
    .then((res) => {
      setUserCharacters(res.data.Character)
    })
  }

  //find character id for newly created character
  const findCurrentChar = () => {
    API.populateCharacters(userId)
    .then((res) => {
      characters = res.data.Character
      setUserCharacters(characters);
      let characterToUpdate = characters[characters.length -1];
      document.location.replace('/charactercreation/' + characterToUpdate._id.toString())
    })
  }

  //finds logged in user and populates characters for that user on page load
  useEffect(() => {
    findUserID();
  }, []);

  //creates new character and finds id of new character
  const createAndUpdateNewChar = () => {
    console.log(charModel)
    API.createCharacter(userId, charModel)
    findCurrentChar(userId)
  }

  return (
    <div className="container-fluid row ">

    <div  id = "bannerImg" style = {{
      backgroundImage:`url(${background})`, 
      height: '450px'
    }}>

      <div className="vw-25 text-center" style = {{margin: "15vw 0vw 5vw 0vw"}}>
        <h1 className = "text-white">Profile</h1>
      </div>
      <div className="col text-center">

        <button className="btn btn-primary btn-lg" onClick={() => createAndUpdateNewChar()}>Add Character</button>
      </div>

    </div>
      <hr className="my-4"/>

      {/* grid container */}
      <div className="col-12 text-center">
      <h2>Characters:</h2>

        {/* single row of 4 character cards */}
        <div class = "row">

        {userCharacters.map(character => {
          console.log(character)
              return (
                <div className="col my-2">
                  <ProfileCharCard charId={character._id.toString()} charName={character.charInfo.charName} level={character.charInfo.level} race={character.charInfo.race} class={character.charInfo.charClass} />
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
