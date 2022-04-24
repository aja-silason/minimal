import React from "react";
import HomeComponent from "../components/componentspages/HomeComponent";
import Menu from "../components/componentspages/menu";
import Rotas from "../components/Rotas";
import './stylepage/StyleGeral.css';

export default function Home(){
    return(
        <React.Fragment>
            <div className="conteinerhome">
                <Menu/>
                <HomeComponent/>
            </div>
        </React.Fragment>
    )
}