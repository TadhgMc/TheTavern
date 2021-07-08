import React from 'react';

const LanguageFeats = ({language, feats}) => {
    
    return(
        <>
            <div className = "container-fluid">
            <h3 className = "mb-3">Spoken Languages</h3>
            <div className = "row-12 card-group mb-3">
            {language.map((languag) => {
                        return( 
                            <div className = "col-sm-6 col-md-3">
                            <h6>{languag}</h6>
                            </div>
                        )
            })}
            </div>

            <h3 className = "mb-3">Character Features</h3>
            <ol>
                {feats.map((feat) => {
                    return <li>{feat.name}: {feat.desc}</li>
                })}
            </ol>

            </div>
        </>
    )
}

export default LanguageFeats;