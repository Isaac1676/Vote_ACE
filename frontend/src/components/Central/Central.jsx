import React, { useState } from 'react';
import "./central.css";
import axios from 'axios';
import id from '../../assets/id_icon.svg'
import email from '../../assets/email.svg'
import person from '../../assets/person.svg'
import tel from '../../assets/telephone.svg'

const Central = () => {
    const [name, setName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [appartenance, setAppartenance] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envoyer les données au serveur avec Axios
            const response = await axios.post('http://localhost:2013/users', {
                name: name,
                email: emailValue,
                phone: phone,
                appartenance: appartenance
            });

            console.log(response);

            // Réinitialiser les champs après la création réussie de l'utilisateur
            setName('');
            setEmail('');
            setPhone('');
            setAppartenance('');

            // Afficher une alerte de remerciement
            alert('Merci pour votre enregistrement !');
        } catch (error) {
            console.error('Erreur:', error.message);
            alert('Une erreur est survenue lors de l\'enregistrement.');
        }
    };

    return (
        <div>
            <h1>Enregistrement </h1>

            <p>
                Veuillez confirmer votre présence en remplissant le
                formulaire ci-dessous !
            </p>
            <form className="container" onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <img src={person} alt="" />
                        <input
                            type="text"
                            placeholder='Nom et prénoms'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input">
                        <img src={email} alt="" />
                        <input
                            type="email"
                            placeholder='Email'
                            value={emailValue}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

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

                    <div className="input">
                        <img src={id} alt="" />
                        <select
                            id="options"
                            value={appartenance}
                            onChange={(e) => setAppartenance(e.target.value)}
                            required
                        >
                            <option value="" disabled>-- Sélectionner --</option>
                            <option value="ACE">ACE</option>
                            <option value="CCEE">CCEE</option>
                            <option value="Externe">Externe</option>
                        </select>
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
