import React from 'react'



export default class Attacks extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAddFields = this.handleAddFields.bind(this)
        this.handleRemoveFields = this.handleRemoveFields.bind(this)
    }
    handleChange(event, index) {
        const { attacks } = this.props
        attacks[index] = event.target.value
        const { setAttacks } = this.props
        setAttacks(prevArray => [...attacks])
    }

    handleAddFields() {
        const { attacks } = this.props
        attacks.push("")
        const { setAttacks } = this.props
        setAttacks(prevArray => [...attacks])
    };

    handleRemoveFields(index) {
        const { attacks } = this.props
        attacks.splice(index, 1)
        const { setAttacks } = this.props
        setAttacks(prevArray => [...attacks])
    };



    render() {
        return (
            <form className="container-fluid row">
                <div className="form-row">
                    {this.props.attacks.map((attacks, index) => (
                        <div className="form-group">

                            <div className="col-sm-12 col-md-6">
                                {/* <label htmlFor="weapon">Weapon</label> */}
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="weapon"
                                    name="weapon"
                                    placeholder="Weapon Name"
                                    onChange={event => this.handleChange(event, index)}
                                    value={attacks.weapon}
                                />
                            </div>

                            <div className="col-sm-12 col-md-6">
                                {/* <label htmlFor="damage">Damage Die</label> */}
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="damage"
                                    name="damage"
                                    placeholder="Damage Dice"
                                    onChange={event => this.handleChange(event, index)}
                                    value={attacks.damage}
                                />
                            </div>

                            <div className="col-sm-12 col-md-6">
                                {/* <label htmlFor="range">Range</label> */}
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="range"
                                    name="range"
                                    placeholder="Range"
                                    onChange={event => this.handleChange(event, index)}
                                    value={attacks.range}
                                />
                            </div>

                            <div className="col-sm-12 col-md-6">
                                {/* <label htmlFor="type">Damage Type</label> */}
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="type"
                                    name="type"
                                    placeholder="Damage Type"
                                    onChange={event => this.handleChange(event, index)}
                                    value={attacks.type}
                                />
                            </div>

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