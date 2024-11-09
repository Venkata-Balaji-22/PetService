import React, { useState } from 'react';
import axios from 'axios';

const PetProductForm = () => {
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
            setSuccessMessage('Your Product Booking request has been submitted successfully!'); // Show success message
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
            <h2>Product Booking Form</h2>
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
                        <option value="">Select a Product</option>
                        <option value="Premium Dog Food">Basic Bath</option>
                        <option value="Cat Scratching Post">Cat Scratching Post</option>
                        <option value="Pet Bed">Pet Bed</option>
                        <option value="Dog Leash">Dog Leash</option>
                        <option value="Cat Litter Box">Cat Litter Box</option>
                        <option value="Pet Grooming Kit">Pet Grooming Kit</option>
                        <option value="Automatic Pet Feeder">Automatic Pet Feeder</option>
                        <option value="Collapsible Pet Travel Carrier">Collapsible Pet Travel Carrier</option>
                        <option value="Pet Shampoo">Pet Shampoo</option>
                        <option value="Dog Toys Set">Dog Toys Set</option>
                        <option value="Water Fountain for Pets">Water Fountain for Pets</option>
                        <option value="Catnip Toys">Catnip Toys</option>
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

export default PetProductForm;
