import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PetProduct.css';

const PetProductCard = ({ image, name, description ,link}) => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate('/ProductForm', { state: { serviceType: name } }); // Pass the name as state
    };
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <button type="button" onClick={handleBookNow}>Book Now</button>
        </div>
    );
};
export default PetProductCard;
