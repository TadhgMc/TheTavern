import React, {useState, useEffect} from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import API from '../../utils/api';
import CharacterInfoAbilities from '../../components/CharSheet/charInfoAbilities';
import SaveThrowsSkillsVitals from '../../components/CharSheet/saveThrowSkillsVitals';
import EquiptAttack from '../../components/CharSheet/equipAttack';
import LanguageFeats from '../../components/CharSheet/languageFeats';
import Spells from '../../components/CharSheet/Spells';


function CharacterSheet(){
    const [charData, setCharData] = useState({});
    const charID = useParams();
    console.log('charID:', charID);

    const getChar = (charID) => {
        API.getCharacter(charID.id)
            .then((res) => {
                console.log('res.data: ',res.data)
                setCharData(res.data);
            })
            .catch(err => console.log(err));
        console.log('charData: ',charData);
    }

    useEffect(()=> {
        getChar(charID)
    });
    
    return(
        <Tabs>
            <TabList>
                <Tab>Character Info & Abilites</Tab>
                <Tab>Skills & Vitals</Tab>
                <Tab>Equipment</Tab>
                <Tab>Language & Features</Tab>
                <Tab>Spells</Tab>
            </TabList>
            <TabPanel>
                <h2>Character Info</h2>
                <CharacterInfoAbilities
                ability={charData.abilities}
                info={charData.charInfo} 
                />
            </TabPanel>
            <TabPanel>
                <h2>SaveThrow info</h2>
                <SaveThrowsSkillsVitals
                saves={charData.saveThrows}
                Skills={charData.skills}
                Vitals={charData.vitals}
                />
            </TabPanel>
            <TabPanel>
                <h2>Equipment info</h2>
                <EquiptAttack equip={charData.equipment} attck=''/>
            </TabPanel>
            <TabPanel>
                <h2>Language info</h2>
                <LanguageFeats languages={charData.languages} feats={charData.features}/>
            </TabPanel>
            <TabPanel>
                <h2>Spells info</h2>
                <Spells spells={charData.spells}/>
            </TabPanel>
        </Tabs>
    )
}

export default CharacterSheet;