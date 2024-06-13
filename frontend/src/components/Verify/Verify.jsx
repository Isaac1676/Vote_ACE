import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./verify.css";
import axios from 'axios';
import tel from '../../assets/telephone.svg'

const Verify = () => {
    const [phone, setPhone] = useState('');
    const navigate = useNavigate(); // Initialiser useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Recherche de l'utilisateur associé au numéro de téléphone
            const response = await axios.get(`http://localhost:2013/users/phone/${phone}`);
            const foundUser = response.data;
            console.log(foundUser);

            if (foundUser) {
                if (foundUser.voteToken == 1) {
                    // Vérification de l'affiliation de l'utilisateur
                    if (foundUser.appartenance === "ACE") {
                        // Redirection vers une autre page
                        navigate('/vote', { state: { user: foundUser } });
                    } else {
                        alert("L'utilisateur n'appartient pas à l'affiliation ACE.");
                    }
                } else {
                    alert("Vous avez déjà voté ! ")
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert(error.response.data.message); // Afficher le message d'erreur personnalisé
            } else {
                console.log('Erreur:', error.message);
                alert("Une erreur est survenue lors de la vérification.");
            }
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

export default Verify;
