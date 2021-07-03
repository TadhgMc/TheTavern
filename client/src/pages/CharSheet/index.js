import React from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CharInfo from "../../components/CharInfo";
import Abilities from "../../components/Abilities";
import SaveThrow from "../../components/SaveThrow";
import Skill from "../../components/Skill";
import Personality from "../../components/Personality";
import Vitality from "../../components/Vitality";
import Equipment from "../../components/Equipment";
import Attacks from "../../components/Attacks";
import Language from "../../components/Language";
import Features from "../../components/Features";
import Spells from "../../components/Spells";


function CharacterSheet(){
    return(
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
                <h2>Character Info</h2>
                <CharInfo />
            </TabPanel>
            <TabPanel>
                <h2>Abilities info</h2>
                <Abilities str={10} dex={10} con={10} int={10} wis={10} cha={10}/>
            </TabPanel>
            <TabPanel>
                <h2>SaveThrow info</h2>
                <SaveThrow />
            </TabPanel>
            <TabPanel>
                <h2>Skill info</h2>
                <Skill />
            </TabPanel>
            <TabPanel>
                <h2>Personality info</h2>
                <Personality />
            </TabPanel>
            <TabPanel>
                <h2>Vitality info</h2>
                <Vitality />
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