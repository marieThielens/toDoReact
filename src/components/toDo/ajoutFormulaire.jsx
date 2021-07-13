import React, { Component } from 'react';
import {nanoid} from 'nanoid';

import { useState } from "react";
// npm install --save prop-types
import PropTypes from 'prop-types';
import style from './monStyle.module.css';

const AjoutFormulaire = ( props ) => {

    const [ nomTache, setNomTache ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ priorite, setPriorite ] = useState("normal");

    const envoiFormulaire = e => {
        e.preventDefault(); // Empecher le comportement par defaut (recharge de la page à l'envoi du formulaire )

        // const { nomTache, description, priorite } = this.state ;
        
        // Envoi des données
        const data = {
            id: nanoid(),
            nomTache: nomTache,
            description: description,
            priorite: priorite,
            estFini : false
        }
        props.pourNouvelleTache(data);
    }

    // Au clique je récupère les valeurs de l'input .........
    const manipulerNom = e => {
        setNomTache(e.target.value);    
    }
    const manipulerDescription = e => {
        setDescription(e.target.value);
    }
    const manipulerPriorite = e => {
        setPriorite(e.target.value);
    }

    return(
        <>
        <h1>Ajouter une nouvelle tâche</h1>

        <form className={style.containerFormulaire} onSubmit={envoiFormulaire}>
            <div>
                <label > nom : 
                    {/* avec onChange je passe input au mon state avec value c'est l'inverse. Si je change le state ça change l'input */}
                    <input type="text" onChange={manipulerNom} value={nomTache} />
                </label>
            </div>
            <div>
                <label > Description : 
                    <input type="text" onChange={manipulerDescription} value={description} />
                </label>
            </div>
            <div>
                <label > Priorité : 
                    <select name="priorite" onChange={manipulerPriorite} value={priorite}>
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </label>
                <input type="submit" value="ajouter"/>
            </div>
        </form>
        </>
    )
}

// Validation des types ( string , int...)
AjoutFormulaire.propType = {
    // creerNomVariable : type = fonction
    pourNouvelleTache: PropTypes.func
}

export default AjoutFormulaire;