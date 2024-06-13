import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./vote.css";
import Profile from './Profile/Profile';

const Vote = () => {
    const location = useLocation();
    const { user } = location.state || {};
    const [candidates, setCandidates] = useState([]);

    const apiUrl = import.meta.env.VITE_API_URL; // Utilisation correcte de la variable d'environnement

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get(`${apiUrl}/candidats`); // Assurez-vous que l'URL est correcte
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
                    id={`${apiUrl}/${candidate.photo}`} // Concaténer l'URL de base avec le chemin de l'image
                    userId={user?._id} // Vérifiez si l'utilisateur est défini
                    candidateId={candidate._id}
                />
            ))}
        </div>
    );
};

export default Vote;
