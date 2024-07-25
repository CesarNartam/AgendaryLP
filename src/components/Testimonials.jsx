import React from 'react';
import profilePic from '../assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';


const Testimonials = () => {
    return (
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className="primary-subheading">Testimonio</p>
                <h1 className="primary-heading">La voz del cliente</h1>
                <p className="primary-text">
                    Conoce las opiniones de algunos de nuestros clientes
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={profilePic} alt="" />
                <p>
                    ¡Gracias a Agendary mi negocio de lavado de autos ha
                    crecido mucho!
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Leonardo Farrera</h2>
            </div>
        </div>
    )
}

export default Testimonials;