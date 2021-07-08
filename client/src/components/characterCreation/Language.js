import React from 'react'



export default class Language extends React.Component {
    constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleAddFields = this.handleAddFields.bind(this)
    this.handleRemoveFields = this.handleRemoveFields.bind(this)
    }

    handleChange(event, index) {
        const {languages} = this.props
        languages[index] = event.target.value
        const {setLanguages} = this.props
        console.log(languages)
        setLanguages(prevArray => [...languages])
    }

    handleAddFields() {
        const {languages} = this.props
        languages.push("")
        const {setLanguages} = this.props
        setLanguages(prevArray => [...languages])
      };

      handleRemoveFields(index) {
        const {languages} = this.props
        languages.splice(index, 1)
        const {setLanguages} = this.props
        setLanguages(prevArray => [...languages])
      };

      

    render() {
        return( 
            <form className = "container-fluid row" >
                <div className="form-row">
                    {this.props.languages.map((languages, index) => (
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
                        </div>
                    </div>
                </div>    
            </form>    
        )
    }
}