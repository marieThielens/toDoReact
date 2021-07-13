import AjoutFormulaire from "./ajoutFormulaire";
import { useState } from "react";
import PropTypes from 'prop-types';
import ToDoItem from "./toDoItem";

import data from './data.json';

const ToDoList = () => {

   // const { nomTache, description, priorite, estFini } = props;

    const [maListe, setMaListe ] = useState( data );

    //const tachesJSX = props.
    return(
        <>
        <AjoutFormulaire  />
        <h2>Liste des tâches</h2>
        <ul>
            <li>
                { maListe.map( todo => {
                    return ( <ToDoItem  todo={todo} />)           
                    }    
                )}
            </li>
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