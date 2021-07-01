import React from 'react';

const Profile = () => {

    return(
        <div className = "container row">
            <div className = "vw-25 text-center">
                <h1>Profile</h1>
            </div>
            <div className = "col text-center">
            <button type="button" class="btn btn-primary btn-lg">Add Character</button>
            
            </div>

            <div className = "col text-center">
                <h2>Characters:</h2>
            </div>
        </div>
    )
}

export default Profile