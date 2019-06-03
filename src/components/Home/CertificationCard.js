import React from 'react';
import icon from "../../assets/images/home/icono.png"
import "./CertificationCard.css";

const CertificationCard = () => {
    return (
        <div className="certification-card">
            <img src={icon} alt="certification icon"></img>
            <p>Certificación 1</p>
        </div>
    )
}

export default CertificationCard
