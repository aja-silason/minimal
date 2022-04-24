import React from "react";
import { Link } from "react-router-dom";
import './stylecomponents/menu.css';

export default function Menu(){
    return(
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Serviços</Link>
                    </li>
                    <li className="t">
                        <Link to='/'>T</Link>
                    </li>
                    <li>
                        <Link to='/about'>Sobre nós</Link>
                    </li>
                    <li>
                        <Link to='/contact_us'>Contacte-nos</Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
} 