import React from "react";
import Menu from "../components/componentspages/menu";
import Rotas from "../components/Rotas";
import './stylepage/Home.css';

export default function Home(){
    return(
        <React.Fragment>
            <div className="conteinerHome">
                <Menu/>        
                        
            </div>
        </React.Fragment>
    )
}