import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const GroomingBookingForm = () => {
    const locationi=useLocation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [location, setLocation] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
useEffect(() => {
    if (locationi.state && locationi.state.serviceType) {
        setServiceType(locationi.state.serviceType);
    }
}, [locationi.state]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            name,
            phone,
            serviceType,
            location,
        };

        try {
            const response = await axios.post('https://petservice-wx2h.onrender.com/api/bookings', bookingData);
            console.log('Booking request successful:', response.data);
            setSuccessMessage('Your grooming service request has been submitted successfully!'); // Show success message
            // Clear form fields
            setName('');
            setPhone('');
            setServiceType('');
            setLocation('');
        } catch (error) {
            console.error('Error submitting booking request:', error);
        }
    };

    return (
        <div className="adoption-form-container">
            <h2>Grooming Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone No:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Type of Service:</label>
                    <input
        type="text"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        required
        readOnly
      />
                </div>
                <div className="form-group">
                    <label>Location:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Booking Request</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

export default GroomingBookingForm;
