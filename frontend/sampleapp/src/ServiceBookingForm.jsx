import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './ServiceBooking.css'; // Import CSS for styling

const BookingForm = () => {
    const locationi = useLocation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [location, setLocation] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
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
            const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
            console.log('Booking request successful:', response.data);
            alert('Booking request submitted successfully!');
            // setPopupVisible(true);
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
                    <input
                        type="text"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                        readOnly
      />
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
