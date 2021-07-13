import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ( props ) => {

    const { id, nomTache, description, priorite, estFini } = props;
      
    return (
        <li>
        <div>
            <p>{ nomTache }</p>
            <p>{ description }</p>
            <div>
                <button>Terminer</button>
                <button>Supprimer</button>
            </div>
        </div>
        </li>
    );
 }

 ToDoItem.propTypes = {
    // id: PropTypes.number.isRequired,
    nomTache: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
    priorite: PropTypes.string.isRequired,
    estFini: PropTypes.bool.isRequired,  
 }
  
 export default ToDoItem;