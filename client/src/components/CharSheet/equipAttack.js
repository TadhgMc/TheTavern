import React from 'react';

const EquiptAttack = ({equip}) => {

    return(
    <>
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
        </table>
        <table>
            <thead>
                <tr>
                    <th>Backpack Contents:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {equip.backpack?.map((item) => {
                        return <td>{item}</td>
                    })}
                </tr>
            </tbody>
        </table>
    </>
    )
}

export default EquiptAttack;