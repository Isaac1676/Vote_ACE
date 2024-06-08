import React from 'react'
import "./vote.css"
import id1 from "../../assets/id1.svg"
import id2 from "../../assets/id2.svg"
import id3 from "../../assets/id3.svg"
import Profile from './Profile/Profile'

const Vote = () => {
    const profiles = [
        { name: 'ZAGOTE DANN ELIE', avatar: id1 },
        { name: 'JOHN DOE', avatar: id2 },
        { name: 'JANE DOE', avatar: id3 }
    ];

    return (
        <div>
            <h1>Votes </h1>

            <p>
                Procédez maintenant au vote
                en choissisant votre candidat
            </p>

            {profiles.map((profile, index) => (
                <Profile key={index} name={profile.name} id={profile.avatar} />
            ))}
        </div>
    )
}

export default Vote