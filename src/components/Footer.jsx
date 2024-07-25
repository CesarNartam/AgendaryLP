import React from "react";
import Logo from "../assets/agendary-removebg-preview.png";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
               <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div> 
                <div className="footer-icons">
                    <a href="https://x.com/agendaryapp" target="_blank" rel="noopener noreferrer">
                        < BsTwitterX />
                    </a>
                    <a href="https://www.instagram.com/agendaryapp/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCFAAmtQ0RUmqhtkQAcFp2Mg" target="_blank" rel="noopener noreferrer">
                        <BsYoutube/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61562634884332&is_tour_completed" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF/>
                    </a>
                    
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>961-249-1239</span>
                    <span>elementalsolutionshelp@outlook.com</span>
                    <span>elementarySol00@gmail.com</span>
                </div>
                <div className="footer-section-columns">
                    <span><a href="https://docs.google.com/document/d/12W3E0OYATECeC-VsIaNJF9wBDmH8AmgPMTxl0kofytc/edit?usp=sharing">Aviso de privacidad</a></span>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;