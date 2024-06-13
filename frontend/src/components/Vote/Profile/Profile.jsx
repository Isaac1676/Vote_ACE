import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./profile.css";

const Profile = ({ id, name, candidateId, userId }) => {
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;

    const handleVote = async () => {
        try {
            const response = await axios.post(`${apiUrl}/votes`, {
                userId: userId, // Passez l'ID de l'utilisateur ici
                candidateId: candidateId // Passez l'ID du candidat ici
            });

            if (response.status === 201) {
                navigate('/');
                alert(`Merci d'avoir voté pour ${name}`);
            }
        } catch (error) {
            console.log('Erreur lors du vote:', error.message);
            alert("Une erreur est survenue lors du vote. Veuillez réessayer.");
        }
    };

    return (
        <div>
            <div className="profile_card">
                <div className="avatar">
                    <img src={id} alt="" />
                </div>
                <div className="name">
                    {name}
                </div>
            </div>
            <div className="button" onClick={handleVote}>Voter</div>
        </div>
    );
}

export default Profile;
