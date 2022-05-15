import React from "react";


export default function Productions() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
        return images;
    
    }

    const images = importAll(require.context('../Images/productions', false, /\.(png)$/));
    const imageNames = Object.keys(images)

    return (
        <div id="productions" className="side-pad">
            <div className="section-heading">
                <div className="pin"><i className="fa-solid fa-film"></i></div>
                <h1>Productions</h1>
            </div>

            {/* <div className="prod-filter">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn">FEATURED</button>
                    <button type="button" class="btn">FILM</button>
                    <button type="button" class="btn">MARVEL</button>
                    <button type="button" class="btn">TV</button>
                </div>
            </div> */}



            <div className="wrapper">
                {imageNames.map((img, idx) => 
                    <img key={idx} src={images[img]} alt={img}></img>
                )}
            </div>
        </div>
    )
}