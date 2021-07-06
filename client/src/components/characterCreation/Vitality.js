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
            <form className = "container-fluid row ">

            <div className = "mb-3 col-6 col-lg-4">
            {/* <label for="ac"> Armor Class </label> */}
            <input id="ac" type="text" placeholder = "Armor Class" class= "form-control input-lg" onChange={this.handleChange} value={this.state.vitals.ac}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            {/* <label for="hp"> Hit Points </label> */}
            <input id="hp" type="text" placeholder = "Hit Points" class= "form-control input-lg" onChange={this.handleChange} value={this.state.vitals.hp}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            {/* <label for="init"> Initiative </label> */}
            <input id="init" type="text" placeholder = "Initiative" class= "form-control input-lg" onChange={this.handleChange} value={this.state.vitals.init}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            {/* <label for="speed"> Speed </label> */}
            <input id="speed" type="text" placeholder = "Speed" class= "form-control input-lg" onChange={this.handleChange} value={this.state.vitals.speed}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            {/* <label for="profBonus"> Proficiency Bonus </label> */}
            <input id="profBonus" type="text" placeholder = "Proficiency" class= "form-control input-lg" onChange={this.handleChange} value={this.state.vitals.profBonus}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            {/* <label for="hitDice"> Number of Hit Dice </label> */}
            <input id="hitDice>" type="text" placeholder = "# of Hit Dice" class= "form-control input-lg" onChange={this.handleChange} value={this.state.vitals.hitDice}></input>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d4>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.vitals.d4}></input>
            <label for="d4">d4 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d6>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.vitals.d6}></input>
            <label for="d6">d6 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d8>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.vitals.d8}></input>
            <label for="d8">d8 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d4>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.vitals.d10}></input>
            <label for="d10">d10 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d12>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.vitals.d12}></input>
            <label for="d12">d12 </label>
            </div>

            <div>
              <div className = "text-center">
              <button className="btn btn-danger" type="button" onClick=""> Save </button>
              </div>
            </div>
        </form>  
        )
    }
}