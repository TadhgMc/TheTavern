import React from 'react';

const Spells = ({spellList}) => {

    return(
        <>
            <table>
                {
                    spellList.map((spell) => {
                        return(<tr>
                            <th>{spell.name}</th>
                            <td>{spell.range}</td>
                            <td>{spell.desc}</td>
                            <td>{spell.higher_level}</td>
                        </tr>)
                    })
                }
            </table>
        </>
    )
}

export default Spells;