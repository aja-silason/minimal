import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../pages/About.js";
import Home from "../pages/Home.js";
import Services from "../pages/Services.js";
import Contact_Us from "../pages/Contact_Us.js";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="about" element={<About/>}/>
                <Route exact path="services" element={<Services/>}/>
                <Route exact path="contact_us" element={<Contact_Us/>}/>
            </Routes>
        </BrowserRouter>
    )
}