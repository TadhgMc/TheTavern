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

export default class Child3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {skills: new Skills("","","","","","","","","","","","","","","","","","",)}

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const state = {...this.state.skills, [event.target.id]: event.target.value}
        this.setState({abilityScores: state})
        console.log(state)
    }

    render() {
            console.log(this.state.skills.acrobatics)
        return(
        <form>
            <label for="acrobatics"> Acrobatics </label>
            <input id="acrobatics" type="radio" onChange={this.handleChange} value={this.state.skills.acrobatics}></input>

            <label for="animalHandling"> Animal Handling </label>
            <input id="animalHandling" type="radio" onChange={this.handleChange} value={this.state.skills.animalHandling}></input>

            <label for="arcana"> Arcana </label>
            <input id="arcana" type="radio" onChange={this.handleChange} value={this.state.skills.arcana}></input>
            

            <label for="athletics"> Athletics </label>
            <input id="athletics" type="radio" onChange={this.handleChange} value={this.state.skills.athletics}></input>

            <label for="deception"> Deception </label>
            <input id="deception" type="radio" onChange={this.handleChange} value={this.state.skills.deception}></input>

            <label for="history"> History </label>
            <input id="history" type="radio" onChange={this.handleChange} value={this.state.skills.history}></input>

            <label for="insight"> Insight </label>
            <input id="insight" type="radio" onChange={this.handleChange} value={this.state.skills.insight}></input>

            <label for="intimidation"> Intimidation </label>
            <input id="intimidation" type="radio" onChange={this.handleChange} value={this.state.skills.intimidation}></input>

            <label for="medicine"> Medicine </label>
            <input id="medicine" type="radio" onChange={this.handleChange} value={this.state.skills.medicine}></input>

            <label for="nature"> Nature </label>
            <input id="nature" type="radio" onChange={this.handleChange} value={this.state.skills.nature}></input>

            <label for="perception"> Perception </label>
            <input id="perception" type="radio" onChange={this.handleChange} value={this.state.skills.perception}></input>

            <label for="performance"> Performance </label>
            <input id="performance" type="radio" onChange={this.handleChange} value={this.state.skills.performance}></input>

            <label for="persuasion"> Persuasion </label>
            <input id="persuasion" type="radio" onChange={this.handleChange} value={this.state.skills.persuasion}></input>

            <label for="religion"> Religion </label>
            <input id="religion" type="radio" onChange={this.handleChange} value={this.state.skills.religion}></input>

            <label for="slightOfHands"> Slight of Hands </label>
            <input id="slightOfHands" type="radio" onChange={this.handleChange} value={this.state.skills.slightOfHands}></input>

            <label for="stealth"> Stealth </label>
            <input id="stealth" type="radio" onChange={this.handleChange} value={this.state.skills.stealth}></input>

            <label for="survival"> Survival </label>
            <input id="survival" type="radio" onChange={this.handleChange} value={this.state.skills.survival}></input>
        </form>
        );
    }
}