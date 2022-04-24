import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../pages/About.js";
import Home from "../pages/Home.js"

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}