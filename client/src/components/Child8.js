import React from 'react'



export default class Child8 extends React.Component {
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
                        <label htmlFor="attacks">Attacks</label>
                        <input
                        type="text"
                        className="form-control"
                        id="attacks"
                        name="attacks"
                        onChange = {event => this.handleChange(event, index)}
                        value={attacks}
                        />
                    <button className="btn btn-link" type="button" onClick={() => this.handleRemoveFields(index)}> Delete </button>
                    </div>
                    ))}
                    <button className="btn btn-link" type="button" onClick={() => this.handleAddFields()}> Add </button>
                </div>    
            </form>    
        )
    }
}