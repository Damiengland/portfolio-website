import React, { useState } from "react";
import DisplayLottie from "./DisplayLotties";
import workingAnim from "../Lotties/working_lottie.json";
import useWindowDimensions from "./WindowDimensions";

export default function Home() {

    const [isSmallScreen, setScreen] = useState(false) 

    const dims = useWindowDimensions();    

    if (dims["width"] < 768 && isSmallScreen === false) {
        setScreen(true)
    } else if (dims["width"] > 767 && isSmallScreen === true) {
        setScreen(false)
    }

    return (
        <div id="home" className="side-pad">

            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h1>Hi, I'm </h1>
                    <h1 className="name">DAMIEN ENGLAND</h1>
                    <p>
                        A VFX Artist & Developer based in Sydney's Northern Beaches.<br/>
                        I have had the pleasure to work as a Digital Compositor on globally successful feature films and series, including Spider-man No Way Home, Doctor Strange in the Multiverse of Madness Loki & many more.<br/>
                    </p>
                    <div className="socials">
                        <a href="https://github.com/Damiengland" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.imdb.com/name/nm11044479/" target="_blank" rel="noreferrer"><i className="fa-brands fa-imdb"></i></a>
                        <a href="https://www.instagram.com/damoengland/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/damien-england-b67a3a141/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="mailto:damien.england@icloud.com"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 lottie" hidden={isSmallScreen}>
                    <DisplayLottie animationPath={workingAnim}/>
                </div>
                
            </div>

            <div className="skew"/>
        </div>
    )
}