import React from 'react';
import "./Boton.css";
import {useHistory} from 'react-router-dom';

const Boton = (props) => {

    let history = useHistory();

    const Vamonos = () => {
        if(props.llevame !== ""){

            history.push(props.llevame);
        }else{
            history.push('/');
        }
    }

    return (
        <div className="boton" onClick={()=> Vamonos()}>
            Click
        </div>
    )
}

export default Boton;