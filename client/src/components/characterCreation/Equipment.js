import React from 'react'



export default class Equipment extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddFields = this.handleAddFields.bind(this)
        this.handleRemoveFields = this.handleRemoveFields.bind(this)
    }

    handleChange(event, index) {
        const { equipment } = this.props
        equipment[index] = event.target.value
        const { setEquipment } = this.props
        setEquipment(prevArray => [...equipment])
    }

    handleAddFields() {
        const { equipment } = this.props
        equipment.push("")
        const { setEquipment } = this.props
        setEquipment(prevArray => [...equipment])
    };

    handleRemoveFields(index) {
        const { equipment } = this.props
        equipment.splice(index, 1)
        const { setEquipment } = this.props
        setEquipment(prevArray => [...equipment])
    };



    render() {
        return (
            <form className="container-fluid row ">
                <div className="form-row">
                    {this.props.equipment.map((equipment, index) => (
                        <div className="form-group mb-3 col-12">
                            {/* <label htmlFor="equipment">Equipment</label> */}
                            <input
                                type="text"
                                className="form-control mb-3"
                                id="equipment"
                                name="equipment"
                                placeholder="Equipment Name"
                                onChange={event => this.handleChange(event, index)}
                                value={equipment}
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