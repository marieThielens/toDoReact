import React from "react";
import PropTypes from "prop-types";

import ToDoItem from "./toDoItem";

const ToDoList = (props) => {

    // Génerer le rendu visuel d'une collection ( convertir obj js en jsx)
    const maListe = props.maListe.map(
        // key obligatoire = identifier , copie de mon tableau
        data => <ToDoItem  key={ data.id } {...data} />
    );

    return(
        <>
        <h2>Liste des tâches</h2>
        <ul>
            {/* Ma collection */}
            { maListe }
        </ul>
        </>
    )
}

ToDoList.propTypes = {
    nomTache: PropTypes.string,
    description: PropTypes.string,
    priorite: PropTypes.string,
    estFini : PropTypes.bool
}
export default ToDoList;