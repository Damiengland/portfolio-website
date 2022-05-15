import React from "react";
import DE_logo from "../Images/DE_logo.png"


export default function Footer() {

    const currentYear = new Date().getFullYear()

    return (
        <div id="footer" className="side-pad">
            <div className="footer-content">
                <div className="row">
                    <div className="col-md-6 col-sm-12 f-left">
                        
                        <img src={DE_logo} alt="Damien England Logo"></img>
                        
                    </div>
                    <div className="col-md-6 col-sm-12 f-right">
                        
                        <div className="socials">
                            <a href="https://github.com/Damiengland" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.imdb.com/name/nm11044479/" target="_blank" rel="noreferrer"><i className="fa-brands fa-imdb"></i></a>
                            <a href="https://www.instagram.com/damoengland/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/damien-england-b67a3a141/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="mailto:damien.england@icloud.com"><i className="fa-solid fa-envelope"></i></a>
                        </div>
                        <span className="badge">Compositor</span>
                        <span className="badge">Designer</span>
                        <span className="badge">Developer</span>

                    </div>
                </div>
            </div>

            <p>Copyright &copy; Damien England {currentYear}</p>
            
        </div>
    );
}