import React from "react";
import './navbar.css';
import icon from '../assets/fc.webp'
const Navbar =() =>{
    return(
        <nav>
            <img src={icon}/>
            <ul>
                <li>
                    <a>home</a>
                </li>

                <li>
                    <a>about</a>
                </li>

                <li>
                    <a>contact</a>
                </li>

                
    
                
                
            </ul>
        </nav>
    )
}
export default Navbar;