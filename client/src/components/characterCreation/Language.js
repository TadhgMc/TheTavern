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
            <form>
                <div className="form-row">
                    {this.state.languages.map((languages, index) => (
                    <div className="form-group col-sm-6">
                        <label htmlFor="languages">Languages</label>
                        <input
                        type="text"
                        className="form-control"
                        id="languages"
                        name="laguages"
                        onChange = {event => this.handleChange(event, index)}
                        value={languages}
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