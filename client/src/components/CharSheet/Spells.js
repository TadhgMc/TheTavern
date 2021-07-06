import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Spells = (spellList) => {
    const [spells, setSpells] = useState();

    useEffect(()=> {
        spellList.map((feat) => {
            console.log(feat.join('-'));
            axios.get(`https://www.dnd5eapi.co/api/features/${feat.join('-')}`)
                .then((res) => {
                    console.log('line 17, GET res: ', res);
                    // spells.push(res); or setSpells.push ?
                    // someting like res.body.name && .desc .higher_level .range
                })
        });
        console.log('full Spells: ', spells);
    }, [])

    return(
        <>
            <table>
                {
                    spells.map((spell) => {
                        <tr>
                            <th>{spell.name}</th>
                            <td>{spell.range}</td>
                            <td>{spell.desc}</td>
                            <td>{spell.higher_level}</td>
                        </tr>
                    })
                }
            </table>
        </>
    )
}

export default Spells;