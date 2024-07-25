import React, { useState } from "react";
import Logo from "../assets/agendary-removebg-preview.png";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" style={{width: '100px', height: 'auto'}} />
      </div>
      <div className="navbar-links-container">
        <a href="/Home.jsx">Inicio</a>
        <a href="/Home.jsx">Descubrir</a>
        <a href="/About.jsx">Funcionamiento</a>
        <a href="/Footer.jsx">Más</a>
        <button className="primary-button">
          <a href="https://play.google.com/store/games?hl=es_MX&pli=1">Descargar</a>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;