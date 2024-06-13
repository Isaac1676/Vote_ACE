import React from 'react'
import "./admin.css"
import Results from './Results/Results'
import Person from './Person/Person'

const Admin = () => {
    return (
        <div>
            <h1>ADMIN PANEL </h1>

            <div className="container">
                <div className="resultats">
                    <h2>Résulats du vote</h2>
                    <Results />
                </div>
                <div className="personcount">
                    <h2>Personnes enregistrés</h2>
                    <Person />
                </div>
            </div>
        </div>
    )
}

export default Admin