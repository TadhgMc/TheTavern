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

export default class CharInfo extends React.Component {
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
            <form className = "container-fluid row ">

                <div className = "mb-3 col-sm-12 col-lg-6">
                    {/* <label for="charName"> Character Name </label> */}
                    <input id="charName" type="text" placeholder = "Character Name" class= "form-control input-lg" onChange={this.handleChange} value={this.state.information.charName}></input>
                </div>

                <div className = "mb-3 col-sm-12 col-lg-6">
                    {/* <label for="charClass"> Class </label> */}
                    <input id="charClass" type="text"  placeholder = "Class" class= "form-control input-lg" onChange={this.handleChange} value={this.state.information.charClass}></input>
                </div>

                <div className = "mb-3 col-8">
                    {/* <label for="race"> Race </label> */}
                    <input id="race" type="text"  placeholder = "Race" class= "form-control input-lg" onChange={this.handleChange} value={this.state.information.race}></input>
                </div>

                <div className = "mb-3 col-4">
                    {/* <label for="level"> Level </label> */}
                    <input id="level" type="text"  placeholder = "Level" class= "form-control input-lg" onChange={this.handleChange} value={this.state.information.level}></input>
                </div>

                <div className = "mb-3 col-12">
                    {/* <label for="playerName"> Player Name </label> */}
                    <input id="playerName" type="text"  placeholder = "Player Name" class= "form-control input-lg" onChange={this.handleChange} value={this.state.information.playerName}></input>
                </div>

                <div>
                    <div className = "text-center">
                        <button className="btn btn-danger" type="submit" onClick=""> Save </button>
                    </div>
                </div>
            </form>
        )        
    }
}