import React from "react";
import Abilities from "./Abilities";
import SaveThrow from "./SaveThrow";
import Skill from "./Skill";
import CharInfo from "./CharInfo";
import Personality from "./Personality";
import Vitality from "./Vitality";
import Equipment from "./Equipment";
import Attacks from "./Attacks";
import Language from "./Language";
import Features from "./Features";
import Spells from "./Spells";


// Need to move class to models if this will be saved to DB.


export default class Parent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const charInfo = <CharInfo/>
        const abilities = <Abilities/>
        const saveThrow = <SaveThrow/>
        const skills = <Skill/>
        const personality = <Personality/>
        const vitality = <Vitality/>
        const equipment = <Equipment/>
        const attacks = <Attacks/>
        const languages = <Language/>
        const features = <Features/>
        const spells = <Spells/>

        return (
            charInfo,
            abilities,
            saveThrow,
            skills,
            personality,
            vitality,
            equipment,
            attacks,
            languages,
            features,
            spells
        );
    }
}