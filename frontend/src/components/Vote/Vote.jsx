import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./vote.css";
import Profile from './Profile/Profile';

const Vote = () => {
    const location = useLocation();
    const { user } = location.state || {};
    console.log(user)
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:2013/candidats'); // Assurez-vous que l'URL est correcte
                setCandidates(response.data);
            } catch (error) {
                console.log('Erreur lors de la récupération des candidats:', error);
            }
        };

        fetchCandidates();
    }, []);

    return (
        <div>
            <h1>Votes</h1>
            <p>
                Procédez maintenant au vote en choisissant votre candidat
            </p>
            {candidates.map((candidate, index) => (
                <Profile 
                    key={index} 
                    name={candidate.name} 
                    id={candidate.photo}
                    userId={user._id}
                    candidateId={candidate._id}
                />
            ))}
        </div>
    );
};

export default Vote;
