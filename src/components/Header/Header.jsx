import React from 'react';
import Boton from '../Boton/Boton';

import './Header.css';

const Header = (props) => {
    return (
        <div className="cabecera">
            HEADER
            <Boton llevame={props.destino}/>
        </div>
    )
}


export default Header;