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
        this.state = {charInfo: new Information("", "", "", "", "", "", "", "", "", "", "")}

        this.handleChange = this.handleChange.bind(this)
    }

    
    
    handleChange(event) {
        const state = {...this.state.charInfo, [event.target.id]: event.target.value}
            this.setState({charInfo: state})
            console.log(state)
    }

    render() {
        console.log(this.state)
        return(
            <form className = "container-fluid row ">

                <div className = "mb-3 col-sm-12 col-lg-6">
                    {/* <label for="charName"> Character Name </label> */}
                    <input id="charName" type="text" placeholder = "Character Name" class= "form-control input-lg" onChange={this.handleChange} value={this.state.charInfo.charName}></input>
                </div>

                <div className = "mb-3 col-sm-12 col-lg-6">
                    {/* <label for="charClass"> Class </label> */}
                    <input id="charClass" type="text"  placeholder = "Class" class= "form-control input-lg" onChange={this.handleChange} value={this.state.charInfo.charClass}></input>
                </div>

                <div className = "mb-3 col-8">
                    {/* <label for="race"> Race </label> */}
                    <input id="race" type="text"  placeholder = "Race" class= "form-control input-lg" onChange={this.handleChange} value={this.state.charInfo.race}></input>
                </div>

                <div className = "mb-3 col-4">
                    {/* <label for="level"> Level </label> */}
                    <input id="level" type="text"  placeholder = "Level" class= "form-control input-lg" onChange={this.handleChange} value={this.state.charInfo.level}></input>
                </div>

                <div className = "mb-3 col-12">
                    {/* <label for="playerName"> Player Name </label> */}
                    <input id="playerName" type="text"  placeholder = "Player Name" class= "form-control input-lg" onChange={this.handleChange} value={this.state.charInfo.playerName}></input>
                </div>

                <div>
                    <div className = "text-center">
                        <button className="btn btn-danger" type="submit" onClick={API.updateCharacter(this.props.id, this.state)}> Save </button>
                    </div>
                </div>
            </form>
        )        
    }
}