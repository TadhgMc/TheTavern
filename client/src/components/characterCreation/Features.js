import React from 'react'



export default class Features extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddFields = this.handleAddFields.bind(this)
        this.handleRemoveFields = this.handleRemoveFields.bind(this)
    }

    handleChange(event, index) {
        const { features } = this.props
        features[index] = event.target.value
        const { setFeatures } = this.props
        setFeatures(prevArray => [...features])
    }

    handleAddFields() {
        const { features } = this.props
        features.push("")
        const { setFeatures } = this.props
        setFeatures(prevArray => [...features])
    };

    handleRemoveFields(index) {
        const { features } = this.props
        features.splice(index, 1)
        const { setFeatures } = this.props
        setFeatures(prevArray => [...features])
    };



    render() {
        return (
            <form className="container-fluid row ">
                <div className="form-row">
                    {this.props.features.map((features, index) => (
                        <div className="form-group col-sm-6">
                            {/* <label htmlFor="features">Features</label> */}
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="features"
                                name="features"
                                placeholder="Features"
                                onChange={event => this.handleChange(event, index)}
                                value={features}
                            />
                            <button className="btn btn-warning" type="button" onClick={() => this.handleRemoveFields(index)}> Delete </button>
                        </div>
                    ))}
                    <div>
                        <div className="text-center">
                            <button className="btn btn-success" type="button" onClick={() => this.handleAddFields()}> Add </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}