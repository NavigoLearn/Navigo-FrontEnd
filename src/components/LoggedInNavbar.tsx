import React from "react";
import { useState } from 'react';
import './navbar.css';
import dropdown from 'src/Assets/burger-menu.png';
import dropclose from 'src/Assets/x-button.png';

const LoggedInNavbar = () => {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);


    return <nav className={click ? 'navbar nav-menu-active' : 'navbar'}>
        <a className="navbar-logo">
            <img className="w-20" src="src/Assets/logo.png"></img>
        </a>
        <div className="menu-icon w-12 cursor-pointer" onClick={handleClick}>
            <img src={click ? dropclose : dropdown}/> 
        </div>
        <div className="w-screen">
        <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className="nav-item">
                <a className="nav-links" href='/home'>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-links" href='/feedback'>Feedback</a>
            </li>
            <li className="nav-item">
                <a className="nav-links" href='/profile'>Profile</a>
            </li>
        </ul>
        </div>
    </nav>
};

export default LoggedInNavbar;