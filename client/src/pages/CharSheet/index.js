import React, {useState, useEffect} from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import API from '../../utils/api';
import CharacterInfoAbilities from '../../components/CharSheet/charInfoAbilities';
import saveThrowsSkillsVitals from '../../components/CharSheet/saveThrowSkillsVitals';


function CharacterSheet(){
    const [charData, setCharData] = useState();
    const charID = useParams();

    useEffect(() => {
        API.getCharacter(charID)
            .then((res) => setCharData(res.body))
            .catch(err => console.log(err));
        console.log(charData);
    },[])


    return(
        <Tabs>
            <TabList>
                <Tab>Character Info</Tab>
                <Tab>SaveThrow</Tab>
                <Tab>Equipment</Tab>
                <Tab>Attacks</Tab>
                <Tab>Language</Tab>
                <Tab>Features</Tab>
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
                <saveThrowsSkillsVitals
                saves=''
                skills={charData.skills}
                vitals={charData.vitals}
                />
            </TabPanel>
            <TabPanel>
                <h2>Equipment info</h2>
                <Equipment />
            </TabPanel>
            <TabPanel>
                <h2>Attacks info</h2>
                <Attacks />
            </TabPanel>
            <TabPanel>
                <h2>Language info</h2>
                <Language />
            </TabPanel>
            <TabPanel>
                <h2>Features info</h2>
                <Features />
            </TabPanel>
            <TabPanel>
                <h2>Spells info</h2>
                <Spells />
            </TabPanel>
        </Tabs>
    )
}

export default CharacterSheet;