import React from 'react';

class Vitals {
    constructor (ac, hp, init, speed, profBonus) {
        this.ac = ac 
        this.hp = hp
        this.init = init
        this.speed = speed
        this.profBonus = profBonus
    }
}

export default class Vitality extends React.Component {
    constructor(props) {
        super(props)
        this.state = {vitals: new Vitals("", "", "", "", "")}
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const state = {...this.state.vitals, [event.target.id]: event.target.value}
            this.setState({vitals: state})
    }

    render() {
        return (
            <form>
            <label for="ac"> Armor Class </label>
            <input id="ac" type="text" onChange={this.handleChange} value={this.state.vitals.ac}></input>

            <label for="hp"> Hit Points </label>
            <input id="hp" type="text" onChange={this.handleChange} value={this.state.vitals.hp}></input>

            <label for="init"> Initiative </label>
            <input id="init" type="text" onChange={this.handleChange} value={this.state.vitals.init}></input>

            <label for="speed"> Speed </label>
            <input id="speed" type="text" onChange={this.handleChange} value={this.state.vitals.speed}></input>

            <label for="profBonus"> Proficiency Bonus </label>
            <input id="profBonus" type="text" onChange={this.handleChange} value={this.state.vitals.profBonus}></input>
        </form>  
        )
    }
}