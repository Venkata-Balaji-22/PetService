import React from 'react';
import { useNavigate } from 'react-router-dom';
import './grooming.css'
const GroomingCard = ({ img, title, description , link}) => {
      const navigate = useNavigate();
    
        const handleBookNow = () => {
           
            navigate('/groomingBookingForm', { state: { serviceType: title } }); // Pass the name as state
        };
    return (
        <div className="grooming-card">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <button type="button" onClick={handleBookNow}>Book Now</button>
        </div>
    );
};

export default GroomingCard;
