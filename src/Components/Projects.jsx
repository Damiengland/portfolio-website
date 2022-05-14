import React from "react";


export default function Projects() {
    return (
        <div id="projects" className="side-pad">
            <div className="section-heading">
                <div className="pin"><i className="fa-solid fa-clapperboard"></i></div>
                <h1>Projects</h1>
            </div>


            <div className="proj-wrapper">
                <div className="row">

                    <div className="col-lg-4 col-md-6">

                        <div className="card">
                            <div className="card-body">
                                <span className="badge html">HTML</span>
                                <span className="badge css">CSS</span>
                                <span className="badge js">JS</span>
                                <span className="badge python">Python</span>
                                <h2 className="card-title">Food Freedom</h2>
                                <p className="card-text">Full Stacked Flask Web Application. For a small Nutrition Consultant Buisness.</p>
                                <a href="https://github.com/Damiengland/food-freedom-flask" rel="noreferrer" target="_blank" className="card-link"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6">

                        <div className="card">
                            <div className="card-body">
                                <span className="badge python">Python</span>
                                <h2 className="card-title">Nuke Stamps</h2>
                                <p className="card-text">A simplified remake of the widely used Nuke plugin, Stamps Tool.</p>
                                <a href="https://github.com/Damiengland/stamps-nuke" rel="noreferrer" target="_blank" className="card-link"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6">

                        <div className="card">
                            <div className="card-body">
                                <span className="badge html">HTML</span>
                                <span className="badge css">CSS</span>
                                <span className="badge js">JS</span>
                                <span className="badge motoko">Motoko</span>
                                <h2 className="card-title">Citrino Token</h2>
                                <p className="card-text">Crypto Token Decentralized Application built on the ICP BlockChain.</p>
                                <a href="https://github.com/Damiengland/citrino-token-dapp" rel="noreferrer" target="_blank" className="card-link"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-lg-4 col-md-6">

                        <div className="card">
                            <div className="card-body">
                                <span className="badge python">Python</span>
                                <span className="badge game">Game</span>
                                <h2 className="card-title">Sudoku Solver</h2>
                                <p className="card-text">API generated Sudoku Solver Games with back tracking algorithm solver. </p>
                                <a href="https://github.com/Damiengland/sudoku-solver" rel="noreferrer" target="_blank" className="card-link"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6">

                        <div className="card">
                            <div className="card-body">
                                <span className="badge python">Python</span>
                                <span className="badge game">Game</span>
                                <h2 className="card-title">POP</h2>
                                <p className="card-text">Simplified Rebuild of the Bubble Trouble Game </p>
                                <a href="https://github.com/Damiengland/pop-pygame" rel="noreferrer" target="_blank" className="card-link"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-6">

                        <div className="card">
                            <div className="card-body">
                                <span className="badge python">Python</span>
                                <h2 className="card-title">Auto Comp Nuke</h2>
                                <p className="card-text">Automation tool to speed up compositing workflow within Nuke. </p>
                                <a href="https://github.com/Damiengland/auto-comp-nuke" rel="noreferrer" target="_blank" className="card-link"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
                
            </div>
          
            <div className="skew"/>
        </div>   
    );
}