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
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-imdb"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-solid fa-envelope"></i>
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