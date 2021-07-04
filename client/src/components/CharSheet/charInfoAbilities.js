import React, {useState, useEffect} from 'react';

const CharacterInfoAbilities = ({ability, info}) => {
    
    console.log('abilities: ',ability);
    console.log('character info: ', info);

    return(
    <>
        <h3>{info.charName}</h3>
        <h3>{info.race}</h3>
        <h3>{info.charClass}</h3>
        <h3>{info.level}</h3>
        <h3>{info.alignment}</h3>
        <p>{info.sex}</p>
        <p>{info.background}</p>

        <table>
            <thead>
                <tr>
                    <th>Strength</th>
                    <th>Dexterity</th>
                    <th>Constitution</th>
                    <th>Intelligence</th>
                    <th>Wisdom</th>
                    <th>Charisma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ability.strength}</td>
                    <td>{ability.dexterity}</td>
                    <td>{ability.constitution}</td>
                    <td>{ability.intelligence}</td>
                    <td>{ability.wisdom}</td>
                    <td>{ability.charisma}</td>
                </tr>
            </tbody>
        </table>
    </>
    )
}

export default CharacterInfoAbilities;