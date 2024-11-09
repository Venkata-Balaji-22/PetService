const express = require('express');
const Booking = require('../models/Booking'); // Adjust path as necessary

const router = express.Router();

// POST route to create a new booking
router.post('/', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ error: 'Error creating booking request' });
    }
});

// GET route to retrieve all bookings (optional)
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving bookings' });
    }
});

module.exports = router;
