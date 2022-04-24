import React from "react";
import Menu from "../components/componentspages/menu";
import AboutComponent from "../components/componentspages/AboutComponent";

import Rotas from "../components/Rotas";

export default function About(){
    return(
        <React.Fragment>
            <Menu/>
            <AboutComponent/>
        </React.Fragment>
    )
}