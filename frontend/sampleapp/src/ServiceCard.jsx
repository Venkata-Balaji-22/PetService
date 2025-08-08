import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ img, title, description, link }) => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();  // Prevent <a> tag's default behavior
        navigate('/serviceform', { state: { serviceType: title } });
    };
    return (
        <div className="service-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            {/* <a href={link} onClick={navigate('/serviceform', { state: { serviceType: title } })}>Book Service</a> */}
             <button type="button" onClick={handleClick}>Book Service</button>
            {/* <button type='button' onClick={navigate('/serviceform', { state: { serviceType: title } })}>Book Service</button> */}
        </div>
    );
};

export default ServiceCard;
