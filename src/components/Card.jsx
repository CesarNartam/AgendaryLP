import React from "react";
import AppointmentBusiness from "../assets/icons8-booking-48.png";
import Publish from "../assets/icons8-publish-64.png";
import Performance from "../assets/icons8-performance-50.png";
import AppointmentClient from "../assets/icons8-appointment-50.png";
import Catalog from "../assets/icons8-catalog-50.png";
import Search from "../assets/icons8-magnifying-glass-50.png";
import Comment from "../assets/icons8-comment-50.png";

const Work = () => {
    const WorkInfoData = [
        {
            image: Publish,
            title: "Publica tu negocio",
            text: "Para hacer crecer tu negocio, crea un perfil para él",
        },
        {
            image: AppointmentBusiness,
            title: "Revisa las citas de tu negocios",
            text: "Tu negocio ya no dependerá de segundas aplicaciones",
        },
        {
            image: Performance,
            title: "Desempeño",
            text: "Observa lo que los clientes opinan de tu negocio",
        },
    ]

    const WorkInfoData2 = [
        {
            image: Catalog,
            title: "Catálogo de negocios",
            text: "Busca un negocio de tu agrado dentro del catálogo que ofrecemos para ti",
        },{
            image: Search,
            title: "Busca negocios",
            text: "Encuentra ese negocio específico",
        },
        {
            image: AppointmentClient,
            title: "Agenda tu cita",
            text: "Ten el control de la disponibilidad de acuerdo a las reglas del negocio",
        },
        {
            image: Comment,
            title: "Comenta",
            text: "Deja una opinión apropiada sobre el desempeño del negocio",
        },
    ]

    return(
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-heading">Funcionalidades</p>
            <h1 className="primary-subheading">Empresarios</h1>
            <p className="primary-text">
                Para propietarios de micros, 
                pequeñas y medianas empresas que 
                buscan optimizar la gestion de citas 
                en su negocio.
            </p>
        </div>
        <div className="work-section-bottom">
            {
                WorkInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>

        <div className="work-section-top">
            <h1 className="primary-subheading" style={{marginTop: "50px"}}>Clientes</h1>
            <p className="primary-text">
                Para las personas que buscan satisfacer 
                sus necesidades mediante servicios.
            </p>
        </div>
        <div className="work-section-bottom-2">
            {
                WorkInfoData2.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Work;