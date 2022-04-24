import React from "react";
import { Link } from "react-router-dom";

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
                    <li>
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