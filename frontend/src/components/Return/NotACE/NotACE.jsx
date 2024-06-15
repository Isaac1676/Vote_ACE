import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./notace.css"

const NotACE = () => {
    const navigate = useNavigate(); 

    const handlePass = async (e) => {
        e.preventDefault();

        navigate('/');
    };

    return (
        <div className='not'>
            <h1>Désolé ! Vous ne pouvez pas voter</h1>

            <p>
                Le vote étant éligible aux membres de l'ACE, vous n'y êtes pas autorisé. <br />
                Merci ! Que Dieu vous bénisse.
            </p>

            <div className="button" onClick={handlePass}>Retour</div>
        </div>
    )
}

export default NotACE