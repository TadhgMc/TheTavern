import React, {useEffect} from 'react';
import axios from 'axios';

const LanguageFeats = ({language, feats}) => {
    
    return(
        <>
            <table>
                <thead>
                    <th>Spoken Languages</th>
                </thead>
                <tbody>
                    {language.map((languag) => {
                       return <td>{languag}</td>
                    })}
                </tbody>
            </table>
            <h3>Character Features</h3>
            <ol>
                {feats.map((feat) => {
                    return <li>{feat.name}: {feat.desc}</li>
                })}
            </ol>
        </>
    )
}

export default LanguageFeats;