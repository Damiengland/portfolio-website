import React from "react";


export default function Showreel() {
    return (
        <div id="showreel" className="side-pad">
            <div className="section-heading">
                <div className="pin"><i className="fa-solid fa-clapperboard"></i></div>
                <h1>Showreel</h1>
            </div>

            <div className="reel">
                <iframe src="https://player.vimeo.com/video/705931108?h=d6dcdd6567&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="Showreel 2022"></iframe>
            </div>
        </div>
    )
}