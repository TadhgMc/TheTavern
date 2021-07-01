import React from 'react'



export default class Child10 extends React.Component {
    state = {features: [""]}
    
    handleInputChange(event) {
        const state = this.state.features
        state.push(event.target.value)
        this.setState({features: state})
    }

    handleChange(event, index) {
        const state = this.state.features.slice()
        state[index] = event.target.value
        this.setState({features: state})
    }

    handleAddFields() {
        const state = this.state.features
        state.push("")
        this.setState({features: state})
      };

      handleRemoveFields(index) {
        const state = this.state.features
        state.splice(index, 1)
        this.setState({features: state})
      };

      

    render() {
        return( 
            <form>
                <div className="form-row">
                    {this.state.features.map((features, index) => (
                    <div className="form-group col-sm-6">
                        <label htmlFor="features">Features</label>
                        <input
                        type="text"
                        className="form-control"
                        id="features"
                        name="features"
                        onChange = {event => this.handleChange(event, index)}
                        value={features}
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