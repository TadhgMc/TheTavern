import React from 'react';

const CharacterInfoAbilities = ({ability, info}) => {
    
    return(
    <>
        <h4>Character Name: {info.charName}</h4>
        <h4>Race: {info.race}</h4>
        <h4>Class: {info.charClass}</h4>
        <h4>Level: {info.level}</h4>
        <h4>Alignment: {info.alignment}</h4>
        <h4>Sex: {info.sex}</h4>
        <ol>
            <li>Personality Traits: {info.background.PersonalityTraits}</li>
            <li>Ideals: {info.background.Ideals}</li>
            <li>Bonds: {info.background.Bonds}</li>
            <li>Flaws: {info.background.Flaws}</li>
        </ol>

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