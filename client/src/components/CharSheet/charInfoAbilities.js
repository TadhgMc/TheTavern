import React from 'react';

const CharacterInfoAbilities = ({ability, info}) => {
    
    return(
    <>
        <div className = "container-fluid">

        <div className = "text-center mb-5">
        <h4>Character Name: {info.charName}</h4>
        </div>

        <div className = "row mb-4 ">
            
            <div className = "col-md-1"></div>

            <div className = "col-6 col-md-6">
                <h6>Race: {info.race}</h6>
                <h6>Class: {info.charClass}</h6>       
                <h6>Level: {info.level}</h6>
                <h6>Alignment: {info.alignment}</h6>
                <h6>Sex: {info.sex}</h6>
            </div>
                
            <div className = "col-6 col-md-5">
                <h6>Personality Traits: {info.background.PersonalityTraits}</h6>
                <h6>Ideals: {info.background.Ideals}</h6>
                <h6>Bonds: {info.background.Bonds}</h6>
                <h6>Flaws: {info.background.Flaws}</h6>
            </div>
        
        </div>


        <div className = "row mb-4 text-center">
        <table>
            <thead>
                <tr>
                    <th>Strength</th>
                    <th>Dexterity</th>
                    <th>Constitution</th>
                    {/* <th>Intelligence</th>
                    <th>Wisdom</th>
                    <th>Charisma</th> */}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ability.strength}</td>
                    <td>{ability.dexterity}</td>
                    <td>{ability.constitution}</td>
                    {/* <td>{ability.intelligence}</td>
                    <td>{ability.wisdom}</td>
                    <td>{ability.charisma}</td> */}
                </tr>
            </tbody>
            <thead>
                <tr>
                    {/* <th>Strength</th>
                    <th>Dexterity</th>
                    <th>Constitution</th> */}
                    <th>Intelligence</th>
                    <th>Wisdom</th>
                    <th>Charisma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <td>{ability.strength}</td>
                    <td>{ability.dexterity}</td>
                    <td>{ability.constitution}</td> */}
                    <td>{ability.intelligence}</td>
                    <td>{ability.wisdom}</td>
                    <td>{ability.charisma}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    </>
    )
}

export default CharacterInfoAbilities;