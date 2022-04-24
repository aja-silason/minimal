import React from "react";
import { Link } from "react-router-dom";
import './stylecomponents/AboutComponent.css';

export default function Aboutcomponent(){
    return(
        <React.Fragment>
            <div className="conteinerAbout">
                <div className="dir">
                    <h1>Experiencias de trabalho com na área de TI</h1>
                    <p>Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you <br/><br/>have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.</p>
                    <p className="contactp">
                    <Link to='/contact_us' className="contactbtn">Contacte-nos</Link>
                    </p>
                </div>
                <div className="border"></div>
                <div className="esq">
                    <div>Empresas1</div>
                    <div>Empresas2</div>
                    <div>Empresas3</div>
                    <div>Empresas4</div>
                    <div>Empresas5</div>
                    <div>Empresas6</div>
                    <div>Empresas7</div>
                    <div>Empresas8</div>
                </div>
            </div>
        </React.Fragment>
    )
}