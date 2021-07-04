import React, {useState, useEffect} from 'react';
import axios from 'axios';

const LanguageFeats = (language, feats) => {
    const [languages, setLanguages] = useState();
    const [features, setFeatures] = useState();
    let fullFeats = [];
    useEffect(()=> {
        setLanguages(language);
        setFeatures(feats);
    },[language, feats])
    

    useEffect(()=> {
        features.map((feat) => {
            console.log(feat.join('-'));
            axios.get(`https://www.dnd5eapi.co/api/features/${feat.join('-')}`)
                .then((res) => {
                    console.log('line 17, GET res: ', res);
                    // fullFeats.push(res);
                    // someting like res.body.name && .desc
                })
        });
        console.log('full Feats: ',fullFeats);
    }, [])

    return(
        <>
            <table>
                <thead>
                    <th>Spoken Languages</th>
                </thead>
                <tbody>
                    {languages.map((language) => {
                        <td>{language}</td>
                    })}
                </tbody>
            </table>
            <h3>Character Features</h3>
            <ol>
                {fullFeats.map((feat) => {
                    <li>{feat.name}: {feat.desc}</li>
                })}
            </ol>
        </>
    )
}

export default LanguageFeats;