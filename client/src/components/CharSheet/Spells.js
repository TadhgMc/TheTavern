import React, {useState, useEffect} from 'react';
import axios from 'axios';

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