import React from 'react';
import './grooming.css'
const GroomingCard = ({ img, title, description , link}) => {
    return (
        <div className="grooming-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>Book now</a>
        </div>
    );
};

export default GroomingCard;
