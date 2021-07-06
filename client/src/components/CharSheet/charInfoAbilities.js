import React, {useState, useEffect} from 'react';

const CharacterInfoAbilities = ({ability, info}) => {
    console.log('abilities: ', ability);
    console.log('character info: ', info);
    
    return(
    <>
        <h3>Character Name: {info.charName}</h3>
        <h3>Race: {info.race}</h3>
        <h3>Class: {info.charClass}</h3>
        <h3>Level: {info.level}</h3>
        <h3>Alignment: {info.alignment}</h3>
        <p>{info.sex}</p>
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