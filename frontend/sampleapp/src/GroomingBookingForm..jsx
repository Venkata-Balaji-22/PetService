import React, { useState } from 'react';
import axios from 'axios';

const GroomingBookingForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [location, setLocation] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            name,
            phone,
            serviceType,
            location,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
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
                    <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="Basic Bath">Basic Bath</option>
                        <option value="Nail Trimming">Nail Trimming</option>
                        <option value="Full Haircut">Full Haircut</option>
                        <option value="Ear Cleaning">Ear Cleaning</option>
                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                        <option value="Ear Hair Removal">Ear Hair Removal</option>
                        <option value="Flea & Tick Treatment">Flea & Tick Treatment</option>
                        <option value="De-Shedding Treatment">De-Shedding Treatment</option>
                        <option value="Spa Treatment">Spa Treatment</option>
                    </select>
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
