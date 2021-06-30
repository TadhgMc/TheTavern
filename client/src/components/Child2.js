import React from 'react';

class SavingThrows {
    constructor (str, dex, con, int, wis, cha) {
        this.str =  str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }   
}

export default class Child2 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {savingThrows: new SavingThrows("", "", "", "", "", "")}
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const state = {...this.state.savingThrows, [event.target.id]: event.target.value}
        this.setState({savingThrows: state})
        console.log(state)
    }

    render() {
        console.log(this.state.savingThrows.str)
        return(
            <form>
            <label for="str"> Strength </label>
            <input id="str" type="checkbox" onChange={this.handleChange} value={this.state.savingThrows.str}></input>

            <label for="dex"> Dexterity </label>
            <input id="dex" type="checkbox" onChange={this.handleChange} value={this.state.savingThrows.dex}></input>

            <label for="con"> Constitution </label>
            <input id="con" type="checkbox" onChange={this.handleChange} value={this.state.savingThrows.con}></input>

            <label for="int"> Intelligence </label>
            <input id="int" type="checkbox" onChange={this.handleChange} value={this.state.savingThrows.int}></input>

            <label for="wis"> Wisdom </label>
            <input id="wis" type="checkbox" onChange={this.handleChange} value={this.state.savingThrows.wis}></input>

            <label for="cha"> Charisma </label>
            <input id="cha" type="checkbox" onChange={this.handleChange} value={this.state.savingThrows.cha}></input>
            </form>
        )
    }
}