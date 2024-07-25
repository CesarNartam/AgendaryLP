import React from "react";
import AboutBackground from "../assets/about_background_agendary.png";
import AboutBackgroundImage from "../assets/undraw.svg";

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" style={{width: "450px"}} />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">
                    Descubrir
                </p>
                <h1 className="primary-heading">
                    ¿Qué es Agendary?
                </h1>
                <p className="primary-text">
                    Agendary es una aplicación móvil 
                    intuitiva y fácil de usar; esta es 
                    la primera aplicación que garantiza 
                    una mejor gestión de citas tanto para 
                    dueños de negocios, como para los 
                    clientes potenciales de dichos negocios.
                </p>
                <div className="about-buttons-container">
                    <a href="https://youtu.be/dispwP18gIU?si=sbTR7vO5Ps0LKszy">
                        <button className="secondary-button">Descubrir más</button>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default About;