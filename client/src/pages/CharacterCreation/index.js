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


function CharacterCreation() {
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
                <h2 className = "text-center mb-4">Input Character Info</h2>
                <CharInfo />
            </TabPanel>
            <TabPanel>
                <h2 className = "text-center mb-4">Input Ability Scores</h2>
                <Abilities/>
            </TabPanel>
            <TabPanel>
                <h2 className = "text-center mb-4">Select Saving Throws</h2>
                <SaveThrow />
            </TabPanel>
            <TabPanel>
                <h2 className = "text-center mb-4">Select Skills</h2>
                <Skill />
            </TabPanel>
            <TabPanel>
                <h2 className = "text-center mb-4">Input Personality </h2>
                <Personality />
            </TabPanel>
            <TabPanel>
                <h2>Enter Vitality</h2>
                <Vitality />
            </TabPanel>
            <TabPanel>
                <h2>Enter Equipment</h2>
                <Equipment />
            </TabPanel>
            <TabPanel>
                <h2>Enter Attack Info</h2>
                <Attacks />
            </TabPanel>
            <TabPanel>
                <h2>Enter Languages</h2>
                <Language />
            </TabPanel>
            <TabPanel>
                <h2>Enter Features</h2>
                <Features />
            </TabPanel>
            <TabPanel>
                <h2>Enter Spells</h2>
                <Spells />
            </TabPanel>
        </Tabs>
    )
}



export default CharacterCreation