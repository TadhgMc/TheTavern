import React from 'react'



export default class Equipment extends React.Component {
    state = {equipment: [""]}
    
    handleInputChange(event) {
        const state = this.state.equipment
        state.push(event.target.value)
        this.setState({equipment: state})
    }

    handleChange(event, index) {
        const state = this.state.equipment.slice()
        state[index] = event.target.value
        this.setState({equipment: state})
    }

    handleAddFields() {
        const state = this.state.equipment
        state.push("")
        this.setState({equipment: state})
      };

      handleRemoveFields(index) {
        const state = this.state.equipment
        state.splice(index, 1)
        this.setState({equipment: state})
      };

      

    render() {
        return( 
            <form>
                <div className="form-row">
                    {this.state.equipment.map((equipment, index) => (
                    <div className="form-group col-sm-6">
                        <label htmlFor="equipment">Equipment</label>
                        <input
                        type="text"
                        className="form-control"
                        id="equipment"
                        name="equipment"
                        onChange = {event => this.handleChange(event, index)}
                        value={equipment}
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