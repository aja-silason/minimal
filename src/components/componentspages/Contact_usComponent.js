import React from "react";
import './stylecomponents/Contact_usComponent.css';

export default function Cantact_Uscomponent(){
    return(
        <React.Fragment>
            <div className="conteinerAboutC">
                <div className="dirC">
                    <h1>Fale Connosco</h1>
                    <p>Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you.</p>
                </div>
                <div className="borderC"></div>
                <div className="esqC">
                    <form method="POST" action="mailto:ananiasjaimeaugusto@gmail.com">
                        <input type="text" placeholder="O seu nome"/>
                        
                        <textarea placeholder="A sua mensagem"></textarea>

                        <input type="submit" value="Enviar a minha mensagem"/>

                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}