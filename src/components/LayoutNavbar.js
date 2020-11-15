import React from 'react'
import '../App.css';

import Navbar from './Navbar';
import Main from "../sections/Main";
import About from "../sections/About"
import Contact from "../sections/Contac";

function LayoutNavbar() {
    return (
        <div className="LayoutNavbar">
            <Main />
            <About />
            <Contact />
            
        </div>
    )
}

export default LayoutNavbar
