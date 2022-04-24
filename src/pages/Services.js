import React from "react";
import Menu from "../components/componentspages/menu";
import Servicecomponet from "../components/componentspages/Servicescomponent";
import Rotas from "../components/Rotas";

export default function services(){
    return(
        <React.Fragment>
            <Menu/>
            <Servicecomponet/>
        </React.Fragment>
    )
}