import React from 'react'

class Background {
    constructor(personTrait, ideals, bonds, flaws) {
        this.personTrait = personTrait
        this.ideals = ideals
        this.bonds = bonds
        this.flaws = flaws
    }
}

export default class Personality extends React.Component {
    constructor (props) {
        super(props)
        this.state = {background: new Background("", "", "", "",)}

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const state = {...this.state.background, [event.target.id]: event.target.value}
            this.setState({background:state})
    }

    render() {
        return(
            <form>
            <label for="personTrait"> Personality Traits </label>
            <input id="personTrait" type="text" onChange={this.handleChange} value={this.state.background.personTrait}></input>

            <label for="ideals"> Ideals </label>
            <input id="ideals" type="text" onChange={this.handleChange} value={this.state.background.ideals}></input>

            <label for="bonds"> Bonds </label>
            <input id="bonds" type="text" onChange={this.handleChange} value={this.state.background.bonds}></input>

            <label for="personTrait"> Flaws </label>
            <input id="personTrait" type="text" onChange={this.handleChange} value={this.state.background.flaws}></input>
        </form>
        )
    }
}