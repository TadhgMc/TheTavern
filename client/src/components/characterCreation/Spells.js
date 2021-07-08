import React from 'react'



export default class Spells extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddFields = this.handleAddFields.bind(this)
        this.handleRemoveFields = this.handleRemoveFields.bind(this)
    }

    handleChange(event, index) {
        const { spells } = this.props
        spells[index] = event.target.value
        const { setSpells } = this.props
        setSpells(prevArray => [...spells])
    }

    handleAddFields() {
        const { spells } = this.props
        spells.push("")
        const { setSpells } = this.props
        setSpells(prevArray => [...spells])
    };

    handleRemoveFields(index) {
        const { spells } = this.props
        spells.splice(index, 1)
        const { setSpells } = this.props
        setSpells(prevArray => [...spells])
    };




    render() {
        return (
            <form className="container-fluid row ">
                <div className="form-row">
                    {this.props.spells.map((spells, index) => (
                        <div className="form-group col-sm-6">
                            {/* <label htmlFor="spells">Spells</label> */}
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="spells"
                                name="spells"
                                placeholder="Spells"
                                onChange={event => this.handleChange(event, index)}
                                value={spells}
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