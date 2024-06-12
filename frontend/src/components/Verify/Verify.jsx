import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./verify.css";
import axios from 'axios';
import tel from '../../assets/telephone.svg'

const Central = () => {
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialiser useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Recherche de l'utilisateur associé au numéro de téléphone
            const response = await axios.get(`http://localhost:2013/users/phone/${phone}`);
            const foundUser = response.data;

            if (foundUser) {
                // Vérification de l'affiliation de l'utilisateur
                if (foundUser.appartenance === "ACE") {
                    // Redirection vers une autre page
                    setUser(foundUser);
                    navigate('/vote'); // Remplacez '/another-page' par le chemin de la page de destination
                } else {
                    alert("L'utilisateur n'appartient pas à l'affiliation ACE.");
                }
            } else {
                alert("Aucun utilisateur trouvé avec ce numéro de téléphone.");
            }
        } catch (error) {
            console.log('Erreur:', error.message);
            alert("Une erreur est survenue lors de la vérification.");
        }
    };

    return (
        <div>
            <h1>Authentification </h1>

            <p>
                Afin de vérifiez qui vous êtes et de vous donner accès
                à la plateforme de vote !
                Nous vous invitons  à remplir le champ ci-dessous.
            </p>
            <form className="container" onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <img src={tel} alt="" />
                        <input
                            type="tel"
                            placeholder='Numéro de téléphone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div className="submit_container">
                        <button type="submit" className="submit">Valider</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Central;
