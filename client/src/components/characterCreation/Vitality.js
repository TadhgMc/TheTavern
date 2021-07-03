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
        this.state = {vitals: new Vitals("", "", "", "", "", "", "")}
        
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

            <label for="hitDice"> Number of Hit Dice </label>
            <input id="hitDice>" type="text" onChange={this.handleChange} value={this.state.vitals.hitDice}></input>

            <label for="d4">d4 </label>
            <input id="d4>" type="checkbox" onChange={this.handleChange} value={this.state.vitals.d4}></input>

            <label for="d6">d6 </label>
            <input id="d6>" type="checkbox" onChange={this.handleChange} value={this.state.vitals.d6}></input>

            <label for="d8">d8 </label>
            <input id="d8>" type="checkbox" onChange={this.handleChange} value={this.state.vitals.d8}></input>

            <label for="d10">d10 </label>
            <input id="d4>" type="checkbox" onChange={this.handleChange} value={this.state.vitals.d10}></input>

            <label for="d12">d12 </label>
            <input id="d12>" type="checkbox" onChange={this.handleChange} value={this.state.vitals.d12}></input>
        </form>  
        )
    }
}