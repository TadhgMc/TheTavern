import React from 'react'

class Skills {
    constructor(acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, slightOfHands, stealth, survival) {
        this.acrobatics = acrobatics;
        this.animalHandling = animalHandling;
        this.arcana = arcana;
        this.athletics = athletics
        this.deception = deception
        this.history = history
        this.insight = insight
        this.intimidation = intimidation
        this.investigation = investigation
        this.medicine = medicine
        this.nature = nature
        this.perception = perception
        this.performance = performance
        this.persuasion = persuasion
        this.religion = religion
        this.slightOfHands = slightOfHands
        this.stealth = stealth
        this.survival = survival
    }
}

export default class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {skills: new Skills("","","","","","","","","","","","","","","","","","",)}

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const state = {...this.state.skills, [event.target.id]: event.target.value}
        this.setState({skills: state})
        console.log(state)
    }

    render() {
            console.log(this.state.skills.acrobatics)
        return(
        <form className = "container-fluid row ">

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="acrobatics" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.acrobatics}></input>
            <label for="acrobatics"> Acrobatics </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="animalHandling" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.animalHandling}></input>
            <label for="animalHandling"> Animal Handling </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="arcana" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.arcana}></input>
            <label for="arcana"> Arcana </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="athletics" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.athletics}></input>
            <label for="athletics"> Athletics </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="deception" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.deception}></input>
            <label for="deception"> Deception </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="history" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.history}></input>
            <label for="history"> History </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="insight" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.insight}></input>
            <label for="insight"> Insight </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="intimidation" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.intimidation}></input>
            <label for="intimidation"> Intimidation </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="medicine" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.medicine}></input>
            <label for="medicine"> Medicine </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="nature" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.nature}></input>
            <label for="nature"> Nature </label>
            </div>

            <div className = "mb-3 col-sm-12 col-md-3 form-check">
            <input id="perception" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.perception}></input>
            <label for="perception"> Perception </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="performance" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.performance}></input>
            <label for="performance"> Performance </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="persuasion" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.persuasion}></input>
            <label for="persuasion"> Persuasion </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="religion" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.religion}></input>
            <label for="religion"> Religion </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="slightOfHands" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.slightOfHands}></input>
            <label for="slightOfHands"> Slight of Hand </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="stealth" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.stealth}></input>
            <label for="stealth"> Stealth </label>
            </div>

            <div className = "mb-3 col-xs-12 col-md-3 form-check">
            <input id="survival" type="checkbox" className = "me-1" onChange={this.handleChange} value={this.state.skills.survival}></input>
            <label for="survival"> Survival </label>
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