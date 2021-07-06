import React from 'react'



export default class Spells extends React.Component {
    state = {spells: [""]}
    
    handleInputChange(event) {
        const state = this.state.spells
        state.push(event.target.value)
        this.setState({spells: state})
    }

    handleChange(event, index) {
        const state = this.state.spells.slice()
        state[index] = event.target.value
        this.setState({spells: state})
    }

    handleAddFields() {
        const state = this.state.spells
        state.push("")
        this.setState({spells: state})
      };

      handleRemoveFields(index) {
        const state = this.state.spells
        state.splice(index, 1)
        this.setState({spells: state})
      };


      

    render() {
        return( 
            <form className = "container-fluid row ">
                <div className="form-row">
                    {this.state.spells.map((spells, index) => (
                    <div className="form-group col-sm-6">
                        {/* <label htmlFor="spells">Spells</label> */}
                        <input
                        type="text"
                        className="form-control mb-3"
                        id="spells"
                        name="spells"
                        placeholder = "Spells"
                        onChange = {event => this.handleChange(event, index)}
                        value={spells}
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