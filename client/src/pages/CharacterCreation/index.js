import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CharInfo from "../../components/characterCreation/CharInfo";
import Abilities from "../../components/characterCreation/Abilities";
import SaveThrow from "../../components/characterCreation/SaveThrow";
import Skill from "../../components/characterCreation/Skill";
import Personality from "../../components/characterCreation/Personality";
import Vitality from "../../components/characterCreation/Vitality";
import Equipment from "../../components/characterCreation/Equipment";
import Attacks from "../../components/characterCreation/Attacks";
import Language from "../../components/characterCreation/Language";
import Features from "../../components/characterCreation/Features";
import Spells from "../../components/characterCreation/Spells";
import { useParams } from "react-router-dom";
import { useState } from "react"
import API from '../../utils/api'


function CharacterCreation() {
    

    const [vitals, setVitals] = useState({
        ac: 0,
        hp: {
          maxHP: 0,
          currentHP: 0,
          hitDie: 0,
          die: "",
          },
        init: 0,
        speed: 0,
        profBonus: 0
      },);
    const [abilities, setAbilities] = useState({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    });

    const [equipment, setEquipment] = useState(
        [""]
    )

    const [saveThrows, setSaveThrows] = useState({
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
    })

    const [skills, setSkills] = useState({
        acrobatics: 0,
        animalhandling: 0,
        arcana: 0,
        athletics: 0,
        deception: 0,
        history: 0,
        insight: 0,
        intimidation: 0,
        investigation: 0,
        medicine: 0,
        nature: 0,
        perception: 0,
        performance: 0,
        persuasion: 0,
        religion: 0,
        sleightofhand: 0,
        stealth: 0,
        survival: 0,
    })

    const [background, setBackground] = useState({
        PersonalityTraits: "",
        Ideals: "",
        Bonds: "",
        Flaws: ""
    })

    const [charInfo, setCharInfo] = useState({
            charName: "",
            playerName: "",
            sex: "",
            race: "",
            charClass: "",
            level: 0,
            background: background,
            alignment: "",
    });

    const [languages, setLanguages] = useState(
        [""]
    )

    const [features, setFeatures] = useState(
        [""]
    )

    const [spells, setSpells] = useState(
        [""]
    )

    const [attacks, setAttacks] = useState(
        [""]
    )

    const onClick = () => {
        const character = {
            charInfo: charInfo,
            vitals: vitals,
            languages: languages,
            equipment: equipment,
            abilities: abilities,
            saveThrows: saveThrows,
            skills: skills,
            features: features,
            spells: spells,
            attacks: attacks,
            
            // Don't forget to add each component here
        }
        API.updateCharacter(id, character)
    }
    const { id } = useParams();
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Character Info</Tab>
                    <Tab>Abilities</Tab>
                    <Tab>SaveThrow</Tab>
                    <Tab>Skill</Tab>
                    <Tab>Personality</Tab>
                    <Tab>Vitality</Tab>
                    <Tab>Equipment</Tab>
                    <Tab>Attacks</Tab>
                    <Tab>Language</Tab>
                    <Tab>Features</Tab>
                    <Tab>Spells</Tab>
                </TabList>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Input Character Info</h2>
                    <CharInfo charInfo={charInfo} setCharInfo={setCharInfo} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Input Ability Scores</h2>
                    <Abilities abilities={abilities} setAbilities={setAbilities} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Select Saving Throws</h2>
                    <SaveThrow saveThrows={saveThrows} setSaveThrows={setSaveThrows} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Select Skills</h2>
                    <Skill skills={skills} setSkills={setSkills} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Input Personality </h2>
                    <Personality background={background} setBackground={setBackground} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Enter Vitality</h2>
                    <Vitality vitals={vitals} setVitals={setVitals} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Enter Equipment</h2>
                    <Equipment equipment={equipment} setEquipment={setEquipment} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Enter Weapon Attack Info</h2>
                    <Attacks attacks={attacks} setAttacks={setAttacks} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Enter Languages</h2>
                    <Language languages={languages} setLanguages={setLanguages} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Enter Features</h2>
                    <Features features={features} setFeatures={setFeatures} />
                </TabPanel>
                <TabPanel>
                    <h2 id={id} className="text-center mb-4">Enter Spells</h2>
                    <Spells spells={spells} setSpells={setSpells} />
                </TabPanel>
            </Tabs>
            <div>
                <div className="text-center">
                    <button className="btn btn-danger" type="submit" onClick={onClick}> Save </button>
                </div>
            </div>
        </>
    )
}



export default CharacterCreation