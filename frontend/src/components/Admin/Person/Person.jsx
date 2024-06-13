import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './person.css';

const Person = () => {
    const [users, setUsers] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL; // Utilisation correcte de la variable d'environnement

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${apiUrl}/users`); // Assurez-vous que l'URL est correcte
                setUsers(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
            }
        };

        fetchUsers();
    }, [apiUrl]);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom et prénoms</th>
                    <th>Email</th>
                    <th>Numéro de téléphone</th>
                    <th>Affiliation</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>
                            {index + 1}
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.appartenance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Person;
