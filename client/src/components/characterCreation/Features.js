import React from 'react'



export default class Features extends React.Component {
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
            <form className = "container-fluid row ">
                <div className="form-row">
                    {this.state.features.map((features, index) => (
                    <div className="form-group col-sm-6">
                        {/* <label htmlFor="features">Features</label> */}
                        <input
                        type="text"
                        className="form-control mb-3"
                        id="features"
                        name="features"
                        placeholder = "Features"
                        onChange = {event => this.handleChange(event, index)}
                        value={features}
                        />
                    <button className="btn btn-warning" type="button" onClick={() => this.handleRemoveFields(index)}> Delete </button>
                    </div>
                    ))}
                    <div>
                    <div className = "text-center">
                    <button className="btn btn-success" type="button" onClick={() => this.handleAddFields()}> Add </button>
                    <button className="btn btn-danger" type="button" onClick=""> Save </button>  
                    </div>
                    </div> 
                </div>    
            </form>    
        )
    }
}