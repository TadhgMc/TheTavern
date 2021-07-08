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
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { setSkills } = this.props
        setSkills(skills => ({
            ...skills,
            [event.target.id]: event.target.value
        }))
    }

    render() {
        return (
            <form className="container-fluid row ">

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="acrobatics" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.acrobatics}></input>
                    <label for="acrobatics"> Acrobatics </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="animalHandling" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.animalHandling}></input>
                    <label for="animalHandling"> Animal Handling </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="arcana" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.arcana}></input>
                    <label for="arcana"> Arcana </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="athletics" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.athletics}></input>
                    <label for="athletics"> Athletics </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="deception" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.deception}></input>
                    <label for="deception"> Deception </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="history" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.history}></input>
                    <label for="history"> History </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="insight" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.insight}></input>
                    <label for="insight"> Insight </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="intimidation" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.intimidation}></input>
                    <label for="intimidation"> Intimidation </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="medicine" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.medicine}></input>
                    <label for="medicine"> Medicine </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="nature" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.nature}></input>
                    <label for="nature"> Nature </label>
                </div>

                <div className="mb-3 col-sm-12 col-md-3 form-check">
                    <input id="perception" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.perception}></input>
                    <label for="perception"> Perception </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="performance" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.performance}></input>
                    <label for="performance"> Performance </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="persuasion" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.persuasion}></input>
                    <label for="persuasion"> Persuasion </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="religion" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.religion}></input>
                    <label for="religion"> Religion </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="slightOfHands" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.slightOfHands}></input>
                    <label for="slightOfHands"> Slight of Hand </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="stealth" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.stealth}></input>
                    <label for="stealth"> Stealth </label>
                </div>

                <div className="mb-3 col-xs-12 col-md-3 form-check">
                    <input id="survival" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.skills.survival}></input>
                    <label for="survival"> Survival </label>
                </div>
            </form>
        );
    }
}