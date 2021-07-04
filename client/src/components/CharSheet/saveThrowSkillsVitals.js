import React, {useState} from 'react';

const saveThrowsSkillsVitals = (saves, skills, vitals) => {
    const [saveThrows, setSaveThrows] = useState();
    const [Skills, setSkills] = useState();
    const [Vitals, setVitals] = useState();

    setSaveThrows(saves);
    setSkills(skills);
    setVitals(vitals);

    return(
        <>
            <h3>save throws</h3>

            <table>
                <tr>
                    <th>acrobatics</th>
                    <td>{Skills.acrobatics}</td>
                </tr>
                <tr>
                    <th>animalhandling</th>
                    <td>{Skills.animalhandling}</td>
                </tr>
                <tr>
                    <th>arcana</th>
                    <td>{Skills.arcana}</td>
                </tr>
                <tr>
                    <th>athletics</th>
                    <td>{Skills.athletics}</td>
                </tr>
                <tr>
                    <th>deception</th>
                    <td>{Skills.deception}</td>
                </tr>
                <tr>
                    <th>history</th>
                    <td>{Skills.history}</td>
                </tr>
                <tr>
                    <th>insight</th>
                    <td>{Skills.insight}</td>
                </tr>
                <tr>
                    <th>intimidation</th>
                    <td>{Skills.intimidation}</td>
                </tr>
                <tr>
                    <th>investigation</th>
                    <td>{Skills.investigation}</td>
                </tr>
                <tr>
                    <th>medicine</th>
                    <td>{Skills.medicine}</td>
                </tr>
                <tr>
                    <th>nature</th>
                    <td>{Skills.nature}</td>
                </tr>
                <tr>
                    <th>perception</th>
                    <td>{Skills.perception}</td>
                </tr>
                <tr>
                    <th>performance</th>
                    <td>{Skills.performance}</td>
                </tr>
                <tr>
                    <th>persuasion</th>
                    <td>{Skills.persuasion}</td>
                </tr>
                <tr>
                    <th>religion</th>
                    <td>{Skills.religion}</td>
                </tr>
                <tr>
                    <th>sleightofhand</th>
                    <td>{Skills.sleightofhand}</td>
                </tr>
                <tr>
                    <th>stealth</th>
                    <td>{Skills.stealth}</td>
                </tr>
                <tr>
                    <th>survival</th>
                    <td>{Skills.survival}</td>
                </tr>
            </table>
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
        </>
    )

}

export default saveThrowsSkillsVitals;