import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './AdoptionForm.css'

const AdoptionForm = () => {
    const locationi=useLocation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        petName: '',
        address: '',
        reason: '',
    });
  useEffect(() => {
    if (locationi.state && locationi.state.setFormDatapetName) {
        setFormData((prevData) => ({
            ...prevData,
            petName: locationi.state.setFormDatapetName, // ✅ Proper update
        }));
    }
}, [locationi.state]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://petservice-wx2h.onrender.com/api/adoption', { // Ensure this matches your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({ name: '', phone: '', petName: '', address: '', reason: '' });
            } else {
                alert('Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form.');
        }
    };

    return (
        <div className="adoption-form-container">
            <h2>Adopt a Pet</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="petName">Name of Pet:</label>
                    <input
                        type="text"
                        id="petName"
                        name="petName"
                        value={formData.petName}
                        // onChange={handleChange}
                        // required
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Your Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reason">Why do you want to adopt a pet?</label>
                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdoptionForm;
