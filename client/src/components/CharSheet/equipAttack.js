import React, {useState, useEffect} from 'react';

const EquiptAttack = (equip, attck) => {
    const [equipment, setEquipment] = useState([]);
    const [attack, setAttack] = useState([]);

    useEffect(()=> {
        setEquipment(equip);
        setAttack(attck);
    }, [equip, attck])
    

    return(
    <>
        <h3>Equipment</h3>
        <table>
            <tr>
                <th>Equipted Armor:</th>
                <td>{equipment.armor}</td>
            </tr>
            <tr>
                <th>Equipted Weapon:</th>
                <td>{equipment.weapon}</td>
            </tr>
            { equipment.sheild &&
                <tr>
                    <th>Equipted Sheild:</th>
                    <td>{equipment.sheild}</td>
                </tr> 
            }
            <tr>
                <th>Backpack Contents:</th>
                {equipment.backpack.map((item) => {
                    <td>{item}</td>
                })}
            </tr>
        </table>
    </>
    )
}

export default EquiptAttack;