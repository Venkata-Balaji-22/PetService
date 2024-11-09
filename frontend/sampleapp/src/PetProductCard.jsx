import React from 'react';
import './PetProduct.css';

const PetProductCard = ({ image, name, description ,link}) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={link}>Book now</a>
        </div>
    );
};
export default PetProductCard;