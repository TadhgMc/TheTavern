import React from 'react'

class Background {
    constructor(personTrait, ideals, bonds, flaws) {
        this.personTrait = personTrait
        this.ideals = ideals
        this.bonds = bonds
        this.flaws = flaws
    }
}

export default class Personality extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {setBackground} = this.props
        setBackground(background => ({
            ...background, 
            [event.target.id]: event.target.value
        }))
    }

    render() {
        return(
            <form className = "container-fluid row ">

            <div className = "mb-3 col-sm-12 col-lg-6">
            {/* <label for="personTrait"> Personality Traits </label> */}
            <input id="personTrait" type="text" placeholder = "Personality Traits" class= "form-control input-lg" onChange={this.handleChange} value={this.props.background.personTrait}></input>
            </div>

            <div className = "mb-3 col-sm-12 col-lg-6">
            {/* <label for="ideals"> Ideals </label> */}
            <input id="ideals" type="text" placeholder = "Ideals" class= "form-control input-lg" onChange={this.handleChange} value={this.props.background.ideals}></input>
            </div>

            <div className = "mb-3 col-sm-12 col-lg-6">
            {/* <label for="bonds"> Bonds </label> */}
            <input id="bonds" type="text" placeholder = "Bonds" class= "form-control input-lg" onChange={this.handleChange} value={this.props.background.bonds}></input>
            </div>

            <div className = "mb-3 col-sm-12 col-lg-6">
            {/* <label for="flaws"> Flaws </label> */}
            <input id="flaws" type="text" placeholder = "Flaws" class= "form-control input-lg" onChange={this.handleChange} value={this.props.background.flaws}></input>
            </div>
        </form>
        )
    }
}