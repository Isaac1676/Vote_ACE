import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './results.css';

const Results = () => {
    const [candidats, setCandidats] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL; // Utilisation correcte de la variable d'environnement

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get(`${apiUrl}/candidats`); // Assurez-vous que l'URL est correcte
                setCandidats(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des candidats:', error);
            }
        };

        fetchCandidates();
    }, [apiUrl]);

    return (
        <div className="results">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom et prénom</th>
                        <th>Nombre de votes</th>
                    </tr>
                </thead>
                <tbody>
                    {candidats.map((candidat, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{candidat.name}</td>
                            <td>{candidat.voteCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;
