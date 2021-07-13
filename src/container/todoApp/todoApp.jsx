import React, { useState } from 'react';

import ToDoList from "../../components/toDo/toDoList";
import AjoutFormulaire from "../../components/toDo/ajoutFormulaire";

const ToDoApp = ( props ) => {

    // un tableau pour mes todos
    const [ maListe, setMaListe ] = useState([]);

    // fonction qui a un argument data
    const manipulerNouvelleTache = (data) => {
        // state mis à jour 
        setMaListe((datas) => [data, ...datas ]);
    }
    return(
        <div>
            {/* composant qui accepte un tableau de qqchose et produit une liste d'élément */}
            {/* composant maFontion = { mes data } */}
            <AjoutFormulaire pourNouvelleTache={ manipulerNouvelleTache } />
            
            <h1>La liste des taches</h1>

            {/* composant monTableau={ }  */}
            <ToDoList maListe={maListe} />
        </div>
    )
}

export default ToDoApp;