import React from 'react'
import "./profile.css"

const Profile = ({id, name}) => {
    const handleVote = () => {
        alert(`Merci d'avoir voté ${name}`);
      };

    return (
        <div>
            <div className="profile_card">
                <div className="avatar">
                    <img src={id} alt="" srcset="" />
                </div>

                <div className="name">
                    {name}
                </div>
            </div>

            <div className="button" onClick={handleVote}>Voter</div>
        </div>
    )
}

export default Profile