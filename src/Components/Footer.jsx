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
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-brands fa-imdb"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-solid fa-envelope"></i>
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