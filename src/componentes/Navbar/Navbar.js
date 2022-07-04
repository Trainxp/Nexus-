import React from "react";
import "./Navbar.css"
import  Nexuslogo from "./img/Nexus logo.png"


const Navbar = () => {
    return <div className="NavBar" >

        <img className="logo" src={Nexuslogo} alt="logo" ></img>
         <ul className="Ulnav" >
            
            <li className="linav" >CELULARES</li>
            <li className="linav">CONTACTO</li>
            <li className="linav">NOSOTROS</li>
            
         </ul>
         

    </div>
}

export default Navbar;