import React, { useState, useEffect } from "react";
import Headroom from "headroom.js";
import DE_bw from "../Images/DE_bw.png"
import DE_grey from "../Images/DE_grey.png"
import "../Styles/Nav.css"


export default function Nav() {
    
    const [menuOpen, setMenu] = useState(false)

    useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});

    return (
        <div className={menuOpen ? "wrapper menu-open" : "wrapper menu-closed"}>
            <nav id="navbar-main" className="navbar side-pad">
        
                <a className="navbar-brand" href="#home"><img src={menuOpen ? DE_grey: DE_bw} alt="Logo"></img></a>

                <div className="socials-nav">
                    <a href="https://github.com/Damiengland" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.imdb.com/name/nm11044479/" target="_blank" rel="noreferrer"><i className="fa-brands fa-imdb"></i></a>
                    <a href="https://www.instagram.com/damoengland/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/damien-england-b67a3a141/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>

                <div className="menu-icon" onClick={(e) => setMenu(!menuOpen)}>
                    <span className="line line-left"></span>
                    <span className="line line-middle"></span>
                    <span className="line line-right"></span>
                </div>
                
            </nav>

            <div className="menu">
                
                <div className="menu-open-leading"/>

                <div className="menu-content">

                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#home" data-text="home" onClick={(e) => setMenu(!menuOpen)}>Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="#services" data-text="services" onClick={(e) => setMenu(!menuOpen)}>Services</a>
                        </li>
                        <li className="menu-item">
                            <a href="#showreel" data-text="showreel" onClick={(e) => setMenu(!menuOpen)}>Showreel</a>
                        </li>
                        <li className="menu-item">
                            <a href="#projects" data-text="projects" onClick={(e) => setMenu(!menuOpen)}>Projects</a>
                        </li>
                        <li className="menu-item">
                            <a href="#about" data-text="about" onClick={(e) => setMenu(!menuOpen)}>About</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        // <div className="navigation">
        //     <div className="navbar">
        //         <div className="navbar-content side-pad">
        //             <img src={menuActive ? DE_grey : DE_white}></img>

                    // <div className={menuActive ? "socials-nav menu-active" : "socials-nav"}>
                    //     <i className="fa-brands fa-github"></i>
                    //     <i className="fa-brands fa-imdb"></i>
                    //     <i className="fa-brands fa-instagram"></i>
                    //     <i className="fa-brands fa-linkedin-in"></i>
                    // </div>

                    // <div className={menuActive ? "menu-icon menu-active" : "menu-icon"} onClick={(e) => setMenu(!menuActive)}>
                    //     <span className="line line-left"></span>
                    //     <span className="line line-middle"></span>
                    //     <span className="line line-right"></span>
                    // </div>
        //         </div>
        //     </div>
            
            
            
        //     <div className={menuActive ? "nav-active nav": "nav"}>
        //         <div className="lead-menu-open"></div>
        //         <div className="nav-content">
                    // <ul className="nav-list">
                    //     <li className="nav-item">
                    //         <a href="#home" data-text="home" onClick={(e) => setMenu(!menuActive)}>Home</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a href="#services" data-text="services" onClick={(e) => setMenu(!menuActive)}>Services</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a href="#showreel" data-text="showreel" onClick={(e) => setMenu(!menuActive)}>Showreel</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a href="#projects" data-text="projects" onClick={(e) => setMenu(!menuActive)}>Projects</a>
                    //     </li>
                    //     <li className="nav-item">
                    //         <a href="#about" data-text="about" onClick={(e) => setMenu(!menuActive)}>About</a>
                    //         </li>
                    // </ul>
        //         </div>

        //     </div>
            

        // </div>
    )
}