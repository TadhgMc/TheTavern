import React from 'react';

const EquiptAttack = ({equip}) => {

    return(
    <>
        <table>
            <div className = "container-fluid">
            <tr>
                <div className = "mb-3">
                    <th>Equipped Armor:</th>
                    <td>{equip.armor}</td>
                </div>
            </tr>
            <tr>
                <div className = "mb-3">
                <th className="mb-3">Equipped Weapon:</th>
                <td>{equip.weapon}</td>
                </div>
            </tr>
            { equip.sheild &&
                <tr>
                    <div className = "mb-3">
                        <th>Equipped Sheild:</th>
                        <td>{equip.sheild}</td>
                    </div>
                </tr> 
            }
            </div>
        </table>
        <table>
            <div className = "container-fluid">
            <thead>
                <tr>
                    <div className = "mb-3">
                        <th>Backpack Contents:</th>
                    </div>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {equip.backpack.map((item) => {
                        return <td>{item}</td>
                    })}
                </tr>
            </tbody>
            </div>
        </table>
    </>
    )
}

export default EquiptAttack;