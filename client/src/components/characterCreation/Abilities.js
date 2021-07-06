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
        <form className = "container-fluid row ">

            <div className = "mb-3 col-6 col-lg-4">
              {/* <label for="str"> Strength </label> */}
              <input id="str" type="text" placeholder = "Strength" class= "form-control input-lg" onChange={this.handleChange} value={this.state.abilityScores.str}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
              {/* <label for="dex"> Dexterity </label> */}
              <input id="dex" type="text" placeholder = "Dexterity" class= "form-control input-lg" onChange={this.handleChange} value={this.state.abilityScores.dex}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
              {/* <label for="con"> Constitution </label> */}
              <input id="con" type="text" placeholder = "Constitution" class= "form-control input-lg" onChange={this.handleChange} value={this.state.abilityScores.con}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
              {/* <label for="int"> Intelligence </label> */}
              <input id="int" type="text" placeholder = "Intelligence" class= "form-control input-lg" onChange={this.handleChange} value={this.state.abilityScores.int}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
              {/* <label for="wis"> Wisdom </label> */}
              <input id="wis" type="text" placeholder = "Wisdom" class= "form-control input-lg" onChange={this.handleChange} value={this.state.abilityScores.wis}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
              {/* <label for="cha"> Charisma </label> */}
              <input id="cha" type="text" placeholder = "Charisma" class= "form-control input-lg" onChange={this.handleChange} value={this.state.abilityScores.cha}></input>
            </div>

            <div>
              <div className = "text-center">
                <button className="btn btn-danger" type="button" onClick=""> Save </button>
              </div>
            </div>
        </form>
      );
    }
  }








