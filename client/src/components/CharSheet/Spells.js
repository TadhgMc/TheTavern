import React from 'react';

const Spells = ({spellList}) => {

    return(
        <>
            <div className = "container-fluid">
            <div className = "row-12 card-group">
                {
                    spellList.map((spell) => {
                        return(
                            <div className="card mb-3 text-center me-2 col-xs-12 col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{spell.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Range: {spell.range}</h6>
                                    <ul class="list-group list-group-flush">
                                        <li className="list-group-item">{spell.desc}</li>
                                        <br></br>
                                        <li className="list-group-item">{spell.higher_level}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
                </div>
        </>
    )
}

export default Spells;