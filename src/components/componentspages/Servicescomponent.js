import React from "react";
import './stylecomponents/Servicescomponent.css';

export default function Servicecomponet(){
    return(
        <React.Fragment>
            <div className="conteinerServices">
                <div className="Services">
                    <div className="cima">
                        <h2>Nossos Serviços</h2>
                        <div className="barra"></div>
                        <p>Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.</p>
                    </div>
                    <div className="baixo">
                        <div className="cards">
                            
                            <div>
                                <span>1</span>
                                <div className="barra"></div>
                                <p>IDEIA</p>
                            </div>

                            <div>
                                <span>9</span>
                                <div className="barra"></div>
                                <p>DESIGN</p>
                            </div>

                            <div>
                                <span>9</span>
                                <div className="barra"></div>
                                <p>DESENVOLVIMENTO</p>
                            </div>

                            <div>
                                <span>5</span>
                                <div className="barra"></div>
                                <p>SUCESSO</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}