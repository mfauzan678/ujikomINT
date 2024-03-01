import React from 'react';
import icon from './assets/fc.webp'
import "./header.css"
function Header({ toggleMenu }) {
    return (
        <header>
            <div style={{ display: "flex", gap: "10px" }}>
                <img src={"https://banner2.cleanpng.com/20180712/kpa/kisspng-drawing-photography-logo-rumah-makan-5b46fe792d7883.7297506715313793211863.jpg"} width={170} />
                <h1>RM NUSANTARA</h1>
            </div>
            <nav className='nav-container'>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="menu" onClick={toggleMenu}>Menu</a></li>
                    <li><a href="contact">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;