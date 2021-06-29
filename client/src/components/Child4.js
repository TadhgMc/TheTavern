import React from 'react'

class Information {
    constructor (charName, race, charClass, level, playerName) {
        this.charName = charName
        this.race = race
        this.charClass = charClass
        this.level = level 
        this.playerName = playerName
    }
}

export default class Child4 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {information: new Information("", "", "", "", "")}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const state = {...this.state.information, [event.target.id]: event.target.value}
            this.setState({information: state})
            console.log(state)
    }

    render() {
        console.log(this.state.information.charName)
        return(
            <form>
                <label for="charName"> Character Name </label>
                <input id="charName" type="text" onChange={this.handleChange} value={this.state.information.charName}></input>

                <label for="race"> Race </label>
                <input id="race" type="text" onChange={this.handleChange} value={this.state.information.race}></input>

                <label for="charClass"> Class </label>
                <input id="charClass" type="text" onChange={this.handleChange} value={this.state.information.charClass}></input>

                <label for="level"> Level </label>
                <input id="level" type="text" onChange={this.handleChange} value={this.state.information.level}></input>

                <label for="playerName"> Player Name </label>
                <input id="playerName" type="text" onChange={this.handleChange} value={this.state.information.playerName}></input>
            </form>
        )        
    }
}