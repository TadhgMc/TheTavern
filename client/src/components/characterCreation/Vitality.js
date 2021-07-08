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
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {setVitals} = this.props
        setVitals(vitals => ({
            ...vitals, 
            [event.target.id]: event.target.value
        }))
    }

    render() {
        return (
            <form className = "container-fluid row ">

            <div className = "mb-3 col-6 col-lg-4">
            <label for="ac"> Armor Class </label>
            <input id="ac" type="text" placeholder = "Armor Class" class= "form-control input-lg" onChange={this.handleChange} value={this.props.vitals.ac}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            <label for="hp"> Hit Points </label>
            <input id="hp" type="text" placeholder = "Hit Points" class= "form-control input-lg" onChange={this.handleChange} value={this.props.vitals.hp.currentHP}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            <label for="init"> Initiative </label>
            <input id="init" type="text" placeholder = "Initiative" class= "form-control input-lg" onChange={this.handleChange} value={this.props.vitals.init}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            <label for="speed"> Speed </label>
            <input id="speed" type="text" placeholder = "Speed" class= "form-control input-lg" onChange={this.handleChange} value={this.props.vitals.speed}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            <label for="profBonus"> Proficiency Bonus </label>
            <input id="profBonus" type="text" placeholder = "Proficiency" class= "form-control input-lg" onChange={this.handleChange} value={this.props.vitals.profBonus}></input>
            </div>

            <div className = "mb-3 col-6 col-lg-4">
            <label for="hitDie"> Number of Hit Dice </label>
            <input id="hitDie>" type="text" placeholder = "# of Hit Dice" class= "form-control input-lg" onChange={this.handleChange} value={this.props.vitals.hp.hitDie}></input>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d4>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.props.vitals.hp.die}></input>
            <label for="d4">d4 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d6>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.props.vitals.hp.die}></input>
            <label for="d6">d6 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d8>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.props.vitals.hp.die}></input>
            <label for="d8">d8 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d4>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.props.vitals.hp.die}></input>
            <label for="d10">d10 </label>
            </div>

            <div className = "mb-3 col-3 col-md-2 form-check">
            <input id="d12>" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.props.vitals.hp.die}></input>
            <label for="d12">d12 </label>
            </div>
        </form>  
        )
    }
}