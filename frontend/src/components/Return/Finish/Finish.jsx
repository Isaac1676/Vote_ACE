import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./finish.css"

const Finish = () => {
    const navigate = useNavigate(); 

    const handlePass = async (e) => {
        e.preventDefault();

        navigate('/');
    };

    return (
        <div className='finish'>
            <h1> 
                Merci d'avoir voté ! Que Dieu vous bénisse
            </h1>

            <div className="button" onClick={handlePass}>Retour</div>
        </div>
    )
}

export default Finish