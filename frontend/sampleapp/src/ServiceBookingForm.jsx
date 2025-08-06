import React, { useState } from 'react';
import axios from 'axios';
import './ServiceBooking.css'; // Import CSS for styling

const BookingForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [location, setLocation] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);

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
            setPopupMessage('Booking request submitted successfully!');
            setPopupVisible(true);
            // Clear form
            setName('');
            setPhone('');
            setServiceType('');
            setLocation('');
        } catch (error) {
            console.error('Error submitting booking request:', error);
            setPopupMessage('Error submitting booking request. Please try again.');
            setPopupVisible(true);
        }
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Phone No:</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div>
                    <label>Type of Service:</label>
                    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} required>
                        <option value="">Select a service</option>
                        <option value="Vaccination">Vaccination</option>
                        <option value="Checkup">General Checkup</option>
                        <option value="Emergency Care">Emergency Care</option>
                        <option value="Dental Care">Dental Care</option>
                        <option value="Spaying/Neutering">Spaying & Neutering</option>
                        <option value="Microchipping">Microchipping</option>
                        <option value="Grooming Consultation">Grooming Consultation</option>
                    </select>
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <button type="submit">Submit Booking Request</button>
            </form>

            {popupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close-button" onClick={closePopup}>&times;</span>
                        <p>{popupMessage}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingForm;
