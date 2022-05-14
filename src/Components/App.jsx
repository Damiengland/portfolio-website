import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Services from "./Services";
import Showreel from "./Showreel";
import Productions from "./Productions";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";

export default function App() {

    return (
        <div className="parent">
        
            <Nav/>
            <Home/>
            <Services/>
            <Showreel/>
            <Productions/>
            <Projects/>
            <About/>
            <Footer/>

        </div>
    )
}