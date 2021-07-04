import React, {useState, useEffect} from 'react';

const EquiptAttack = ({equip, attck}) => {

    return(
    <>
        <h3>Equipment</h3>
        <table>
            <tr>
                <th>Equipted Armor:</th>
                <td>{equip.armor}</td>
            </tr>
            <tr>
                <th>Equipted Weapon:</th>
                <td>{equip.weapon}</td>
            </tr>
            { equip.sheild &&
                <tr>
                    <th>Equipted Sheild:</th>
                    <td>{equip.sheild}</td>
                </tr> 
            }
            <tr>
                <th>Backpack Contents:</th>
                {equip.backpack.map((item) => {
                    <td>{item}</td>
                })}
            </tr>
        </table>
    </>
    )
}

export default EquiptAttack;