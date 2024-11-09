const express = require('express');
const AdoptionForm = require('../models/adoptionModel'); // Adjust path as necessary

const router = express.Router();

// Handle form submission
router.post('/', async (req, res) => {
    const { name, phone, petName, address, reason } = req.body;

    try {
        const newForm = new AdoptionForm({
            name,
            phone,
            petName,
            address,
            reason,
        });

        await newForm.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error saving form:', error);
        res.status(500).json({ message: 'Error submitting form' });
    }
});

module.exports = router;
