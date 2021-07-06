import React, {useState, useEffect} from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from "react-router-dom";
import axios from 'axios';
import 'react-tabs/style/react-tabs.css';
import API from '../../utils/api';
import CharacterInfoAbilities from '../../components/CharSheet/charInfoAbilities';
import SaveThrowsSkillsVitals from '../../components/CharSheet/saveThrowSkillsVitals';
import EquiptAttack from '../../components/CharSheet/equipAttack';
import LanguageFeats from '../../components/CharSheet/languageFeats';
import Spells from '../../components/CharSheet/Spells';


function CharacterSheet(){
    const charID = useParams();
    console.log('charID:', charID.id);
    const [charData, setCharData] = useState();
    
    useEffect(()=> {
        API.getCharacter(charID.id)
        .then((res) => {
            setCharData(res.data);
        })
        .catch(err => console.log(err));
    },[]);
    
    // get feat/trait info
    let fullFeats = [];
    useEffect(()=> {
        if(charData === undefined){
            return;
        };
        charData.features.map((feat) => {
            console.log(feat.replace(' ','-'));
            axios.get(`https://www.dnd5eapi.co/api/features/${feat.replace(' ','-')}`)
                .then((res) => {
                    let {name, desc} = res.data
                    fullFeats.push({name, desc});
                })
        });
    }, [charData?.features])

    // get spell info
    let spells= [];
    useEffect(()=> {
        if(charData === undefined){
            return;
        };
        charData.spells.map((spell) => {
            console.log(spell.replace(' ','-'));
            axios.get(`https://www.dnd5eapi.co/api/spells/${spell.replace(' ','-')}`)
                .then((res) => {
                    let {name, desc, higher_level, range} = res.data;
                    spells.push({name, desc, higher_level, range});
                })
        });
    }, [charData?.spells])

    if(charData === undefined){
        return <div>Loading!</div>
    };
    
    return(
        <Tabs>
            <TabList>
                <Tab>Character Info & Abilites</Tab>
                <Tab>Skills, Saves & Vitals</Tab>
                <Tab>Equipment</Tab>
                <Tab>Languages & Features</Tab>
                <Tab>Spells</Tab>
            </TabList>
            <TabPanel>
                <h2>Character Info</h2>
                <CharacterInfoAbilities
                ability={charData?.abilities}
                info={charData?.charInfo} 
                />
            </TabPanel>
            <TabPanel>
                <h2>SaveThrow info</h2>
                <SaveThrowsSkillsVitals
                saves={charData?.saveThrows}
                Skills={charData?.skills}
                Vitals={charData?.vitals}
                />
            </TabPanel>
            <TabPanel>
                <h2>Equipment info</h2>
                <EquiptAttack equip={charData?.equipment}/>
            </TabPanel>
            <TabPanel>
                <h2>Language info</h2>
                <LanguageFeats
                language={charData?.languages}
                feats={fullFeats}
                />
            </TabPanel>
            <TabPanel>
                <h2>Spells info</h2>
                <Spells spellList={spells}/>
            </TabPanel>
        </Tabs>
    )
}

export default CharacterSheet;

/*
{"charInfo": {
            "charName": "new Test",
            "playerName": "tadhg",
            "sex": "male",
            "race": "dwarf",
            "charClass": "barbarian",
            "level": 1,
            "background": {
                      "PersonalityTraits":"blah blah blah",
                      "Ideals": "whatver",
                      "Bonds": "nothin",
                      "Flaws": "where to start?"
            },
            "alignment": "evil"
          },
          "vitals":{
            "ac": 15,
            "hp": {
              "currentHP": 20,
              "hitDie": {
                "total": 2,
                "die": "d10"
              }
            },
            "init": 12,
            "speed": 30,
            "profBonus": 2
          },
          "abilities": {
            "strength": 12,
            "dexterity": 12,
            "constitution": 12,
            "intelligence": 12,
            "wisdom": 12,
            "charisma": 12
          },
          "equipment": {
            "armor": "plate",
            "weapon": "bow",
            "sheild": "",
            "backpack": ["candles", "tinder box"]
          },
          "saveThrows": {
            "str": 2,
            "dex": 2,
            "con": 2,
            "int": 2,
            "wis": 2,
            "cha": 2
          },
          "skills":{
            "acrobatics": 2,
            "animalhandling": 1,
            "arcana": 1,
            "athletics": 1,
            "deception": 1,
            "history": 2,
            "insight": 3,
            "intimidation": 4,
            "investigation": 3,
            "medicine": 2,
            "nature": 2,
            "perception": 2,
            "performance": 2,
            "persuasion": 2,
            "religion": 2,
            "sleightofhand": 2,
            "stealth": 2,
            "survival": 2
          },
          "proficiencies": ["light-armor","killing"],
          "languages": ["common", "dwarvish"],
          "features": ["darkvision", "lucky"],
          "spells": ["bless", "cure wounds"],
          "notes": []
      }
*/