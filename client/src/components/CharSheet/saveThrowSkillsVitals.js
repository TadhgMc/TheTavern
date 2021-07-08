import React from 'react';

const SaveThrowsSkillsVitals = ({saves, Skills, Vitals}) => { 

    return(
        <>
        <div className = "container-fluid mb-5 text-center">
        <div className = "row-12 d-flex justify-content-center">
            <table>
                <tr>
                    <th>ac</th>
                    <td>{Vitals.ac}</td>
                </tr>
                <tr>
                    <th>current hp</th>
                    <td>{Vitals.hp.currentHP}</td>
                </tr>
                <tr>
                    {Vitals.hp.maxHP ? (
                        <>
                        <th>max HP</th>
                        <td>{Vitals.hp.maxHP}</td>
                        </>
                    ): <p></p>}
                </tr>
                <tr>
                    <th>hit die</th>
                    <td>remaining: {Vitals.hp.hitDie.total} die: {Vitals.hp.hitDie.die}</td>
                </tr>
                <tr>
                    <th>init</th>
                    <td>{Vitals.init}</td>
                </tr>
                <tr>
                    <th>speed:</th>
                    <td>{Vitals.speed}ft</td>
                </tr>
                <tr>
                    <th>Proficiency Bonus</th>
                    <td>{Vitals.profBonus}</td>
                </tr>
            </table>
            </div>
            </div>
                        
            <div className = "container-fluid ">
            <div className = "row-md-12 card-group">
            <div className = "col-md-6 ">
            
            <table>
            <h3>Skills</h3>
                <div className = " mb-5">
                <tr>
                    <th>acrobatics</th>
                    <td>{Skills.acrobatics}</td>
                    <div className = "me-4 ms-4"></div>
                    <th>animalhandling</th>
                    <td>{Skills.animalhandling}</td>
                </tr>
                <tr>
                    <th>arcana</th>
                    <td>{Skills.arcana}</td>
                    <div className = "me-3"></div>
                    <th>athletics</th>
                    <td>{Skills.athletics}</td>
                </tr>
                <tr>
                    <th>deception</th>
                    <td>{Skills.deception}</td>
                    <div className = "me-3"></div>
                    <th>history</th>
                    <td>{Skills.history}</td>
                </tr>
                <tr>
                    <th>insight</th>
                    <td>{Skills.insight}</td>
                    <div className = "me-3"></div>
                    <th>intimidation</th>
                    <td>{Skills.intimidation}</td>
                </tr>
                <tr>
                    <th>investigation</th>
                    <td>{Skills.investigation}</td>
                    <div className = "me-3"></div>
                    <th>medicine</th>
                    <td>{Skills.medicine}</td>
                </tr>
                <tr>
                    <th>nature</th>
                    <td>{Skills.nature}</td>
                    <div className = "me-3"></div>
                    <th>perception</th>
                    <td>{Skills.perception}</td>
                </tr>
                <tr>
                    <th>performance</th>
                    <td>{Skills.performance}</td>
                    <div className = "me-3"></div>
                    <th>persuasion</th>
                    <td>{Skills.persuasion}</td>
                </tr>
                <tr>
                    <th>religion</th>
                    <td>{Skills.religion}</td>
                    <div className = "me-3"></div>
                    <th>sleightofhand</th>
                    <td>{Skills.sleightofhand}</td>
                </tr>
                <tr>
                    <th>stealth</th>
                    <td>{Skills.stealth}</td>
                    <div className = "me-3"></div>
                    <th>survival</th>
                    <td>{Skills.survival}</td>
                </tr>
                </div>
            </table> 
            </div>

            <div className = "col-md-6">
            <h3>Saving Throws</h3>
            <table>
            <div className = "container text-center">
                <tr>
                    <th>str:</th>
                    <td>{saves.str}</td>
                    <div className = "me-3 ms-3"></div>
                    <th>dex:</th>
                    <td>{saves.dex}</td>
                </tr>
                <tr>
                    <th>con:</th>
                    <td>{saves.con}</td>
                    <div className = "me-3"></div>
                    <th>int:</th>
                    <td>{saves.int}</td>
                </tr>
                <tr>
                    <th>wis:</th>
                    <td>{saves.wis}</td>
                    <div className = "me-3"></div>
                    <th>cha:</th>
                    <td>{saves.cha}</td>
                </tr>
                </div>
            </table>
            </div>
            </div>
            </div>

        </>
    )

}

export default SaveThrowsSkillsVitals;