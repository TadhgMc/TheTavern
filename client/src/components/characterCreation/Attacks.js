import React from 'react'



export default class Attacks extends React.Component {
    state = {attacks: [""]}
    
    handleInputChange(event) {
        const state = this.state.attacks
        state.push(event.target.value)
        this.setState({attacks: state})
    }

    handleChange(event, index) {
        const state = this.state.attacks.slice()
        state[index] = event.target.value
        this.setState({attacks: state})
    }

    handleAddFields() {
        const state = this.state.attacks
        state.push("")
        this.setState({attacks: state})
      };

      handleRemoveFields(index) {
        const state = this.state.attacks
        state.splice(index, 1)
        this.setState({attacks: state})
      };

      

    render() {
        return( 
            <form>
                <div className="form-row">
                    {this.state.attacks.map((attacks, index) => (
                    <div className="form-group col-sm-6">
                        <label htmlFor="weapon">Weapon</label>
                        <input
                        type="text"
                        className="form-control"
                        id="weapon"
                        name="weapon"
                        onChange = {event => this.handleChange(event, index)}
                        value={attacks.weapon}
                        />

                        <label htmlFor="damage">Damage Die</label>
                        <input
                        type="text"
                        className="form-control"
                        id="damage"
                        name="damage"
                        onChange = {event => this.handleChange(event, index)}
                        value={attacks.damage}
                        />

                        <label htmlFor="range">Range</label>
                        <input
                        type="text"
                        className="form-control"
                        id="range"
                        name="range"
                        onChange = {event => this.handleChange(event, index)}
                        value={attacks.range}
                        />

                        <label htmlFor="type">Damage Type</label>
                        <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="type"
                        onChange = {event => this.handleChange(event, index)}
                        value={attacks.type}
                        />
                    <button className="btn btn-link" type="button" onClick={() => this.handleRemoveFields(index)}> Delete </button>
                    </div>
                    ))}
                    <button className="btn btn-link" type="button" onClick={() => this.handleAddFields()}> Add </button>
                    <button className="btn btn-link" type="button" onClick=""> Save </button>
                </div>    
            </form>    
        )
    }
}