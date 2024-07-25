import React from "react";
import NavBar from "./NavBar";
import BannerBackground from "../assets/home_banner_background_agendary.png";
import BannerImage from "../assets/agendary_removebg_preview_logo.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
        <NavBar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              La nueva forma de agendar citas
            </h1>
            <p className="primary-text">
              Con nuestra plataforma podrás agendar 
              citas de manera rápida y sencilla
              en cuestión de segundos.  
            </p>
            <button className="secondary-button">
              <a href="/About.jsx">
                Descubrir <FiArrowRight />
              </a>
            </button>
          </div>
          <div className="home-image-container">
            <img src={BannerImage} alt="" />
          </div>
        </div>
    </div>
  );
};

export default Home;