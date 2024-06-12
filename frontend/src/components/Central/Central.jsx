import React, { useState } from 'react';
import "./central.css";
import id from '../../assets/id_icon.svg'
import email from '../../assets/email.svg'
import person from '../../assets/person.svg'
import tel from '../../assets/telephone.svg'

const Central = () => {
    const [lastName, setlastName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setfirstName] = useState('');
    const [appartenance, setAppartenance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation des champs
        if (!name || !emailValue || !phone || !host || !appartenance) {
            alert('Tous les champs sont obligatoires.');
            return;
        }

        // Afficher une alerte de remerciement
        alert('Merci');
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
                            placeholder='Nom'
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input">
                        <img src={person} alt="" />
                        <input
                            type="Prénoms"
                            placeholder='Prénoms'
                            value={emailValue}
                            onChange={(e) => setfirstName(e.target.value)}
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
                        <img src={phone} alt="" />
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
