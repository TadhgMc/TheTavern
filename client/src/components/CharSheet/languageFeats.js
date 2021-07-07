import React from 'react';

const LanguageFeats = ({language, feats}) => {
    
    return(
        <>
            {/* <table>
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
            </ol> */}

            <div className = "container-fluid">
            <h3 className = "mb-3">Spoken Languages</h3>
            <div className = "row-12 card-group">
            {language.map((languag) => {
                        return( 
                            <div className = "col-sm-6 col-md-3">
                            <h6>{languag}</h6>
                            </div>
                        )
            })}
            </div>
            </div>
        </>
    )
}

export default LanguageFeats;