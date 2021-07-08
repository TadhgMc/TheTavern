import React from 'react';
import API from '../../utils/api';
import {useParams} from 'react-router-dom'

class Information {
    constructor (charName, race, charClass, level, playerName, sex, alignment,personalityTraits,bonds,flaws,ideals) {
        this.charName = charName
        this.playerName = playerName
        this.sex = sex
        this.race = race
        this.charClass = charClass
        this.level = level
        this.alignment = alignment
    }
}



export default class CharInfo extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    
    
    handleChange(event) {
        const {setCharInfo} = this.props
        setCharInfo(charInfo => ({
            ...charInfo, 
            [event.target.id]: event.target.value
        }))
    }

    render() {
        return(
            <form className = "container-fluid row ">

                <div className = "mb-3 col-sm-12 col-lg-6">
                    {/* <label for="charName"> Character Name </label> */}
                    <input id="charName" type="text" placeholder = "Character Name" class= "form-control input-lg" onChange={this.handleChange} value={this.props.charInfo.charName}></input>
                </div>

                <div className = "mb-3 col-sm-12 col-lg-6">
                    {/* <label for="charClass"> Class </label> */}
                    <input id="charClass" type="text"  placeholder = "Class" class= "form-control input-lg" onChange={this.handleChange} value={this.props.charInfo.charClass}></input>
                </div>

                <div className = "mb-3 col-8">
                    {/* <label for="race"> Race </label> */}
                    <input id="race" type="text"  placeholder = "Race" class= "form-control input-lg" onChange={this.handleChange} value={this.props.charInfo.race}></input>
                </div>

                <div className = "mb-3 col-4">
                    <label for="level"> Level </label>
                    <input id="level" type="text"  placeholder = "Level" class= "form-control input-lg" onChange={this.handleChange} value={this.props.charInfo.level}></input>
                </div>

                <div className = "mb-3 col-12">
                    {/* <label for="playerName"> Player Name </label> */}
                    <input id="playerName" type="text"  placeholder = "Player Name" class= "form-control input-lg" onChange={this.handleChange} value={this.props.charInfo.playerName}></input>
                </div>
            </form>
        )        
    }
}