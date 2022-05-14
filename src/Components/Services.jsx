import React from "react";


export default function Services() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {return images[item.replace('./', '')] = r(item); });
        return images;
    
    }

    const images = importAll(require.context('../Images/icons', false, /\.(png)$/));
    const imageArray = Object.keys(images)

    return (
        <div id="services" className="side-pad">
            <div className="overview">
                <h1>My <span>Services</span></h1>
                <p>My wide range of software knowledge ranging from Design all the way through to full Development allows me to provide the necessary services every step of the way.</p>
            </div>
            <div className="wrapper">

                {imageArray.map((img, idx) => 
                    <div key={idx} className="pin"><img src={images[img]} alt={img}></img></div>
                )}

            </div>
        </div>
    );
}