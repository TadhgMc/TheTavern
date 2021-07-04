import React, {useState} from 'react';

const CharacterInfoAbilities = (ability, info) => {
    const [abilities, setAbilities] = useState({});
    const [charInfo, setCharInfo] = useState({});

    setAbilities(ability);
    setCharInfo(info);
    console.log('abilities: ',abilities);
    console.log('character info: ', charInfo);

    return(
    <>
        <h3>{charInfo.charName}</h3>
        <h3>{charInfo.race}</h3>
        <h3>{charInfo.charClass}</h3>
        <h3>{charInfo.level}</h3>
        <h3>{charInfo.alignment}</h3>
        <p>{charInfo.sex}</p>
        <p>{charInfo.background}</p>

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
                    <td>{abilities.strength}</td>
                    <td>{abilities.dexterity}</td>
                    <td>{abilities.constitution}</td>
                    <td>{abilities.intelligence}</td>
                    <td>{abilities.wisdom}</td>
                    <td>{abilities.charisma}</td>
                </tr>
            </tbody>
        </table>
    </>
    )
}

export default CharacterInfoAbilities;