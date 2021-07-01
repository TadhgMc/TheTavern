import React from 'react';

class AbilityScore {
    constructor(str, dex, con, int, wis, cha) {
        this.str =  str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}

export default class Abilities extends React.Component {
    constructor(props) {
      super(props);
      this.state = {abilityScores: new AbilityScore("", "", "", "", "", "")};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      const state = {...this.state.abilityScores, [event.target.id]: event.target.value}
        this.setState({abilityScores: state});
        console.log(state)
    }
  
    render() {
        console.log(this.state.abilityScores.str)
      return (
        <form>
            <label for="str"> Strength </label>
            <input id="str" type="text" onChange={this.handleChange} value={this.state.abilityScores.str}></input>

            <label for="dex"> Dexterity </label>
            <input id="dex" type="text" onChange={this.handleChange} value={this.state.abilityScores.dex}></input>

            <label for="con"> Constitution </label>
            <input id="con" type="text" onChange={this.handleChange} value={this.state.abilityScores.con}></input>

            <label for="int"> Intelligence </label>
            <input id="int" type="text" onChange={this.handleChange} value={this.state.abilityScores.int}></input>

            <label for="wis"> Wisdom </label>
            <input id="wis" type="text" onChange={this.handleChange} value={this.state.abilityScores.wis}></input>

            <label for="cha"> Charisma </label>
            <input id="cha" type="text" onChange={this.handleChange} value={this.state.abilityScores.cha}></input>
        </form>
      );
    }
  }








