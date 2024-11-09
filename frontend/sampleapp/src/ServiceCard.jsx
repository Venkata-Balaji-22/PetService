import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ img, title, description, link }) => {
    return (
        <div className="service-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>Book Service</a>
        </div>
    );
};

export default ServiceCard;
