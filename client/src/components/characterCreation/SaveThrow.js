import React from 'react';

class SavingThrows {
    constructor(str, dex, con, int, wis, cha) {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }
}

export default class SaveThrow extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { setSaveThrows } = this.props
        setSaveThrows(saveThrows => ({
            ...saveThrows,
            [event.target.id]: event.target.value
        }))
    }

    render() {
        return (
            <form className="container-fluid row ">

                <div className="mb-3 col-6 col-md-3 form-check">
                    <input id="str" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.saveThrows.str}></input>
                    <label for="str" > Strength </label>
                </div>

                <div className="mb-3 col-6 col-md-3 form-check">
                    <input id="dex" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.saveThrows.dex}></input>
                    <label for="dex"> Dexterity </label>
                </div>

                <div className="mb-3 col-6 col-md-3 form-check">
                    <input id="con" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.saveThrows.con}></input>
                    <label for="con"> Constitution </label>
                </div>

                <div className="mb-3 col-6 col-md-3 form-check">
                    <input id="int" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.saveThrows.int}></input>
                    <label for="int"> Intelligence </label>
                </div>

                <div className="mb-3 col-6 col-md-3 form-check">
                    <input id="wis" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.saveThrows.wis}></input>
                    <label for="wis"> Wisdom </label>
                </div>

                <div className="mb-3 col-6 col-md-3 form-check">
                    <input id="cha" type="checkbox" className="me-1" onChange={this.handleChange} value={this.props.saveThrows.cha}></input>
                    <label for="cha"> Charisma </label>
                </div>
            </form>
        )
    }
}