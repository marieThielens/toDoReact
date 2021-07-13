import { useState } from "react";
import PropTypes from 'prop-types';
import style from './monStyle.module.css';

// import data from './data.json';

const AjoutFormulaire = ( props ) => {

    //const [maListe, setMaListe ] = useState( data );

    const [ nomTache, setNomTache ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ priorite, setPriorite ] = useState("normal");
    const [ estFini, setEstFini ] = useState(false);


    const envoiFormulaire = e => {
        e.preventDefault();

        const data = {
            nomTache: nomTache,
            description: description,
            priorite: priorite,
            estFini : estFini
        }
    
        //let copy = [ ...data];
        // console.log(data);
        // props.propsdata(data);
    }


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
        {/* <div>
            {maListe.map( todo => {
                return (
                    <div todo={todo}></div>
                )
            })}
        </div> */}
        </>
    )
}

AjoutFormulaire.defaultProps = {
    propsdata: () => {} // boucle
}

AjoutFormulaire.propType = {
    propsdata: PropTypes.func
}

export default AjoutFormulaire;