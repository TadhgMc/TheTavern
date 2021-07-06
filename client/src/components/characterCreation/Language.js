import React from 'react'



export default class Language extends React.Component {
    state = {languages: [""]}
    
    handleInputChange(event) {
        const state = this.state.languages
        state.push(event.target.value)
        this.setState({languages: state})
    }

    handleChange(event, index) {
        const state = this.state.languages.slice()
        state[index] = event.target.value
        this.setState({languages: state})
    }

    handleAddFields() {
        const state = this.state.languages
        state.push("")
        this.setState({languages: state})
      };

      handleRemoveFields(index) {
        const state = this.state.languages
        state.splice(index, 1)
        this.setState({languages: state})
      };

      

    render() {
        return( 
            <form className = "container-fluid row" >
                <div className="form-row">
                    {this.state.languages.map((languages, index) => (
                    <div className="form-group mb-3 col-md-6">
                        {/* <label htmlFor="languages">Languages</label> */}
                        <input
                        type="text"
                        className="form-control mb-3"
                        id="languages"
                        name="laguages"
                        placeholder = "Enter Languages"
                        onChange = {event => this.handleChange(event, index)}
                        value={languages}
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